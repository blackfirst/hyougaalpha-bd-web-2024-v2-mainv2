import { CSSProperties } from "react";

export const BadgeBody = (props : { className? : string, style? : CSSProperties}) => {
    return (
        <svg  preserveAspectRatio="none" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 49" className={props.className}>
            <path fill={props.style?.borderColor} d="m 0 24.5 v 24.5 h 16 v -49 h -16 z m 386 0 v 24.5 h 16 v -49 h -16 z"/>
            <path fill={props.style?.color} d="m 16 24.5 v 24.5 h 370 v -49 h -370 z"/>
        </svg>
    );
};