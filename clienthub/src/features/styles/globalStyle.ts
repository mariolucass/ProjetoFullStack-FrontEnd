import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --primary-color: #845EC2;
    --primary95-color: #845EC295;


    --secondary-color: #296073;
    --secondary95-color: #29607395;


    --tertiary-color: #3596B5;
    --quaternary-color: #ADC5CF;

    --white-color: #ffffff;
    --black-color: #000000;

    --grey-color: #eaeef0;

    --font-base: 'Inter', sans-serif;

    --curve: 40px;

    --toastify-font-family: 'Inter', sans-serif;
    --toastify-color-progress-info: var(--primary-color);
    --toastify-spinner-color: var(--primary-color);
}

#root{
    width:100vw;
    height:100vh;
}

* {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
   
    outline: none;
    text-decoration: none;
    list-style: none;

    border: 0;
}

body {
    width: 100vw;
    height: 100vh;
 
    overflow-x:hidden;

    font-family: var(--font-base);

    ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    }

    ::-webkit-scrollbar-thumb {
    background: transparent; 
    background-color: var(--secondary-color); 
    }

    ::-webkit-scrollbar-track {
    background: transparent;
    }

} 

button{ 
    font-family: "Inter";
    font-weight: bold;
}

span{
    font-family: "Inter";
}

input, label{
    font-family: "Inter";

    ::placeholder{
        font-family: "Inter"
    }
}

button, a{
    font-family: var(--font);
}



`;
