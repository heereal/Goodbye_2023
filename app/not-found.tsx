import { Container, Typography } from '@mui/material';

export default function NotFound() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Typography align="center">
        안녕하세요? 반갑습니다.
        <br />
        행복한 2024년 되기를 바랍니다!
      </Typography>
    </Container>
  );
}
