import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Rotas from "./routes";
import Carrocel from "./components/Carrocel/index";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Rotas />
      <Carrocel />
      <Footer />
    </BrowserRouter>
  );
}
