import React, {useState} from 'react';
import {HeaderWrapper, HeaderInner, Logo, Search, RightBar, Navigation, NavList, HeaderMenu, List, Image, SearchWrapper, ImageSearch} from "./Header.styles";
import userSvg from '../../assets/account.svg'
import basketSvg from '../../assets/basket.svg'
import searchSvg from '../../assets/search.svg'
import closeSvg from '../../assets/closeInput.svg'
const Header = () => {
    const [openSearch, setOpenSearch] = useState(false)
    const close = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setOpenSearch(false)
    }
    return (
        <HeaderWrapper>
            <HeaderInner>
                <Logo>NAME-LOGO</Logo>
                <RightBar>
                    <SearchWrapper openSearch={openSearch} onClick={() => setOpenSearch(true)}>
                        <ImageSearch openSearch={openSearch} src={closeSvg} onClick={close}/>
                        <Search openSearch={openSearch}/>
                        <ImageSearch src={searchSvg} alt="" />
                    </SearchWrapper>
                    <Navigation>
                        <NavList>
                            <List>меню</List>
                            <List>доставка</List>
                        </NavList>
                    </Navigation>
                    <HeaderMenu><Image src={userSvg} alt=""/><Image src={basketSvg} alt=""/></HeaderMenu>
                </RightBar>
            </HeaderInner>
        </HeaderWrapper>
    );
};

export default Header;