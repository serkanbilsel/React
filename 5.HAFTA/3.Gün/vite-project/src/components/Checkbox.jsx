import React, { useState } from 'react';

const MyCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <>
            <div
                onClick={() => setIsChecked(!isChecked)}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "24px",
                    height: "24px",
                    border: "3px solid gray",
                    borderRadius: "50%",
                }}
            >
                {isChecked && (
                    <div
                        style={{
                            width: "16px",
                            height: "16px",
                            backgroundColor: "dodgerblue",
                            borderRadius: "50%",
                        }}
                    ></div>
                )}
            </div>
        </>
    );
};

export default MyCheckbox;
