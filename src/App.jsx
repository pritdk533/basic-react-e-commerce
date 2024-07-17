import ProductsLists from "./Components/Products/Products-Lists";
import CartProvider from "./Context/Cart-Provider";
import styles from "./App-Style.module.css";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <CartProvider>
        <ToastContainer position="top-right" newestOnTop={true} closeOnClick />
        <Navbar />
        <ProductsLists />
      </CartProvider>
    </>
  );
}

export default App;
