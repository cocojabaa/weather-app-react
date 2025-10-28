import './forecast-day-card.scss';
import { CloudyIcon } from '../Icons';
// import type {IconType} from "../Icons";

type ForecastDayCardIProps = {
  active?: boolean;
};

export const ForecastDayCard = ({ active = false }: ForecastDayCardIProps) => {
  return (
    <div
      className={`forecast-day-card${active ? ' forecast-day-card--active' : ''}`}
    >
      <CloudyIcon className="forecast-day-card__svg" />
      <p className="forecast-day-card__week-day">Ср</p>
      <p className="forecast-day-card__temperature">30 °C</p>
    </div>
  );
};
