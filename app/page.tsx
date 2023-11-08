import { Box, Container, Typography } from '@mui/material';
import HappyNewYearImage from '@/public/happy_new_year.png';
import Image from 'next/image';

export default function Page() {
  return (
    <Container
      fixed
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 5,
      }}
    >
      <Typography variant="h3">초대합니다</Typography>
      <Image
        src="/happy_new_year.png"
        width={400}
        height={400}
        quality={100}
        alt="Happy new year"
        style={{ borderRadius: '50%' }}
      />
    </Container>
  );
}
