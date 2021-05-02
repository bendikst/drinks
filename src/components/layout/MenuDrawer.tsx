import React from 'react'
import styled from 'styled-components';
import { ColorSet } from '../../resources/colors';


interface isVisibleDiv {
    isVisible: boolean;
}


const MenuDrawerWrapper = styled.div<isVisibleDiv>`
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 12;
    transform: translateX(${props => props.isVisible ? 0 : '-100%'});
    transition: transform 0.15s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
`;

const MenuDrawerOverlay = styled.div<isVisibleDiv>`
    pointer-events: ${props => (props.isVisible ? 'all' : 'none')};
    position: fixed;
    width: 100vw;
    top: 0;
    height: 100%;
    background-color: black;
    opacity: ${props => props.isVisible ? 0.3 : 0};
    z-index: 11;
    transition: opacity 0.15s ease-out;
`;


const MenuTab = styled.div`
    display: flex;
    justify-content: flex-end;
    mergin: 10% 16px;
    align-items: center;
    cursor: pointer;
`;


const MenuLabel = styled.label`
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    color: ${ColorSet.IVORY};
    cursor: pointer;
`;


const MenuIcon = styled.i`
    color: ${ColorSet.BLUE};
    border: 3px solid ${ColorSet.BLUE_GROTTO};
    border-radius: 50%;
    margin-left: 8px;
`;

const MenuList = styled.ul`
    padding: 0;
    list-style: none;

    li:last-child {
        border-bottom: 2px solid ${ColorSet.NEON_GREEN};
    }
`;

const MenuEntry = styled.li`
    font-size: 20px;
    color: ${ColorSet.BLUE};
    cursor: pointer;
    border-top: 2px solid ${ColorSet.BLUE_GROTTO};
    padding: 15% 10%;
    
    &:hover {
        color: ${ColorSet.BLUE_GROTTO}
    }
`;

const LogoutTab = styled(MenuTab)`
    margin-top: auto;  
    i {
        border: none;
    }
`;


interface Props {
    isVisible: boolean;
    toggleVisibility: () => void;
}

const MenuLabels = ["Oblig hamburger meny", "Profile Settings", "Feedback"]


const MenuDrawer: React.FC<Props> = ({isVisible, toggleVisibility}) => (
   <>
    <MenuDrawerWrapper isVisible={isVisible}>
    <MenuTab onClick={toggleVisibility}>
        <MenuLabel>Close</MenuLabel>
        <MenuIcon className="material-icons">close</MenuIcon>
    </MenuTab>
    <MenuList>
        {MenuLabels.map(label => <MenuEntry key={label}>{label}</MenuEntry>)}
    </MenuList>
    <LogoutTab>
        <MenuLabel>Logout</MenuLabel>
        <MenuIcon className="material-icons">exit_to_app</MenuIcon>
    </LogoutTab>
    </MenuDrawerWrapper>
    <MenuDrawerOverlay onClick={toggleVisibility} isVisible={isVisible}/>
   </>
)


export default MenuDrawer;