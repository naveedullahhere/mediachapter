import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const SkillsCircle = ({ value }) => {
    return (

        <div style={{ width: 150, height: 150 }} className="mx-auto skillsCircles">
            <CircularProgressbar value={value} strokeWidth={2} text={`${value}%`} styles={buildStyles({
                strokeLinecap: 'butt', textSize: '16px',
                textColor: 'var(--primary)',
                trailColor: 'var(--light)',
                pathColor: `var(--primary)`,
                backgroundColor: '#3e98c7',
            })} />
        </div>
    )
}
