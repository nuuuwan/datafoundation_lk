import { useState } from 'react';

import {DATA_DOWNLOADS} from '../../constants/DataDownloads.js';
import DataDownloadItem from '../../nonstate/molecules/DataDownloadItem.js';
import './DataDownloads.css';


export default function DataDownloads(props) {
  const [searchText, setSearchText] = useState('');

  function onChange(e) {
    setSearchText(e.target.value.toLowerCase());
  }

  function filterWithSearchText(a) {
    return a['name'].toLowerCase().includes(searchText)
      || a['source'].toLowerCase().includes(searchText)
      || a.tags.reduce(
        function(isMatchTag, tag) {
          if (tag.includes(searchText)) {
            return true;
          }
          return isMatchTag;
        },
        false,
      );
  }

  function sortByName(a, b) {
    return a.name.localeCompare(b.name);
  }

  const matchingDownloadItems = searchText
    ? DATA_DOWNLOADS
      .filter(filterWithSearchText)
      .sort(sortByName)
    : [];

  const searchStats = (matchingDownloadItems.length > 0)
    ? (<>
      Found <strong>{matchingDownloadItems.length}</strong> matching download(s)
    </>): '';

  return (
    <div>
      <input
        type="text"
        className="input-text-search-text"
        placeholder="Search data sources..."
        onChange={onChange}
      />

      <div className="div-search-stats">
        {searchStats}
      </div>

      <table className="table-downloads">
        <tbody>
        {
          matchingDownloadItems.map(
            function(info, i) {
              const key = `li-download-${i}`;
              return <DataDownloadItem key={key} info={info} />;
            },
          )
        }
        </tbody>
      </table>
    </div>
  )
}
