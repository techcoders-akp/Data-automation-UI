import React, { useEffect } from 'react';
import SideNavbar from '../sideNav/SideNavbar';
import HeaderIndex from '../Header/HeaderIndex';
import LogInComponent from '../../Containers/Authentication/LogIn/Index';
import ScreenLayout from '../../Containers/AppLayout/ScreenLayout';

const UIRenderer = (props) => {
  const { handleMode, mode } = props;

  const [content, setContent] = React.useState('Home');
  const [contentData, setcontentData] = React.useState({});

  console.log('UI RENDERER', content);

  const auth = false;

  return (
    <>
      {!auth && (
        <>
          <SideNavbar setContent={setContent} content={content} />
          <HeaderIndex handleMode={handleMode} mode={mode} />
          <ScreenLayout content={content} contentData={contentData} />
        </>
      )}
      
      { auth && <LogInComponent /> }
    </>
  );
};

export default UIRenderer;
