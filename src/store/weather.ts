import { create } from 'zustand';
import axios from 'axios';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
}

interface WeatherState {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  unit: 'celsius' | 'fahrenheit';
  fetchWeather: (city: string) => Promise<void>;
  setUnit: (unit: 'celsius' | 'fahrenheit') => void;
  convertTemp: (temp: number) => number;
}

const API_KEY = '87f1b62afc5e74e87ef652ef76ee9785';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Create axios instance with default config
const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric',
  },
});

export const useWeatherStore = create<WeatherState>((set, get) => ({
  weather: null,
  loading: false,
  error: null,
  unit: 'celsius',

  setUnit: (unit) => set({ unit }),

  convertTemp: (temp) => {
    const { unit } = get();
    if (unit === 'fahrenheit') {
      return (temp * 9/5) + 32;
    }
    return temp;
  },

  fetchWeather: async (city: string) => {
    try {
      set({ loading: true, error: null });
      
      const response = await weatherApi.get<WeatherData>('/weather', {
        params: { q: city },
      });

      set({ weather: response.data, loading: false });
    } catch (error: any) {
      set({ 
        error: error.response?.data?.message || 'Failed to fetch weather data. Please try again.',
        loading: false 
      });
    }
  },
}));