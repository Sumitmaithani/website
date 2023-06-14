import Image from 'next/image';
import usa from '../../assets/images/flags/usaflag.png';

export default function USAFlag({ className }) {
  return <Image src={usa} className={className} />;
}
