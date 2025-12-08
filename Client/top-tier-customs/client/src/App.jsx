import Main from "./layouts/Main";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} />
      </Routes>
    </Main>
  );
};

export default App;
