import { FormBoxInterface } from "./formBoxInterface";

  
  export const projects: FormBoxInterface[] = [
    {
      id: 1,
      role: "Univeristy of Minnesota",
      company: "Small Satellite Research Team",
      dateRange: "Jan 2023 – Present",
      description:
        `I worked on low-level C++ drivers that enabled a Raspberry Pi to communicate with satellite
         hardware components like a Magnetorquer and an IMU, using a custom SPI protocol. 
         I studied technical documentation to design and implement functionality, wrote clear code documentation 
         for team members, and collaborated with a five-person team using Git and GitHub for version control.`,
    },
    {
      id: 2,
      role: "Create Sandbox - Drone Physics Simulation",
      company: "DevStudio",
      dateRange: "Aug 2021 – Dec 2022",
      description:
        `Contributed to an open-source project with Create Minneapolis and Professor Orban at
         the University of Minnesota to build a physics simulation where students can upload 
         and test drone designs before physical prototyping. Worked in a team of four using
         Agile methodologies and used UML diagrams to design and plan the system architecture.`,
    },
  ];
  