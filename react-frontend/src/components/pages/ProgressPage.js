import React from "react";
import TopPageHeader from "../layout/TopPageHeader";
import Container from "@material-ui/core/Container";

const ProgressPage = () => {
  return (
    <div>
      <TopPageHeader text="Our goal, your progress" />
      <Container maxWidth="md">
      <h3>Progress level</h3>
        <p>By the end of lesson 5 in the course the student will have been taught the skills {'&'} vocabulary to form basic sentences {'&'} phrases, as well as hold simple conversations in Arabic!</p>

        <h3>Sample as follows</h3>
        <p>“What is this? Is this a house? No this is a mosque”.
        “Who is that? Is that a doctor? No, that is a teacher”.
        “Is that is a car? No, this is a dog”.
        “The shirt is clean and the handkerchief is dirty”.
        “The boy left the house and went to school”.
        “The man left the shop and went to the toilet”.
        “The student left the classroom and went to the headteacher’s room”.
        “Who’s bag is this? Is this the students bag? No, this is the teacher’s bag”
        “Where is the teacher’s pen? It’s under the teacher’s desk”.
        “Where is the boy? He’s in the kitchen”.</p>

        <p>By the time the student is halfway through the beginners course they will have been taught the ability to understand short stories completely in Arabic, they will the ability to talk about themselves, their family, describe their home etc...in essence the foundations in their Arabic language will begin to blossom!</p>

        <h3>Our Goal!</h3>
        <p>We are absolutely positive this course, along with the unique tuition methods employed, will be a unique learning experience for all who enrol...and we are positive - inshā’Allāh - that even those who may have struggled with Madīnah courses in the past, failed to learn and complete them, will succeed in our courses!</p>
      </Container>
    </div>
  );
};

export default ProgressPage;
