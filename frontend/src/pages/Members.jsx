import { useEffect, useState } from 'react';
import MemberCard from "../components/MemberCard"
import "../styles/Members.css"
//import "../assets/membersdata/members.json"
const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch('./members.json')
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error('Error fetching members:', error));
  }, []);
  return (
    <div className="MembersMain">
        <div className="HeadingMem">Meet Our Team</div>
        <div className="MembersDiv">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            position={member.position}
            imageLink={member.imageLink}
          />
        ))}
        </div>
    </div>
  )
}

export default Members