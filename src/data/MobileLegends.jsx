import ml from '../assets/image/ml.jpeg';
import geem from '../assets/image/geem.webp';
import bgml from '../assets/image/bgml2.jpg';
import dana from '../assets/image/DANA.webp' 
import ovo from '../assets/image/OVO.webp' 
import gopay from '../assets/image/GPY.webp' 
import linkaja from '../assets/image/LA.webp' 
import indo from '../assets/image/indo.png' 
import alfa from '../assets/image/alfa.png' 
import axis from '../assets/image/axis-payment.webp' 
import indosat from '../assets/image/tri-payment.webp' 
import telkomsel from '../assets/image/telkomsel-payment.webp' 
import xl from '../assets/image/xl-payment.webp' 
import mandiri from '../assets/image/mandiri.webp' 
import bca from '../assets/image/bca.webp' 
import bni from '../assets/image/bni.webp' 
import bri from '../assets/image/bri.webp'  

export const mobileLegendsData = {
  id: 1,
  image: ml,
  background: bgml,
  name: 'Mobile Legends',
  description: 'Montoon',
  products: [
    { id: 'ml_5', name: '5 Diamonds', price: 1500, icon: geem},
    { id: 'ml_10', name: '10 Diamonds', price: 3000, icon: geem},
    { id: 'ml_12', name: '12 Diamonds', price: 3500, icon: geem },
    { id: 'ml_14', name: '14 Diamonds', price: 4000, icon: geem },
    { id: 'ml_15', name: '15 Diamonds', price: 4500, icon: geem },
    { id: 'ml_17', name: '17 Diamonds', price: 5000, icon: geem },
    { id: 'ml_18', name: '18 Diamonds', price: 5000, icon: geem },
    { id: 'ml_19', name: '19 Diamonds', price: 5500, icon: geem },
    { id: 'ml_20', name: '20 Diamonds', price: 6000, icon: geem },
    { id: 'ml_22', name: '22 Diamonds', price: 6500, icon: geem },
    { id: 'ml_28', name: '28 Diamonds', price: 8000, icon: geem },
    { id: 'ml_30', name: '30 Diamonds', price: 8500, icon: geem },
    { id: 'ml_33', name: '33 Diamonds', price: 9500, icon: geem },
    { id: 'ml_36', name: '36 Diamonds', price: 10000, icon: geem },
    { id: 'ml_44', name: '44 Diamonds', price: 12000, icon: geem },
  ],
    virtualAccounts: [
      { src: mandiri, alt: 'Mandiri', subtitle: 'Biaya Layanan +2%'},
      { src: bni, alt: 'BNI', subtitle: 'Biaya Layanan +2%' },
      { src: bca, alt: 'BCA', subtitle: 'Biaya Layanan +2%' },
      { src: bri, alt: 'BRI', subtitle: 'Biaya Layanan +2%' },
    ],
    wallets: [
      { src: gopay, alt: 'Gopay',subtitle: 'Biaya Layanan +2%' },
      { src: ovo, alt: 'OVO', subtitle: 'Biaya Layanan +2%' },
      { src: dana, alt: 'DANA', subtitle: 'Biaya Layanan +2%' },
      { src: linkaja, alt: 'LinkAja', subtitle: 'Biaya Layanan +2%' },
    ],
    convenienceStores: [
      { src: alfa, alt: 'Alfa', subtitle: 'Biaya Layanan +2%' },
      { src: indo, alt: 'Indo', subtitle: 'Biaya Layanan +2%' },
    ],
    pulsa: [
      { src: telkomsel, alt: 'Telkomsel', subtitle: 'Biaya Layanan +2%' },
      { src: xl, alt: 'XL', subtitle: 'Biaya Layanan +2%' },
      { src: indosat, alt: 'Indosat', subtitle: 'Biaya Layanan +2%' },
      { src: axis, alt: 'Axis', subtitle: 'Biaya Layanan +2%' },
    ],
};

  