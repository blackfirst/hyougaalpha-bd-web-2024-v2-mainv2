import { CSSProperties } from "react";

export const CocoaTop = (props : { className? : string, style? : CSSProperties}) => {
    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 132" className={props.className}>
            <g id="Background">
                <path fill={props.style?.borderColor} d="m 0 66 v -66 h 402 v 132 h -16 v -116 h -370 v 116 h -16 z"/>
            </g>
        </svg>
    );
};