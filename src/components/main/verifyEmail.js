import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as h from "../../styles/headerStyle";
import * as t from "../../styles/main/todayQuestionStyle";
import mainLogo from '../../assets/imgs/100shot_icon.png';
import { useLocation } from "react-router-dom";

const VerifyEmail = () => {
    const location = useLocation();
    const [status, setStatus] = useState({
        message: '이메일 인증 중',
        details: '잠시 기다려주세요'
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            verifyEmailToken(token);
        } else {
            setStatus({
                message: 'Invalid verification link',
                details: 'The verification link is not valid.'
            });
        }
    }, [location]);

    const getStatusMessage = (code) => {
        switch (code) {
            case '200':
                return {
                    message: '이메일 인증 완료🌟',
                    details: '원래 페이지로 돌아가주세요!'
                };
            case '401':
                return {
                    message: '이메일 인증 실패',
                    details: ''
                };
            case '403':
                return {
                    message: '이메일 인증 실패',
                    details: ''
                };
            case '404':
                return {
                    message: '이메일 인증 실패',
                    details: ''
                };
            default:
                return {
                    message: '이메일 인증 실패',
                    details: '잠시 후 다시 시도해주세요!'
                };
        }
    };

    const verifyEmailToken = async (token) => {
        try {
            const response = await axios.get(`/api/email/verify?token=${token}`);
            console.log(response);
            setStatus(getStatusMessage(response.data.code));
        } catch (error) {
            console.error(error);
            setStatus({
                message: '이메일 인증 실패',
                details: '!'
            });
        }
    };

    return (
        <>
            <h.HeaderWrapper>
                <h.LogoWrapper className="logo">
                    <img src={mainLogo} alt="안녕" />
                    <button>백발백준</button>
                </h.LogoWrapper>
            </h.HeaderWrapper>
            <t.todayQuestionsWrapper>
                <t.emailVerifyBox>
                    <h1>{status.message}</h1>
                    {status.details && <p>{status.details}</p>}
                </t.emailVerifyBox>
            </t.todayQuestionsWrapper>
        </>
    );
};

export default VerifyEmail;
