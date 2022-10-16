import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Tables from '../tasks/Tables';
import Outputs from '../tasks/Outputs';
import Home from '../tasks/Home';
import LohIn2 from '../tasks/LohIn2';
const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LohIn2 />} />
                <Route path='home' element={<Home />} />
                <Route path='shipment' element={<Tables />} />
                <Route path='outputs' element={<Outputs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation