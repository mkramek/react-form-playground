import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "./FormOptions.module.scss";

export default function FormOptions({ query, options, name }) {
  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div>
      {filtered.map((option, idx) => {
        const elementId = nanoid();
        return (
          <div key={idx} className={styles.radio}>
            <label htmlFor={elementId}>{option}</label>
            <input id={elementId} name={name} type="radio" value={option} />
          </div>
        );
      })}
    </div>
  );
}

FormOptions.propTypes = {
  query: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
};
