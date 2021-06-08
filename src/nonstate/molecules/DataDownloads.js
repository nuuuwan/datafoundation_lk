import {DATA_DOWNLOADS} from '../../constants/DataDownloads.js';
import DataDownloadItem from './DataDownloadItem.js';
import './DataDownloads.css';

export default function DataDownloads(props) {
  return (
    <table className="table-downloads">
      <tbody>
      {
        DATA_DOWNLOADS.map(
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
