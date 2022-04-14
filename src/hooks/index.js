import axios from 'axios';
import { useState, useEffect } from 'react';

export const useDate = () => {
  const [today, setDate] = useState(new Date());
  const locale = 'en';

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: 'long',
  })}\n\n`;
  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  });

  return {
    date,
    time,
  };
};

export const useWeather = zipcode => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const main = async () => {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=4ce40c76ef718812604abab33f644a26&units=imperial`
        )
        .then(res => {
          setWeather(res.data);
        });
    };
    main();
  }, [zipcode]);

  return { weather };
};