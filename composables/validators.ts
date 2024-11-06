import { type AnyObject, Schema, string, bool, object } from 'yup';

const regexEmail = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/

const validators: { [key: string]: Schema<any> } = {
    required: string().required('This field is required'),
    email: string()
        .trim()
        .matches(regexEmail, 'Enter correct email'),
    name: string()
        .test('onlyLetters',
            'Only letters are allowed',
            (value: string | undefined | AnyObject) => {
                let re = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.0-9\/]/
                return (!re.test(value as string))
            }),
    password: string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/(?=.*?[A-Z])/, 'Must contain at least one uppercase letter')
}

const getValidator = (name: string, required = true): any => {
    return required ? validators[name].required('This field is required') : validators[name];
}

export default getValidator