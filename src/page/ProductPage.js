import React from 'react'
import { useSearchParams } from 'react-router-dom'

function ProductPage() {
    //query 에 있는 값을 가져온다, q = 값을 들고옴
    let [query, setQuery] = useSearchParams();
    console.log(query.get('q'));
  return (
    <div>
        <h1>Show all products!!</h1>
    </div>
  )
}

export default ProductPage