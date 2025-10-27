import './header.scss';
import locationSVG from '../../assets/icons/location.svg';

export const Header = () => {
  return (
    <div className="header">
      <p className="header__week-day">Вторник</p>
      <p className="header__date">20 июля 2022</p>
      <div className="header__location-holder">
        <img
          draggable="false"
          src={locationSVG}
          alt="location"
          className="header__location-svg"
        />
        <p className="header__location-text">Ростов-на-Дону</p>
      </div>
    </div>
  );
};
