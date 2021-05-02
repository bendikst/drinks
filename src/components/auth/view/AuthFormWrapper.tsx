import React from 'react';
import { AuthWrapper, VioletField, FormWrapper, TopContainer, TopSentence, Separator, FormContainer, BottomContainer } from './AuthComponents';


interface Props {
    footer: JSX.Element;
}

const AuthFormWrapper: React.FC<Props> = ({children, footer}) => (
    <AuthWrapper>
        <VioletField />
        <FormWrapper>
        <TopContainer>
            <TopSentence>Cool app for <b>everything</b></TopSentence>
            <Separator />
        </TopContainer>
        <FormContainer>
            {children}
        </FormContainer>
        <BottomContainer>
            <Separator />
            {footer}
        </BottomContainer>
        </FormWrapper>
    </AuthWrapper>
);

export default AuthFormWrapper;