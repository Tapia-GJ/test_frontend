import { Routes, Route } from "react-router"
import NotFoundPage from "./pages/404";
import HomePage from "./pages/Home";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
