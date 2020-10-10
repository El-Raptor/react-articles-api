import { createGlobalStyle } from'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
    }
    html {
        min-height: 100%;
        background: #fafafa;
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: 'Roboto', 'sans-serif';
    }
`;