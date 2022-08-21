import React from 'react';
import {Container, Wrapper} from "./LayoutUser.style";
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Paths from "../../components/Paths/Paths";

const LayoutUser = () => {
    return (
        <Container>
            <Header/>
            <LeftSideBar/>
            <Wrapper>
                <Paths/>
                <Outlet/>
            </Wrapper>
        </Container>
    );
};

export default LayoutUser;