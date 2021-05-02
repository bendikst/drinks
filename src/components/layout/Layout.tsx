import React, { useState } from "react";
import TopBar from "./TopBar";
import MenuDrawer from "./MenuDrawer";


const Layout: React.FC = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
    
    return (
    <>
        <TopBar toggleVisibility={toggleVisibility}/>
        <MenuDrawer isVisible={isVisible} toggleVisibility={toggleVisibility}/>
        {children}
    </>
    )
}



export default Layout;