import Container from '../components/layout/Container';
import NavBar from '../components/navigation/NavBar';
import Hero from '../components/Hero';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import Sponsors from '../components/Sponsors';
import Head from '../components/Head';
import Slack from '../components/slack';
import Button from '../components/buttons/Button';
import Calendar from '../components/Calendar';
import AdidasLogo from '../components/logos/Adidas';
import AxwayLogo from '../components/logos/Axway';
import SlackLogo from '../components/logos/Slack';
import SalesforceLogo from '../components/logos/Salesforce';
import SapLogo from '../components/logos/SAP';
import Testimonial from '../components/Testimonial';
import Heading from '../components/typography/Heading';
import Paragraph from '../components/typography/Paragraph';
import TextLink from '../components/typography/TextLink';
import GoldSponsors from '../components/GoldSponsors';
import SilverSponsors from '../components/SilverSponsors';
import SupportUs from '../components/SupportUs';
import StickyNavbar from '../components/navigation/StickyNavbar';
import GoogleCalendarButton from '../components/buttons/GoogleCalendarButton';
import ICSFileButton from '../components/buttons/ICSFileButton';
import SubscribeButton from '../components/buttons/SubscribeButton';
import NewsroomSection from '../components/newsroom/NewsroomSection';
import { useIntl } from 'react-intl';

function HomePage() {
  const intl = useIntl();

  const adoptedBy = intl.formatMessage({ id: 'pages.index.adoptedBy' });
  const theseBrands = intl.formatMessage({ id: 'pages.index.theseBrands' });
  const letUs = intl.formatMessage({ id: 'pages.index.letUs' });
  const joinOur = intl.formatMessage({ id: 'pages.index.joinOur' });
  const wereACommunity = intl.formatMessage({
    id: 'pages.index.wereACommunity',
  });
  const joinOurSlack = intl.formatMessage({ id: 'pages.index.joinOurSlack' });
  const slackWelcome = intl.formatMessage({ id: 'pages.index.slackWelcome' });
  const joinUs = intl.formatMessage({ id: 'pages.index.joinUs' });
  const joinMeeting = intl.formatMessage({ id: 'pages.index.joinMeeting' });
  const asyncApiHosts = intl.formatMessage({ id: 'pages.index.asyncApiHosts' });
  const learnMore = intl.formatMessage({ id: 'pages.index.learnMore' });
  const platinum = intl.formatMessage({ id: 'pages.index.platinum' });
  const gold = intl.formatMessage({ id: 'pages.index.gold' });
  const silver = intl.formatMessage({ id: 'pages.index.silver' });
  const sponsorUs = intl.formatMessage({ id: 'pages.index.sponsorUs' });
  const sponsorUsMsg = intl.formatMessage({ id: 'pages.index.sponsorUsMsg' });
  const supportUs = intl.formatMessage({ id: 'pages.index.supportUs' });
  const supportedBy = intl.formatMessage({ id: 'pages.index.supportedBy' });
  const supportMsg = intl.formatMessage({ id: 'pages.index.supportMsg' });
  const emailUs = intl.formatMessage({ id: 'pages.index.emailUs' });
  const emailMsg = intl.formatMessage({ id: 'pages.index.emailMsg' });
  const experts = intl.formatMessage({ id: 'pages.index.experts' });
  const testimonial1 = intl.formatMessage({ id: 'pages.index.testimonial1' });
  const testimonial2 = intl.formatMessage({ id: 'pages.index.testimonial2' });
  const testimonial3 = intl.formatMessage({ id: 'pages.index.testimonial3' });
  const testimonial4 = intl.formatMessage({ id: 'pages.index.testimonial4' });

  return (
    <>
      <Head />
      <StickyNavbar>
        <NavBar className="max-w-screen-xl block px-4 sm:px-6 lg:px-8 mx-auto" />
      </StickyNavbar>

      <main id="main-content" className="scroll-mt-5">
        <Container wide>
          <Hero className="mb-24" />
        </Container>

        <Container className="text-center pb-12" wide as="section">
          <Heading level="h3" typeStyle="heading-lg" className="mb-4">
            {adoptedBy}
          </Heading>
          <Paragraph className="mt-2 mb-20 md:w-2/3 md:mx-auto">
            {theseBrands}
            <TextLink
              href="https://github.com/asyncapi/website/issues/new"
              target="_blank"
            >
              {letUs}{' '}
            </TextLink>
          </Paragraph>
          <ul className="md:grid md:gap-8 md:grid-cols-2 lg:grid-cols-5">
            <li className="justify-center flex">
              <AdidasLogo className="h-8 text-gray-400" />
            </li>
            <li className="justify-center flex">
              <AxwayLogo className="mt-12 md:-mt-5 lg:-mt-5 h-14 text-gray-400" />
            </li>
            <li className="justify-center flex">
              <SlackLogo className="mt-12 md:mt-2 lg:-mt-1 h-10 text-gray-400" />
            </li>
            <li className="justify-center flex">
              <SalesforceLogo className="mt-12 md:mt-2 lg:-mt-4 h-16 text-gray-400" />
            </li>
            <li className="justify-center flex">
              <SapLogo className="mt-12 md:mt-2 lg:-mt-2 h-12 text-gray-400" />
            </li>
          </ul>
        </Container>

        <div className="bg-dark py-12 mt-8">
          <Container wide as="section">
            <NewsletterSubscribe dark />
          </Container>
        </div>

        <Container className="text-center py-12" wide as="section">
          <Heading level="h3" typeStyle="heading-lg" className="mb-4">
            {joinOur}
          </Heading>
          <Paragraph className="mt-2 md:w-1/2 md:mx-auto">
            {wereACommunity}{' '}
          </Paragraph>
          <div className="py-2 lg:py-12">
            <Container wide>
              <div className="lg:flex">
                <div className="mt-10 lg:mt-0 lg:w-1/2">
                  <Slack />
                </div>
                <section className="lg:text-left lg:max-w-xl lg:w-1/2 lg:ml-12">
                  <div className="mt-5">
                    <Heading level="h4" typeStyle="heading-md-semibold">
                      {joinOurSlack}{' '}
                    </Heading>
                    <Paragraph className="mt-2">{slackWelcome} </Paragraph>
                  </div>
                  <div className="mt-5 flex justify-center lg:justify-start">
                    <Button
                      className="w-full md:w-auto"
                      text={joinUs}
                      href="/slack-invite"
                    />
                  </div>
                </section>
              </div>

              <div className="mt-12 lg:flex lg:flex-row-reverse">
                <section className="mt-10 lg:mt-0 lg:flex-1">
                  <Calendar size="2" className="float-left" />
                </section>
                <section className="lg:text-left lg:max-w-xl lg:mr-12">
                  <div className="mt-5 lg:mr-12">
                    <Heading level="h3" typeStyle="heading-md-semibold">
                      {joinMeeting}
                    </Heading>
                    <Paragraph className="mt-2">
                      {asyncApiHosts}
                      <TextLink href="/community/meetings">
                        {learnMore}{' '}
                      </TextLink>
                    </Paragraph>
                    <ul className="mt-5 md:flex justify-center">
                      <li>
                        <GoogleCalendarButton href="https://calendar.google.com/calendar/u/3?cid=Y19xOXRzZWlnbG9tZHNqNm5qdWh2YnB0czExY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t" />
                      </li>
                      <li>
                        <SubscribeButton
                          href="/community/meetings"
                          className="mt-2 md:mt-0 md:ml-2"
                        />
                      </li>
                      <li>
                        <ICSFileButton
                          href="https://calendar.google.com/calendar/ical/c_q9tseiglomdsj6njuhvbpts11c%40group.calendar.google.com/public/basic.ics"
                          className="mt-2 md:mt-0 md:ml-2"
                        />
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </Container>
            <Container wide>
              <NewsroomSection />
            </Container>
          </div>
        </Container>

        <section className="pb-20" role="contentinfo" aria-label="Our Sponsors">
          <Container className="text-center pb-6" wide as="section">
            <Heading level="h3" typeStyle="heading-lg" className="mb-4">
              {platinum}
            </Heading>
            <Sponsors className="mt-4" showSupportBanner={false} />
          </Container>

          <Container className="text-center pb-6" wide as="section">
            <Heading level="h3" typeStyle="heading-lg" className="mb-4">
              {gold}
            </Heading>
            <GoldSponsors className="mt-4" showSupportBanner={false} />
          </Container>

          <Container className="text-center pyb-6" wide as="section">
            <Heading level="h3" typeStyle="heading-lg" className="mb-4">
              {silver}
            </Heading>
            <SilverSponsors className="mt-4" showSupportBanner={false} />
          </Container>

          <Container className="text-center py-6" wide as="section">
            <Heading
              level="h3"
              typeStyle="heading-md-semibold"
              className="mb-4"
            >
              {sponsorUs}
            </Heading>
            <Paragraph className="mt-2 md:w-1/2 md:mx-auto">
              {sponsorUsMsg}
              <TextLink
                href="https://opencollective.com/asyncapi"
                target="_blank"
              >
                {supportUs}
              </TextLink>
            </Paragraph>
          </Container>
        </section>
        <Container className="text-center py-6 pb-20" wide>
          <Heading level="h3" typeStyle="heading-lg" className="mb-4">
            {supportedBy}
          </Heading>
          <Paragraph className="mt-3 max-w-2xl mx-auto sm:mt-4 pb-4">
            {supportMsg}
            <TextLink href="mailto:info@asyncapi.io" target="_blank">
              {emailUs}
            </TextLink>{' '}
            {emailMsg}
          </Paragraph>
          <SupportUs className="mt-4" showSupportBanner={false} />
        </Container>
        <Container className="text-center pb-20 mt-8" wide as="section">
          <Heading level="h3" typeStyle="heading-lg" className="mb-4">
            {experts}
          </Heading>
          <ul className="max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
            <Testimonial
              className="md:pr-10 lg:pr-16"
              text={testimonial1}
              authorAvatar="/img/testimonials/matt-mclarty.jpg"
              authorName="Matt McLarty"
              authorDescription="Global Leader of API Strategy at MuleSoft"
            />
            <Testimonial
              className="md:pl-10 lg:pl-16"
              text={testimonial2}
              authorAvatar="/img/testimonials/bill-doerrfeld.jpg"
              authorName="Bill Doerrfeld"
              authorDescription="Editor in Chief at Nordic APIs"
            />
            <Testimonial
              className="md:pr-10 lg:pr-16"
              text={testimonial3}
              authorAvatar="/img/testimonials/jonathan-schabowsky.jpg"
              authorName="Jonathan Schabowsky"
              authorDescription="Sr. Architect, Office of the CTO at Solace"
            />
            <Testimonial
              className="md:pl-10 lg:pl-16"
              text={testimonial4}
              authorAvatar="/img/testimonials/eric-horesnyi.jpg"
              authorName="Eric Horesnyi"
              authorDescription="CEO at Streamdata.io"
            />
          </ul>
        </Container>
      </main>
    </>
  );
}

export default HomePage;
