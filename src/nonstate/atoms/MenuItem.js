import {Link, useLocation} from "react-router-dom";
import './MenuItem.css';

export default function MenuItem(props) {
  const {label, url} = props;
  const pathname = useLocation().pathname;
  const isSelected = pathname.includes(url);

  let className = 'div-menu-item '
    + (isSelected ? 'div-menu-item-selected' : '');
  return (
    <div className={className}>
      <Link to={url} >
        {label}
      </Link>
    </div>
  )
}
