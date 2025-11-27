import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

export const useFetchJuegos = () => {
  const [juegos, setJuegos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { accessToken } = useAuth(); 

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const rawUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';
        const API_URL = rawUrl.replace(/\/$/, "");

        const headers = {
          'Content-Type': 'application/json',
        };

        if (accessToken) {
          headers['Authorization'] = `Bearer ${accessToken}`;
        }

        const response = await fetch(`${API_URL}/juegos/`, { headers });

        if (!response.ok) {
          throw new Error('No se pudieron cargar los juegos.');
        }

        const data = await response.json();
        setJuegos(data);

      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [accessToken]);

  return { juegos, error, isLoading };
};