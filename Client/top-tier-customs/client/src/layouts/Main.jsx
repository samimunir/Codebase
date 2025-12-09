import ScrollBar from "../components/ui/ScrollBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = ({ children }) => {
  return (
    <main>
      <ScrollBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </main>
  );
};

export default Main;
