import Image from 'next/image';
import indian from '../../assets/images/flags/indiaflag.png';

export default function IndianFlag({ className }) {
  return <Image src={indian} className={className} />;
}
