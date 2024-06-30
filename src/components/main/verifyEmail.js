import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as h from "../../styles/headerStyle";
import * as t from "../../styles/main/todayQuestionStyle";
import mainLogo from '../../assets/imgs/100shot_icon.png';
import { useLocation, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [status, setStatus] = useState({
        message: '이메일 인증 중',
        details: '잠시 기다려주세요'
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
    
        const verifyEmailToken = async (token) => {
            try {
                const response = await axios.get(`/api/email/verify`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const statusMessage = getStatusMessage(response.data.code);
                setStatus(statusMessage);
    
                if (response.data.code === '200') {
                    navigate('/email/verify', { replace: true });
                }
            } catch (error) {
                console.error(error);
                setStatus({
                    message: '이메일 인증 실패',
                    details: '잠시 후 다시 시도해주세요!'
                });
            }
        };
    
        if (token) {
            verifyEmailToken(token);
        } else {
            setStatus({
                message: '이메일 인증 실패',
                details: '유효하지 않은 인증 링크입니다.'
            });
        }
    }, [location.search, navigate]);
    

    const getStatusMessage = (code) => {
        switch (code) {
            case '200':
                return {
                    message: '이메일 인증 완료🌟',
                    details: '원래 페이지로 돌아가주세요!'
                };
            case '401':
            case '403':
            case '404':
                return {
                    message: '이메일 인증 실패',
                    details: '잠시 후 다시 시도해주세요!'
                };
            default:
                return {
                    message: '이메일 인증 실패',
                    details: '잠시 후 다시 시도해주세요!'
                };
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
