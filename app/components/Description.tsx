import { List } from '@mui/material';
import ListItemWithText from './ListItemWithText';

const eventList = [
  '파티룸 꾸미기',
  '케이크 커팅식',
  '랜덤 선물 증정식',
  '사진 찍기',
  '보드게임 및 방방 타기',
];

export default function Description() {
  return (
    <List disablePadding>
      <ListItemWithText
        label="장소"
        value="위즈파티룸"
        caption="경기도 수원시 영통구 매영로 424, 지하1층"
      />
      <ListItemWithText label="날짜" value="2023년 12월 23일 토요일" />
      <ListItemWithText label="시간" value="오후 8시" />
      <ListItemWithText label="드레스 코드" value="특이한 옷 입기" />
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
