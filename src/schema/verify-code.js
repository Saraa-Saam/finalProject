import * as Yup from "yup";

const verifyCodeSchema = Yup.object().shape({
    resetCode: Yup.string().required().length(6),
});

export default verifyCodeSchema;
