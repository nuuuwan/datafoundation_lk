import './Tag.css';
export default function Tag(props) {
  const {label} = props;
  return (<span className="span-tag">{label}</span>)
}
