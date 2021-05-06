import React from "react";
import {
  Card,
  CardContent,
  Tag,
  Typography,
  Button,
} from "@naturacosmeticos/natds-web";
import useStyles from "./ProductCard.styles";

const ProductCard = ({ stamp, brand, productName, price }) => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardContent className={styles.content}>
        <Tag size="standard" className={styles.tag}>
          {stamp}
        </Tag>
        <img
          className={styles.image}
          src="https://static.natura.com/sites/default/files/styles/medium/public/products/22560_1_33.jpg?itok=Er2fposX"
        />
        <div className={styles.details}>
          <Typography align="center" variant="subtitle1">
            {brand}
          </Typography>
          <Typography align="center" variant="subtitle1">
            {productName}
          </Typography>
          <Typography align="center" className={styles.price}>
            R$ {price}
          </Typography>
          <Button
            data-testid="productCard-btn"
            color="primary"
            variant="contained"
            className={styles.button}
          >
            COMPRAR
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
