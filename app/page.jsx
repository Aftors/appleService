import React from 'react'
import Header from '@/app/components/header/Header'
import classes from '@/app/page.module.scss'
import Baner from '@/app/components/baner/baner'
import Price from '@/app/components/price/Price'
import { AllPrice , PriceByType} from './components/api/api'
import MapContainer from './components/map/MapContainer'
import FooterBox from './components/footer/FooterBox'

const Page = async () => {


  const allPrice = await AllPrice()
  const iphoneData = await PriceByType('iphone')
  const macbookData = await PriceByType('macbook')
  const ipadData = await PriceByType('ipad')
  

  return (
    <div className={classes.page}>
      <Header/>
      <Baner/>
      <Price 
      data = {allPrice} 
      iphoneData = {iphoneData}
      macbookData = {macbookData}
      ipadData = {ipadData}
      />
      <MapContainer/>
      <FooterBox/>
    </div>
  )
}

export default Page
