import { List } from '@mui/material';
import ListItemWithText from './ListItemWithText';

const eventList = [
  '파티룸 꾸미기',
  '20대 추모식',
  '장례식 케이크 커팅식',
  '베스트 드레서 / 워스트 드레서 투표',
  '사진 찍기, 게임 등',
];

export default function Description() {
  return (
    <List disablePadding>
      <ListItemWithText label="장소" value="인계동 어딘가의 파티 룸" />
      <ListItemWithText label="날짜" value="2023년 12월 23일 토요일" />
      <ListItemWithText label="시간" value="오후 8시" />
      <ListItemWithText label="드레스 코드" value="장례식 드레스 with Black" />
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
