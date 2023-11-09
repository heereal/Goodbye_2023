'use client';

import { useMap } from '../hooks';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Map() {
  useMap();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div id="map" style={{ width: smUp ? '385px' : '100%', height: '250px' }} />
  );
}
