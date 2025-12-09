import { useTheme } from "../contexts/Theme";
import ScrollBar from "../components/ui/ScrollBar";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";

const Main = ({ children }) => {
  const { theme } = useTheme();

  return (
    <main>
      <ScrollBar />
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} theme={theme} />
      <main>{children}</main>
      <Footer />
    </main>
  );
};

export default Main;
