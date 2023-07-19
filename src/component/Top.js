import React from "react";
import { useNavigate } from 'react-router-dom';

const Top = () => {
    const navigate = useNavigate();
    const hangleMypage = () => {
        navigate(`/mypage`);
    }

    return (
        <div style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            borderBottomColor: 'black'
        }}>
            <p>로고</p>
            <h1>지도일지도</h1>
            <div onClick={hangleMypage}>
                <p>유저</p>
            </div>
        </div>)
}

export default Top;