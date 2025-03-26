import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer } from 'lucide-react';
import { useWeatherStore } from '@/store/weather';

export function WeatherUnit() {
  const { unit, setUnit } = useWeatherStore();

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-xl p-2">
      <button
        onClick={() => setUnit('celsius')}
        className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all ${
          unit === 'celsius' 
            ? 'bg-white/20 text-white' 
            : 'text-white/70 hover:text-white'
        }`}
      >
        <Thermometer className="w-4 h-4" />
        °C
      </button>
      <button
        onClick={() => setUnit('fahrenheit')}
        className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all ${
          unit === 'fahrenheit' 
            ? 'bg-white/20 text-white' 
            : 'text-white/70 hover:text-white'
        }`}
      >
        <Thermometer className="w-4 h-4" />
        °F
      </button>
    </div>
  );
}