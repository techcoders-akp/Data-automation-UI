import React from "react";
import HomeLayout from "../app/Containers/Home";
import DatabaseTableLayout from "../app/Containers/Database Table";
import AdminPanelLayout from "../app/Containers/Admin Panel";
import ErrorContentLayout from "../app/Containers/Error Content";
import InfoLayout from "../app/Containers/Info";
import SettingsLayout from "../app/Containers/Settings";
import UsersLayout from "../app/Containers/Users";

export const DynamicContentRenderer = (content,contentData) =>{

    switch(content)
    {
        case 'Home':
            return <HomeLayout/>;

        case 'Database Table':
            return <DatabaseTableLayout/> ;

        case 'Users':
            return <UsersLayout/> ;

        case 'Admin Panel':
            return <AdminPanelLayout/> ;

        case 'Settings':
            return <SettingsLayout/> ;

        case 'Info':
            return <InfoLayout/> ;

         default :
            return <ErrorContentLayout/>;   
    }
}