import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Cloud, 
  Sun, 
  Moon, 
  Wind, 
  Droplets, 
  ThermometerSun,
  Sunrise,
  Sunset,
  Navigation,
  CloudRain,
  Thermometer,
  CloudLightning,
  Compass
} from 'lucide-react';
import { Button } from './components/ui/button';
import { useWeatherStore } from './store/weather';
import { formatDate, formatTime, getWindDirection } from './lib/utils';
import { Navbar } from './components/Navbar';
import { TeamPage } from './components/TeamPage';
import { ContactPage } from './components/ContactPage';
import { WeatherUnit } from './components/WeatherUnit';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full space-y-12"
      >
        {/* Hero Section */}
        <div className="relative text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Cloud className="w-96 h-96 text-white" />
          </motion.div>
          <motion.h1 
            className="text-6xl font-bold text-white mb-6 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Weather Forecast
            <span className="text-blue-400">Pro</span>
          </motion.h1>
          <motion.p 
            className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your comprehensive weather companion providing real-time updates and accurate forecasts worldwide.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {[
            {
              icon: <CloudRain className="w-12 h-12 text-blue-300" />,
              title: "Real-Time Weather",
              description: "Get instant access to current weather conditions including temperature, humidity, wind speed, and more."
            },
            {
              icon: <CloudLightning className="w-12 h-12 text-yellow-300" />,
              title: "Live Updates",
              description: "Stay informed with continuous weather updates and instant notifications for weather changes."
            },
            {
              icon: <Compass className="w-12 h-12 text-green-300" />,
              title: "Global Coverage",
              description: "Access weather data for any location worldwide with our comprehensive global weather network."
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="bg-white/10 rounded-full p-4 w-fit mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* How to Use Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/10 rounded-2xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">How It Works</h2>
          <div className="space-y-8 text-blue-100">
            {[
              {
                icon: <Search className="w-8 h-8 text-white" />,
                title: "Search Location",
                description: "Enter any city name to get instant weather information."
              },
              {
                icon: <Cloud className="w-8 h-8 text-white" />,
                title: "View Weather Details",
                description: "Get comprehensive weather data including temperature, humidity, and wind speed."
              },
              {
                icon: <Sun className="w-8 h-8 text-white" />,
                title: "Check Daily Forecast",
                description: "Access sunrise and sunset times, along with daily temperature variations."
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-6 group"
              >
                <div className="bg-white/20 rounded-full p-4 group-hover:bg-white/30 transition-colors duration-300">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-4 rounded-xl text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = '/weather'}
          >
            Check Weather Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

function WeatherContent() {
  const [city, setCity] = useState('');
  const { weather, loading, error, fetchWeather, convertTemp } = useWeatherStore();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      await fetchWeather(city);
    }
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <Sun className="w-20 h-20 text-yellow-300" />;
      case 'clouds':
        return <Cloud className="w-20 h-20 text-gray-300" />;
      case 'rain':
        return <Droplets className="w-20 h-20 text-blue-300" />;
      default:
        return <ThermometerSun className="w-20 h-20 text-orange-300" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
      >
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="flex justify-between items-center mb-8">
            <form onSubmit={handleSearch} className="flex-1 flex gap-3">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name..."
                className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg transition-all duration-300"
              />
              <Button 
                type="submit" 
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Search className="w-6 h-6" />
              </Button>
            </form>
            <div className="ml-4">
              <WeatherUnit />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {loading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-white text-lg"
              >
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 bg-white rounded-full animate-bounce" />
                  <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-.3s]" />
                  <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-.5s]" />
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center text-red-200 bg-red-500/20 rounded-xl p-4 backdrop-blur-sm"
              >
                {error}
              </motion.div>
            )}

            {weather && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-white"
              >
                <div className="text-center mb-8">
                  <motion.h2 
                    className="text-4xl font-bold mb-2"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                  >
                    {weather.name}, {weather.sys.country}
                  </motion.h2>
                  <p className="text-xl opacity-80">{formatDate(new Date())}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    className="bg-white/10 rounded-2xl p-8 backdrop-blur-lg border border-white/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-center mb-6">
                      {getWeatherIcon(weather.weather[0].main)}
                    </div>
                    <div className="text-center">
                      <p className="text-6xl font-bold mb-4">
                        {Math.round(convertTemp(weather.main.temp))}°
                      </p>
                      <p className="text-2xl capitalize opacity-90 mb-4">
                        {weather.weather[0].description}
                      </p>
                      <div className="flex justify-center items-center gap-4 text-lg">
                        <span>↓ {Math.round(convertTemp(weather.main.temp_min))}°</span>
                        <span>↑ {Math.round(convertTemp(weather.main.temp_max))}°</span>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 gap-4">
                    <motion.div 
                      className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg border border-white/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-lg">
                          <div className="flex items-center gap-2">
                            <ThermometerSun className="w-6 h-6" />
                            <span>Feels Like</span>
                          </div>
                          <span className="font-semibold">
                            {Math.round(convertTemp(weather.main.feels_like))}°
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-lg">
                          <div className="flex items-center gap-2">
                            <Droplets className="w-6 h-6" />
                            <span>Humidity</span>
                          </div>
                          <span className="font-semibold">{weather.main.humidity}%</span>
                        </div>
                        <div className="flex items-center justify-between text-lg">
                          <div className="flex items-center gap-2">
                            <Wind className="w-6 h-6" />
                            <span>Wind</span>
                          </div>
                          <span className="font-semibold">
                            {weather.wind.speed} m/s
                            <Navigation 
                              className="w-4 h-4 inline ml-2 transform" 
                              style={{ transform: `rotate(${weather.wind.deg}deg)` }}
                            />
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg border border-white/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <Sunrise className="w-8 h-8 mx-auto mb-2" />
                          <p className="text-sm opacity-80">Sunrise</p>
                          <p className="font-semibold">{formatTime(weather.sys.sunrise)}</p>
                        </div>
                        <div className="text-center">
                          <Sunset className="w-8 h-8 mx-auto mb-2" />
                          <p className="text-sm opacity-80">Sunset</p>
                          <p className="font-semibold">{formatTime(weather.sys.sunset)}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-800 to-gray-900 transition-all duration-500">
      <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HomePage />
          </motion.div>
        )}
        
        {currentPage === 'weather' && (
          <motion.div
            key="weather"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <WeatherContent />
          </motion.div>
        )}
        
        {currentPage === 'team' && (
          <motion.div
            key="team"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TeamPage />
          </motion.div>
        )}
        
        {currentPage === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ContactPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;