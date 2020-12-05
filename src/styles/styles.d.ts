import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      title: string;
      text: string;

      background: string;
      card: string;

      input: {
        placeholder: string;
        color: string;
        background: string;
        borderColor: string;
      };

      button: {
        background: string;
        color: string;
      };
    };
  }
}
