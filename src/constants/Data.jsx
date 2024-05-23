import { BriefcaseIcon, DollarIcon, DribbleIcon, FacebookIcon, GearIcon, GithubIcon, InstagramIcon, PenIcon, 
    PresentationIcon, ProductHuntIcon, RedditIcon, ScaleIcon, TwitterIcon, YoutubeIcon 
} from "../assets/Icons";
import { blackman, blackwoman, blackwoman2, whiteman, whitewoman } from "../assets/pngs";


export const navLinks = [
    { href: 'hero', text: 'Hero' },
    { href: 'company', text: 'Company' },
    { href: 'features', text: 'Features' },
    { href: 'testimonials', text: 'Testimonials' },
    { href: 'cta', text: 'CTA' },
    { href: 'footerSection', text: 'FooterSection' },
];

export const settingsList = [
    { href: '#', text: 'Dashboard' },
    { href: '#', text: 'Price' },
    { href: '#', text: 'Contact' },
];

export const themes = [
    {text: 'sky', color: ' bg-blue-700', theme: 'dark:theme-dark bg-skin-fill' },
    {text: 'flame', color: ' bg-red-700', theme: 'theme-flame-light dark:theme-flame-dark'},
    {text: 'moss', color: ' bg-green-700', theme: 'theme-moss-light dark:theme-moss-dark'},
    {text: 'velvet', color: ' bg-purple-700', theme: 'theme-velvet-light dark:theme-velvet-dark'},
    {text: 'stone', color: ' bg-stone-700', theme: 'theme-stone-light dark:theme-stone-dark'},
];    

export const featuredCompanies = [
    { icon: <YoutubeIcon />, href: "#" },
    { icon: <ProductHuntIcon />, href: "#" },
    { icon: <RedditIcon />, href: "#" }
];

export const features = [
    {
        title: 'Marketing', 
        description: 'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
        icon: <PresentationIcon/>, 
    },
    {
        title: 'Legal', 
        description: 'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
        icon: <ScaleIcon/>, 
    },
    {
        title: 'Business Automation', 
        description: 'Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.',
        icon: <BriefcaseIcon/>, 
    },
    {
        title: 'Finance', 
        description: 'Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.',
        icon: <DollarIcon/>, 
    },
    {
        title: 'Enterprise Design', 
        description: 'Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.',
        icon: <PenIcon/>, 
    },
    {
        title: 'Operations', 
        description: 'Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.',
        icon: <GearIcon/>, 
    },
];

export const footerLinks = [
    {
      title: "Resources",
      links: [
        { text: "Creativa", href: "https://github.com/igbokwe-chibueze" },
        { text: "Tailwind CSS", href: "https://tailwindcss.com/" }
      ]
    },
    {
      title: "Follow us",
      links: [
        { text: "Github", href: "https://github.com/igbokwe-chibueze" },
        { text: "Twitter", href: "https://twitter.com/chisteeldomain" },
        { text: "Instagram", href: "https://www.instagram.com/igbokwe_chibueze_o/" }
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "#" },
        { text: "Terms & Conditions", href: "#" }
      ]
    },
];

export const socialMediaLinks = [
    { icon: <FacebookIcon/>, url: "#" },
    { icon: <InstagramIcon/>, url: "https://www.instagram.com/igbokwe_chibueze_o/" },
    { icon: <TwitterIcon/>, url: "https://twitter.com/chisteeldomain" },
    { icon: <GithubIcon/>, url: "https://github.com/igbokwe-chibueze" },
    { icon: <DribbleIcon/>, url: "#" }
];

export const testimonialsData = [
    {
      text: " Creativa has been a game-changer for our development process. The extensive library of predesigned components and pages, from simple forms to complex dashboards, has made building our SaaS applications faster and easier. ",
      author: "Mwangi Njoroge",
      position: "CEO at InnovateTech",
      image: blackman,
    },
    {
      text: "The versatility and ease of use of Creativa are unmatched. It has streamlined our development process, making it easier to create stunning applications quickly.",
      author: "Sophia Carter",
      position: "CTO at FutureSoft",
      image: whitewoman,
    },
    {
      text: "Creativa has revolutionized our approach to web design. The pre-built components are incredibly intuitive and save us so much time. Highly recommend for any development team.",
      author: "Chioma Adesina",
      position: "Lead Developer at WebWave",
      image: blackwoman,
    },
    {
      text: "We integrated Creativa into our workflow, and the results have been phenomenal. The templates are modern and fully customizable, making our projects stand out.",
      author: "David Johnson",
      position: "Product Manager at NexaWorks",
      image: whiteman,
    },
    {
      text: "Creativa offers an exceptional library of components that have significantly reduced our development time. It's a game-changer for our team's productivity.",
      author: "Amina Okoro",
      position: "Head of Development at CodeCrafters",
      image: blackwoman2,
    },
  ];