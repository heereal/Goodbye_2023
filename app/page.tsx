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
        <Typography variant="subtitle2" align="center">
          2023년 연말 20대 마지막 밤을 맞이하여 귀하의 참석을 요청드립니다.
          <br />
          부디 자리에 참석하여 빛내 주시기를 바랍니다.
        </Typography>
        <List disablePadding>
          <ListItemWithText label="장소" value="인계동 어딘가의 파티 룸" />
          <ListItemWithText label="날짜" value="2023년 12월 23일 토요일" />
          <ListItemWithText label="시간" value="오후 8시" />
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
