import React, { useEffect, useState } from 'react';
import '../../style/styles.scss';
import './FlashSaleCountdown.scss';

interface FlashSaleCountdownProps {
    endTime: string;
}

const FlashSaleCountdown: React.FC<FlashSaleCountdownProps> = ({ endTime }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(endTime).getTime() - new Date().getTime();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval as keyof typeof timeLeft]) {
            return;
        }
        timerComponents.push(
            <span className='flashsale-countdown-left' key={interval}>
                {timeLeft[interval as keyof typeof timeLeft]} <span className='flashsale-countdown-interval'>{interval}</span>{" "}
            </span>
        );
    });

    return (
        <div>
            {timerComponents.length ? (
                timerComponents
            ) : (
                <span className='flashsale-countdown-end'>Flash Sale Ended!</span>
            )}
        </div>
    );
};

export default FlashSaleCountdown;
