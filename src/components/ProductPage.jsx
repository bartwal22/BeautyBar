import React from "react";
import ProductComp1 from "./ProductComp1";
import Shop1 from "./Shop1";
import { ProductsReview } from "./ProductsReview";
import NewArrivals from "./NewArrivals";
export default function ProductPage() {
  return (
    <div>
      <ProductComp1 />
      <Shop1 />
      <ProductsReview />
      <NewArrivals />
    </div>
  );
}
