import { CSSProperties } from "react";

export const StarBottom = (props : { className? : string, style? : CSSProperties}) => {
    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92" className={props.className}>
            <path fill={props.style?.borderColor} d="m 0 66 v 66 h 402 v -132 h -16 v 116 h -370 v -116 h -16 z Z Z Z Z Z M 50 95 L 58 72 L 41 58 L 61 58 L 70 43 L 79 58 L 99 58 L 84 72 L 90 95 L 70 78 Z M 110 103 L 115 91 L 109 81 L 119 85 L 130 77 L 128 89 L 135 99 L 124 96"/>
        </svg>
    );
};