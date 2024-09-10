import * as Yup from "yup";

const forgetPasswordSchema = Yup.object().shape({
    email: Yup.string().required().email(),
});

export default forgetPasswordSchema;
