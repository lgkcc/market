import React, {useState} from 'react';
import Auth from "../../../components/Auth/Auth";

const Authorization = () => {
    const [status, setStatus] = useState(true)
    return (
        <Auth status={status} setStatus={setStatus}/>
    );
};

export default Authorization;