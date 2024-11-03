import type { Form, FormField, FormFields } from "~/types/types"

const processFormField = async (field: FormField) => {
    try {
        await field.validator.validate(field.value)
        field.error = ''
    } catch (error: any) {
        field.error = error?.message
    }
}

const isFormValid = async (formFields: FormFields) => {
    let errorsCount = 0
    for (let field in formFields) {
        try {
            await formFields[field].validator.validate(formFields[field].value)
        } catch (error: any) {
            formFields[field].error = error.message
            errorsCount++
        }
    }
    if (errorsCount === 0) {
        return true
    } else {
        return false
    }
}

const resetFields = (formFields: FormFields) => {
    for (let field in formFields) {
        formFields[field].value = null
        formFields[field].error = ''
    }
}

const sendForm = async (form: Form) => {
    try {
        const res: { message: string } = await $fetch(form.url, {
            method: form.method,
            ...form.body && { body: form.body }
        })
        return res?.message
    } catch (error: any) {
        return error?.message
    }
}

export {
    processFormField,
    isFormValid,
    sendForm,
    resetFields
}