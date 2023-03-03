export interface InputProps {
    fieldName: string;
    type: string;
    required: boolean;
    pattern: string;
    errorMessage: string;
    placeholder: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleValidation: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isValid: boolean;
}
const Input = ({
    fieldName,
    type,
    required,
    pattern,
    errorMessage,
    placeholder,
    handleChange,
    handleValidation,
    isValid,
    value
}: InputProps) => (
    <div>
        <label htmlFor={fieldName}>{fieldName} (required): </label>
        <input
            role="input"
            type={type}
            name={fieldName}
            id={fieldName}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleValidation}
            pattern={pattern}
            required
            aria-required={required}
        />
        {!isValid ? <span data-testid="test-span">{errorMessage}</span> : null}
    </div>
);

export default Input;
