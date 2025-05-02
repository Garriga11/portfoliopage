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

type hobbies =  {

hobby_1: string,
hobby_2: string, 
hobby_3: string
id: string




}

type SocialLink = {
  label: string,
  link: string,

}



export const hobbies : hobbies[] = [
  {
  hobby_1 : "Reading",
  hobby_2: "Writing",
  hobby_3: "Movies/Theatre",
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
    link: 'https://www.linkedin.com/in/garriga',
  },
 
]

export const EMAIL = 'garriga@g19Programs.com'
