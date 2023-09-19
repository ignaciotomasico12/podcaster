import React from "react";

export default function Logo(props) {
    const { width, height } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 259.06 408.22" width={width} height={height}>
            <path fill="#61dafb" d="M19.2,104.53c-3.29-4.88-2.77-8.86,1-11.76C26.36,88,32.9,83.7,39.3,79.24c1.63-1.14,3.9-1.83,4.84-3.36,1.16-1.88,1.22-4.43,1.75-6.69-2.37-.5-5.17-2-7-1.29-4.4,1.81-8.44,4.58-12.46,7.21s-7.85,5.57-12.33,8.78c-2.18-8.56-3.42-16.57-1.35-24.82A57.63,57.63,0,0,1,38.9,23.21,292,292,0,0,1,72.76,5.39C82.6.94,93.76,6,98,16a78.81,78.81,0,0,1,3.61,12.42c.84,3.51,2.33,6,6.4,5.31s5-3.78,4.51-7.16C111,16.58,108.39,7.05,99.7.37,110.36-1.63,121.94,4.82,127,16c2,4.33,2.9,9.16,4.2,13.79.86,3.09,2,6,5.9,5.35,4.2-.65,4.64-3.71,4-7.2-2-10.74-6-20.38-15.83-27.86,6.76.29,11.3,2.9,15.36,6.58,6.19,5.6,9.39,12.8,11.09,20.8.38,1.79.32,4,1.35,5.25,1.22,1.52,3.41,3.08,5.15,3.06,1.06,0,3-3,2.93-4.63-.07-3.35-1.19-6.68-1.55-10.11,5.7,6.83,8,15,9.61,24.36-4.85-.71-9.16-1.39-13.49-2-1.8-.24-3.93-.91-5.37-.23-1.85.87-4.4,2.92-4.37,4.42,0,1.86,2,4.75,3.81,5.31,4.06,1.29,8.52,1.3,12.76,2.1,8,1.51,10.5,4.19,11,11.86-3.66-.51-7.19-1-10.73-1.47-2.48-.28-5.2-1.09-7.39-.38s-5,3-5.09,4.69,2.43,4.8,4.36,5.33c4.43,1.24,9.24,1,13.81,1.88,6.92,1.26,9.49,4.28,9.61,11.3-2.95-.28-5.82-.6-8.71-.82-3.14-.24-6.43-1-9.4-.39-2.12.46-4.93,2.54-5.48,4.46-.88,3.08,1.55,5.23,4.79,5.72,2.3.34,4.65.34,6.95.68a75.64,75.64,0,0,1,10.77,1.9c4.38,1.29,6.24,4.62,5.79,10-4.84-.31-9.56-.7-14.29-.91-7-.33-9.72,1-9.8,4.78-.1,4,2.74,5.68,9.73,6A79.19,79.19,0,0,1,180.89,121a10.27,10.27,0,0,1,5.47,3.75,7,7,0,0,1,1,5.5c-.22.77-3.18,1-4.91,1-4.32,0-8.65-.33-13-.45-3.43-.1-6.09,1.31-6.3,4.94s2.38,5.35,5.75,5.57c4.65.32,9.32.27,14,.62,4.16.31,7.93,1.48,9.31,6.14,1,3.29.18,5.16-3.69,5-4.33-.21-8.66-.22-13-.29-3.94-.06-7.79.51-7.84,5.5s4.17,5,7.62,5.18c5.15.26,10.33.22,15.49.16,3.1,0,5.18,1.14,5.81,4.27,1.24,6.19,2.73,12.36,3.56,18.62,1.43,10.83-2.66,19.62-11.12,26.33-11,8.77-24,13.43-37.37,17.3-7.65,2.22-7.59,2.08-6.26,10.15,1.48,9,3.06,18.07,4,27.17a58.9,58.9,0,0,1-.5,14.41c-2.71,18.73-26.73,24.44-37.91,16-3.56-2.68-6.37-7.32-7.83-11.63-4.72-14-8.75-28.31-12.82-42.55-.84-2.93-2-4-5.14-3.95A67.37,67.37,0,0,1,73.77,239C56.64,236.6,45,225.74,41.12,209a7.88,7.88,0,0,1,3.66-9.08,207.3,207.3,0,0,1,18.33-10c6.25-3,8.16-5.16,6.65-8.76-1.59-3.77-4.74-4.14-11.23-.87-5.2,2.62-10.18,5.68-15.36,8.33-2.08,1.07-4.72,3-6.35-.58-1.39-3-2.82-6.51,1.08-8.81,6.58-3.9,13.31-7.54,20-11.26,1-.56,2.13-.95,3.19-1.43,3.2-1.45,5.5-3.58,4-7.37s-4.63-4-7.9-2.41c-6.27,3.07-12.46,6.31-18.71,9.43-2,1-4.19,4.09-6.27.81-1.81-2.85-2.61-6.47.91-8.95,4.34-3.07,8.82-6,13.39-8.68,3-1.79,6.22-3.18,9.35-4.72,3.37-1.65,6.48-3.61,4.24-8s-5.73-3.27-9-1.56c-5.75,3-11.35,6.29-17.15,9.2-1.92,1-5.84,2-6.12,1.53-1.75-3.09-2.67-6.76.89-9.4,4.54-3.35,9.22-6.53,14-9.54A85.4,85.4,0,0,1,52,122c3.35-1.58,5.17-3.93,3.44-7.54s-4.94-3.57-8.07-1.91c-6,3.2-11.9,6.65-17.94,9.81-2,1.05-5.68,2.7-6.22,2.07a6.15,6.15,0,0,1,.24-8.69c.11-.11.23-.21.35-.31A190.59,190.59,0,0,1,39.39,104a88.34,88.34,0,0,1,8.79-4.72c3-1.62,4.19-4.52,2.29-7-1.2-1.59-5-3-6.51-2.27C37.1,93.25,30.6,97.3,24,101.14,22.46,102,21.06,103.19,19.2,104.53ZM120.06,52.68c3.49,0,7,.14,10.48,0s6.8-1.33,6.6-5.77c-.19-4.18-3.31-4.85-6.74-5-20.39-.73-40.12,2-58.81,10.68-6.12,2.83-8.39,5.45-6.5,8.7,2.88,5,6.88,2.58,10.47,1C89.72,56,104.46,52.45,120.06,52.68Zm12.47,33.16-.2-.59c-10.56,2.1-21.21,3.83-31.65,6.44-7.53,1.88-14.82,4.8-22.12,7.53-2.93,1.1-5.44,3.29-4.06,6.89s4.33,4.29,7.82,2.89a35.32,35.32,0,0,1,4.2-1.56c12.19-3.1,24.33-6.44,36.63-9.08,5.63-1.22,11.61-.71,17.32-1.69,1.84-.32,4.59-2.91,4.58-4.46,0-1.74-2.33-4.18-4.23-5-2.49-1.14-5.53-1-8.32-1.37Zm-4.78-11.23c3,0,6.19.66,8.9-.22,2-.66,4.8-3.31,4.75-5s-2.94-3.64-4.86-5.11c-.76-.58-2.27-.33-3.41-.22-10.41,1-21,1.16-31.15,3.29-9.66,2-18.92,6-28.3,9.3-3.13,1.09-5.25,3.19-3.89,6.83,1.42,3.8,4.46,4,7.83,2.9,1.41-.48,2.77-1.12,4.15-1.7a126.41,126.41,0,0,1,46-10.07ZM88.16,155.39c3.33-1,5.69-1.81,8.09-2.49,10.22-2.9,20.36-6.22,30.72-8.51,7.43-1.65,15.17-1.9,22.76-2.84,3.19-.4,5.92-2.23,4.94-5.45-.63-2.08-3.59-3.51-5.65-5-.53-.39-1.64-.1-2.45,0-11.3,1.84-22.69,3.27-33.86,5.71-8.4,1.83-16.54,4.9-24.74,7.59-3,1-5,3.37-3.86,6.53C84.74,152.75,86.87,154.05,88.16,155.39Zm-4.49-22.68c2.68-.86,4.54-1.57,6.47-2.07,13.15-3.47,26.26-7.15,39.52-10.2,5.13-1.17,10.68-.45,15.86-1.49,1.91-.39,4.56-3.38,4.55-5.18,0-1.65-2.92-3.65-4.95-4.8-1.26-.71-3.26-.19-4.92-.12-19.32.84-37.76,5.65-55.75,12.41-1.38.51-3.21,1.13-3.76,2.23-.86,1.75-1.5,4.16-1,5.9C80.17,130.84,82.43,131.74,83.67,132.71Zm66.63,21.11-.12-.65c-9.46,1.77-19,3.18-28.36,5.42s-18.53,5.29-27.76,8c-3.53,1-6.36,3-5.06,7.16,1.4,4.45,5,4,8.64,2.89,10.86-3.15,21.66-6.54,32.66-9.1,7.74-1.79,15.76-2.41,23.67-3.48,3.19-.43,5.51-1.77,5.38-5.3-.13-3.75-2.66-5.08-6.06-5.16C152.29,153.6,151.29,153.75,150.3,153.82Zm-1.76,44.08c-.87-5.74-1.64-11.5-2.63-17.21-.55-3.24-2.19-5.89-6-5.16-4,.77-5.11,3.49-4.41,7.5a125.41,125.41,0,0,1,1.64,14.84c.48,9.06-3.62,15.7-11.52,19.93-3.5,1.88-7.36,3.11-10.79,5.09-1.76,1-2.93,3-4.37,4.63,2.11,1,4.24,2.92,6.34,2.89,16.6-.22,31.43-15.8,31.74-32.51Zm-6.77,26.23a19.74,19.74,0,0,0,4.18.7c12.78-.9,26.79-13.62,27.65-26.24.48-7.2-.89-14.55-1.75-21.79-.35-2.94-2.61-5.27-5.58-4.05-1.73.7-3.24,3.43-3.66,5.48s.59,4.56.93,6.87c2.48,16.8.68,26.64-16.39,34.05a14.6,14.6,0,0,0-3.41,2,16.6,16.6,0,0,0-2,3Zm24.33-4c.89.33,1.26.61,1.48.52,21.77-9,28.08-21.07,22.54-45.76-.6-2.69-2.38-5.12-5.19-3.8-1.6.76-3.09,3.77-3,5.7.18,5,1.52,9.87,1.92,14.83.93,11.54-3.32,20.48-13.81,26-1.26.67-2.41,1.51-4,2.47Zm-37.29,64.08c.11-5.52-3.76-10.38-8.44-10.6s-8.6,4.09-8.8,9.54,3.63,10.45,8.33,10.6,8.81-4.43,8.91-9.58Z" transform="translate(0 -0.01)"/>
            <path fill="#61dafb" d="M69.2,368.12v-8.94h42.59V311.39c12.85,4.73,24,1.52,35.39-4.46v51.94h42.53v9.25Z" transform="translate(0 -0.01)"/>
            <path fill="#61dafb" d="M0,408.23v-9H259.06v9Z" transform="translate(0 -0.01)"/>
            <path fill="#61dafb" d="M38.47,388.54v-9.28H220.28a8.37,8.37,0,0,1,.52,1.63c.48,7.71.48,7.66-7.28,7.65h-175Z" transform="translate(0 -0.01)"/>
        </svg>
    )
}