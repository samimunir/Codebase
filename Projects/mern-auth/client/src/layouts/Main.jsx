import Navbar from "../components/Navbar";

const Main = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Main;
