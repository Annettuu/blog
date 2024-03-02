import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {UseTheme} from "app/provides/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib/classNames";

export const App = () => {
    const  {theme, toggleTheme} = UseTheme();

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme} >TOOGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}