import './forecast.scss';
import { ForecastDayCard } from '../ForecastDayCard/ForecastDayCard.tsx';

export const Forecast = () => {
  return (
    <div className="forecast">
      <ForecastDayCard />
      <ForecastDayCard />
      <ForecastDayCard />
    </div>
  );
};
