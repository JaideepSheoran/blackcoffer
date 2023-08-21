import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <p>Welcome to </p>
        <div className='home-pics'>
            <img src="https://www.chartjs.org/media/logo-title.svg" alt="Chartjs" />
            <img src="https://miro.medium.com/v2/resize:fit:902/1*CPSTzfUTCCpUbllyiPvl_A.jpeg" alt="Sample" />
        </div>
    </div>
  )
}

export default Home