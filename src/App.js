import React from 'react'

import { NavBar } from './components';
import { AboutUs, BlogPage, MainPage, SingInAndUp} from './container';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



const App = () => (
        <div className='app'>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/about-us' element={<AboutUs />} />
                        <Route path='/blog-page' element={<BlogPage />} />
                        <Route path='/sing-in' element={<SingInAndUp />} />
                    </Routes>
                </Router>
        </div>
);

export default App