import { Link } from "react-router-dom";

function ProductCart() {
  const {
    id,
    title,
    brand,
    availablityStatus,
    description,
    category,
    thumbnail,
    price,
    reting,
  } = product;

  return (
    <Link to={`/product/${id}`}>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={thumbnail}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-base">{brand}</h2>
            <h2 className="card-title">{title}</h2>
           
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCart;
