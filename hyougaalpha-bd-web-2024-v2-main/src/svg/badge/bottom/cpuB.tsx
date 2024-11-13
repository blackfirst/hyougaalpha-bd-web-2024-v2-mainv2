import { CSSProperties } from "react";

export const CpuBottom = (props : { className? : string, style? : CSSProperties}) => {
    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92" className={props.className}>
            <path fill={props.style?.borderColor} d="m 0 66 v 66 h 402 v -132 h -16 v 116 h -370 v -116 h -16 z Z Z Z Z Z Z Z Z Z Z Z Z Z Z Z M 34 97 L 120 97 L 120 49 L 166 49 L 166 45 L 34 44 Z M 143 72 A 1 1 0 0 0 151 72 A 1 1 0 0 0 143 72 Z M 145 67 L 142 70 L 127 60 C 129 55 131 54 136 52 Z M 141 72 L 126 61 C 124 67 123 75 128 81 L 144 77 Z M 146 66 L 138 51 C 145 50 152 51 158 53 L 151 68 Z M 152 70 C 153 73 152 78 145 78 L 129 83 C 137 93 152 95 159 87 C 166 83 175 62 159 54 Z Z M 62 98 L 128 98 L 128 105 L 62 105 Z M 61 98 L 56 98 L 56 105 L 61 105 M 32 41 L 32 98 L 29 98 L 29 44 L 24 44 L 24 41 Z"/>  
        </svg>
    );
};