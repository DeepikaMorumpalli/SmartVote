import "./RegisterPage.css"
import { Link } from "react-router-dom"
export default function Welcome() {
    return (
        <>
            <div className="register-main-container">
                <div className="register-container">
                    <h1 className="register-h1">Registration Form</h1>
                    <div className="registration-input">
                        <label htmlFor="name"></label>
                        <input type="text" id='name' placeholder='Your Name' />
                    </div>
                    <div className="registration-input">
                        <label htmlFor="age"></label>
                        <input type="text" id='age' placeholder='Your Age' />
                    </div>
                    <div className="registration-input">
                        <label htmlFor="voterId"></label>
                        <input type="text" id='voterId' placeholder='Your Voter ID' />
                    </div>
                    <div className="registration-input">
                        <label htmlFor="emailId"></label>
                        <input type="text" id='emailId' placeholder='Your Email Id' />
                    </div>
                </div>
                <div className="sign-in-container">
                    <h2>Already have an account?</h2>
                    <button className='sign-in-button'>
                        <Link to={'/login'}>Sign In </Link>
                    </button>
                </div>
            </div>
            
        </>
    )
}