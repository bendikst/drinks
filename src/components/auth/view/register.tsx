import React, { useState } from 'react';
import { Link } from 'react-navi';
import AuthFormWrapper from './AuthFormWrapper';
import { AuthForm, Input, FormButton, ErrorParagraph, FooterParagraph, TopContainer, TopSentence } from './AuthComponents';

const RegisterPage = () => {
    
    const [{username, password, repeatPassword}, setRegisterData] = useState({
        username: '',
        password: '',
        repeatPassword: ''
    })

    const [error, setError] = useState('')

    const register = async (event: React.FormEvent) => {
        event.preventDefault();
        if (password === repeatPassword) {
            //perform API call to set new user

            const response = {
                data: "success",
                error: "No API"
            }
    
            if (response && response.error) {
                setError(response.error)
            }
        } else {
            setError("Password and repeatPassword must match.")
        }

    }

    return (
        <AuthFormWrapper footer={<FooterParagraph>
            Already registered? <Link href='/login'>Login here</Link>
        </FooterParagraph>}>
            <TopContainer>
                <TopSentence>Register new user</TopSentence>
            </TopContainer>
            <AuthForm onSubmit={register}>
                <label htmlFor='username'>Username</label>
                <Input
                    value = {username}
                    name = "username"
                    onChange ={ (event) => 
                        setRegisterData({
                            username: event.target.value,
                            password,
                            repeatPassword
                        })
                    }
                />
                <label htmlFor='password'>Password</label>
                <Input
                    value = {password}
                    name = "username"
                    type = "password"
                    onChange ={ (event) => 
                        setRegisterData({
                            username: username,
                            password: event.target.value,
                            repeatPassword
                        })
                    }
                />
                <label htmlFor='repeatPassword'>Repeat password</label>
                <Input
                    value = {repeatPassword}
                    name = "repeatpassword"
                    type = "password"
                    onChange ={ (event) => 
                        setRegisterData({
                            username: username,
                            password: password,
                            repeatPassword: event.target.value
                        })
                    }
                />
                <FormButton type='submit'>Register </FormButton>
                {error.length > 0 && <ErrorParagraph>{error}</ErrorParagraph>}

            </AuthForm>
        </AuthFormWrapper>
    )
}

export default RegisterPage;