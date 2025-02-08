// import image from "../assets/image.jpg";
import "../styles/memCard.css"
const MemberCard = ({ name, position, imageLink }) => {
  return (
    <div className="MemCardmain">
        <div>
            <img src={imageLink} width="300px" height="400px"></img>
            <div className="MemDetails">
                <div className="Name">
                    {name}
                </div>
                <div className="position">
                    {position}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberCard