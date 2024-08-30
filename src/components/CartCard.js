import { useDispatch } from "react-redux/es/exports";
import { remove } from "../store/cartSlice";


const CartCard = ({product}) => {
    const {name, price, image} = product;
    const dispatch = useDispatch();
  return (
    <div className="cartCard flex justify-between items-center shadow-md rounded my-7 mx-2.5 p-2.5">
      <img className="w-36 h-24 mr-2.5" src={image} alt={image} />
      <p className="productName w-85 mr-2.5">{name}</p>
      <p className="productPrice w-24 mr-2.5">${price}</p>
      <button onClick={() => dispatch(remove(product))} className="border-0 bg-red-700 text-white rounded py-1 px-2.5 cursor-pointer hover:bg-red-900">Remove</button>
    </div>
  )
}

export  {CartCard}
