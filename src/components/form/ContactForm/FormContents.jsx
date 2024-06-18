import { useFormContext } from "../../context/FormContext";
import FormTextField from "./fields/FormTextField";
import PropTypes from "prop-types";
import styles from "./FormContents.module.scss";
import { useState } from "react";
import FormOptions from "./fields/FormOptions";

export default function FormContents() {
  const [timesSaved, setTimesSaved] = useState(0);
  const [topics, _setTopics] = useState([
    "Pomoc techniczna",
    "Zapytanie ogólne",
    "Księgowość",
    "Administracja",
    "Sekretariat",
    "Forum",
    "Pozostałe",
  ]);
  const [query, setQuery] = useState("");
  const formDefaults = useFormContext();

  const handleQuery = (ev) => {
    setQuery(ev.currentTarget.value);
  };

  const handleSave = () => {
    setTimesSaved((prev) => prev + 1);
  }

  return (
    <div className={styles.form}>
      <FormTextField
        label="Imię"
        type="text"
        defaultValue={formDefaults.firstName}
      />
      <FormTextField
        label="Nazwisko"
        type="text"
        defaultValue={formDefaults.lastName}
      />
      <FormTextField
        label="Telefon"
        type="text"
        defaultValue={formDefaults.phone}
      />
      <FormTextField
        label="Email"
        type="text"
        defaultValue={formDefaults.email}
      />
      <input
        type="text"
        placeholder="Szukaj..."
        value={query}
        onChange={handleQuery}
      />
      <FormOptions options={topics} query={query} name="topic" />
      <button type="submit">Wyślij</button>
      <button type="button" onClick={handleSave}>Zapisz wersję roboczą</button>
      <p>Zapisano {timesSaved} razy</p>
    </div>
  );
}

FormContents.propTypes = {
  data: PropTypes.any,
};
