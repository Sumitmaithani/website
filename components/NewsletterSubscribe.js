import Button from './buttons/Button';
import Heading from './typography/Heading';
import Paragraph from './typography/Paragraph';
import { useIntl } from 'react-intl';

export default function NewsletterSubscribe({
  className = 'p-8 text-center',
  dark = false,
  type,
}) {
  const intl = useIntl();

  const title = intl.formatMessage({
    id: 'component.newslettersubscribe.title',
  });
  const subtitle = intl.formatMessage({
    id: 'component.newslettersubscribe.subtitle',
  });
  const placeholder1 = intl.formatMessage({
    id: 'component.newslettersubscribe.placeholder1',
  });
  const placeholder2 = intl.formatMessage({
    id: 'component.newslettersubscribe.placeholder2',
  });

  const headTextColor = dark ? 'text-white' : '';
  const paragraphTextColor = dark ? 'text-gray-300' : '';

  return (
    <div className={className}>
      <Heading
        level="h3"
        textColor={headTextColor}
        typeStyle="heading-lg"
        className="mb-4"
      >
        {title}
      </Heading>
      <Paragraph className="mb-8" textColor={paragraphTextColor}>
        {subtitle}
      </Paragraph>
      <form name="form 1" method="POST" className="md:flex" data-netlify="true">
        <input type="hidden" name="form-name" value="form 1" />
        <input type="hidden" name="type" value={type} />
        <input
          type="text"
          name="name"
          placeholder={placeholder1}
          className="form-input block w-full sm:text-sm sm:leading-5 md:mr-2 md:mt-0 md:flex-1 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={placeholder2}
          className="form-input block w-full mt-2 sm:text-sm sm:leading-5 md:mr-2 md:mt-0 md:flex-1 rounded-md"
          required
        />
        <Button
          type="submit"
          text="Subscribe"
          className="w-full mt-2 md:mr-2 md:mt-0 md:flex-1"
        />
      </form>
    </div>
  );
}
