import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const naviagate = useNavigate()

  return (
    <>
      <div>Home Component</div>
      <button className='btn btn-primary' onClick={ () => naviagate('OrderSummery')}>Place Order</button>
    </>
  )
}
