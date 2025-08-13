import { useSelector } from "react-redux";
// Styles
import * as Styles from "./styles";

import CartItem from '../cart-item'
import { selectProductsTotalPrice } from "../../redux/Cart/cart.seletors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products }=  useSelector(rootReducer => rootReducer.cartReducer);

  const productsTotalPrice = useSelector(selectProductsTotalPrice)
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>
          Seu Carrinho
          <Styles.CartTotal>R${productsTotalPrice}</Styles.CartTotal>
        </Styles.CartTitle>
        
        {products.map((product) => (
          <CartItem product={product} />
        ))}

        
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
