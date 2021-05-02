import styled from 'styled-components';

const COLOR_PINK = "#f67181";

export const AuthForm = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;

    Input:first-of-type { 
        font-weight: bold;
    }
`;

export const AuthWrapper = styled.main`
    display: flex;
    min-height: 100vh; 
`;

export const VioletField = styled.div`
    flex: 3;
    background-color: #290358;
`;

export const FormWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
`;

//Containers
export const TopContainer = styled.header`

`;

export const BottomContainer = styled.footer`

`;

export const FormContainer = styled.div`

`;

export const TopSentence = styled.p`
    padding: 16 px 32 px;
    text-align: center;
    font-style: italic;
`;

export const Separator = styled.hr`
    height: 3px;
    background-color: ${COLOR_PINK};
`;

export const FooterParagraph = styled.p`
    text-align: center;
    font-height: 500;
    font-size: 10px;
    a {
        color: ${COLOR_PINK};
        font-weight: bold;
        text-decoration: none;
    }
`;


export const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${COLOR_PINK};
    padding: 4px;
    min-width: 300px;
    font-size: 20px;
    margin: 8px 0;
`;


export const FormButton = styled.button`
    font-size: 1.2em;
    background-color: ${COLOR_PINK};
    border: none;
    border-radius: 32px;
    padding: 8px 16px;
    color: white;
    min-width: 250px;
    margin-top: 32px;
`;

export const ErrorParagraph = styled.p`
    font-size: bold;
    font-style: italic;
    min-width: 250px;
    display: flex;
    justify-content: space-around;

    i {
        color: red;
    }
`;