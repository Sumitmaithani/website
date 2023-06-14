import Image from 'next/image';
import china from '../../assets/images/flags/chinaflag.png';

export default function ChinaFlag({ className }) {
  return <Image src={china} className={className} />;
}
