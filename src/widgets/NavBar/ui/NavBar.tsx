import React from 'react';
import classes from './NavBar.module.scss'
import {classNames} from "shared/lib/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    );
};