import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata  = async ({ params, }: Props): Promise<Metadata> => {
  
  const { productId } = params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productId);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};
export default function ProductDetails({ params }: Props) {
  return(
     <>
      <Link href="/products">Products</Link>
      <h1>Product Details {params.productId}</h1>
     </>
    ) 
    
}
