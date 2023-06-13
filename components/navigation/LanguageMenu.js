import FlyoutMenu from './FlyoutMenu';
import LanguageMenuItem from './LanguageMenuItem';
import MenuBlocks from './MenuBlocks';
import { useRouter } from 'next/router';

import IconGithubOrganization from '../icons/GithubOrganization';
import IconSlack from '../icons/Slack';

export default function LanguageMenu() {
  const { locales } = useRouter();

  // const items = [...locales].sort();
  console.log(locales[0]);

  const items = [
    {
      icon: IconGithubOrganization,
      title: locales[0],
      href: '/',
      target: '',
      description: '',
      locale: locales[0],
    },
    {
      icon: IconSlack,
      title: locales[1],
      href: '/',
      target: '',
      description: ``,
      locale: locales[1],
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
