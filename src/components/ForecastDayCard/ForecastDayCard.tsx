import foggySVG from '../../assets/icons/foggy.svg';
import './forecast-day-card.scss';

export const ForecastDayCard = () => {
  return (
    <div className="forecast-day-card">
      <img
        draggable="false"
        src={foggySVG}
        alt="icon"
        className="forecast-day-card__svg"
      />
      <p className="forecast-day-card__week-day">Ср</p>
      <p className="forecast-day-card__temperature">30 °C</p>
    </div>
  );
};
