export default function Link(props) {
  const {href, children, style} = props;
  return (
    <a href={href} target="_blank" rel="noreferrer" style={style}>
      {children}
    </a>
  );
}
