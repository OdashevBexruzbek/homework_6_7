import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";

function Product() {
    const {id} = useParams();
    const {data, setData, error} = useFetch("https://dummyjson.com/products" + id)
  return (
    <>
        {data && <div>{data.title}</div>}
    </>
  )
}

export default Product