import { Box, SxProps, Theme } from "@mui/material";

export const Header = () => {
  return (
    <Box className="Header" sx={sx}>
      PC見積もりサイト
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header" : {
    width: "100%",
    display: "flex",          // flexコンテナに設定
    justifyContent: "center", // 中央寄せ
  },
};