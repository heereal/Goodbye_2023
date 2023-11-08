import { Container, List, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ListItemWithText from './components/ListItemWithText';

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
          src="/happy_new_year.png"
          width={350}
          height={350}
          quality={100}
          alt="Happy new year"
          style={{ borderRadius: '50%' }}
        />
        <Typography variant="h4" sx={{ pt: 2 }}>
          연말 파티에 초대합니다.
        </Typography>
        <List disablePadding>
          <ListItemWithText label="장소" value="인계동 어딘가의 파티 룸" />
          <ListItemWithText label="일시" value="2023년 12월 23일 토요일" />
          <ListItemWithText
            label="드레스 코드"
            value="장례식 드레스 with Black"
          />
          <ListItemWithText
            label="일정"
            value="파티룸 꾸미기, 20대 추모식, 사진 찍기, 게임 등"
          />
        </List>
      </Stack>
    </Container>
  );
}
