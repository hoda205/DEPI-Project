import { Mail, ArrowRight, ArrowLeft, BriefcaseMedical, LockKeyhole, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        const newError = {};
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");

        if (!email)
            newError.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) {
            newError.email = "Invalid email format";
        }

        setErrors(newError);

        if (Object.keys(newError).length === 0) {
            console.log("Valid Email:", email);
        }
        else
            console.log(newError.email);
    }

    return (
        <div className="forget-pass min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">

            <main className="w-full max-w-md bg-white rounded-2xl shadow-lg border p-8">

                {/* Logo */}
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                        <BriefcaseMedical className="w-8 h-8 text-blue-600" />
                    </div>

                    <h1 className="text-3xl font-bold   text-blue-600">
                        MediVault
                    </h1>

                    <p className="text-gray-500 mt-2 max-w-xs">
                        Reliable health records, secured and accessible when you need them.
                    </p>
                </div>

                {/* Header */}
                <h2 className="text-2xl font-semibold mb-4">
                    Forgot Password
                </h2>

                <p className="text-gray-500 mb-8">
                    Enter the email address associated with your medical vault and
                    we'll send a secure reset link.
                </p>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit} action="">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-gray-600"
                        >
                            Email Address
                        </label>

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                            <input
                                id="email"
                                type="text"
                                name="email"
                                placeholder="e.g. patient@email.com"
                                className="w-full h-12 pl-12 pr-4 border rounded-lg outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                            />
                        </div>
                        {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email}</p>)}
                    </div>
                    <button
                        type="submit"
                        className="w-full h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center cursor-pointer gap-2 hover:bg-blue-700 transition"
                    >
                        Send Reset Link
                        <ArrowRight size={18} />
                    </button>

                    <Link to="/signin">
                    <button
                        type="button"
                        className="w-full text-blue-600 flex items-center justify-center gap-2 hover:underline cursor-pointer"
                    >
                        <ArrowLeft size={18} />
                        Back to Login
                    </button>
                    </Link>
                </form>
            </main>

            <footer className="flex flex-row gap-x-3 items-center mt-8 text-center text-sm text-gray-400">
                <LockKeyhole className="w-4 h-4" /> <span> HIPAA Compliant Security |</span> <ShieldCheck className="w-4 h-4" /> <span>256-bit AES Encryption</span>
            </footer>
        </div>
    );
}

export default ForgotPassword;