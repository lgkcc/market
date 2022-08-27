import React from 'react';

import {AuthWrapper, Tabs, Tab, AuthInner, Submit} from "./Auth.styles";
import {IAuthProps} from "./Auth.interface";
import Login from "./Login/Login";
import Register from "./Register/Register";


const Auth:React.FC<IAuthProps> = ({status, setStatus}) => {
    return (
        <AuthWrapper>
            <Tabs>
                <Tab status={status} onClick={() => setStatus(true)}>Вход</Tab>
                <Tab status={!status} onClick={() => setStatus(false)}>Регистрация</Tab>
            </Tabs>
            <AuthInner>
                {
                    status ? <Login/> : <Register/>
                }
            </AuthInner>
        </AuthWrapper>
    );
};

export default Auth;