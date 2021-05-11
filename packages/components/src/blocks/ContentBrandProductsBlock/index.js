import React from 'react';
import { getImages } from '../../commons/utils/func';
import useLibContext from "../../hooks/useLibContext";
import { Container, Typography } from '@naturacosmeticos/natds-web';

const ContentBrandProductsBlock = ({title, styles,brandImage, brand, children}) => {

  const config = useLibContext();

  console.log(config);

  return (
    <Container className={styles['brand-products__container']}>
    <Typography className={styles['brand-products__title']}>
    {title}
    { brandImage && (
      <img
        data-testid='brand-products__img'
        src={getImages(brandImage, config.STATIC_IMAGES)} alt={brand}
        className={styles['brand-products__img']}
      />
    ) }
    </Typography>
    { children }
    </Container>
  );
};

export default ContentBrandProductsBlock;
