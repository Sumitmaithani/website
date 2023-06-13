import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isMobileDevice } from '../helpers/is-mobile';
import { useOutsideClick } from '../helpers/use-outside-click';
import AsyncAPILogo from '../AsyncAPILogo';
import NavItem from './NavItem';
import ToolsPanel from './ToolsPanel';
import LearningPanel from './LearningPanel';
import CommunityPanel from './CommunityPanel';
import MobileNavMenu from './MobileNavMenu';
//import otherItems from './otherItems'
import Button from '../buttons/Button';
import GithubButton from '../buttons/GithubButton';
import { SearchButton } from '../AlgoliaSearch';
import IconLoupe from '../icons/Loupe';
import Link from 'next/link';
import LanguageMenu from './LanguageMenu';
import { useIntl } from 'react-intl';

const isMobile = isMobileDevice();

export default function NavBar({ className = '', hideLogo = false }) {
  const { asPath, locales } = useRouter();
  const [open, setOpen] = useState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState();
  const intl = useIntl();

  const languages = intl.formatMessage({
    id: 'components.navigation.navbar.languages',
  });
  const docs = intl.formatMessage({ id: 'components.navigation.navbar.docs' });
  const tools = intl.formatMessage({
    id: 'components.navigation.navbar.tools',
  });
  const community = intl.formatMessage({
    id: 'components.navigation.navbar.community',
  });
  const caseStudies = intl.formatMessage({
    id: 'components.navigation.otherItems.caseStudies',
  });
  const blog = intl.formatMessage({
    id: 'components.navigation.otherItems.blog',
  });
  const roadmap = intl.formatMessage({
    id: 'components.navigation.otherItems.roadmap',
  });

  const otherItems = [
    { text: caseStudies, href: '/casestudies' },
    { text: blog, href: '/blog' },
    // { text: 'Shop', href: 'https://asyncapi.threadless.com', target: '_blank' },
    {
      text: roadmap,
      href: '/roadmap',
      className: 'text-secondary-500 font-bold',
    },
  ];

  function outsideClick(menu) {
    if (open !== menu) return;
    setOpen(null);
  }

  const learningRef = useOutsideClick(() => outsideClick('learning'));
  const toolingRef = useOutsideClick(() => outsideClick('tooling'));
  const communityRef = useOutsideClick(() => outsideClick('community'));
  const languageRef = useOutsideClick(() => outsideClick('language'));

  function showMenu(menu) {
    if (open === menu) return;
    setOpen(menu);
  }

  function showOnClickMenu(menu) {
    if (!isMobile) return;
    if (open === menu) return setOpen(null);
    setOpen(menu);
  }

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpen(null);
  }, [asPath]);

  return (
    <div className={`bg-white ${className} z-50`}>
      <a
        href="#main-content"
        className="block md:inline-block absolute transform -translate-y-20 focus:translate-y-0 bg-gray-100 text-gray-700 p-5 text-md font-semibold"
        alt="Skip to main content"
      >
        Skip to main content
      </a>
      <div className="flex w-full justify-between items-center py-6 lg:justify-start lg:space-x-10">
        {!hideLogo && (
          <div className="lg:w-auto lg:flex-1">
            <div className="flex">
              <Link href="/">
                <a className="cursor-pointer" aria-label="AsyncAPI">
                  <AsyncAPILogo className="h-8 w-auto sm:h-8" />
                </a>
              </Link>
            </div>
          </div>
        )}

        <div
          className="relative"
          onMouseLeave={() => showMenu(null)}
          ref={languageRef}
        >
          <NavItem
            text={languages}
            href="/language"
            onClick={() => showOnClickMenu('language')}
            onMouseEnter={() => showMenu('language')}
            hasDropdown
          />
          {open === 'language' && <LanguageMenu />}
        </div>

        <div className="flex flex-row items-center justify-center -mr-2 -my-2 lg:hidden">
          <SearchButton
            className="flex items-center text-left space-x-2 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            aria-label="Open Search"
          >
            <IconLoupe />
          </SearchButton>
          <button
            onClick={() => setMobileMenuOpen(true)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <title>Menu</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex lg:items-center lg:justify-end space-x-6 xl:space-x-10 w-full">
          <div
            className="relative"
            onMouseLeave={() => showMenu(null)}
            ref={learningRef}
          >
            <NavItem
              text={docs}
              href="/docs"
              onClick={() => showOnClickMenu('learning')}
              onMouseEnter={() => showMenu('learning')}
              hasDropdown
            />
            {open === 'learning' && <LearningPanel />}
          </div>

          <div
            className="relative"
            onMouseLeave={() => showMenu(null)}
            ref={toolingRef}
          >
            <NavItem
              text={tools}
              href="/tools"
              onClick={() => showOnClickMenu('tooling')}
              onMouseEnter={() => showMenu('tooling')}
              hasDropdown
            />
            {open === 'tooling' && <ToolsPanel />}
          </div>

          <div
            className="relative"
            onMouseLeave={() => showMenu(null)}
            ref={communityRef}
          >
            <NavItem
              text={community}
              href="/community"
              onClick={() => showOnClickMenu('community')}
              onMouseEnter={() => showMenu('community')}
              hasDropdown
            />
            {open === 'community' && <CommunityPanel />}
          </div>

          {otherItems.map((item, index) => (
            <NavItem
              href={item.href}
              key={index}
              text={item.text}
              target={item.target}
              className={item.className}
            />
          ))}

          <div className="flex flex-row items-center justify-content">
            <SearchButton
              className="flex items-center text-left space-x-2 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Open Search"
            >
              <IconLoupe />
            </SearchButton>

            <GithubButton
              text="Star on GitHub"
              href="https://github.com/asyncapi/spec"
              className="py-2 ml-2"
              inNav="true"
            />
          </div>
        </nav>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state. */}
      {mobileMenuOpen && (
        <MobileNavMenu onClickClose={() => setMobileMenuOpen(false)} />
      )}
    </div>
  );
}
