import { CSSProperties } from "react";

export const CocoaBottom = (props : { className? : string, style? : CSSProperties}) => {
    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 132" className={props.className}>
            <path fill={props.style?.borderColor} d="m 0 66 v 66 h 402 v -132 h -16 v 116 h -370 v -116 h -16 z Z Z Z Z Z Z Z Z M 45 76 A 1 1 0 0 0 79 95 A 1 1 0 0 0 45 76 Z M 79 66 A 1 1 0 0 0 84 72 L 89 68 A 1 1 0 0 0 84 61 L 80 65 Z M 87 77 A 1 1 0 0 0 90 83 L 96 79 A 1 1 0 0 0 91 74 L 87 77 Z M 68 62 A 1 1 0 0 0 74 64 L 77 58 A 1 1 0 0 0 70 57 L 68 62 Z M 116 85 A 1 1 0 0 0 146 91 A 1 1 0 0 0 116 85 Z M 123 69 A 1 1 0 0 0 129 69 L 129 64 A 1 1 0 0 0 123 65 L 123 69 M 135 69 A 1 1 0 0 0 140 70 L 141 64 A 1 1 0 0 0 136 64 Z M 144 73 A 1 1 0 0 0 148 76 L 151 72 A 1 1 0 0 0 147 69 Z"/>
    </svg>
    );
};