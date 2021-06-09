import MenuItem from 'nonstate/atoms/MenuItem.js';
import iconDownload from 'assets/images/icon_download.png';
import iconTools from 'assets/images/icon_tools.png';

import './Menu.css';

const MENU_INFOS = [
  {label: 'Home'},
  {label: 'News'},
  {
    label: (
      <span>
        Downloads
        <img className="img-menu-icon" src={iconDownload} alt="icon" />
      </span>
    ),
    url: '/downloads',
  },
  {
    label: (
      <span>
        Tools
        <img className="img-menu-icon" src={iconTools} alt="icon" />
      </span>
    ),
    url: '/tools',
  },
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
