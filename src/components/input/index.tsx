import { useState } from 'react';

export interface InputProps {
  fieldName: string;
  type: string;
  required: boolean;
  pattern: string;
  errorMessage: string;
  placeholder: string;
}
const Input = ({
  fieldName,
  type,
  required,
  pattern,
  errorMessage,
  placeholder,
}: InputProps) => {
  const [value, setFieldValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const handleValidation = () => {
    if (value.toString().length > 2 && !value.toString().match(pattern)) {
      setIsValid(false);
    } else setIsValid(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const userValue = e.target.value;
    handleValidation();
    setFieldValue(userValue);
  };
  return (
    <div>
      <label htmlFor={fieldName}>{fieldName} (required): </label>
      <input
        role='input'
        type={type}
        name={fieldName}
        id={fieldName}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        onBlur={handleValidation}
        pattern={pattern}
        required
        aria-required={required}
      />
      {!isValid ? <span data-testid='test-span'>{errorMessage}</span> : null}
    </div>
  );
};

export default Input;
