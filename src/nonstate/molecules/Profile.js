export default function Profile(props) {
  const {name, designation, imgSrc, linkedinProfile} = props;

  return (
    <div>
      <img className="img-profile" src={imgSrc} alt="image"/>
      <div className="div-name">
        {name}
      </div>
      <div className="div-designation">
        {designation}
      </div>
    </div>
  )
}
