import Products from "../components/Products";
import { PRODUCTS } from "../constants/constants";

const Home = () => {
  return (
    <>
      <Products products={PRODUCTS} />
    </>
  );
};

export default Home;
