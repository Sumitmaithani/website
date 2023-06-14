import IconTwitter from './icons/Twitter';
import IconGithub from './icons/Github';
import IconYoutubeGray from './icons/YouTubeGray';
import IconLinkedIn from './icons/LinkedIn';
import Link from 'next/link';
import AsyncAPILogoLight from './AsyncAPILogoLight';
import IconSlack from './icons/Slack';
import IconTwitch from './icons/Twitch';
import Heading from './typography/Heading';
import { useIntl } from 'react-intl';

export default function Footer() {
  const intl = useIntl();

  const buildingFuture = intl.formatMessage({
    id: 'component.footer.buildingFuture',
  });
  const architectures = intl.formatMessage({
    id: 'component.footer.architectures',
  });
  const initiative = intl.formatMessage({ id: 'component.footer.initiative' });
  const about = intl.formatMessage({ id: 'component.footer.about' });
  const blog = intl.formatMessage({ id: 'component.footer.blog' });
  const shop = intl.formatMessage({ id: 'component.footer.shop' });
  const jobs = intl.formatMessage({ id: 'component.footer.jobs' });
  const brand = intl.formatMessage({ id: 'component.footer.brand' });
  const news = intl.formatMessage({ id: 'component.footer.news' });
  const emailUs = intl.formatMessage({ id: 'component.footer.emailUs' });
  const social = intl.formatMessage({ id: 'component.footer.social' });
  const twitterMsg = intl.formatMessage({ id: 'component.footer.twitterMsg' });
  const twitter = intl.formatMessage({ id: 'component.footer.twitter' });
  const githubMsg = intl.formatMessage({ id: 'component.footer.githubMsg' });
  const github = intl.formatMessage({ id: 'component.footer.github' });
  const linkedinMsg = intl.formatMessage({
    id: 'component.footer.linkedinMsg',
  });
  const linkedin = intl.formatMessage({ id: 'component.footer.linkedin' });
  const youtubeMsg = intl.formatMessage({ id: 'component.footer.youtubeMsg' });
  const youtube = intl.formatMessage({ id: 'component.footer.youtube' });
  const slackMsg = intl.formatMessage({ id: 'component.footer.slackMsg' });
  const slack = intl.formatMessage({ id: 'component.footer.slack' });
  const twitchMsg = intl.formatMessage({ id: 'component.footer.twitchMsg' });
  const twitch = intl.formatMessage({ id: 'component.footer.twitch' });
  const made = intl.formatMessage({ id: 'component.footer.made' });
  const love = intl.formatMessage({ id: 'component.footer.love' });
  const asyncInitiate = intl.formatMessage({
    id: 'component.footer.asyncInitiate',
  });
  const copy = intl.formatMessage({ id: 'component.footer.copy' });
  const copyright = intl.formatMessage({ id: 'component.footer.copyright' });

  return (
    <footer className="bg-dark mt-12 margin: 0 auto">
      <div className="max-w-screen-xl mx-auto py-4 sm:py-6 md:py-12 xl:py-16 px-3 overflow-hidden sm:px-6 lg:px-8 divide-y divide-cool-gray">
        <nav className="py-4 sm:py-10 flex flex-wrap justify-between">
          <div className="mr-14 w-full md:w-auto">
            <div className="">
              <Link href="/">
                <a className="cursor-pointer" aria-label="AsyncAPI">
                  <AsyncAPILogoLight className="h-10 w-auto mt-3" />
                </a>
              </Link>
            </div>
            <div className="">
              <Heading
                className="mt-12 mb-14 text-white"
                typeStyle="heading-sm-semibold"
              >
                {buildingFuture}
                <br />
                {architectures}
              </Heading>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="flex">
              <div className="px-0 lg:px-10 lg:ml-5 mb-5">
                <div className="py-2">
                  <div className="text-white">
                    <Heading typeStyle="heading-sm-semibold">
                      {initiative}
                    </Heading>
                  </div>
                </div>
                <ul className="justify-center">
                  <li className="py-2">
                    <Link href="/about">
                      <a className="text-base leading-6 text-cool-gray hover:text-white transition ease-in-out duration-300">
                        {about}
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/blog">
                      <a className="text-base leading-6 text-cool-gray hover:text-white transition ease-in-out duration-300">
                        {blog}
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <a
                      href="https://asyncapi.threadless.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base leading-6 text-gray-500 hover:text-white transition ease-in-out duration-300"
                    >
                      {shop}
                    </a>
                  </li>
                  <li className="py-2">
                    <Link href="/jobs">
                      <a className="text-base leading-6 text-cool-gray hover:text-white transition ease-in-out duration-300">
                        {jobs}
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <a
                      href="https://github.com/asyncapi/brand/blob/master/brand-guidelines/README.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base leading-6 text-gray-500 hover:text-white transition ease-in-out duration-300"
                    >
                      {brand}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="px-14 sm:px-8 sm:ml-10 md:ml-5 mb-5">
                <div className="py-2">
                  <div className="text-white">
                    <Heading typeStyle="heading-sm-semibold">{news}</Heading>
                  </div>
                </div>
                <ul className="justify-center">
                  {/* <li className="py-2">
                    <div className="text-base leading-6 text-cool-gray hover:text-white transition ease-in-out duration-300">
                      <Link href="">
                        <a>Press</a>
                      </Link>
                    </div>
                  </li> */}
                  <li className="py-2">
                    <div className="text-base leading-6 text-cool-gray hover:text-white transition ease-in-out duration-300">
                      <a href="mailto:press@asyncapi.io">{emailUs}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-0 sm:px-10 sm:ml-5 mb-5">
              <div className="py-2 hidden sm:block">
                <div className="mr-12 text-white">
                  <Heading typeStyle="heading-sm-semibold">{social}</Heading>
                </div>
              </div>
              <ul
                className="justify-start flex sm:flex-col"
                aria-label="AsyncAPI social media links"
              >
                <li className="py-2 mr-3 sm:mr-0">
                  <a
                    href="https://twitter.com/AsyncAPISpec"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center text-cool-gray hover:text-white transition ease-in-out duration-300">
                      <span className="sr-only">{twitterMsg}</span>
                      <IconTwitter className="h-8 w-8 sm:h-6 sm:w-6" />
                      <span className="absolute pl-8 pr-5 hidden sm:block">
                        {twitter}
                      </span>
                    </div>
                  </a>
                </li>
                <li className="py-2 mr-3 sm:mr-0">
                  <a
                    href="https://github.com/asyncapi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center text-cool-gray hover:text-white transition ease-in-out duration-300">
                      <span className="sr-only">{githubMsg}</span>
                      <IconGithub className="h-8 w-8 sm:h-6 sm:w-6" />
                      <span className="absolute pl-8 pr-5 hidden sm:block">
                        {github}
                      </span>
                    </div>
                  </a>
                </li>
                <li className="py-2 mr-3 sm:mr-0">
                  <a
                    href="https://linkedin.com/company/asyncapi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center text-cool-gray hover:text-white transition ease-in-out duration-300">
                      <span className="sr-only">{linkedinMsg}</span>
                      <IconLinkedIn className="h-8 w-8 sm:h-5 sm:w-5 ml-1" />
                      <span className="absolute pl-8 pr-2 hidden sm:block">
                        {linkedin}
                      </span>
                    </div>
                  </a>
                </li>
                <li className="py-2 mr-3 sm:mr-0">
                  <a
                    href="https://youtube.com/asyncapi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center text-cool-gray hover:text-white transition ease-in-out duration-300">
                      <span className="sr-only">{youtubeMsg}</span>
                      <IconYoutubeGray className="h-8 w-8 sm:h-6 sm:w-6" />
                      <span className="absolute pl-8 pr-2 hidden sm:block">
                        {youtube}
                      </span>
                    </div>
                  </a>
                </li>
                <li className="py-2 mr-3 sm:mr-0">
                  <a
                    href="https://asyncapi.com/slack-invite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center text-cool-gray hover:text-white transition ease-in-out duration-300">
                      <span className="sr-only">{slackMsg}</span>
                      <IconSlack className="h-8 w-8 sm:h-6 sm:w-6" />
                      <span className="absolute pl-8 pr-8 hidden sm:block">
                        {slack}
                      </span>
                    </div>
                  </a>
                </li>
                <li className="py-2 mr-3 sm:mr-0">
                  <a
                    href="https://www.twitch.tv/asyncapi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center text-cool-gray hover:text-white transition ease-in-out duration-300">
                      <span className="sr-only">{twitchMsg}</span>
                      <IconTwitch className="h-8 w-8 sm:h-6 sm:w-6" />
                      <span className="absolute pl-8 pr-6 hidden sm:block">
                        {twitch}
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="sm:flex justify-between xl:mt-20 py-8 sm:py-12">
          <div className="w-full sm:w-2/3">
            <p className="text-left text-base leading-6 mb-3 text-cool-gray">
              {made}{' '}
              <span className="font-mono text-secondary-500">:love:</span> by
              {asyncInitiate}
            </p>
            <p className="text-left text-sm leading-6 text-cool-gray w-full sm:w-2/3">
              {copy} &copy; {copyright}{' '}
              <a
                href="https://lfprojects.org"
                className="text-secondary-500 hover:text-white transition ease-in-out duration-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://lfprojects.org
              </a>
            </p>
          </div>
          <div className="block mt-8 sm:mt-0">
            <p className="block text-sm leading-6">
              <a
                href="https://netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
                  className="inline"
                  alt="Deploys by Netlify"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
