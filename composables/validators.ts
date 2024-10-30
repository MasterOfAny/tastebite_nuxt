import { type AnyObject, Schema, string, bool, object } from 'yup';

const regexEmail = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/

const validators: { [key: string]: Schema<any> } = {
    required: string().required('This field is required'),
    email: string()
        .required('This field is required')
        .trim()
        .matches(regexEmail, 'Enter correct email'),

}

const getValidator = (name: string): any => {
    return validators[name]
}

export default getValidator