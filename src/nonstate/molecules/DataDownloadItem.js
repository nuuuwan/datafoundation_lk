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
        <div className="div-source">
          <Link href={source}>
            {source}
          </Link>
        </div>
        <div className="div-download-name">
          {name}
        </div>
        <div className="div-tags">
          {tags.map(
            function(tag, i) {
              return (<Tag key={`tag-${i}`} label={tag} />);
            }
          )}
        </div>
      </td>
      <td>
        <Link href={url}>
          <img className="img-icon" src={iconDownload} alt="download" />
        </Link>
      </td>
    </tr>
  )
}
