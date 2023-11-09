'use client';

import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Description() {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Typography variant="subtitle2" align="center">
      2023년 연말 20대 마지막 밤을 맞이하여 귀하의 참석을 요청드립니다.
      {smUp && <br />}
      부디 자리에 참석하여 빛내 주시기를 바랍니다.
    </Typography>
  );
}
