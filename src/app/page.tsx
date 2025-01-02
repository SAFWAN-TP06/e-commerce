import React from 'react'
import Corousel from './_components/Corousel'
import Category from './_components/Category'
import Featurepr from './_components/Featurepr'

const page = () => {
  return (
    <div className='pt-[7.469rem]'>
      <Corousel />
      <Category />
      <Featurepr /> 
    </div>
  )
}

export default page