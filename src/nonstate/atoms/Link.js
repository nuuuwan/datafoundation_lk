export function Link(props) {
  const {href, children} = props;
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
