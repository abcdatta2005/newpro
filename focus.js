import React, { useState } from 'react';

const FocusText = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="p-4">
            <p
                tabIndex={0}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                    outline: 'none',
                    color: isFocused ? 'green' : 'black',
                    cursor: 'pointer',
                }}
            >
                Click or tab to focus this text
            </p>
        </div>
    );
};

export default FocusText;
