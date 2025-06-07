import { React, useState } from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../preview-collection/preview-collection";

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <>
      <div className="shop-page">
        {collections
          .filter((item, index) => index < 4)
          .map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
      </div>
    </>
  );
};

export default ShopPage;
