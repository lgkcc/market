import React, {useState} from 'react';
import {LeftSideBarWrapper, LeftSideBarInner, Image, ImageWrapper, BurgerMenu, BurgerMenuInner} from "./LeftSideBar.styles";
import newSvg from '../../assets/new.svg'


const LeftSideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <LeftSideBarWrapper isOpen={isOpen}>
            <LeftSideBarInner>
                <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
                    <BurgerMenuInner isOpen={isOpen}>
                    </BurgerMenuInner>
                </BurgerMenu>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={newSvg}/>
                </ImageWrapper>
            </LeftSideBarInner>
        </LeftSideBarWrapper>
    );
};

export default LeftSideBar;