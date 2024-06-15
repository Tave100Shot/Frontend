import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const VerifyEmail = () => {
    const location = useLocation();
    const [status, setStatus] = useState('Verifying...');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            verifyEmailToken(token);
        } else {
            setStatus('Invalid verification link');
        }
    }, [location]);

    const verifyEmailToken = async (token) => {
        try {
            const response = await axios.get(`/api/email/verify?token=${token}`);
            if (response) {
                setStatus('Email verification successful!');
                console.log(response);
            } else {
                setStatus('Email verification failed');
            }
        } catch (error) {
            console.error('Verification error:', error);
            setStatus('Email verification failed');
        }
    };

    return (
        <div>
            <h1>Email Verification</h1>
            <p>{status}</p>
        </div>
    );
};

export default VerifyEmail;
