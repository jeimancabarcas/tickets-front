import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#EBF2FF',
            100: '#D6E4FF',
            200: '#ADC9FF',
            300: '#85AEFF',
            400: '#5C93FF',
            500: '#3A86FF',
            600: '#2E6BCC',
            700: '#225099',
            800: '#173566',
            900: '#0B1A33',
            950: '#060D1A'
        },
    },
    components: {
        floatlabel: {
            root: {
                fontWeight: "400"
            }
        }
    }
});