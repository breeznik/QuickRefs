import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
const RootLayout = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <main>
        <Outlet></Outlet>
      </main>
    </Provider>
  );
};

export default RootLayout;
