import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ERoutes} from "../models/routes/routes";
import LayoutUser from "../containers/Layout-user/LayoutUser";


const App = () => {
    return (
        <Routes>
            <Route path={ERoutes.ADMIN}>
                <Route index element={<h1>АДМИН</h1>}/>
            </Route>
            <Route path={ERoutes.USER} element={<LayoutUser/>}>
                <Route index element={<h1>ЮЗЕР-MAIN</h1>}/>
                <Route path={ERoutes.MENU} element={<h1>ЮЗЕР-MENU</h1>}/>
                <Route path={ERoutes.CATEGORY} element={<h1>ЮЗЕР-CATEGORY</h1>}/>
                <Route path={ERoutes.PRODUCT} element={<h1>ЮЗЕР-ONE</h1>}/>
            </Route>
        </Routes>
    );
};

export default App;