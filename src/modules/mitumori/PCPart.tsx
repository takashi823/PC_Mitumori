import React, { useState } from 'react';
import { Box, Typography, Button, Modal, Grid } from '@mui/material';
import { modalStyle, partBoxStyle, partListStyle } from './PCPart.styles';
import { PartDetail, PCPartProps } from './types';
import { PCPartsData } from './PCPartsData';

  // 個々のPC部品を選択するためのコンポーネント
  export const PCPart = ({ partName, onSelectPart }: PCPartProps & { onSelectPart: (part: PartDetail) => void }) => {
    // モーダルの開閉状態を管理するための状態
    const [isModalOpen, setModalOpen] = useState(false);
    // 選択された部品を管理するための状態
    const [selectedPart, setSelectedPart] = useState<PartDetail | null>(null);
  
    // モーダルを開くための関数
    const openModal = () => {
      setModalOpen(true);
    };
  
    // モーダルを閉じるための関数
    const closeModal = () => {
      setModalOpen(false);
    };
  
    // 部品を選択するための関数。選択された部品を状態に設定し、親コンポーネントに通知
    const selectPart = (part: PartDetail) => {
      setSelectedPart(part);
      onSelectPart(part);
      closeModal();
    };
  
    return (
      <>
        {/* <Box sx={partBoxStyle}>
          <Typography variant="subtitle1">{partName}</Typography>
          <Typography variant="subtitle1">
            {selectedPart ? `${selectedPart.price}円` : '0円'}
          </Typography>
          <Button variant="outlined" onClick={openModal}>
            パーツを選択してください
          </Button>
        </Box> */}

        <Grid container sx={partBoxStyle}>
          <Grid item xs={4} sx={{ textAlign: "left"}}>
            <Typography variant='subtitle1'>{partName}</Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center"}}>
            <Typography variant='subtitle1'>
              {selectedPart ? `${selectedPart.price}円` : "0円"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end"}}>
            <Button variant='outlined' onClick={openModal}>
              パーツを選択してください
            </Button>
          </Grid>
        </Grid>
  
        <Modal open={isModalOpen} onClose={closeModal}>
          <Box sx={modalStyle}>
            {PCPartsData[partName].map((part, index) => (
              <Box key={index} sx={partListStyle}>
                <Typography variant="subtitle1">
                  {part.name} - {part.price}円
                </Typography>
                <Button variant="outlined" onClick={() => selectPart(part)}>
                  選択
                </Button>
              </Box>
            ))}
          </Box>
        </Modal>
      </>
    );
  };