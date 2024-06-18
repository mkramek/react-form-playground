import FormContents from "./FormContents";
import PropTypes from "prop-types";

export default function ContactForm() {
  return (
    <form>
      <h1>Formularz kontaktowy</h1>
      <FormContents />
    </form>
  );
}

ContactForm.propTypes = {
  data: PropTypes.any,
};
