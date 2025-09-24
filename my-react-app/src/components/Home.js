import React from 'react';
import { FaHome } from 'react-icons/fa';

export default function Home() {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Це моя головна сторінка</h1>
            <p> Тут поки нічого немає</p>
            <h1><FaHome/></h1>
        </div>
    );
};