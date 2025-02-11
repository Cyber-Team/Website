import React from "react";
import styled from "styled-components";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: #b3b3b3; /* Light gray for readability */
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  background: #12131c; /* Dark red-black background */
  border: 1px solid #8e0d1e; /* Deep red border */
  box-shadow: rgba(142, 13, 30, 0.3) 0px 4px 24px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: rgba(142, 13, 30, 0.5) 0px 6px 30px;
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  border: 1px solid #8e0d1e; /* Deep red border */
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Milestone = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff; /* White text */
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Organization = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #b3b3b3; /* Light gray for readability */
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #b3b3b3;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const MilestoneCard = ({ milestone }) => {
  return (
    <Card>
      <Top>
        <Image src={milestone.img} />
        <Body>
          <Milestone>{milestone.milestone}</Milestone>
          <Organization>{milestone.organization}</Organization>
          <Date>{milestone.date}</Date>
        </Body>
      </Top>
      <Description>
        {milestone?.details && <Span>{milestone?.details}</Span>}
      </Description>
      {milestone.doc && (
        <a href={milestone.doc} target="new">
          <Document src={milestone.doc} />
        </a>
      )}
    </Card>
  );
};

export default MilestoneCard;
