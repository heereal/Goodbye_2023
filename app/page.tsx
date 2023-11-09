import { Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Description, Map, Subtitle } from './components';

export default function Page() {
  return (
    <Container fixed maxWidth="sm" sx={{ py: 5 }}>
      <Stack
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          priority
          src="/happy_new_year.png"
          width={300}
          height={300}
          quality={100}
          alt="Happy new year"
          style={{ borderRadius: '50%' }}
        />
        <Typography variant="h5" sx={{ pt: 2 }}>
          ✨연말 파티에 초대합니다.
        </Typography>
        <Subtitle />
        <Map />
        <Description />
      </Stack>
    </Container>
  );
}
