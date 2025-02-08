import { BrowserRouter, Route, Routes } from "react-router";
import { RootRedirect } from "./components/RootRedirect";

export default function EZUtilRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang" element={<div>hi</div>} />
        <Route path="*" element={<div>temp</div>} />
      </Routes>
    </BrowserRouter>
  )
}