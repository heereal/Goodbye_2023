import { ListItem, ListItemText, Typography } from '@mui/material';

export default function ListItemWithText({ value, label }) {
  const fontSize = 16;

  return (
    <ListItem>
      <ListItemText
        disableTypography
        primary={
          <Typography
            variant="subtitle2"
            sx={{ minWidth: 100, fontSize, fontWeight: 'bold' }}
          >
            {label}
          </Typography>
        }
        secondary={
          <Typography variant="body2" sx={{ fontSize }}>
            {value}
          </Typography>
        }
        sx={{
          display: 'flex',
          flexDirection: 'row',
          my: 0,
        }}
      />
    </ListItem>
  );
}
