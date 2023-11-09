import Image from 'next/image';
import { Container, List, Stack, Typography } from '@mui/material';
import { Description, ListItemWithText, Map } from './components';

const eventList = [
  '파티룸 꾸미기',
  '20대 추모식',
  '장례식 케이크 커팅식',
  '베스트 드레서 / 워스트 드레서 투표',
  '사진 찍기, 게임 등',
];

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
          width={350}
          height={350}
          quality={100}
          alt="Happy new year"
          style={{ borderRadius: '50%' }}
        />
        <Typography variant="h5" sx={{ pt: 2 }}>
          연말 파티에 초대합니다.
        </Typography>
        <Description />
        <Map />
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
            align="column"
            children={
              <ul style={{ marginTop: '7px' }}>
                {eventList.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            }
          />
        </List>
      </Stack>
    </Container>
  );
}
