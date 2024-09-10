import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyResetCodeApi } from "../../api";
import verifyCodeSchema from "../../schema/verify-code";

export default function VerifyCode() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleVerifyCode = (values) => {
        setIsLoading(true);
        verifyResetCodeApi(values)
            .then((data) => {
                if (data.data.status === "Success") {
                    setIsLoading(false);
                    navigate("/reset-password");
                }
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error.response.data.message);
            });
    };

    const formik = useFormik({
        initialValues: {
            resetCode: "",
        },
        // validate:validateAllInputs,
        validationSchema: verifyCodeSchema,
        onSubmit: handleVerifyCode,
    });
    return (
        <>
            <div className="container">
                <div className="w-3/4 mx-auto py-32">
                    <h3 className="text-2xl font-semibold text-green-500">Reset your account password :</h3>
                    <form className="my-3" onSubmit={formik.handleSubmit}>
                        {error && <div className="bg-red-200">{error}</div>}
                        <div className="relative my-5">
                            <input
                                type="text"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                name="resetCode"
                                id="resetCode"
                                placeholder=""
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.resetCode}
                            />
                            <label
                                htmlFor="resetCode"
                                className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                Code
                            </label>
                            {formik.errors.resetCode && formik.touched.resetCode && (
                                <span className="text-red-400">
                                    {formik.errors.resetCode}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            {isLoading ? "loading..." : "verify"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
