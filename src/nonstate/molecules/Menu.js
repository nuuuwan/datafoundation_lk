import MenuItem from 'nonstate/atoms/MenuItem.js';
import './Menu.css';

const MENU_INFOS = [
  {label: 'Home'},
  {label: 'News'},
  {label: 'Downloads'},
  {label: 'Tools'},
  {label: 'Government'},
  {label: 'Corporates'},
  {label: 'About Us', url: '/about'},
  {label: 'Contact'},
]


export default function Menu(props) {
  return (
    <div className='div-menu'>
      {MENU_INFOS.map(
        function(info, i) {
          let {label, url} = info;
          if (!url) {
            url = `/${label.toLowerCase()}`
          }
          const key = `menu-item-${i}-${label}`
          return <MenuItem key={key} label={label} url={url} />;
        }
      )}
    </div>
  )
}
