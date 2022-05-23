import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./App.store";
import Canvas from "./pages/canvas";
import Home from "./pages/home";
import Svg from "./pages/svg";
import "./styles.css";

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/svg" element={<Svg />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
