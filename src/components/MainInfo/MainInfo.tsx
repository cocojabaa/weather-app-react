import './main-info.scss';
import foggySVG from '../../assets/icons/foggy.svg';

export const MainInfo = () => {
  return (
    <div className="main-info">
      <img
        draggable="false"
        className="main-info__weather_svg"
        src={foggySVG}
        alt="weather icon"
      />
      <div className="main-info__weather-holder">
        <p className="main-info__temperature">15 °C</p>
        <p className="main-info__weather-description">Туманно</p>
      </div>
    </div>
  );
};
