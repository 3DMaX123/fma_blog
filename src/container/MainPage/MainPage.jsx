import React from 'react'

import './MainPage.css';
import MainGrid from './MainGrid/MainGrid';
import MainContent from './MainContent/MainContent';
import GlobalTrends from './GlobalTrends/GlobalTrends';
import { Footer } from '../../components';

const MainPage = () => {
  return (
    <div className='app_mainpage'>
      <MainContent />
      <MainGrid />
      <GlobalTrends />
      <Footer />
    </div>
  )
}

export default MainPage