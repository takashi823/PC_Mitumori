import React, { useState } from 'react';

import { Box } from "@mui/material";
import { mitumoriPageStyles } from './MitumoriPage.styles';

import { Header } from "../modules/mitumori/Header";
import { PCPart } from "../modules/mitumori/PCPart";
import { Sumprice } from "../modules/mitumori/SumPrice";

import { PartDetail } from '../modules/mitumori/types';

// 自作PCの見積もりページのメインコンポーネント
export const MitumoriPage = () => {
  // 選択されたPC部品の情報を保持する状態
  const [selectedParts, setSelectedParts] = useState<Record<string, PartDetail | null>>({});

  // 部品が選択された際に呼ばれる関数。選択された部品の情報を状態に追加する
  const handleSelectPart = (partName: string, part: PartDetail) => {
    setSelectedParts(prevParts => ({
      ...prevParts,
      [partName]: part
    }));
  };

  return (
    <Box className="MitumoriPage" sx={mitumoriPageStyles}>
      <Header />
      {/* 各PC部品選択コンポーネント。選択された部品の情報をhandleSelectPartを通じて更新 */}
      <PCPart partName="CPU" onSelectPart={part => handleSelectPart("CPU", part)} />
      <PCPart partName="CPUクーラー" onSelectPart={part => handleSelectPart("CPUクーラー", part)} />
      <PCPart partName="マザーボード" onSelectPart={part => handleSelectPart("マザーボード", part)} />
      <PCPart partName="メモリ" onSelectPart={part => handleSelectPart("メモリ", part)} />
      <PCPart partName="ビデオカード" onSelectPart={part => handleSelectPart("ビデオカード", part)} />
      <PCPart partName="SSD" onSelectPart={part => handleSelectPart("SSD", part)} />
      <PCPart partName="HDD" onSelectPart={part => handleSelectPart("HDD", part)} />
      <PCPart partName="ケース" onSelectPart={part => handleSelectPart("ケース", part)} />
      <PCPart partName="電源" onSelectPart={part => handleSelectPart("電源", part)} />
      <PCPart partName="ケースファン" onSelectPart={part => handleSelectPart("ケースファン", part)} />
      <Sumprice selectedParts={selectedParts} />
    </Box>
  );
};