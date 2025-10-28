import './main-info.scss';
import { CloudyIcon } from '../Icons';

export const MainInfo = () => {
  return (
    <div className="main-info">
      <CloudyIcon className="main-info__weather_svg" />
      <div className="main-info__weather-holder">
        <p className="main-info__temperature">15 °C</p>
        <p className="main-info__weather-description">Туманно</p>
      </div>
    </div>
  );
};
