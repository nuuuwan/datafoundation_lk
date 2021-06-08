import {TOOLS} from '../../constants/Tools.js';
import ArticleBox from '../../nonstate/molecules/ArticleBox.js';

export default function ToolsPage(props) {
  return (
    <div>
      <h2>Data Tools</h2>
      {
        TOOLS.map(
          function(info, i) {
            const {name, author, details} = info;
            return (
              <ArticleBox
                key={`article-box-${i}-${name}`}
                name={name}
                author={author}
                details={details}
              />
            )
          }
        )
      }
    </div>
  );
}
