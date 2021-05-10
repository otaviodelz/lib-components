import React from 'react';
//import GetImages from 'app/lib/images';

import { Container, Typography } from '@naturacosmeticos/natds-web';

const ContentBrandProductsBlock = ({title, styles, children}) => {
  return (
    <Container className={styles['brand-products__container']}>
    <Typography className={styles['brand-products__title']}>
    {title}
    </Typography>
    { children }
    </Container>
  );
};

export default ContentBrandProductsBlock;
