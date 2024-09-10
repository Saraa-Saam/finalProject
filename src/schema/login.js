import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string()
        .required("Password is required")
        .matches(/^[0-9a-zA-Z]{3,9}$/, "Password is not valid"),
});

export default loginSchema;
