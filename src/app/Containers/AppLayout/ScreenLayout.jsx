import React, { useEffect } from 'react';

import { screenLayoutStyles } from './Styles';
import { DynamicContentRenderer as getDynamicContent} from '../../../Internals/Router';

const ScreenLayout = (props) => {
  const classes = screenLayoutStyles();

  const { content, contentData } = props;

  console.log('SCREEN LAYOUT', content);

  const DynamicContentRenderer = () => {
    return getDynamicContent(content, contentData);
  };

  return (
    <>
      <section className={classes.root}>
        <div className={classes.container}>
          <DynamicContentRenderer />
        </div>
      </section>
    </>
  );
};

export default ScreenLayout;
