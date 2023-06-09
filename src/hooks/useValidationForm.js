import {useState, useCallback} from 'react';
import isEmail from 'validator/es/lib/isEmail';
import {message} from '../utils/Constants';

const useValidationForm = () => {
  const {incorrectEmail, incorrectName} = message;
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const {name, value} = input;

    if (name === 'email') {
      if (!isEmail(value)) {
        input.setCustomValidity(incorrectEmail);
      } else {
        input.setCustomValidity('');
      }
    }

    if (name === 'name') {
      if (input.validity.patternMismatch) {
        input.setCustomValidity(incorrectName);
      } else {
        input.setCustomValidity('');
      }
    }

    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: input.validationMessage,
    });
    setIsValid(input.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {values, errors, isValid, handleChange, resetForm, setIsValid};
};

export default useValidationForm;