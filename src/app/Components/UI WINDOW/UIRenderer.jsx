import React, { useEffect } from 'react';
import SideNavbar from '../sideNav/SideNavbar'
import HeaderIndex from '../Header/HeaderIndex'
import ScreenLayout from '../../Containers/App Layout/ScreenLayout';

const UIRenderer = (props) => {
  const {handleMode , mode} = props ;

  const [content, setContent] = React.useState("Home")
  const [contentData, setcontentData] = React.useState({})

  console.log("UI RENDERER" ,content)
  
  return (
  <>
  <SideNavbar setContent={setContent} content={content} />
  <HeaderIndex handleMode={handleMode} mode={mode}/>
  <ScreenLayout content={content} contentData={contentData} />
  </>
    
  )
}

export default UIRenderer;
