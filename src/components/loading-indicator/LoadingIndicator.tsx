import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Loader } from 'semantic-ui-react';

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      minHeight: '100px',
      position: 'relative',
      pointerEvents: 'none',
    },
    loaderContainer: {
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      bottom: 0,
      content: '',
      cursor: 'wait',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      left: 0,
      pointerEvents: 'none',
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 10,
    },
  })
);

interface LoadingIndicatorProps {
  isActive: boolean;
  children?: React.ReactNode;
  className?: string;
}

const LoadingIndicator: React.FunctionComponent<LoadingIndicatorProps> = ({ children, isActive, className }: LoadingIndicatorProps) => {
  const classes = useStyles();
  const cssClasses = classNames(className, {
    [classes.wrapper]: isActive,
  });

  return (
    <div className={cssClasses}>
      {isActive && (
        <div className={classes.loaderContainer}>
          <Loader content="Loading" active={true} inverted={true} size="huge" />
        </div>
      )}
      {children}
    </div>
  );
};

export default LoadingIndicator;
