import updateDailyForecastDataPoint from './update-daily-forecast-data-point';
import { DAYS } from './fetch-weather-data';
import getTemperatureUnit from './get-temperature-unit';

function formatTime(time) {
  const [sunsetHours, sunsetMinutes] = time.split(/:|\s/);

  const date = new Date();
  date.setHours(sunsetHours);
  date.setMinutes(sunsetMinutes);

  return date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function updateDailyForecastData(data) {
  for (let day = 0; day < DAYS; day++) {
    const forecastData = data.forecast.forecastday[day];

    const weatherIcon = document.getElementById(`forecast-weather-icon-${day}`);
    weatherIcon.src = `https:${forecastData.day.condition.icon}`;

    const tempUnit = getTemperatureUnit();
    let maxTempData;
    let minTempData;
    if (tempUnit === 'C') {
      maxTempData = forecastData.day.maxtemp_c;
      minTempData = forecastData.day.mintemp_c;
    } else {
      maxTempData = forecastData.day.maxtemp_f;
      minTempData = forecastData.day.mintemp_f;
    }

    updateDailyForecastDataPoint({
      day,
      dataPoint: 'condition',
      conditionCode: forecastData.day.condition.code,
      text: forecastData.day.condition.text,
    });

    updateDailyForecastDataPoint({
      day,
      dataPoint: 'max-temp',
      text: `${maxTempData}°${tempUnit}`,
      notes: 'High',
    });

    updateDailyForecastDataPoint({
      day,
      dataPoint: 'min-temp',
      text: `${minTempData}°${tempUnit}`,
      notes: 'Low',
    });

    updateDailyForecastDataPoint({
      day,
      dataPoint: 'precipitation-chance',
      text: `${forecastData.day.daily_chance_of_rain}%`,
      notes: 'Chance of precipitation',
    });

    updateDailyForecastDataPoint({
      day,
      dataPoint: 'sunrise',
      text: formatTime(forecastData.astro.sunrise),
      notes: 'Sunrise',
    });

    updateDailyForecastDataPoint({
      day,
      dataPoint: 'sunset',
      text: formatTime(forecastData.astro.sunset),
      notes: 'Sunset',
    });
  }
}
