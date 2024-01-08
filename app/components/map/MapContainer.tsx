import React from 'react'
import MapYandex from '../api/Map'
import classes from './map.module.scss'

const MapContainer = () => {
  return (
    <div className={classes.container}>
        <MapYandex/>
    </div>
  )
}

export default MapContainer
