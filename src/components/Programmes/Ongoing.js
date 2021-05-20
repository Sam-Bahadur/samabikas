import React from "react";
import { Link } from "react-router-dom";
import "./Ongoing.scss";
import girl_empowering from "../../assets/images/programs/girl_empowering.jpg";
import girl_empowering2 from "../../assets/images/programs/girl_empowering2.jpg";
import girl_empowering3 from "../../assets/images/programs/girl_empowering3.jpg";
import award from "../../assets/images/programs/award.jpg";
import reproductive from "../../assets/images/programs/reproductive.jpg";
import reproductive2 from "../../assets/images/programs/reproductive2.jpg";
import reproductive3 from "../../assets/images/programs/reproductive3.jpg";

const ongoingPrograms = [
  {
    sn: 1,
    title: "Girls Empowerment Project",
    period: "May 2019 to ongoing",
    budget: "$47,000",
    supportedBy: "Girls First Fund",
    image: [girl_empowering, girl_empowering2, girl_empowering3],
    details:
      "The UNICEF data indicates that Nepal has the 3rd highest rate of child marriage in Asia, after Bangaledesh and India. Thirty-seven percent of girls in Nepal marry before age 18 and 10 percent are married by age 15, in spite of the fact that the minimum age of marriage under Nepali law is 20 years of age. Boys also often marry young in Nepal, though in lower numbers than girls.(Human Rights Watch). Whatever reasons behind the child marriage in Nepal, but the early childbearing is risky for both mother and child, and many girls and their babies suffer devastating health consequences. There are several reasons for child marriage in Nepal mostly the deep rooted social and cultural norms and beliefs are leading factors for child marriage. Specifically, low awareness and education about the reproductive health, lacks of information about the government rules and regulations, lack of independent decision to the girls and boys to marriage, poverty level (where people have not enough sources of income some HHs have compulsion for child marriage because they are not able to feed and provide education to their daughters) are the root causes of child marriage. \n    SAMABIKAS Nepal has implemented girls empowerment project in 3 municipalities of Achham in order to end child marriage. More than 500 girls and boys are part of this project. We have focused mainly on the Better Life Options Program (BLOP) class which provides life skills, education on gender rights, with a focus on sexual and reproductive health, negotiation, decision-making, and gender-based violence and a safe space for adolescent girls as well as boys and to empower them through group involvement and discussion.The major outcome from the BLOP class is all the girls from the BLOP group have made other girls make a commitment by lighting an oil lamp as a promise and a commitment that they shall not be marrying before their marriageable age. This is a major outcome as this class has led to social empowerment including improvements in knowledge of health and family planning and instances of child marriage. Overall, this program has a modest, positive impact on child marriage, and the involvement of boys will try to mitigate the gender gap and inequity in terms of gender-based violence and child marriage.\n    Similarly, SAMABIKAS Nepal believes in shaping society through gender training. Hence, we are providing Gender and Leadership Training for Adolescent Girls. his program has led to a sustained change in a small number of individual outcomes. Overall, the training has developed the social skills of vulnerable participants, particularly those who have never participated in such kind of training and are occupied with household and economic activities. This has also increased the confidence and leadership skills of girls. They have also started to break the silence and are communicating in different governmental ward offices if any violence has occurred in the community",
  },
  {
    sn: 2,
    title: "Award Package      ",
    period: "March 2020 to ongoing",
    budget: "US $ 15,000",
    supportedBy: "With and For Girls",
    image: [award],
    details:
      "In March 2020, SAMABIKAS was awarded by With and For Girls for its campaigning efforts,  to dismantle the chhaupadi huts and declare themselves chhaupadi free areas and for fighting against menstrual exile. Through the Award money, SAMABIKAS Nepal has planned to implement the institutional capacity development activities as well community level development intervention targeting the girls and women. \n    Under the institutional capacity development, SAMABIKAS Nepal has planned to update its webportal, documents its organizational documents including its profile, learning documents and safeguarding policies. We will also procure some official equipment and furniture using this fund which are most important to SAMABIKAS Nepal for its continuity. We have planned to organize one event of capacity building training to SAMABIKAS Nepal Board members to prepare the strategic planning documents for 3 years. \n    For the community level interventions, SAMABIKAS Nepal will conduct the 5 Better Life Options Program (BLOP) classes to more than 100 girls and young women where BLOP classes provide opportunity to the Girls  how they can better, equitable and prosperous lives. Targeting the Girls and young women, an awareness raising interventions will be conducted at community participating the girls and young women. The Sexual and Reproductive Health Rights (SRHR) interventions will contribute to aware the girls and young women rights and build their confidence to raise their voice and complain about the abuse. ",
  },
  {
    sn: 3,
    title: "Reproductive Health for Adolescent Girls (RHAG) Project",
    period: "November 2020 to ongoing",
    budget: "US $ 15,000",
    supportedBy: "Global Fund for Women",
    image: [reproductive, reproductive2, reproductive3],
    details:
      "Adolescent pregnancy is one of the major risk factors for uterus prolapse because the pelvis of adolescent girls may not yet be fully developed which leads to an increased risk of prolonged or difficult labor. That in turn increases the chance of damage to the pelvic muscles causing uterus prolapses. According to the Nepal government’s 2011 Demographic and Health Survey 10.5% of 17-year-old girls, 4.9% of 16-year-old girls and 0.9% of 15 year old girls were pregnant or had given birth to their first child. The 2013 UNFPA study of 357 women who had undergone surgery for stage three uterus prolapses found the median age of marriage was 14 years and median age of first pregnancy was 18.\n This project will create an awareness program targeting the girls from age between 11 and 19 years. They will receive training on issues including the health consequences of child marriage and early pregnancies and related laws. However, it will be a small-scale programme in reducing early marriage and adolescent pregnancy. By targeting girls, it may be effective in reducing the numbers of girls who elope and marry. We will also be providing the adolescent girls a platform to showcase their ability and capabilities. Organizing a debate session, engaging them in sports, providing them training like journalism, public speaking, knitting, sewing etc. this type of training will enhance their leadership, studying and researching skills. Recognizing their personal ability and including them in those activities catering to their abilities. Another major activity is improving the Sexual and Reproductive Health of Girls. The intentional project intervention will contribute to adapt the safe practices and behaviors.\n",
  },
];

export default function Ongoing() {
  return (
    <div className="programs my-4 w-4/5 mx-auto">
      <div className="text-center text-base md:text-4xl text-mainblue font-bold">
        Ongoing Projects
      </div>
      <div className="ongoing">
        {ongoingPrograms.map((program) => (
          <Link
            to={{
              pathname: "ongoing/details",
              state: {
                title: program.title,
                period: program.period,
                budget: program.budget,
                supportedBy: program.supportedBy,
                details: program.details,
                image: program.image,
              },
            }}
          >
            <li className="hover:text-maingreen text-sm md:text-lg">
              {program.title}
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
}
