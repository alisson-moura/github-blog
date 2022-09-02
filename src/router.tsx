import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Article } from "./pages/Article";
import { Home } from "./pages/Home";
import { Template } from "./pages/template";
// import your route components too

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}