import { BsCartPlus } from "react-icons/bs";
import { UseDispatch, useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";
// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";

// Utilities

const ProductItem = ({ product }) => {
  const dispachar = useDispatch();

  const handleAdicionarProduto = () => {
    dispachar(addProductToCart(product));
  };
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton
          startIcon={<BsCartPlus />}
          onClick={() => handleAdicionarProduto()}
        >
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
