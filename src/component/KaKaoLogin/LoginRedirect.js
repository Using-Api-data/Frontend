import React, { useEffect } from "react";
import { CLIENT_ID } from "../../const/OAuth";
import axios from "axios";

const LoginRedirect = () => {
    useEffect(() => {
        let code = new URL(window.location.href).searchParams.get('code');
        let grant_type = "authorization_code";
        let client_id = CLIENT_ID;
        axios.post(`https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
        &client_id=${client_id}
        &redirect_uri=http://localhost:3000/oauth/callback/kakao
        &code=${code}`
            , {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }).then((res) => {
                console.log(res);
                // res의 토큰 받고 이후 코드
            }).catch((error) => {
                console.log(error);
            })
    }, [])
    return <></>
}

export default LoginRedirect;