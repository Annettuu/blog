import "./styles/index.scss"
import {UseTheme} from "app/provides/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/provides/router";
import {NavBar} from "widgets/NavBar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export const App = () => {
    const  {theme} = UseTheme();

    return (
        <div className={classNames('app',{},[theme])}>
            <NavBar />
            <ThemeSwitcher />
            <AppRouter />
        </div>
    )
}