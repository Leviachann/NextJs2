import { useRouter } from "next/router";

const ProductDetails = () => {
    const router = useRouter(query);
    return (
      <div>
        <h1>ProductDetails- {query.productId}</h1>
      </div>
    );
  }
  
  export default ProductDetails;
  