import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


import Tables from '../tasks/Tables';
import Outputs from '../tasks/Outputs';
const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Tables />} />
                <Route path='outputs' element={<Outputs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation