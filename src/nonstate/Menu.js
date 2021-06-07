import MenuItem from './MenuItem.js';
import './Menu.css';


export default function Menu(props) {
  return (
    <div className="div-menu">
      <MenuItem label="Home" />
      <MenuItem label="About" />
      <MenuItem label="Data" />
      <MenuItem label="Corporates" />
      <MenuItem label="Government" />
      <MenuItem label="News" />
      <MenuItem label="Contact Us" />
    </div>
  )
}
