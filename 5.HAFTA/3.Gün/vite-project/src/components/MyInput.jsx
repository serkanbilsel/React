import React, { useState } from 'react';

const MyInput = (props) => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <input
            style={{
                all: "unset",
                border: "3px solid " + (isFocused ? "black" : "lightgray"),
                padding: "8px 16px",
                fontFamily: "sans-serif",
                borderRadius: "8px",
            }}
            onFocus={() => {
                setIsFocused(true);
            }}
            onBlur={() => {
                setIsFocused(false);
            }}

            {...props}
        />
    );
};

export default MyInput;
