import Image from 'next/image';
import france from '../../assets/images/flags/franceflag.png';

export default function FranceFlag({ className }) {
  return <Image src={france} className={className} />;
}
