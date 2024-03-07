import classes from './ThemeSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {UseTheme} from "app/provides/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const  {theme, toggleTheme} = UseTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classes.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            TOOGLE
        </Button>
    );
};