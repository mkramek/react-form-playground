import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "./FormTextField.module.scss";
import { useEffect, useRef } from "react";

export default function FormTextField({ type, defaultValue, label }) {
  const elementId = nanoid();
  const inputRef = useRef();

  const numRef = useRef(0);

  useEffect(() => {
    console.log(`Identyfikator dla pola "${label}": ${inputRef.current.id}`);
    console.log(`Wartość numRef: ${numRef.current}`);
    numRef.current = 10;
    console.log(`Wartość numRef po zmianie: ${numRef.current}`);
  }, [label]);

  return (
    <div className={styles.field}>
      <label htmlFor={elementId}>{label}</label>
      <input ref={inputRef} className={styles.input} id={elementId} type={type} placeholder={defaultValue} />
    </div>
  );
}

FormTextField.propTypes = {
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
};
