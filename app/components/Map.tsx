'use client';

import { useMap } from '../hooks';

export default function Map() {
  useMap();

  return <div id="map" style={{ width: '385px', height: '250px' }} />;
}
