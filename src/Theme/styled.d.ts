import 'styles-components';
import { Theme } from '@mui/materials/styles';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}