import { List, Typography } from '@mui/material';
import ListItemWithText from './ListItemWithText';

const eventList = [
  '저녁 식사',
  '파티룸 꾸미고 사진 찍기',
  '랜덤 선물 증정식',
  '케이크 커팅식',
  '방방, 노래방, 보드게임',
];

export default function Description() {
  return (
    <List disablePadding>
      <ListItemWithText
        label="장소"
        children={
          <div>
            <Typography variant="body2" sx={{ fontSize: 16 }}>
              위즈파티룸
            </Typography>
            <Typography variant="caption">
              경기도 수원시 영통구 매영로 424, 지하1층
            </Typography>
          </div>
        }
      />
      <ListItemWithText label="날짜" value="2023년 12월 23일 토요일" />
      <ListItemWithText label="시간" value="오후 6시" />
      {/* <ListItemWithText label="드레스 코드" value="편안한 옷" /> */}
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
  );
}
