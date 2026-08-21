const BASE_URL = 'http://127.0.0.1:5097/api';

// Допоміжна функція для запиту оновлення токена
async function refreshAccessToken(): Promise<string | null> {
    try {
        const response = await fetch(`${BASE_URL}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // Передає httpOnly cookies з Refresh Token
        });

        if (!response.ok) throw new Error('Refresh failed');

        const data = await response.json();
        const newAccessToken = data.Token || data.accessToken || data.token;
        
        localStorage.setItem('accessToken', newAccessToken);
        return newAccessToken;
    } catch (error) {
        console.error("Помилка оновлення токена:", error);
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
        return null;
    }
}

// Основна обгортка для всіх API запитів
export async function customFetch(
    endpoint: string,
    options: RequestInit = {}
): Promise<Response> {
    const token = localStorage.getItem('accessToken');
    const headers = new Headers(options.headers || {});
    
    // Встановлюємо Content-Type за замовчуванням, якщо не передано інший
    if (!headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/json');
    }

    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    const config: RequestInit = {
        ...options,
        headers,
        credentials: 'include', // Передає cookie за замовчуванням
    };

    // 1. Перша спроба запиту
    let response = await fetch(`${BASE_URL}${endpoint}`, config);

    // 2. Якщо 401 Unauthorized — пробуємо оновити токен
    // ВАЖЛИВО: не робимо цього для логіну та рефрешу, щоб уникнути циклів
    const isAuthRoute = endpoint.includes('/auth/login') || endpoint.includes('/auth/refresh');
    
    if (response.status === 401 && !isAuthRoute) {
        const newToken = await refreshAccessToken();
        
        if (newToken) {
            headers.set('Authorization', `Bearer ${newToken}`);
            response = await fetch(`${BASE_URL}${endpoint}`, {
                ...config,
                headers,
            });
        }
    }

    return response;
}
