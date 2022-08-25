import React from 'react';
import {NavigationWrapper, NavList, List} from "./Navigation.styles";
import {Link} from "react-router-dom";
import {ERoutes} from "../../../models/routes/routes";

const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavList>
                <List><Link to={ERoutes.MENU}>меню</Link></List>
                <List><Link to={ERoutes.USER}>доставка</Link></List>
            </NavList>
        </NavigationWrapper>
    );
};

export default Navigation;