import { AuthProvider } from "./context/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <Landing />
              </Main>
            }
          />
          <Route
            path="/auth/login"
            element={
              <Main>
                <Auth />
              </Main>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <Main>
                <Auth />
              </Main>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
