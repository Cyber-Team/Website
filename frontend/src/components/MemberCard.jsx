import image from "../assets/image.jpg";
import "../styles/memCard.css"
const MemberCard = () => {
  return (
    <div className="MemCardmain">
        <div>
            <img src={image} width="300px" height="400px"></img>
            <div className="MemDetails">
                <div className="Name">
                    first last
                </div>
                <div className="position">
                    position
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberCard