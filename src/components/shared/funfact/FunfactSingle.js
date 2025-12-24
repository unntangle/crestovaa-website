"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Odometer = dynamic(() => import("react-odometerjs"), {
    ssr: false,
    loading: () => <span>0</span>,
});

const FunfactSingle = ({ currentValue, symbol }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(currentValue);
    }, [currentValue]);

    return (
        <div className="tj-funfact-item">
            <div className="number">
                <Odometer value={value} format="(.ddd),dd" />
                {symbol && <span className="symbol">{symbol}</span>}
            </div>
        </div>
    );
};

export default FunfactSingle;
