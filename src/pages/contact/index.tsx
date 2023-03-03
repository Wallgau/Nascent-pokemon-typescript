import { useState } from 'react';
import Input from '../../components/input';
import { v4 } from 'uuid';
import Pagination from '../../components/pagination';
import fields from './fieldData';

interface ValuesForm {
    name: string;
    lastname: string;
    phoneNumber: string;
    address: string;
    city: string;
    postalCode: string;
}
const Contact = () => {
    const [values, setValues] = useState({
        name: {
            value: '',
            isValid: true
        },
        lastname: {
            value: '',
            isValid: true
        },
        phoneNumber: {
            value: '',
            isValid: true
        },
        address: {
            value: '',
            isValid: true
        },
        city: {
            value: '',
            isValid: true
        },
        postalCode: {
            value: '',
            isValid: true
        }
    });

    const handleValidation = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: string,
        pattern: string
    ) => {
        e.preventDefault();
        if (
            values[field as keyof ValuesForm].value.toString().length > 2 &&
            !values[field as keyof ValuesForm].value.toString().match(pattern)
        ) {
            setValues({
                ...values,
                [field]: {
                    value: values[field as keyof ValuesForm].value,
                    isValid: false
                }
            });
        } else
            setValues({
                ...values,
                [field]: {
                    value: values[field as keyof ValuesForm].value,
                    isValid: true
                }
            });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: string,
        pattern: string
    ) => {
        e.preventDefault();
        handleValidation(e, field, pattern);
        setValues({
            ...values,
            ...{
                [field]: {
                    value: e.target.value,
                    isValid: values[field as keyof ValuesForm].isValid
                }
            }
        });
    };
    console.log({ values });
    return (
        <>
            <form>
                {fields.map((field) => (
                    <div key={field.fieldName}>
                        <Input
                            fieldName={field.fieldName}
                            type={field.type}
                            required={field.required}
                            pattern={field.pattern}
                            placeholder={field.placeholder}
                            errorMessage={field.errorMessage}
                            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleChange(e, field.fieldName, field.pattern)
                            }
                            handleValidation={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleValidation(e, field.fieldName, field.pattern)
                            }
                            isValid={values[field.fieldName as keyof ValuesForm].isValid}
                            value={values[field.fieldName as keyof ValuesForm].value}
                        />
                    </div>
                ))}
            </form>
            <Pagination
                currentPage={1}
                numberOfPages={3}
                pageLinks={['/contact', '/pokemon', '/review']}
            />
        </>
    );
};

export default Contact;
