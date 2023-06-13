import Button from './buttons/Button'
import ArrowRight from './icons/ArrowRight'
import OpenInStudioButton from './buttons/OpenInStudioButton'
import Features from '../components/features'
import DemoAnimation from './DemoAnimation'
import AnnouncementHero from '../components/campaigns/AnnoucementHero'
import Heading from './typography/Heading'
import Paragraph from './typography/Paragraph'
import { SearchButton } from './AlgoliaSearch';
import IconLoupe from './icons/Loupe';
import { useIntl } from 'react-intl';

export default function Hero({ className = ''}) {
  const intl = useIntl();

  const heading1=intl.formatMessage({ id:"component.hero.heading.h1" });
  const heading2=intl.formatMessage({ id:"component.hero.heading.h1.1" });
  const heading3=intl.formatMessage({ id:"component.hero.heading.h2" });
  const heading4=intl.formatMessage({ id:"component.hero.heading.h2.1" });
  const heading5=intl.formatMessage({ id:"component.hero.heading.h2.2" });
  const buttonText=intl.formatMessage({ id:"component.hero.button.text" });
  const search=intl.formatMessage({ id: "component.hero.text.search" });
  const proudPartOf=intl.formatMessage({ id:"component.hero.paragraph.proudPartOf" });

  return (
    <>
      <AnnouncementHero className='my-4' />
      <header className={`px-2 mt-12 ${className}`}>
        <div className="text-center">
          <Heading level="h1" typeStyle="heading-xl" className="mb-4">
            {heading1} {` `}
            <span className="block md:-mt-4">
              {" "}
              {heading2}
            </span>
          </Heading>
          <Heading level="h2" typeStyle="body-lg" textColor="text-gray-700" className="mb-10 max-w-4xl mx-auto">
           {heading3} {" "}
            <strong>{heading4}</strong> {heading5}
          </Heading>
          <div className='flex flex-row items-center justify-center'>
            <Button className="block md:inline-block" text={buttonText} href="/docs" icon={<ArrowRight className="-mb-1 h-5 w-5" />} />
            <SearchButton 
              className="hidden sm:flex items-center text-left space-x-3 px-4 py-3 ml-2 bg-white border-secondary-500 border text-secondary-500 hover:text-white shadow-md bg-secondary-100 hover:bg-secondary-500 transition-all duration-500 ease-in-out rounded-md"
            >
              {({ actionKey }) => (
                <>
                  <IconLoupe />
                  <span className="flex-auto">{search}</span>
                  {actionKey && (
                    <kbd className="font-sans font-semibold">
                      <abbr
                        title={actionKey.key}
                        className="no-underline"
                      >
                        {actionKey.shortKey}
                      </abbr>{' '}
                      K
                    </kbd>
                  )}
                </>
              )}
            </SearchButton>
          </div>
          <Paragraph typeStyle="body-sm" className="mt-4" textColor="text-gray-500">
            {proudPartOf} {" "}
            <a className="underline" href="https://www.linuxfoundation.org/">
              Linux Foundation
            </a>
          </Paragraph>
        </div>
        <div className="mt-8 md:mt-16">
          <DemoAnimation />
        </div>
        <Features />
      </header>
    </>
  );
}
