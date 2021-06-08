import DataDownloads from '../../nonstate/molecules/DataDownloads.js';

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
      <DataDownloads />
    </div>
  );
}
