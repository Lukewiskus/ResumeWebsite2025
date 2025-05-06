export interface AboutContentInterface {
    id: number
    section: string;
}
  
  export const aboutContent: AboutContentInterface[] = [
    {
        id: 1,
        section: `I'm a full-stack software engineer with a strong focus on back-end development. 
        I enjoy working on complex, scalable systems where I can take ownership of significant 
        portions of the codebase—keeping it clean, well-tested, and maintainable.
         I’m drawn to projects that demand precision and thoughtful architecture.`
    },
    {
        id: 2,
        section: `Currently, I work at Alarm.com, where I help maintain and build out tools that support our B2B operations. 
        This includes the site for partners to interface with us, and the mobile app used by technicians during on-site security system installations. 
        I'm always eager to explore new technologies and recently built an internal RAG (Retrieval-Augmented Generation) 
        tool, using our internal documentation to get an LLM response to user querires, with quick links to the most relevant documentation.`
    },    
    {
        id: 3,
        section: `I grew up in Northfield, Minnesota, and earned my B.A. in Computer Science from the University of Minnesota – Twin Cities, with a 
        minor in Chinese language and literature. 
        Outside of work, I enjoy running, biking, and spending time with family and friends.`
    }
  ];
  