export interface PopupAd {
  id: string;
  imagePath: string;
  link: string;
  width: number;
  height: number;
}

export const POPUP_ADS: PopupAd[] = [
  {
    id: 'free-iphone',
    imagePath: '/ads/popup/FreeIphone.jpg',
    link: 'https://scam.com/free-iphone',
    width: 400,
    height: 300
  },
  {
    id: 'lottery-winner',
    imagePath: '/ads/popup/LotteryWinner.jpg',
    link: 'https://scam.com/lottery',
    width: 400,
    height: 300
  },
  {
    id: 'hot-singles',
    imagePath: '/ads/popup/HotSingles.jpg',
    link: 'https://scam.com/dating',
    width: 400,
    height: 300
  },
  {
    id: 'virus-detected',
    imagePath: '/ads/popup/VirusDetected.jpg',
    link: 'https://scam.com/antivirus',
    width: 400,
    height: 300
  },
  {
    id: 'bitcoin-millionaire',
    imagePath: '/ads/popup/BitcoinMillionaire.jpg',
    link: 'https://scam.com/crypto',
    width: 400,
    height: 300
  }
];
