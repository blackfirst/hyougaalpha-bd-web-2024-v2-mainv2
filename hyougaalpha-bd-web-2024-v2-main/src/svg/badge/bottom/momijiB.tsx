import { CSSProperties } from "react";

export const MomijiBottom = (props : { className? : string, style? : CSSProperties}) => {
    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 132" className={props.className}>
            <path fill={props.style?.borderColor} d="m 0 66 v 66 h 402 v -132 h -16 v 116 h -370 v -116 h -16 z m 48 1 L 67 73 L 45 74 C 41 81 39 86 34 92 C 46 89 55 87 69 85 C 72 85 73 86 74 88 C 76 93 75 100 70 107 C 83 104 83 109 88 107 C 86 100 85 94 85 87 C 87 80 114 78 126 80 C 119 74 111 69 109 65 L 91 69 C 96 65 99 61 103 55 C 103 48 99 43 94 34 C 91 47 87 53 85 55 C 77 33 76 33 69 26 C 69 37 68 47 66 56 C 60 55 55.6667 50 51 47 C 52 55 52 60 48 67 Z"/>
        </svg>
    );
};