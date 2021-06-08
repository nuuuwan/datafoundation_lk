import {DATA_DOWNLOADS} from '../../constants/DataDownloads.js';

export default function DataPage(props) {
  return (
    <div>
      <h2>Data Tools</h2>
      <ul>
        <li>MyLocal</li>
        <li>Kavuda</li>
        <li>The Org Chart</li>
      </ul>
      <h2>Download Public Data</h2>
      <ul>
        {
          DATA_DOWNLOADS.map(
            function(dataInfo, i) {
              const {name, url, tags} = dataInfo;
              const key = `li-download-${i}`;
              return (
                <li key={key}>{name}</li>
              );
            },
          )
        }
      </ul>
    </div>
  );
}
