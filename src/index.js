//싱글페이지ㅣ

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.scss";
import App from "./App";
const rootNode = document.getElementById('root');

// react.strictmode => 엄격모드 : 사이트 주소만 변경되고 주소 경로로 이동 되지 않음
// ReactDOM.createRoot(rootNode).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

ReactDOM.createRoot(rootNode).render(<App />);