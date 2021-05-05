import React from "react";
import styled from "styled-components";
import { ColorSet } from '../../resources/colors';

const TopBarWrapper = styled.header`
    display: flex;
    padding: 1em 1em;
    align-items: center;
    justify-content: space-between;
    background-color: ${ColorSet.TOP};

    i {
        cursor: pointer;
        font-size: 2em;
        color: white;
        margin-right: 16px;
        &:hover {
            color: ${ColorSet.ACCENT}
        }
    }
`;

const MenuButton = styled.button`
    background-color: transparent;
    width: 3rem;
    height: 3rem;
    outline: none;
    cursor: pointer;
    border: none;
`;


const MenuToggle = styled.span`
    display: block;
    width: 2rem;
    height: 2px;
    background-color: white;
    border-radius: 3px;
    background-color: ${ColorSet.ICON};
    position: relative;
    margin: auto;
    

    &::after, &::before {
        background-color: inherit;
        height: inherit;
        width: inherit;
        content: "";
        position: absolute;
        border-radius: inherit;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
    }

    &::after {
        top: 1.25rem;
    }

    &::before {
        top: -1.25rem;
    }
`;
 
interface Props {
    toggleVisibility: () => void;
}

const TopBar: React.FC<Props> = ({toggleVisibility}) => (
    <TopBarWrapper>
        <MenuButton onClick={toggleVisibility}>
            <MenuToggle />
        </MenuButton>
        <div>
        <i className="material-icons">search</i>
            <i className="material-icons">account_circle</i>
        </div>

    </TopBarWrapper>
)


export default TopBar;