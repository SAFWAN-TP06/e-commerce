import React from 'react'
import Corousel from './_components/Corousel'
import Category from './_components/Category'
import Featurepr from './_components/Featurepr'
import { frontEndHome } from '@/api/Api'

async function homePageApi() {
  const response = await frontEndHome.homepageApi()
  return response.data.data
  // console.log("kadar:",response.data.data)
}

const page = async () => {
  const res = await homePageApi()
  // console.log("hsdff:::::::::;", res)

  const banners = res.banners
  const category = res.categories
  const featurepr = res.featuredProducts
  // console.log("adfdf:::::::::::", banners)

  return (
    <div className='pt-[7.4rem]'>
      <Corousel banners={banners} />
      <Category category={category} />
      <Featurepr featurepr={featurepr} />
    </div>
  )
}

export default page