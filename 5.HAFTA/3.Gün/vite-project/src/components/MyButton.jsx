import React, { useState } from 'react'
useState
//css in js



const MyButton = (props) => {
    const [mouseUzerindeMi, setMouseUzerindeMi] = useState(false)

    return (
        <button
            style={{
                all: "unset",
                fontSie: 32,
                fontFamily: "sans-serif",
                backgroundColor: mouseUzerindeMi ? "blueviolet" : "dodgerblue",
                padding: "10px 20px",
                borderRadius: 12,
                color: "white",
                cursor: "pointer",
            }}
            onMouseOver={() => {
                setMouseUzerindeMi(true);
            }}
            onMouseOut={() => {
                setMouseUzerindeMi(false);
            }}
            {...props} //Onclick, style, gibi şeyleri bu şekilde veriyoruz yoksa app tarafındaki hello alerti çalışmaz..

        >
            {props.children}
        </button >
    );
};

export default MyButton