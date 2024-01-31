import React from 'react';
import { Box } from "@mui/material";
import { PartDetail } from './types';

// 選択されたPC部品の合計価格を計算する関数
const calculateTotalPrice = (selectedParts: Record<string, PartDetail | null>) => {
  return Object.values(selectedParts).reduce((total, part) => {
    return total + (part ? part.price : 0);
  }, 0);
};

// 合計価格を表示するコンポーネント
export const Sumprice = ({ selectedParts }: { selectedParts: Record<string, PartDetail | null> }) => {
  const totalPrice = calculateTotalPrice(selectedParts);

  return (
    <Box className="Sumprice" sx={sumPriceStyles}>
      {/* 計算された合計価格を表示 */}
      合計: {totalPrice}円
    </Box>
  );
};

// スタイル定義
const sumPriceStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
