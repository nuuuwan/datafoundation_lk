import MenuItem from 'nonstate/atoms/MenuItem.js';
import './Menu.css';


export default function Menu(props) {
  return (
    <div className="div-menu">
      <MenuItem label="Home" />
      <MenuItem label="News" />
      <MenuItem label="Downloads" />
      <MenuItem label="Tools" />
      <MenuItem label="Government" />
      <MenuItem label="Corporates" />
      <MenuItem label="About" />
      <MenuItem label="Contact" />
    </div>
  )
}
