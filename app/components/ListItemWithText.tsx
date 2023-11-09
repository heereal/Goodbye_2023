import { ListItem, ListItemText, Typography } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  label: string;
  value?: string;
  children?: ReactNode;
  align?: 'column' | 'row';
};

export default function ListItemWithText({
  label,
  value,
  children,
  align = 'row',
}: Props) {
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
          children || (
            <Typography variant="body2" sx={{ fontSize }}>
              {value}
            </Typography>
          )
        }
        sx={{
          display: 'flex',
          flexDirection: align,
          my: 0,
        }}
      />
    </ListItem>
  );
}
