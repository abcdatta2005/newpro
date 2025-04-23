import React from 'react';

const HoverBlur = () => {
    return (
        <div className="p-4 space-y-4">
            <p
                style={{ transition: 'filter 0.3s' }}
                onMouseEnter={(e) => (e.target.style.filter = 'blur(3px)')}
                onMouseLeave={(e) => (e.target.style.filter = 'none')}
            >
                Hover over this text to blur it
            </p>
        </div>
    );
};

export default HoverBlur;
