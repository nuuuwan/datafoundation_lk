import {Link} from "react-router-dom";
import './MenuItem.css';
import { useLocation } from 'react-router-dom'


export default function MenuItem(props) {
  const {label} = props;
  const urlPart = label.toLowerCase();
  const pathname = useLocation().pathname;
  const isSelected = pathname.includes(urlPart);

  let className = 'div-menu-item '
    + (isSelected ? 'div-menu-item-selected' : '');
  return (
    <div className={className}>
      <Link to={`/${urlPart}`} >
        {label}
      </Link>
    </div>
  )
}
