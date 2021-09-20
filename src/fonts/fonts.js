import { createGlobalStyle } from 'styled-components';

import FreePixel from './FreePixel.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Free Pixel';
        src: local('Free Pixel'), local('FreePixel'),
        url(${FreePixel});
        font-weight: 300;
        font-style: normal;
    }
`;