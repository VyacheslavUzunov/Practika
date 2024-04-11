import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import Katalog from './pages/Katalog'
import Sales from './pages/Sales'
import About from './pages/About'
import Contact from "./pages/Contact";

export const PATH = {
    PRE_JUNIOR: '/katalog',
    JUNIOR: '/sales',
    JUNIOR_PLUS: '/about',
    JUNIOR_LOX: '/contact',
}

function Pages() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Katalog/>}  />
                <Route path={'katalog'} element={<Katalog/>}  />
                <Route path={'sales'} element={<Sales/>} />
                <Route path={'about'} element={<About/>}/>
                <Route path={'contact'} element={<Contact/>}/>

                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
