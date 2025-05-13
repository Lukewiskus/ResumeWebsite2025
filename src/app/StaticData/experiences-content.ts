import { FormBoxInterface } from "./formBoxInterface";

  
  export const experiences: FormBoxInterface[] = [
    {
      id: 1,
      role: "Software Engineer II",
      company: "Alarm.com",
      dateRange: "Feburary 2023 – Present",
      description:
        `At Alarm.com, I developed an in-house RAG system that connects Teams discussions and internal docs, 
        enabling developers to query a chatbot for relevant answers and documentation links. 
        I wrote the system in Python and deployed it to Kubernetes, with automated updates to keep the knowledge base fresh.
        I collaborate with teams across Localization, QA, and Product to provide technical input on tickets—estimating effort,
        assessing risk, and proposing solutions. I built a real-time tracking service for on-site installers,
        contributed to refactoring legacy .NET monoliths into modular .NET Standard libraries, 
        and helped migrate them to SDA-based deployments. To support operations, I created dashboards and alerting
        tools to monitor our services, and I helped implement an end-to-end testing framework with Playwright
        to catch issues early across environments.`,
    },
    {
      id: 2,
      role: "Application Development Intern",
      company: "Vervint",
      dateRange: "May 2022 – Jan 2023",
      description:
        `I worked with React and .NET Core to build a documentation tool that helped healthcare workers track patient notes
         and visits more efficiently, improving organization and insurance communication. I also built the online ticketing
          flow for the Las Vegas Mob Museum using Next.js, collaborating with a backend engineer to integrate Shopify. 
          Throughout both projects, I met regularly with clients to share progress, 
          gather feedback, and ensure we were delivering something they were excited about.`,
    },
    {
      id: 3,
      role: "Undergraduate Teching Assistant",
      company: "Univeristy of Minnesota",
      dateRange: "Janurary 2022 – Dec 2022",
      description:
        `As a TA for the capstone class CSCI 3081W (Program Design and Development), I helped students learn C++ and key
          software design patterns like Factory, Observer, and Decorator through hands-on 3D simulation projects.
          I led multiple lab sections of up to 30 students, guided them in using UML to plan large systems, 
          and supported their understanding of both code structure and software architecture. 
          I also contributed to creating homework assignments, base code for the simulation, and grading scripts,
          writing, quizzes, and exams.`,
    },
  ];
  