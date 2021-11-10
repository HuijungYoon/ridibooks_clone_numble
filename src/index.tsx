import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { Helmet, HelmetProvider } from "react-helmet-async";
ReactDOM.render(
  <>
    <HelmetProvider>
      <Helmet>
        <title>일반도서 - 리디북스</title>
      </Helmet>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </HelmetProvider>
  </>,
  document.getElementById("root")
);
reportWebVitals();
