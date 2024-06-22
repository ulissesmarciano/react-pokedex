import React from 'react';
import { ProgressBarBackground, ProgressPowerBar } from './styles';

const ProgressBar = ({ progress }) => {
    const width = `${progress}%`;
    const color = progress < 50 ? "red" : "green";

    return (
        <ProgressBarBackground>
            <ProgressPowerBar width={width} color={color} />
        </ProgressBarBackground>
    );
};

export default ProgressBar;

