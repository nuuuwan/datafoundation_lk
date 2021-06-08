import {DATA_DOWNLOADS} from '../../constants/DataDownloads.js';
import DataDownloadItem from './DataDownloadItem.js';
import './DataDownloads.css';

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

export default function DataDownloads(props) {
  return (
    <table className="table-downloads">
      <tbody>
      {
        DATA_DOWNLOADS.sort(sortByName).map(
          function(info, i) {
            const key = `li-download-${i}`;
            return <DataDownloadItem key={key} info={info} />;
          },
        )
      }
      </tbody>
    </table>
  )
}
