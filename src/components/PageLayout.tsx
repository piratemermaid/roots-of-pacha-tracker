import React from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function PageLayout({ title, children }: Props) {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
