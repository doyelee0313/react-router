import React from 'react'
import { useNavigate, Link} from "react-router-dom"

const Homepage = () => {
    const naviagte = useNavigate()
    const goProductPage=()=> {
        //?뒤에는 추가적인 정보, 쿼리라고 부름. 뒤에가 아무리 길어도 같은 페이지 보여줌 -> /products로 
        naviagte('/products?q=pants')
    }
  return (
    <div>
        <div>Homepage</div>
        {/* //naviagte hook 필요없이 그냥 어떤 링크로 이동하면 된다 -> link 사용 */}
        <Link to="/about">go to about page</Link>
        <button onClick={goProductPage}>go to product page</button>
    </div>

  )
}

export default Homepage