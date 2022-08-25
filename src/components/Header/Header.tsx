import React, {useState} from 'react';
import {HeaderWrapper, HeaderInner, Logo, RightBar, HeaderMenu, Image} from "./Header.styles";
import userSvg from '../../assets/account.svg'
import basketSvg from '../../assets/basket.svg'
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";
import {Link} from "react-router-dom";
import {ERoutes} from "../../models/routes/routes";
const Header = () => {
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <HeaderWrapper>
            <HeaderInner>
                <Link to={ERoutes.USER}><Logo>NAME-LOGO</Logo></Link>
                <RightBar>
                    <Search openSearch={openSearch} setOpenSearch={setOpenSearch}/>
                    <Navigation/>
                    <HeaderMenu><Image src={userSvg} alt=""/><Image src={basketSvg} alt=""/></HeaderMenu>
                </RightBar>
            </HeaderInner>
        </HeaderWrapper>
    );
};

export default Header;