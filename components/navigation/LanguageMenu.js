import MenuBlocks from './MenuBlocks';
import { useRouter } from 'next/router';

import IndianFlag from '../icons/IndianFlag';
import ChinaFlag from '../icons/ChinaFlag';
import SpainFlag from '../icons/Spainflag';
import FranceFlag from '../icons/FranceFlag';
import USAFlag from '../icons/Usaflag';

export default function LanguageMenu() {
  const { locales } = useRouter();

  const items = [
    {
      icon: USAFlag,
      title: 'English',
      href: '/',
      target: '',
      description: 'Hey there! 👋 Would you like to view this page in English',
      locale: locales[0],
    },
    {
      icon: FranceFlag,
      title: 'French',
      href: '/',
      target: '',
      description: `Salut! 👋 Souhaitez-vous voir cette page en anglais`,
      locale: locales[1],
    },
    {
      icon: ChinaFlag,
      title: 'Chinese',
      href: '/',
      target: '',
      description: `嘿！👋 你想用中文查看這個頁面嗎`,
      locale: locales[2],
    },
    {
      icon: IndianFlag,
      title: 'Hindi',
      href: '/',
      target: '',
      description: `सुनो! 👋क्या आप इस पेज को हिंदी में देखना चाहेंगे`,
      locale: locales[3],
    },
    {
      icon: SpainFlag,
      title: 'Spanish',
      href: '/',
      target: '',
      description: `¡Hola! 👋 ¿Te gustaría ver esta página en español?`,
      locale: locales[4],
    },
  ];

  return (
    <div className="absolute z-50 -ml-4 pt-3 transform w-screen max-w-md md:ml-12 md:transform md:-translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-3xl">
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs overflow-hidden">
          <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
            <MenuBlocks items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}
