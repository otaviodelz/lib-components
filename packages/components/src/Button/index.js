import React from 'react';
import {
  Button as DSButton,
  Provider,
  themes,
} from '@naturacosmeticos/natds-web';

import styles from './styles.css';

const Button = ({ label, ...rest }) => {
  return (
    <Provider theme={themes.natura.light}>
      <DSButton className={styles.test} {...rest}>
        {label} test
      </DSButton>
    </Provider>
  );
};

export default Button;
