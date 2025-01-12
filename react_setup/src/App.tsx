import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/routes";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
