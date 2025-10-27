import './secondary-info.scss';

export const SecondaryInfo = () => {
  return (
    <div className="secondary-info">
      <div className="secondary-info__text-row">
        <p className="secondary-info__title">Осадки</p>
        <p className="secondary-info__value">0%</p>
      </div>
      <div className="secondary-info__text-row">
        <p className="secondary-info__title">Влажность</p>
        <p className="secondary-info__value">0%</p>
      </div>
      <div className="secondary-info__text-row">
        <p className="secondary-info__title">Ветер</p>
        <p className="secondary-info__value">0 км/ч</p>
      </div>
    </div>
  );
};
