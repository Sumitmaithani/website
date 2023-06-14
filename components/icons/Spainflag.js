import Image from 'next/image';
import spain from '../../assets/images/flags/spainflag.png';

export default function SpainFlag({ className }) {
  return <Image src={spain} className={className} />;
}
