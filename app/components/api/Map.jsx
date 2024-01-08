"use client"
import React, { useRef, useState } from "react";
import classes from './map.module.scss'
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapListener,
  YMapFeature,
  YMapCollection,
  YMapControls,
  YMapGeolocationControl,
  YMapZoomControl,
  YMapHint,
  YMapDefaultMarker,
  YMapContainer,
  YMapControlButton,
} from "ymap3-components";
import { location as LOCATION, apiKey } from "./helpers";


function MapYandex() {
  const [location, setLocation] = useState(LOCATION);
  const ymap3Ref = useRef();

  return (
      <div className={classes.map_container}>
        <YMapComponentsProvider apiKey={apiKey} lang="ru_RU">
          <YMap
            key="map"
            ref={ymap3Ref}
            location={location}
            mode="vector"
            behaviors={['drag']}>
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer/>
          </YMap>
        </YMapComponentsProvider>
      </div>
  )
}

export default MapYandex;
