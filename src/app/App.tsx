import "./styles/index.scss"
import {Link} from "react-router-dom";
import {UseTheme} from "app/provides/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/provides/router";

export const App = () => {
    const  {theme, toggleTheme} = UseTheme();

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme} >TOOGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter />
        </div>
    )
}