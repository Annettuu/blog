import "./styles/index.scss"
import {UseTheme} from "app/provides/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/provides/router";
import {NavBar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense, useEffect} from "react";

export const App = () => {
    const  {theme} = UseTheme();

    return (
        <div className={classNames('app',{},[theme])}>
            <Suspense fallback=''>
                <NavBar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}