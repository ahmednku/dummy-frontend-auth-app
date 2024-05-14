import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <li
      key={product.id}
      className="bg-slate-100 rounded-lg basis-60 grow shrink min-w-52"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full object-cover object-top rounded-tr-lg rounded-t-lg h-1/3 aspect-square cursor-pointer"
        />
      </Link>
      <div className="pt-3 px-3 pb-5">
        <h5 className="text-left mb-2">{product.title}</h5>
        <p className="flex justify-between items-center">
          <span>{product.category}</span>
          <span>{product.price}</span>
        </p>
      </div>
    </li>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Product;
