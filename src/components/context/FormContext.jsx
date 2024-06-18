import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const defaultContext = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

const FormContext = createContext(defaultContext);

export const useFormContext = () => useContext(FormContext);

export default function FormContextProvider({ children, value }) {
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

FormContextProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any,
};
