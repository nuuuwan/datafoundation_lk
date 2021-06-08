import Logo from '../../nonstate/atoms/Logo.js';
import './ArticleBox.css';

export default function ArticleBox(props) {
  const {name, author, details} = props;

  const authorContent = (author === 'Lanka Data Foundation')
    ? <Logo/>
    : author;

  return (
    <div className="div-article-box">
      <div className="div-name">{name}</div>
      <div className="div-author">By {authorContent}</div>
      <div className="div-details">{details}</div>
      <button className="button-try-tool">Try this tool</button>
    </div>
  )
}
