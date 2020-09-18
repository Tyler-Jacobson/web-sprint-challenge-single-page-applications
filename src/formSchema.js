import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('Name is required').min(2, "Name must be at least 2 characters"),
    size: yup.string(),
    instructions: yup.string(),
    pepperoni: yup.string(),
    pineapple: yup.string(),
    olives: yup.string(),
    bacon: yup.string(),
})
