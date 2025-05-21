import React from "react";
import { WishlistComp1 } from "./WishlistComp1";
import NewArrivals from "./NewArrivals";
import WishDisplay from "./WishDisplay";

export default function Wishlist() {
  return (
    <div>
      <WishlistComp1 />
      <WishDisplay />
      <NewArrivals />
    </div>
  );
}
