import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Progress, Space } from 'antd';
import GradientSVG from './layout/GradiantSVG';

export const SkillsCircle = ({ value }) => {
    const idCSS = "hello";

    return (


        <div style={{ height: "150px", width: "150px" }} className="mx-auto skillsCircles">
            <GradientSVG />
            <CircularProgressbar
                strokeWidth={8}
                value={value}
                text={`${value}%`}
                styles={{
                    path: { stroke: `url(#${idCSS})`, height: "100%" },
                    trail: {
                        stroke: "#eee"
                    },
                    textColor: "red"
                }}
            />

        </div>

    )
}
