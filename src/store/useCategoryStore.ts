import { create } from 'zustand';
import { customFetch } from '@/api/customFetch';
import type { CategoryType } from '@/types/CategoryType';

interface CategoryState {
    categories: CategoryType[];
    isLoading: boolean;
    error: string | null;
    fetchCategories: () => Promise<void>;
}

export const useCategoryStore = create<CategoryState>((set) => ({
    categories: [],
    isLoading: false,
    error: null,
    fetchCategories: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await customFetch('/category');
            if (!response.ok) {
                throw new Error('Failed to load categories');
            }
            const data = await response.json();
            set({ categories: data, isLoading: false });
        } catch (error: any) {
            set({ error: error.message || 'Error fetching categories', isLoading: false });
        }
    }
}));
