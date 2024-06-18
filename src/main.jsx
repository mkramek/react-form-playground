import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import FormContextProvider from "./components/context/FormContext.jsx";

const initialData = {
  firstName: "Jan",
  lastName: "Kowalski",
  phone: "+48512345678",
  email: "jan.kowalski@hotmail.com",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormContextProvider value={initialData}>
      <App />
    </FormContextProvider>
  </React.StrictMode>,
);
