import { useParams } from "react-router-dom";
import { PRODUCTS } from "../constants/constants";

const Product = () => {
  const { id } = useParams();
  const [product] = PRODUCTS.filter((product) => product.id === +id);

  return (
    <>
      <div className="flex gap-10">
        {/* prettier-ignore */}
        <div className="flex flex-col gap-5">
          <img src={product.image} className="w-1/2 object-cover rounded-tl-xl"/>
          <div className="flex items-center justify-between gap-3">
            <img src={product.image} className="w-12 object-cover round aspect-square" />
            <img src={product.image} className="w-12 object-cover round aspect-square" />
            <img src={product.image} className="w-12 object-cover round aspect-square" />
            <img src={product.image} className="w-12 object-cover round aspect-square" />
            <img src={product.image} className="w-12 object-cover round aspect-square" />
          </div>
        </div>
        <div>Right side</div>
      </div>
    </>
  );
};

export default Product;
