import { useFormik } from "formik";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Context/UserContext";
import { resetPasswordApi } from "../../api";
import resetPasswordSchema from "../../schema/reset-password";

export default function ResetPassword() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { setUserToken } = useContext(userContext);
    const navigate = useNavigate();

    const handleResetPassword = (values) => {
        setIsLoading(true);
        resetPasswordApi(values)
            .then((data) => {
                if (data.status === 200) {
                    setUserToken(data.data.token);
                    localStorage.setItem("userToken", data.data.token);
                    setIsLoading(false);
                    navigate("/");
                }
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error.response.data.message);
            });
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            newPassword: "",
        },
        // validate:validateAllInputs,
        validationSchema: resetPasswordSchema,
        onSubmit: handleResetPassword,
    });
    return (
        <>
            <div className="container">
                <div className="w-3/4 mx-auto py-32">
                    <h3 className="text-2xl font-semibold text-green-500">
                        Reset your account password :
                    </h3>
                    <form className="my-3" onSubmit={formik.handleSubmit}>
                        {error && <div className="bg-red-200">{error}</div>}
                        <div className="relative my-5">
                            <input
                                type="email"
                                id="Email"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                name="email"
                                placeholder=""
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <label
                                htmlFor="Email"
                                className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                Email
                            </label>
                            {formik.errors.email && formik.touched.email && (
                                <span className="text-red-400">
                                    {formik.errors.email}
                                </span>
                            )}
                        </div>
                        <div className="relative my-5">
                            <input
                                type="password"
                                id="newPassword"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                name="newPassword"
                                placeholder=""
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.newPassword}
                            />
                            <label
                                htmlFor="newPassword"
                                className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                password
                            </label>
                            {formik.errors.newPassword &&
                                formik.touched.newPassword && (
                                    <span className="text-red-400">
                                        {formik.errors.newPassword}
                                    </span>
                                )}
                        </div>
                        <button
                            type="submit"
                            className="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            {isLoading ? "loading..." : "Reset Password"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
