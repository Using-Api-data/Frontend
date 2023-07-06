import React from "react";
import { KAKAO_AUTH_URL } from "../../const/OAuth";

const LoginButton = () => {
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }
    return <button onClick={handleLogin}>로그인</button>
}

export default LoginButton;