import './MenuItem.css';

export default function MenuItem(props) {
  const {label} = props;
  return (
    <div className="div-menu-item">
      <a href={`#${label}`}>
        {label}
      </a>
    </div>
  )
}
