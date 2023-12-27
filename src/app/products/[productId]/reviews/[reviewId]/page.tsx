import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: { 
    reviewId: string;
    productId:string;
};
}) {
    if(parseInt(params.reviewId )> 100)
    {
        notFound();
    }
  return (
    <h1>
      Review {params.reviewId} For Product {params.productId}
    </h1>
  );
}
