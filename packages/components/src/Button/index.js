import React from 'react';
import { Button as DSButton } from '@naturacosmeticos/natds-web';

const Button = ({ label, ...rest }) => {
  return <DSButton {...rest}>{label}</DSButton>;
};

export default Button;
