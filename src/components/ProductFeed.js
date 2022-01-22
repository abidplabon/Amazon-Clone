import React from 'react';

function ProductFeed({products}) {
  return <div>
       <h1>Product here......</h1>
       {products.map(({id,title,price,description,category,image})=>(
           <p>{title}</p>
       ))}
  </div>;
}

export default ProductFeed;
