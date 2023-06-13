import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import TextLink from '../typography/TextLink';
import Link from 'next/link';
import { useIntl } from 'react-intl';

export default function Features() {
  const intl = useIntl();

  const heading = intl.formatMessage({
    id: 'component.features.index.heading',
  });
  const subheading = intl.formatMessage({
    id: 'component.features.index.subheading',
  });
  const name1 = intl.formatMessage({ id: 'component.features.index.name1' });
  const description1 = intl.formatMessage({
    id: 'component.features.index.description1',
  });
  const name2 = intl.formatMessage({ id: 'component.features.index.name2' });
  const description2 = intl.formatMessage({
    id: 'component.features.index.description2',
  });
  const name3 = intl.formatMessage({ id: 'component.features.index.name3' });
  const description3 = intl.formatMessage({
    id: 'component.features.index.description3',
  });
  const name4 = intl.formatMessage({ id: 'component.features.index.name4' });
  const description4 = intl.formatMessage({
    id: 'component.features.index.description4',
  });
  const name5 = intl.formatMessage({ id: 'component.features.index.name5' });
  const description5 = intl.formatMessage({
    id: 'component.features.index.description5',
  });
  const name6 = intl.formatMessage({ id: 'component.features.index.name6' });
  const description6 = intl.formatMessage({
    id: 'component.features.index.description6',
  });
  const link1 = intl.formatMessage({ id: 'component.features.index.link1' });
  const link2 = intl.formatMessage({ id: 'component.features.index.link2' });
  const link3 = intl.formatMessage({ id: 'component.features.index.link3' });
  const link4 = intl.formatMessage({ id: 'component.features.index.link4' });
  const link5 = intl.formatMessage({ id: 'component.features.index.link5' });
  const link6 = intl.formatMessage({ id: 'component.features.index.link6' });
  const link7 = intl.formatMessage({ id: 'component.features.index.link7' });
  const link8 = intl.formatMessage({ id: 'component.features.index.link8' });
  const link9 = intl.formatMessage({ id: 'component.features.index.link9' });

  const features = [
    {
      name: name1,
      description: description1,
      links: [
        {
          label: link1,
          href: 'docs/specifications/latest',
          id: 'whyasyncapi-spec-documentation-link',
        },
      ],
    },
    {
      name: name2,
      description: description2,
      links: [
        {
          label: link2,
          href: 'https://github.com/asyncapi/html-template',
          id: 'whyasyncapi-apis-htmltemplate-link',
        },
        {
          label: link3,
          href: 'https://github.com/asyncapi/asyncapi-react/',
          id: 'whyasyncapi-apis-reactcomponents-link',
        },
      ],
    },
    {
      name: name3,
      description: description3,
      links: [
        {
          label: link4,
          href: 'tools/generator',
          id: 'whyasyncapi-generation-generator-link',
        },
        {
          label: link5,
          href: 'tools/modelina',
          id: 'whyasyncapi-generation-modelina-link',
        },
      ],
    },
    {
      name: name4,
      description: description4,
      links: [
        {
          label: link6,
          href: 'https://asyncapi.com/slack-invite',
          id: 'whyasyncapi-community-slack-link',
        },
      ],
    },
    {
      name: name5,
      description: description5,
      links: [
        {
          label: link7,
          href: 'blog/governance-motivation',
          id: 'whyasyncapi-governance-more-link',
        },
        {
          label: link8,
          href: 'community/tsc',
          id: 'whyasyncapi-governance-tsc-link',
        },
      ],
    },
    {
      name: name6,
      description: description6,
      links: [
        {
          label: link9,
          href: 'https://github.com/asyncapi/community/discussions',
          id: 'whyasyncapi-muchmore-github-link',
        },
      ],
    },
  ];

  return (
    <section className="relative bg-white pt-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <Heading level="h2" typeStyle="heading-lg" className="mt-2">
          {heading}
        </Heading>
        <Paragraph className="mt-2 max-w-prose mx-auto">{subheading}</Paragraph>
        <div className="mt-12 text-left">
          <ul className="grid  grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <li
                key={feature.name}
                className="flex flex-col justify-between border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg px-6 pb-8"
              >
                <div>
                  <Heading
                    level="h3"
                    typeStyle="heading-md-semibold"
                    className="mt-8"
                  >
                    {feature.name}
                  </Heading>
                  {feature.description && (
                    <Paragraph typeStyle="body-md" className="mt-5">
                      {feature.description}
                    </Paragraph>
                  )}
                </div>
                <div className="flex justify-between">
                  {feature.links.map((link) => {
                    return (
                      <Link href={link.href} key={link.label}>
                        <TextLink
                          id={link.id}
                          href={link.href}
                          className="mt-6 inline-block"
                        >
                          {link.label}
                        </TextLink>
                      </Link>
                    );
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
