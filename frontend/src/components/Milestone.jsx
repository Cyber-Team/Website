import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MilestoneCard from "../../Cards/MilestoneCard";
import { milestones } from "@/data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  background: #06080b; /* Background black */
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #ffffff; /* White text */
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #b3b3b3; /* Soft gray for secondary text */
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const StyledTimelineDot = styled(TimelineDot)`
  border-color: #8e0d1e !important; /* Dark red outline */
  background: #51292e !important; /* Deep red */
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  background: #8e0d1e !important; /* Red for connectors */
`;

const Milestone = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Milestones</Title>
        <Desc>
          A timeline of Cyberteam's significant milestones, showcasing major
          achievements, impactful projects, and contributions that drove
          innovation and success.
        </Desc>
        <TimelineSection>
          <Timeline>
            {milestones.map((milestone, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <StyledTimelineDot variant="outlined" />
                  {index !== milestones.length - 1 && <StyledTimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <MilestoneCard milestone={milestone} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Milestone;
