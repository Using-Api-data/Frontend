import React from "react";


function TestContent({ onClick, title, itemId }) {
   
    return (
        <div
            onClick={() => onClick(itemId)}
            style={{
                width: '300px',
                borderColor: 'black',
                margin:'5px',
                borderWidth: '3px',
                border:'solid',
            }}
            tabIndex={0}
        >
            <div className="TestContent">
                <div>{title}</div>
            </div>
            <div
                style={{
                    height: '200px',
                }}
            />
        </div>
    );
}

export default TestContent;