import { ArrowRight, BriefcaseMedical, LockKeyhole, UserPlus } from "lucide-react";
import "./completeYourProfile.css";
import { useState } from "react";
import { Link , useNavigate } from 'react-router-dom';
 
export default function CompleteYourProfile() {
    const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const date = form.get("date");
        const bloodType = form.get("bloodType");
        const gender = form.get("gender");

        const newErrors = {};

        if(!date)
            newErrors.date = "Please select your date of birth";
        if(!bloodType) 
            newErrors.bloodType = "Please select your blood type";
        if(!gender)
            newErrors.gender = "Please select your gender";

        setErrors(newErrors);

        if(Object.keys(newErrors).length == 0)
            console.log("Profile Submitted");
        else 
            console.log("errors")
        // TODO: Submit data
        let x = true;
        if (x) {
            navigate("/dashboard");
        }
    };

    return (
        <div className="complete-profile">
            {/* Header */}
            <header className="">
                <div className="container flex justify-start gap-3 items-center">
                    < BriefcaseMedical />
                <h2>MediVault</h2>
                </div>
            </header>
            <main>
                <div className="card-container">
                    <div className="card">
                        {/* Icon Part */}
                        <div className="icon-part">
                            <div className="user-plus-icon-container">
                                <UserPlus className="user-plus-icon" />
                            </div>
                        </div>
                        {/* Text Part */}
                        <div className="form-text">
                            <h1>Complete your profile</h1>
                            <p>
                                Your health security is our priority. Providing
                                these details helps us personalize your medical
                                vault experience.
                            </p>
                        </div>

                        {/* Form  */}
                        <form
                            className="flex flex-col gap-y-6"
                            onSubmit={handleSubmit}
                        >

                            {/* Date part */}
                            <div className="date flex flex-col ">
                                <label htmlFor="dateInput" className="mb-2">
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    id="dateInput"
                                    name="date"
                                    max={
                                        new Date()
                                            .toISOString()
                                            .split("T")[0]
                                    }
                                />
                                {errors.date && <p className="error">{errors.date}</p>}
                            </div>

                            {/* Blood Type Part    */}
                            <fieldset className="blood-type flex flex-col ">
                                <legend className="mb-2">Blood Type</legend>

                                <div className="grid gap-2 justify-between">
                                    {bloodTypes.map((type) => (
                                        <div>
                                            <label htmlFor={type}>{type}</label>
                                            <input
                                                type="radio"
                                                id={type}
                                                name="bloodType"
                                                value={type}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {errors.bloodType && <p className="error">{errors.bloodType}</p>}

                            </fieldset>

                            {/* Gender Part  */}
                            <fieldset className="gender flex flex-col ">
                                <legend className="mb-2">Gender</legend>

                                <div className="grid grid-cols-3 items-center">
                                    <div>
                                        <input
                                            type="radio"
                                            id="male"
                                            name="gender"
                                            value="Male"
                                        />
                                        <label htmlFor="male">Male</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="female"
                                            name="gender"
                                            value="Female"
                                        />
                                        <label htmlFor="female">
                                            Female
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="other"
                                            name="gender"
                                            value="Other"
                                        />
                                        <label htmlFor="other">
                                            Other
                                        </label>
                                    </div>
                                </div>
                                {errors.gender && <p className="error">{errors.gender}</p>}
                            </fieldset>

                            {/* Buttons  */}
                            <div>
                                <button
                                    type="submit"
                                    className="complete-button flex items-center gap-3 w-full justify-center"
                                >
                                    Complete Profile
                                    <ArrowRight />
                                </button>

                                <Link to="/dashboard" >
                                <button
                                    type="button"
                                    className="skip-button flex items-center w-full justify-center"
                                >
                                    Skip for Now
                                </button>
                                </Link>
                            </div>
                        </form>

                        {/* Footer Of the Card */}
                        <footer>
                            <hr />

                            <div className="flex">
                                <LockKeyhole className="footer-card-icon" />

                                <p>
                                    Your data is encrypted and stored in your
                                    private vault. Only you and authorized
                                    providers can access this information.
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>
            
            {/* Footer */}
            <footer className="text-center">
                <p className="text-label-sm text-outline-variant">
                    © {new Date().getFullYear()} MediVault Health Systems •
                    Privacy Policy • Security Standards
                </p>
            </footer>
        </div>
    );
}   