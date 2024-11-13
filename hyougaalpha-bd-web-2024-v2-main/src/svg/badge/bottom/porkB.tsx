import { CSSProperties } from "react";

export const PorkBottom = (props : { className? : string, style? : CSSProperties}) => {
    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92" className={props.className}>
            <path fill={props.style?.borderColor} d="m 0 66 v 66 h 402 v -132 h -16 v 116 h -370 v -116 h -16 z Z M 47 41 L 43 43 L 41 54 L 43 58 L 42 67 L 39 73 L 39 83 L 41 88 L 48 91 L 70 91 L 75 74 L 74 63 L 76 56 L 74 48 L 74 43 L 68 41 Z M 54 91 L 54 107 L 57 107 L 57 91 Z M 79 107 L 86 89 L 88 90 L 81 109 Z M 80 87 L 77 81 L 79 73 L 79 68 L 83 65 L 87 59 L 87 53 L 87 47 L 94 42 L 115 49 L 116 54 L 116 62 L 114 66 L 112 71 L 109 84 L 103 93 L 93 92 Z"/>
        </svg>
    );
};