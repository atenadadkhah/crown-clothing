import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import './sign-in-form.styles.scss'
import {useState} from "react";

const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }
    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)
        } catch (e) {
            if (e.code === 'auth/wrong-password' || e.code === 'auth/user-not-found') {
                alert('Incorrect email or password!')
            }
            console.error('Error signing in!', e.message)
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <p>Sign in with your email and password</p>
            <form onSubmit={handleSubmit}>
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
                <div className='buttons-container'>
                    <Button type='submit'>Sign in</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;