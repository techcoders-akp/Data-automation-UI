import React, { useEffect } from 'react';

import { screenLayoutStyles } from './Styles';
import { DynamicContentRenderer } from '../../../Internals/Router';

const ScreenLayout = (props) => {
  const { content, contentData } = props;


  console.log('SCREEN LAYOUT', content);

  const classes = screenLayoutStyles();
  return (
    <>
      <section className={classes.root}>
        <div className={classes.container}>
          {DynamicContentRenderer(content, contentData)}
        </div>
      </section>
    </>
  );
};

export default ScreenLayout;
