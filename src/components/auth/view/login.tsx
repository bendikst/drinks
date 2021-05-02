import React, { useState } from 'react';
import { Link, useNavigation } from 'react-navi';
import { onLogin } from '../controller/authAPI';
import { AuthForm, FooterParagraph, Input, FormButton, ErrorParagraph } from './AuthComponents';
import AuthFormWrapper from './AuthFormWrapper';

const LoginPage = () => {
    const navigation = useNavigation();
    const [{username, password}, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState('');
    
    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log("login");
        const response = await onLogin({
            username,
            password
        })

        if (response) {
            navigation.navigate('/');
        } else {
            setError('Invalid username or password.')
        }
    }

    return (
        <AuthFormWrapper footer = {<FooterParagraph>New user? <Link href='/register'>Sign up</Link></FooterParagraph>}>
            <AuthForm onSubmit={login}>
                <label htmlFor="username">Username</label>
                <Input placeholder="Username" value={username} onChange={(event) => setCredentials({
                    username: event.target.value,
                    password
                })}/>
                <label htmlFor="password">Password</label>
                <Input placeholder="Password" type="password" value={password} onChange={(event) => setCredentials({
                    username,
                    password: event.target.value
                })} />
                <FormButton type="submit">Login</FormButton>
                {error.length > 0 && <ErrorParagraph>{error}<i className="material-icons">error</i></ErrorParagraph>}
            </AuthForm>
        </AuthFormWrapper>  
    )
}

export default LoginPage;