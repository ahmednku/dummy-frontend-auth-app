import Products from "../components/Products";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../constants/constants";

const Men = () => {
  return (
    <>
      <Products
        products={PRODUCTS.filter(
          (product) => product.category === PRODUCT_CATEGORIES.MEN
        )}
      />
    </>
  );
};

export default Men;
