import React from "react";


export const DynamicContentRenderer = (content,contentData) =>{

    switch(content)
    {
        case 'Home':
            return <h1> Home</h1> ;

        case 'Database Table':
            return <h1> Database Table </h1> ;

        case 'Users':
            return <h1> Users</h1> ;

        case 'Admin Panel':
            return <h1> Admin Panel</h1> ;

        case 'Settings':
            return <h1> Settings</h1> ;

        case 'Info':
            return <h1> Info</h1> ;

         default :
            return <h1>Error Content </h1>;   
    }
}