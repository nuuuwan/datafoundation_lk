import Logo from 'nonstate/atoms/Logo.js';
import Link from 'nonstate/atoms/Link.js';

import iconTools from 'assets/images/icon_tools.png';
import './ArticleBox.css';

export default function ArticleBox(props) {
  const {name, author, details, url} = props;

  const authorContent = (author === 'Lanka Data Foundation')
    ? <Logo/>
    : author;

  return (
    <div className="div-article-box">
      <div className="div-name">{name}</div>
      <div className="div-author">By {authorContent}</div>
      <div className="div-details">{details}</div>
      <Link href={url} >
        <button className="button-try-this-tool">
          Try this tool
          <img className="img-menu-icon" src={iconTools} alt="icon" />
        </button>
      </Link>
    </div>
  )
}
