// 型定義ファイル

// 個々のPC部品の詳細を表す型
export type PartDetail = {
  name: string;
  price: number;
};

// 利用可能なPC部品のデータを表す型
export type PartsData = {
  [key: string]: PartDetail[];
};

// PCPartコンポーネントのプロパティを表す型
export type PCPartProps = {
  partName: string;
  onSelectPart: (part: PartDetail) => void; // 部品が選択されたときに呼び出される関数
};
