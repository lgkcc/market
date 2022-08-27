import React from 'react';
import {useAppDispatch} from "../../../hooks/state";
import {logout} from "../../../store/slices/authSlice";
import {useNavigate} from "react-router-dom";
import {ERoutes} from "../../../models/routes/routes";

const Profile = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const logoutSubmit = () => {
        dispatch(logout())
        window.localStorage.removeItem('marketToken')
        navigate(ERoutes.USER)
    }
    return (
        <div>
            <button onClick={logoutSubmit}>Логаут</button>
        </div>
    );
};

export default Profile;