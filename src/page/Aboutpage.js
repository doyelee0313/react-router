import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {

    //어떤 함수 내에서 왔다갔다 기능을 구현해야한다 -> navigate 사용하기
    const navigate = useNavigate()

    const goToHomepage = () => {
        navigate("/");
    }

  return (
    <div>
        <h1>Aboutpage</h1>
        <button onClick={goToHomepage}>go to homepage</button>
    </div>
  )
}

export default Aboutpage