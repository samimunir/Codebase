import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Main;
