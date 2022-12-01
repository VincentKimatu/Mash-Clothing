import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import Button, { ButtonTypeClasses } from '../button/button.component';

import {
  ProductCardContainer,
  Footer,
  NameSpan,
  PriceSpan,
} from './product-card.style.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCArt = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </Footer>
      <Button
        buttonType={ButtonTypeClasses.inverted}
        onClick={addProductToCArt}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
