import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Test from '../pages/Test';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path="/test" element={<Test/>}/>
        </Routes>
    );
}

export default RoutesComponent;
