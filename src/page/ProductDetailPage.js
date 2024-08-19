import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
    //useParam 이용하면 url의 id 값을 가져올 수 있다
    const {id} = useParams();
    // const params = useParams();
    //object 가 반환되는데 id의 값으로 들어온다, 
    // console.log(params); 
  return (
    <div>ProductDetailPage{id}</div>
  )
}

export default ProductDetailPage