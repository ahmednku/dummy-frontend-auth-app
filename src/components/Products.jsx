import Product from "./Product";
import PropTypes from "prop-types";

const Products = ({ products }) => {
  return (
    <ul className="flex flex-wrap gap-5 overflow-hidden items-start justify-center">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default Products;

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
