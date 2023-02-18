import { json } from "@remix-run/cloudflare"; 
import { useLoaderData } from "@remix-run/react";


export const loader = async ({
  context,
  params,
}) => {
  return json(
    {
      products: [],
    }
  );
};


export default function Product() {
  const product = useLoaderData();
  
  if (!product) throw new Response(null, { status: 404 })
  
  return (
    <div>
      <p>Product</p>
      <p>Products</p>
    </div>
  );
}