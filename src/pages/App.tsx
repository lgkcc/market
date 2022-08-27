import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {ERoutes} from "../models/routes/routes";
import LayoutUser from "../containers/Layout-user/LayoutUser";
import Menu from "./user/Menu/Menu";
import Categories from "./user/Categories/Categories";
import Authorization from "./user/Authorization/Authorization";
import {useLoginByTokenQuery} from "../store/market/market.api";
import {useAppDispatch, useAppSelector} from "../hooks/state";
import {login} from "../store/slices/authSlice";
import Profile from "./user/Profile/Profile";


const App = () => {
    const dispatch = useAppDispatch()
    const {isAuth} = useAppSelector(state => state.auth)
    const {isLoading, data}: any = useLoginByTokenQuery({}, {
        skip: !window.localStorage.getItem('marketToken') || isAuth
    })
    useEffect(() => {
        if (data) {
            dispatch(login(data))
        }
    }, [data])
    return (
        <Routes>
            <Route path={ERoutes.ADMIN}>
                <Route index element={<h1>АДМИН</h1>}/>
            </Route>
            <Route path={ERoutes.USER} element={<LayoutUser/>}>
                <Route index element={<h1>ЮЗЕР-MAIN</h1>}/>
                <Route path={ERoutes.MENU} element={<Menu/>}/>
                <Route path={ERoutes.CATEGORY} element={<Categories/>}/>
                <>
                    {

                        isLoading ? 'Загрузка' : isAuth ? <><Route path={ERoutes.PROFILE}
                                                                   element={<Profile/>}/><Route
                                path={ERoutes.AUTH} element={<Navigate to={ERoutes.PROFILE}/>}/></> :
                            <><Route path={ERoutes.PROFILE} element={<Navigate to={ERoutes.AUTH}/>}/><Route
                                path={ERoutes.AUTH} element={<Authorization/>}/></>

                    }
                </>
            </Route>
        </Routes>
    );
};

export default App;