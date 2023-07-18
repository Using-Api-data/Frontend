import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";


export const Arrow = ({ disabled, onClick, direction }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
                userSelect: "none",
                width: 0,
                height: 0,
                borderBottom: "30px solid transparent",
                borderTop: "30px solid transparent",
                ...direction
            }}
        >
        </button>
    );
}

export const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } =
        useContext(VisibilityContext);

    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()} direction={{
            borderRight: "30px solid black",
            borderLeft: "30px solid transparent"
        }} />
    );
}

export const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()} direction={{
            borderLeft: "30px solid black",
            borderRight: "30px solid transparent"
        }} />
    );
}