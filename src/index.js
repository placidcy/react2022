//싱글페이지ㅣ

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.scss";
import App from "./App";
const rootNode = document.getElementById('root');
// ReactDOM.createRoot(rootNode).render(
//   <React.StrictMode> 엄격모드라서 link누르면 주소만 바뀜
//     <App />
//   </React.StrictMode>,
// );

ReactDOM.createRoot(rootNode).render(<App />);