import Products from "../components/Products";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../constants/constants";

const Kids = () => {
  return (
    <>
      <Products
        products={PRODUCTS.filter(
          (product) => product.category === PRODUCT_CATEGORIES.KIDS
        )}
      />
    </>
  );
};

export default Kids;
