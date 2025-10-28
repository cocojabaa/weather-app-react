import './app.scss';
import { Header } from './components/Header/Header.tsx';
import { MainInfo } from './components/MainInfo/MainInfo.tsx';
import { SecondaryInfo } from './components/SecondaryInfo/SecondaryInfo.tsx';
import { Forecast } from './components/Forecast/Forecast.tsx';

function App() {
  return (
    <div className="app">
      <div className="app-background app-background--theme-demo" />
      <div className="card-holder">
        <div className="main-info-card">
          <Header />
          <MainInfo />
        </div>
        <div className="secondary-info-card">
          <SecondaryInfo />
          <Forecast />
        </div>
        <img
          draggable="false"
          id="kirbi"
          src="src/assets/images/kirbi.gif"
          alt="gif"
        />
      </div>
    </div>
  );
}

export default App;

// https://api.openweathermap.org/data/2.5/weather?lat=47.2213858&lon=39.71141968&lang=ru&units=metric&appid=5d33bc6397fc5e963cb19ded6528d625
// https://openweathermap.org/img/wn/10d@2x.png

// https://api.weatherapi.com/v1/forecast.json
// params = {
//   key: 5753fc09ba5847a595c155824242303,
//   q: Rostov-on-don,
//   days: 3,
//   aqi: "no",
//   alerts: "no",
// }
