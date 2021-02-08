import React from "react";
import { Link } from "react-router-dom";
import "./Ongoing.scss";

const completedPrograms = [
  {
    sn: 1,
    title:
      "Improving Public Financial Management of Payal and Lungra VDCs in  Achham District",
    period: "1 June 2013- 31 March 2014",
    budget: "NPR 1,015,500.00",
    supportedBy: "CECI Nepal, Bluwatar, Kathmandu",
    objectives: [
      { o: "Budget Literacy" },
      { o: "Gender and Pro-poor Budget Analysis" },
      {
        o: "Public Procurement Monitoring",
      },
      {
        o: "Public Expenditure Tracking Survey",
      },
    ],
    outcomes:
      "The project has created awareness among people regarding good governance. They now know the budget which needs to be participatory, consensus oriented, accountable, transparent, responsive, effective and efficient, equitable and inclusive. The views of minorities are taken into account and that the voices of the most vulnerable in society are heard in decision-making.",
  },
  {
    sn: 2,
    title:
      "Implementing Support to GoN's Five Year National Strategy & Action Plan for Combating Gender Based Violence (GBV)",
    period: "1 April 2013- 31 December 2013",
    budget: "NPR 2,555,500.00",
    supportedBy: "Saathi, Jawlakhel, Lalitpur",
    objectives: [
      { o: "District level awareness raising and advocacy workshop on GBV" },
      { o: "VDC level awareness raising and advocacy workshop on GBV" },
      {
        o: "Mass advocacy activities on GBV at VDC / ward level",
      },
      {
        o:
          "Formation of vigilance committees to keep track of incidences of GBV",
      },
      {
        o:
          "Mobilization of stakeholders with orientation and identification of incidences of GBV at domestic, community and wider level.",
      },
    ],
    outcomes:
      "The programme has promoted gender equality and women empowerment. It has created awareness among women as now they are opening about the violence they have suffered. A centre has been established to report about gender based violence. Since the establishment of the center the survivors of GBV have now started to seek help, assistance and justice. ",
  },
  {
    sn: 3,
    title:
      "Protection of women’s dignity through abolition of “Chhaupadi” tradition in Achham District",
    period: "January 1- December 31, 2012",
    budget: "Rs. 3,360647.00",
    supportedBy:
      "Enabling State Programme/  Rights, Democracy and Inclusion Fund (ESP/RDIF), Kathmandu",
    objectives: [
      { o: "Abolishing the inhuman practices of Chhaupadi" },
      {
        o:
          "Improvement in the health condition of females of reproductive-health age group",
      },
      {
        o:
          "Establishment of a permanent vigilance structure of the communities and local governments to safeguard the women and young girls from all sorts of discrimination specifically during menstruation",
      },
    ],
    outcomes:
      "Campaign against Chhaupadi was conducted over a period of 6 months across 5 VDCs of Achham district. Training and workshops were conducted where political parties leaders, representatives of school and other government / non-government employees,  religious leaders, adolescent boys and girls participated. Girls and women came openly against all social discriminations. A total of 761 women abandoned the Chhaupadi tradition and commenced to live in the main house safely. Similarly, VDC’s ward no. 8 declared as free Chhaupadi society where 45 menstruated women abandoned Chhaupadi tradition. 80% people are aware about ill practices of Chhaupadi tradition and a religious assumption regarding the Chhaupadi has been decreasing in its number. In October 2018, a national level workshop was conducted to make menstrual health issues as a part of primary school curriculum. The old curriculum is outdated and the revised one should focus on the illegality of the practice.",
  },
  {
    sn: 4,
    title: "Achham Reproductive Health Program",
    period: "September 15, 2009 – April 30, 2010",
    budget: "NRs. 1,933,690.00 (Contribution from CCO NRs. 1583,690.00)",
    supportedBy: "CCO/CLFI, Kathmandu",
    objectives: [
      {
        o:
          "Improve women’s reproductive health particularly of the village women, who are suffering from uterus prolapses",
      },
      {
        o:
          "Strengthen the capacity of community health structures in four (4) VDCs of Achham district          ",
      },
      {
        o:
          "Establish better community reproductive health service at the community level in the project area          ",
      },
      {
        o:
          "Increase access to women reproductive health service particularly treatment service for the uterus prolapsed women           ",
      },
      {
        o:
          "Increase knowledge and skill of the executing agency in project management and implementation.",
      },
    ],
    outcomes:
      "Campaign against Chhaupadi was conducted over a period of 6 months across 5 VDCs of Achham district. Training and workshops were conducted where political parties leaders, representatives of school and other government / non-government employees,  religious leaders, adolescent boys and girls participated. Girls and women came openly against all social discriminations. A total of 761 women abandoned the Chhaupadi tradition and commenced to live in the main house safely. Similarly, VDC’s ward no. 8 declared as free Chhaupadi society where 45 menstruated women abandoned Chhaupadi tradition. 80% people are aware about ill practices of Chhaupadi tradition and a religious assumption regarding the Chhaupadi has been decreasing in its number. In October 2018, a national level workshop was conducted to make menstrual health issues as a part of primary school curriculum. The old curriculum is outdated and the revised one should focus on the illegality of the practice.",
  },
  {
    sn: 5,
    title: "Basic Journalism Training to Young Girls",
    period: "October 1,, 2010 to November 2010",
    budget: "Rs. 54,715.00",
    supportedBy: "Child Workers in Nepal (CWIN), Kathmandu",
    objectives: [
      {
        o:
          "Orient the young girls about the basics of journalism and media reporting",
      },
      {
        o:
          "Sensitise the young girls towards gender sensitive reporting and story writing",
      },
      {
        o:
          "Improve the access of young girls and women to radio and print media",
      },
    ],
    outcomes: "NA",
  },
  {
    sn: 6,
    title:
      "Situation Assessment Survey on Equal Rights and Opportunities for Girls in Achham District of Nepal (A Survey Report)",
    period: "November 1, 2009- December 31, 2009",
    budget: "Rs. 160,000.00",
    supportedBy: "Child Workers in Nepal Concern Centre (CWIN), Kathmandu",
    objectives: [
      {
        o:
          "The major objective of the assessment was to find out the present constraints, opportunities and forms of socio-cultural discrimination against adolescent girls in Achham district",
      },
    ],
    outcomes: "NA",
  },
  {
    sn: 7,
    title:
      "Care and support to the survivors of uterus prolapses (an event based programme)",
    period: "November 25- December 10, 2008",
    budget: "NA",
    supportedBy: "CARE Nepal/ Kathmandu Model Hospital/CAED, Kathmandu",
    objectives: [
      {
        o:
          "The programme was undertaken as a part of the sixteen-day campaign against violence of women",
      },
      {
        o:
          "The main activities and events covered under the programme were the identification of women of the far-western region with uterus prolapses; facilitate their treatment at Kathmandu Model Hospital.            ",
      },
      {
        o:
          "There were six women identified and selected who were suffering from uterus prolapses of second and third stage and were taken to Kathmandu for check- up and treatment. Four of them were screened with third stage problem. Operation was undertaken of four women.            ",
      },
      {
        o:
          "Prepared and screened a video documentary with true stories of the survivors of uterus prolapses narrating the cause and effects of uterus prolapses      ",
      },
      {
        o:
          "Participants of the documentary screening ceremony were, among others, the Minister for Health, Population and Environment, gender and rights activists, journalists, representatives from I/NGOs working on the issues and problems of the women, ex- members of parliament, members of the Constituent Assembly from Achham and other districts representing various political parties.",
      },
    ],
    outcomes:
      "8 women were treated by the Kathmandu Hospital College under their PHAT project.  The documentary “Banda Pida” was able to make significant changes in Achham. Policies regarding the reproductive health and rights of women were made After this the uterus prolapses issue was prioritized by the government and advocacy as well as treatment for the uterus prolapses had been commenced in different parts of the country. CARE, ADRA conducted many health camps after the documentary screening.    ",
  },
  {
    sn: 8,
    title: "Rato Balti",
    period: "June 2018 to June 2019",
    budget: "NA",
    supportedBy: "Be Artsy",
    objectives: [
      {
        o:
          "Distribution of Menstrual Cups and metal buckets (baltin) to have clean water and somewhere to boil the cup.          ",
      },
      {
        o: "Abolishment of Chhaupadi Practice",
      },
    ],
    outcomes:
      "Provided 2000 girls with a Menstrual Cup along with the training on how to use it.  Destigmatized menstruation as a normal biological function, reduce the prevalence of chhaupadi, and mitigate its consequences. The empowered girls now continue to attend school and be active in public spaces. ",
  },
  {
    sn: 9,
    title: "Chhaupadi Tradition Awareness Programme ",
    period: "May 2018 to June 2018",
    budget: "NA",
    supportedBy: "Sanfebagar Municipality",
    objectives: [
      {
        o:
          "The training of trainers was given to 30 women who further gave the training to other women. A total of 600 women participated in making reusable cloth sanitary pads.",
      },
      {
        o: "Advocacy regarding menstrual health and hygiene was also done.",
      },
    ],
    outcomes:
      "Women who were the part of training are now making their own reusable cloth sanitary pad. Earlier these women used to wear dried leaves, plastics and dirty clothes when menstruating. Now these women are aware about menstrual hygiene and can afford to wear a sanitary pad. Further 5 women have started their own enterprise by selling this reusable cloth sanitary pad. This has created women employment and they are now living an independent life.  ",
  },
  {
    sn: 10,
    title: "COVID-19 Activities",
    period: "April 2020 to June 2020",
    budget: "2,50,000",
    supportedBy: "Girls First Fund",
    objectives: [
      {
        o:
          "Distribution of soap and reusable cloth sanitary pad to girls and young women.",
      },
      {
        o: "Radio Jingle programme to create awareness",
      },
      {
        o:
          "A two-way phoning to the expert programme to answer the questions of the people who are living in uncertainties regarding the COVID-19 and regarding the domestic violence being faced by women due to the lockdown. ",
      },
      {
        o: "Distribution of relief food packages to orphan children",
      },
    ],
    outcomes:
      "Women who were the part of training are now making their own reusable cloth sanitary pad. Earlier these women used to wear dried leaves, plastics and dirty clothes when menstruating. Now these women are aware about menstrual hygiene and can afford to wear a sanitary pad. Further 5 women have started their own enterprise by selling this reusable cloth sanitary pad. This has created women employment and they are now living an independent life.  ",
  },
];

export default function Completed() {
  return (
    <div className="programs my-4 w-4/5 mx-auto">
      <div className="text-center text-4xl text-mainblue font-bold">
        Completed Projects
      </div>
      <div className="ongoing">
        {completedPrograms.map((program) => (
          <Link
            to={{
              pathname: "completed/details",
              state: {
                title: program.title,
                period: program.period,
                budget: program.budget,
                supportedBy: program.supportedBy,
                objectives: program.objectives,
                outcomes: program.outcomes,
              },
            }}
          >
            <li className="hover:text-maingreen">{program.title}</li>
          </Link>
        ))}
      </div>
    </div>
  );
}
