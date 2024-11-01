import { useState } from 'react';

export function useProvideSession() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:4000/auth/sign-in', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();
            if (response.ok) {
                setToken(data.token); // Solo almacenar el token
                setUser({ username: data.username, role: data.role }); // Guardar info del usuario
                sessionStorage.setItem('token', data.token); // Guardar token en almacenamiento local
            } else {
                setError(data.message || 'Error al iniciar sesión');
            }
        } catch (err) {
            setError('Error al conectar con el servidor');
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        sessionStorage.removeItem('token'); // Eliminar token de almacenamiento local
    };

    return {
        user,
        token,
        login,
        logout,
        loading,
        error,
    };
}
