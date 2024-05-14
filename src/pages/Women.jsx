import Products from "../components/Products";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../constants/constants";

const Women = () => {
  return (
    <>
      <Products
        products={PRODUCTS.filter(
          (product) => product.category === PRODUCT_CATEGORIES.WOMEN
        )}
      />
    </>
  );
};

export default Women;
