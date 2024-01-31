import { PartsData } from './types';

// PC部品のデータ
export const PCPartsData: PartsData = {
  CPU: [
    { name: 'Intel Core i9-11900K', price: 54000 },
    { name: 'AMD Ryzen 9 5900X', price: 60000 },
    { name: 'Intel Core i7-11700K', price: 40000 },
  ],
  CPUクーラー: [
    { name: 'Noctua NH-D15', price: 10000 },
    { name: 'Cooler Master Hyper 212', price: 5000 },
    { name: 'Corsair H100i', price: 12000 },
  ],
  マザーボード: [
    { name: 'ASUS ROG Maximus XIII Hero', price: 45000 },
    { name: 'MSI MAG B560 Tomahawk', price: 20000 },
    { name: 'Gigabyte Z590 AORUS ELITE', price: 25000 },
  ],
  メモリ: [
    { name: 'Corsair Vengeance LPX 16GB', price: 8500 },
    { name: 'G.Skill Trident Z RGB 32GB', price: 16000 },
    { name: 'Kingston HyperX Predator 16GB', price: 7500 },
  ],
  ビデオカード: [
    { name: 'NVIDIA RTX 3080', price: 120000 },
    { name: 'AMD Radeon RX 6800 XT', price: 100000 },
    { name: 'NVIDIA RTX 3070', price: 70000 },
  ],
  SSD: [
    { name: 'Samsung 970 EVO Plus 1TB', price: 15000 },
    { name: 'Crucial MX500 1TB', price: 12000 },
    { name: 'WD Blue SN550 1TB', price: 10000 },
  ],
  HDD: [
    { name: 'Seagate BarraCuda 2TB', price: 6000 },
    { name: 'WD Blue 1TB', price: 4500 },
    { name: 'Toshiba P300 3TB', price: 8000 },
    ],
    ケース: [
    { name: 'NZXT H510', price: 9000 },
    { name: 'Corsair 4000D Airflow', price: 11000 },
    { name: 'Phanteks Eclipse P300A', price: 7000 },
    ],
    電源: [
    { name: 'Corsair RM750x', price: 12000 },
    { name: 'EVGA SuperNOVA 650 G5', price: 10000 },
    { name: 'Seasonic FOCUS GX-550', price: 8000 },
    ],
    ケースファン: [
    { name: 'Noctua NF-A12x25', price: 3000 },
    { name: 'Be Quiet! Silent Wings 3', price: 2500 },
    { name: 'Corsair LL120 RGB', price: 4000 },
    ],
};
