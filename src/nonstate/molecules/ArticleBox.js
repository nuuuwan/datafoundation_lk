import './ArticleBox.css';

export default function ArticleBox(props) {
  const {name, author, details} = props;

  return (
    <div className="div-article-box">
      <div className="div-name">{name}</div>
      <div className="div-author">By {author}</div>
      <div className="div-details">{details}</div>
    </div>
  )
}
