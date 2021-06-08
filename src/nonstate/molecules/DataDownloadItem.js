import Tag from '../../nonstate/atoms/Tag.js';
import iconDownload from '../../assets/images/icon_download.png';
import './DataDownloadItem.css';

export default function DataDownloadItem(props) {
  const {info} = props;
  const {name, url, tags} = info;

  return (
    <tr className="tr-data-download-item">
      <td>
        {name}
      </td>
      <td>
        {tags.map(
          function(tag, i) {
            return (<Tag key={`tag-${i}`} label={tag} />);
          }
        )}
      </td>
      <td>
        <a href={url} target="_blank" rel="nonreferrer">
          <img className="img-icon" src={iconDownload} alt="download" />
        </a>
      </td>
    </tr>
  )
}
