import { Languages } from "lucide-react"

type contact = {
  email: string, 

}

type Tech_Stck = {
  name: string,
  language: string,
  strorage: string,
  security: string, 
  styling: string, 
  deployment: string,
  id: string
}

type skills =  {

skill_1: string,
skill_2: string, 
skill_3: string,
skill_4: string,
id: string




}

type SocialLink = {
  label: string,
  link: string,

}



export const skills : skills[] = [
  {
  skill_1 : "Database Management",
  skill_2: "Security & SCP",
  skill_3: "Deploy & Host",
  skill_4: "Cloud Integration",
  skill_5: "Ecommerce API Routes"
  id: "end"
  }
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

export const contact: contact[] = [
  {
    email: 'garriga@g19programs.com'
  }
]
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Garriga11/',
    
  },
 
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/Garriga19'

,
  },
 
]

export const EMAIL = 'garriga@g19Programs.com'
