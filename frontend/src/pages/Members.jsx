import MemberCard from "../components/MemberCard"
import "../styles/Members.css"
const Members = () => {
  return (
    <div className="MembersMain">
        <div className="HeadingMem">Meet Our Team</div>
        <div className="MembersDiv">
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
        </div>
    </div>
  )
}

export default Members