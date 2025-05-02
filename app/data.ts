import { Languages } from "lucide-react"



type WorkExperiance = {
  company: string
  title: string
  start: string
  end: string,
  id: string


}

type Tech_Stck = {
  name: string,
  language: string,
  strorage: string,
  security: string, 
  styling: string, 
  deployment: string
  id: string
}


type SocialLink = {
  label: string
  link: string
}



export const WorkExperiance: WorkExperiance[] = [
  {
    company: 'Sudden Services, Inc.',
    title: 'Vision Plus',
    start: '2022',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'Gator Computers',
    title: 'Technician',
    start: '2022',
    end: '2022',
  
    id: 'work2',
  },
  {
    company: 'Microtel Inn & Suites',
    title: 'Auditor',
    start: '2020',
    end: 'Present',
    id: 'work3',
  },
]

export const Tech_Stck: Tech_Stck[]=[
 {
  name: 'NextJS',
  language: 'TypeScript',
  strorage: 'Prisma',
  security: 'Clerk',
  styling: 'Tailwind',
  deployment: 'Vercel',
  id: 'stack'


}
]


export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https/github.com/garriga11',
    
  },
 
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/garriga',
  },
 
]

export const EMAIL = 'garriga@g19Programs.com'
