import React from 'react';
import { Button as DSButton } from '@naturacosmeticos/natds-web';

const Button = ({ label, ...rest }) => {
  return <DSButton {...rest}>{label} test</DSButton>;
};

export default Button;
