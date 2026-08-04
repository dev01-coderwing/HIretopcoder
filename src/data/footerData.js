
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiBookOpen as BookOpen, FiLayers as Calculator, FiFileText as FileText } from "react-icons/fi";

export const footerData={
services: [
  { name: "Dedicated Expert Teams", to: "/services/dedicated-teams" },
  { name: "IT Staff Augmentation", to: "/services/staff-augmentation" },
  { name: "Offshore Development Center", to: "/services/offshore-dev-centre" },
  { name: "Legacy System Modernization", to: "/services/legacy-modernization" },
  { name: "MVP Development", to: "/services/mvp-development" },
  { name: "Scale Your Engineering Team", to: "/hire" },
],
 
 hireRoles : [

  {name:"Hire UI/UX Designer" ,to:"/hire/ui-ux-designer"}, {name:"Hire Full-Stack Dev" ,to:"/hire/full-stack-developer"}, {name:"Hire AI Engineer" ,to:"/hire/ai-ml-engineer"},

  {name:"Hire Mobile Dev" ,to:"/hire/mobile-developer"}, {name:"Hire DevOps Engineer" ,to:"/hire/devops-engineer"}, {name:"Hire No-Code Dev" ,to:"/hire/no-code-developer"},

  {name:"View All Roles →" ,to:"/hire"},

],
 
 companyLinks : [

  { label: "About Us", to: "/company" },

  { label: "Our Portfolio", to: "/case-studies" },

  { label: "Careers", to: "/careers" },

  { label: "How We Vet", to: "/company" },

  { label: "Blog & Insights", to: "/blog" },

  { label: "Privacy Policy", to: "/privacy" },

  { label: "Terms of Service", to: "/terms" },

  { label: "Cookie Policy", to: "/cookies" },

],

 stats : [

  { n: "120+", l: "Experts Available" },

  { n: "500+", l: "Projects Delivered" },

  { n: "98%",  l: "Client Satisfaction" },

  { n: "24hr", l: "Average Match Time" },

],
 
 socials : [{icon:FaLinkedinIn,to:"/"}, {icon:FaXTwitter,to:"/"}, {icon:FaGithub,to:"/"}, {icon:FaInstagram,to:"/"}, {icon:AiOutlineGlobal,to:"/"}],
  resourceLinks :[
  {
    id: 1,
    title: 'Get a Developer Cost Estimate',
    description: 'Calculate your team\'s total cost of engagement',
    to:'/resources/offshore-dev-rates',
    icon: <Calculator />
  },
  {
    id: 2,
    title: 'Engineering Hiring Insights',
    description: 'Monthly guide for CTOs, founders, and tech leads',
     to:'/blog',
     icon:<BookOpen />
  },
  {
    id: 3,
    title: 'Free Project Scoping Template',
    description: 'Define scope before your first expert call',
     to:'/',
     icon:<FileText/>
  },
]
}