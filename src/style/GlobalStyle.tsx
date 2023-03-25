import { createGlobalStyle } from "styled-components";
import {Colors} from "./Color";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      ::-webkit-scrollbar {
        width: 6px;  /* 스크롤바의 너비 */
        height: 6px;
      }
      ::-webkit-scrollbar-corner {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: ${Colors.Point}; /* 스크롤바의 색상 */
        border-radius: 10px;
      }
      ::-webkit-scrollbar-track {
        background: none;
      }
    }
    a {
      text-decoration: none;
    }
    body {
      font-family: Pretendard, sans-serif;
      color: white;
      overflow: hidden;
      line-height: 160%;
    }
`

export default GlobalStyle