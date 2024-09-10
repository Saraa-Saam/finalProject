import "./App.css";
import { RouterProvider } from "react-router";
import CounterContextProvider from "./Context/CounterContext";
import UserContextProvider from "./Context/UserContext";
import router from "./router";

function App() {

  return (
    <>
      <UserContextProvider>
        <CounterContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </CounterContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
