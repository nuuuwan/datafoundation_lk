import {Link} from "react-router-dom";
import './MenuItem.css';

export default function MenuItem(props) {
  const {label} = props;
  return (
    <div className="div-menu-item">
      <Link to={`/${label.toLowerCase()}`}>
        {label}
      </Link>
    </div>
  )
}
