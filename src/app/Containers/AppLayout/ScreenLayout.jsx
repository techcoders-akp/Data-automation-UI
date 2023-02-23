
import { screenLayoutStyles } from './Styles';
import { DynamicContentRenderer} from '../../../Internals/Router';

const ScreenLayout = (props) => {
  const classes = screenLayoutStyles();

  const { content, contentData } = props;


  const DynamicContentRender = () => {
    return DynamicContentRenderer(content, contentData);
  };

  return (
    <>
      <section className={classes.root}>
        <div className={classes.container}>
          <DynamicContentRender />
        </div>
      </section>
    </>
  );
};

export default ScreenLayout;
