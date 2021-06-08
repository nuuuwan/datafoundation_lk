import Link from '../../nonstate/atoms/Link.js';
import Tag from '../../nonstate/atoms/Tag.js';
import iconDownload from '../../assets/images/icon_download.png';
import './DataDownloadItem.css';

export default function DataDownloadItem(props) {
  const {info} = props;
  const {name, url, tags, source} = info;

  return (
    <tr className="tr-data-download-item">
      <td>
        {name}
      </td>
      <td>
        {[...tags, source].map(
          function(tag, i) {
            return (<Tag key={`tag-${i}`} label={tag} />);
          }
        )}
      </td>
      <td>
        <Link href={url}>
          <img className="img-icon" src={iconDownload} alt="download" />
        </Link>
      </td>
    </tr>
  )
}
