import React, {useRef, useState} from 'react';
import {
    LeftSideBarWrapper,
    LeftSideBarInner,
    Image,
    ImageWrapper,
    BurgerMenu,
    BurgerMenuInner
} from "./LeftSideBar.styles";
import newSvg from '../../assets/new.svg'
import {useSearchCategoriesQuery} from "../../store/market/market.api";


const LeftSideBar = () => {
    const {data: categoryData} = useSearchCategoriesQuery({
        refetchOnFocus: false
    })
    const [isOpen, setIsOpen] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const flag = useRef<boolean>(false)
    const open = () => {
        if (flag.current) {
            return
        }
        flag.current = true
        setIsOpen(!isOpen)
        if (isHidden) {
            setTimeout(() => setIsHidden(false), 1000)
        } else {
            setIsHidden(true)
        }
        setTimeout(() => flag.current = false, 1000)
    }
    return (
        <LeftSideBarWrapper isOpen={isOpen} isHidden={isHidden}>
            <LeftSideBarInner>
                <BurgerMenu onClick={() => open()}>
                    <BurgerMenuInner isOpen={isOpen}>
                    </BurgerMenuInner>
                </BurgerMenu>
                {
                    categoryData?.map((category:any) => <ImageWrapper key={category._id} name={category.title}>
                        <Image src={category.miniImageUrl || newSvg}/>
                    </ImageWrapper>)
                }
            </LeftSideBarInner>
        </LeftSideBarWrapper>
    );
};

export default LeftSideBar;