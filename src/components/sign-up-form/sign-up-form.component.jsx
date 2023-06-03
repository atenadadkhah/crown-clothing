import {useState} from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import {SignUpContainer} from "./sign-up-form.styles";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("passwords do not match")
            return
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use!')
            }
            console.error('Error signing up!', e.message)
        }

    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    required
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                />

                <FormInput
                    label='Email'
                    required
                    type="email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                />

                <FormInput
                    label='Password'
                    required
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                />

                <FormInput
                    label='Confirm Password'
                    required
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <Button>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;