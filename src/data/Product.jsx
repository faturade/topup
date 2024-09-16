import ml2 from '../assets/image/ml2.jpeg'
import ff from '../assets/image/ff.png'
import ffmax from '../assets/image/ffmax.webp'
import pubg from '../assets/image/pubg.webp'
import hok from '../assets/image/hok.webp'
import hsr from '../assets/image/hsr.webp'
import kc from '../assets/image/kc.webp'
import one from '../assets/image/one.webp'
import bgml from '../assets/image/bg-ml.webp'
export const trendingProducts = [
  {
    id: 1,
    name: 'Mobile Legends',
    description: 'Game MOBA populer',
    image: ml2,
    price: 'IDR 100,000',
    background: bgml, 
    specifications: [
      { key: 'Publisher', value: 'Moonton' },
      { key: 'Platform', value: 'Mobile' },
      { key: 'Genre', value: 'MOBA' }
    ],
    reviews: [
      { user: 'Alice', comment: 'Game yang sangat menyenangkan!', rating: 5 },
      { user: 'Bob', comment: 'Penuh aksi dan strategi.', rating: 4 }
    ]
  },
    {
      id: 3,
      name: 'Free Fire',
      description: 'Garena',
      image: ff,
    },
    {
      id: 5,
      name: 'Free Fire Max',
      description: 'Garena',
      image: ffmax,
    },
    {
      id: 2,
      name: 'PUBG Mobile',
      description: 'Tencent Games',
      image: pubg,
    },
    {
      id: 4,
      name: 'Honor Of Kings',
      description: 'Tencent Games',
      image: hok,
    },
    {
      id: 6,
      name: 'One Punch Man',
      description: 'FingerFun',
      image: one,
    },
    {
      id: 7,
      name: 'Honkai Star Rail',
      description: 'Mihoyo',
      image: hsr,
    },
    {
      id: 8,
      name: 'Kings Choice',
      description: 'ONEMT',
      image: kc,
    },
    // Tambahkan lebih banyak produk sesuai kebutuhan
  ];
  