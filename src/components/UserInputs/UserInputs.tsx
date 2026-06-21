import { useState, useRef } from 'react';

const UserInputs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const emailInputRef = useRef<HTMLInputElement>(null);

    const goToEmail = () => {
        emailInputRef.current?.focus();
    };

    const clearFields = () => {
        setName('');
        setEmail('');
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px auto', borderRadius: '8px', maxWidth: '400px' }}>
            <h3 style={{ marginTop: 0 }}>Введення даних</h3>
            <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Ім'я:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    style={{ padding: '5px', width: '100%', boxSizing: 'border-box' }}
                />
            </div>
            <div style={{ marginBottom: '15px', textAlign: 'left' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    ref={emailInputRef}
                    style={{ padding: '5px', width: '100%', boxSizing: 'border-box' }}
                />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={goToEmail}>
                    Перейти до Email
                </button>
                <button onClick={clearFields}>
                    Очистити всі поля
                </button>
            </div>
        </div>
    );
};

export default UserInputs;
