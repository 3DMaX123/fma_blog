import React from 'react'

import './MainPage.css';
import MainGrid from './MainGrid/MainGrid';
import MainContent from './MainContent/MainContent';
import GlobalTrends from './GlobalTrends/GlobalTrends';

const MainPage = () => {
  return (
    <div className='app_mainpage'>
      <MainContent />
      <MainGrid />
      <GlobalTrends />
    </div>
  )
}

export default MainPage