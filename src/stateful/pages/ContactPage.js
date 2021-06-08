import Link from '../../nonstate/atoms/Link.js';

export default function ContactPage(props) {
  return (
    <>
      {`Email us at `}
      <Link href="mailto:hello@datafoundation.lk">
        hello@datafoundation.lk
      </Link>
    </>
  );
}
