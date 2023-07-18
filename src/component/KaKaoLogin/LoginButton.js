import React from "react";
import {KAKAO_AUTH_URL} from '../../const/OAuth';


const LoginButton = () => {
    return <div><a href ={KAKAO_AUTH_URL}>로그인버튼</a></div>
}
export default LoginButton;