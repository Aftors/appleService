import React from 'react'
import classes from './baner.module.scss'
import Image from 'next/image'
import banerPNG from '@/public/wwdc.jpg'
const Baner = () => {
  return (
    <div className={classes.baner}>
      <Image className={classes.images}
      src={banerPNG}
      alt='apple'
      priority={true}
      />
      </div>
  )
}

export default Baner