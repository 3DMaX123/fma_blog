import React from 'react'

import { NavBar, Footer} from './components';
import { AboutUs, BlogPage, MainPage, SingInAndUp} from './container';
import './App.css';



const App = () => (
    <div>
        <NavBar />
        <MainPage />
        <AboutUs />
        <BlogPage />
        <SingInAndUp />
        <Footer />
    </div>
);

export default App