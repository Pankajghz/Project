import '../styles/OTP.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const OTP = () => {
    document.title = 'Matchup';

    const [form, setForm] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        setForm({});

        setSubmitted(true);
    }


    useEffect(() => {
        if (submitted === true) {
            navigate("/preference");
        }

    }, [submitted, navigate]);

    return (
        <>
            <div id="otp-body">
                <div className="container">
                    <div className="title">One time password</div>
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">O-T-P</span>
                                    <input type="text" name="otp" onChange={handleInputChange} value={form.otp || ''} placeholder="Enter your otp" required />
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default OTP;