import { SxProps, Theme } from '@mui/material';

export const modalStyle: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const partBoxStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: 2,
};

export const partListStyle: SxProps<Theme> = {
  marginBottom: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};