import React, { useState } from 'react'
// import Rating from 'material-ui-rating'

export const StarRating = ({ count, value, inactiveColor = '#ddd', size = 24, activeColor = '#f00', onChange }) => {

    // const [value, setValue] = useState(2);
    {

        const stars = Array.from({ length: count }, () => '🟊')

        const handleChange = (value) => {
            onChange(value + 1);
        }
        return (
            <div className='retingstars mb-2'>
                {stars.map((s, index) => {
                    let style = inactiveColor;
                    if (index < value) {
                        style = activeColor;
                    }
                    return (
                        <span className={"star"}
                            key={index}
                            style={{ color: style, width: size, height: size, fontSize: size }}
                            onClick={() => handleChange(index)}>{s}</span>
                    )
                })}
            </div>
        )
    }
}
