import React from 'react';
import { Button as DSButton } from '@naturacosmeticos/natds-web';

import styles from './styles.css';

const Button = ({ label, ...rest }) => {
  return (
    <DSButton className={styles.test} {...rest}>
      {label} test
    </DSButton>
  );
};

export default Button;
