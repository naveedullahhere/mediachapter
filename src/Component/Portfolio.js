import { ReactMixitup } from 'react-mixitup';
import React from 'react';


export const Portfolio = () => {
    const [keys, setKeys] = React.useState([1, 2, 3]);
    console.log("Portfolio");
    return (
        <div style={{ height: 64 }}>
            <button onClick={() => {
                setKeys(keys[0] === 1 ? [3, 2, 1] : [1, 2, 3]);
            }}>
                Mixitup
            </button>
            <ReactMixitup
                keys={keys}
                renderCell={(key, style, ref) => (
                    <div
                        key={key}
                        ref={ref}
                        style={{
                            // You must set the transition property here!
                            transition: 'transform 300ms linear',
                            ...style,
                        }}
                    >
                        {key}
                    </div>
                )}
                renderWrapper={(style, ref, cells) => {
                    return (
                        <div
                            style={{
                                transition: 'height 300ms ease',
                                display: 'flex',
                                ...style
                            }}
                            ref={ref}
                        >
                            {cells}
                        </div>
                    );
                }}
                dynamicDirection="horizontal"
                transitionDuration={300}
            />
        </div>
    )
}