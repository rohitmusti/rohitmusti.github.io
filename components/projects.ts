export type link = {
  name: string;
  link: string;
};
export type project_entry = {
  title: string;
  description: string;
  project_link?: link[];
  code_link?: link[];
};
export const projects: project_entry[] = [
  {
    title: "Tree Equity Score",
    description:
      "The Tree Equity Score represents a novel approach to urban forestry, creating an index that combines tree canopy with demographic and economic data to measure how equitably trees are distributed. I wrote all of the code used to calculate the score and built the applications that serve it!",
    project_link: [
      {
        name: "National Tree Equity Score Explorer",
        link: "https://treeequityscore.org",
      },
      {
        name: "Tree Equity Scoree Analyzer",
        link: "https://rhode-island.treeequityscore.org/",
      },
    ],
    code_link: [
      {
        name: "Temperature Processing",
        link: "https://github.com/American-Forests/landsat-processing",
      },
    ],
  },
  {
    title: "Career Pathways",
    description:
      "At American Forests, we are pioneering a first-of-its kind Urban Forestry Job program, funding both wrap-around services and helping cover part of the cost of the job for disadvantaged people entering the field. I built this webmap to visualize both our work and other urban forestry job programs around the country.",
    project_link: [
      {
        name: "Career Pathways Map",
        link: "https://maps.americanforests.org/career-pathways/index.html",
      },
    ],
    code_link: [
      {
        name: "Career Pathways project code",
        link: "https://github.com/American-Forests/career-pathways-app",
      },
    ],
  },
  {
    title: "American Forests History",
    description:
      "American Forests was founded in 1875 and has a long history of successful forestry projects. Through this web map, I have scraped our internal file system and gathered information on all of our proejcts going back to 1990 and am serving it in a web map for the first time.",
    project_link: [
      {
        name: "American Forests Project Map",
        link: "https://maps.americanforests.org/af-projects/index.html",
      },
    ],
  },
  {
    title: "Question and Answer Engine",
    description:
      "At the Red Hat Center of AI Excellence, I worked on a question and answering bot. The goal of the project was to produce a bot that used NLP to scan Red Hat's technical documentation and respond to questions based on the documentation. The approach we took was context based question and answering. However, we quickly ran into the hard wall of technical text being too similar to one another to differentiate meaningfully using context based approaches. I designed and implemented several experiments to improve this methodology however this fundamental challenge to measuring text similarity stopped us from bringing the product to production.",
    code_link: [
      {
        name: "Question Answer Bot Experiments",
        link: "https://github.com/rohitmusti/Question-Answer-Engine-RH",
      },
    ],
  },
  {
    title: "Natural Language Processing Graduate Work",
    description:
      "Conversations within multilingual communities rarely select and stick to a single language or dialect in the repertoire. Rather, speakers navigate between codes which carry crucial social meaning. These switches happen between paragraphs, sentences, or even words. Annotating the code and identifying switches throughout a discourse is both critical and laborious for sociolinguistics. Our ability to collect large quantities of conversational data is rapidly outpacing our ability to process the data. A natural language processing model which automatically segments text into its coded components will be essential for researchers in this field to take advantage of the recent influx of data. The problem statement was can I develop a deep learning based approach to identifying code switches. I developed a series of neural nets to identify which code a given word is and a larger recurrent neural net to predict the class of the next word, thus predicting the code switch. The final model achieved over 90% accuracy!",
  },
  {
    title: "Compilers Graduate Work",
    description:
      "Type checking is the process of separating typable programs (free of type errors) from non-typable programs. Once a program is known to be type safe, several optimizations can be added to the program. I implemented a type checking system using abstract syntax trees and the union find algorithm that allowed for these additional optimizations to be built in.",
  },
  {
    title: "Digital Governance Lab",
    description:
      "I taught a class about digital governance while in graduate school. This class focused on governance of technology and the technology of governance. ",
    project_link: [
      {
        name: "Digital Governance Syllabus",
        link: "https://digitalgovlab.github.io/Fall2019/",
      },
    ],
    code_link: [
      {
        name: "Course Website Source Code",
        link: "https://github.com/digitalgovlab/Fall2019",
      },
    ],
  },
  {
    title: "Introduction to Spatial Reasoning",
    description:
      "As an undergraduate teaching assistant, I became focused on the inequities in how comptuer science was taught. In particular, the mode of reasoning use to teach computing (spatial reasoning) was not as developed in traditionally disadvantaged groups within computing. This is because of cultural biases and standards. I developed this class to address this inequity in spatial reasoning education, the number one indicator for success in computeer science, using cutting edge teaching techniques!",
    project_link: [
      {
        name: "Course Website",
        link: "https://cs1501-spatialreasoning.github.io/",
      },
    ],
    code_link: [
      {
        name: "Course Website Source Code",
        link: "https://github.com/cs1501-spatialreasoning/cs1501-spatialreasoning.github.io",
      },
    ],
  },
  {
    title: "Red Hat Wifi Connection Tool",
    description:
      "As an intern, I noticed that I and several of my fellow interns had trouble accessing the corporate wifi. I built this quick tool and instructions for adding to one's commandline to make connecting to the wifi easier! This is a bit a small and silly project, but it felt good to solve a direct need.",
    code_link: [
      {
        name: "Wifi Tool Source Code",
        link: "https://github.com/rohitmusti/rh-wifitool",
      },
    ],
  },
  {
    title: "Michael's Drink Generator",
    description:
      "As a student, there was a local bar with an overhwhelming long menu. Several of my friends complained about feeling overwhelmed bty the menu. I developed this web scraper tool which scraped the Michael's website and generated random beers or chose something cheap for you!",
    project_link: [
      { name: "Drink generator", link: "https://rohitmusti.github.io/drink/" },
    ],
    code_link: [
      {
        name: "Source code for drink generator",
        link: "https://github.com/rohitmusti/drink",
      },
    ],
  },
];
