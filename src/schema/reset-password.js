import * as Yup from "yup";

const resetPasswordSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    newPassword: Yup.string()
        .required("Password is required")
        .matches(/^[0-9a-zA-Z]{3,9}$/, "Password is not valid"),
});

export default resetPasswordSchema;
