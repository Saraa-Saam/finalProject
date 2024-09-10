import * as Yup from "yup";

const registerSchema = Yup.object().shape({
    name: Yup.string().required().min(2),
    email: Yup.string().required().email(),
    password: Yup.string()
        .required("Password is required")
        .matches(/^[0-9a-zA-Z]{3,9}$/, "Password is not valid"),
    rePassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), "rePassword does not match password"]),
    phone: Yup.string()
        .required()
        .matches(/^01[0-25][0-9]{8}$/, "phone number is not valid"),
});

export default registerSchema;
