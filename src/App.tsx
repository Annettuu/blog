import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense, useContext, useState} from "react";
import {UseTheme} from "./theme/useTheme";

export const App = () => {
    const  {theme, toggleTheme} = UseTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme} >TOOGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}