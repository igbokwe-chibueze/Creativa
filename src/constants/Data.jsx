import { BriefcaseIcon, DollarIcon, GearIcon, PenIcon, PresentationIcon, ProductHuntIcon, RedditIcon, ScaleIcon, YoutubeIcon } from "../assets/Icons";


export const navLinks = [
    { href: '#', text: 'Home' },
    { href: '#', text: 'Company' },
    { href: '#', text: 'Marketplace' },
    { href: '#', text: 'Features' },
    { href: '#', text: 'Team' },
    { href: '#', text: 'Contact' },
];

export const settingsList = [
    { href: '#', text: 'Dashboard' },
    { href: '#', text: 'Price' },
    { href: '#', text: 'Contact' },
];

export const themes = [
    {text: 'blue', color: ' bg-blue-400' },
    {text: 'red', color: ' bg-red-400'},
    {text: 'green', color: ' bg-green-400'},
    {text: 'yellow', color: ' bg-yellow-400'},
    {text: 'purple', color: ' bg-purple-400'},
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