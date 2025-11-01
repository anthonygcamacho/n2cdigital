import type { NavLink, Service, Stat, Feature, CaseStudy, Testimonial, TeamMember } from './types';

// Icons (Heroicons)
// const SearchIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
// const ShareIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>;
// const ChartBarIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
// const CodeIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
// const PencilAltIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
// const MailIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
// const DeviceMobileIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
// const ShieldCheckIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 22a12.02 12.02 0 009-1.056c.343-.344.665-.72.955-1.114a12.016 12.016 0 00-8.944-11.888z" /></svg>;
// const MicrophoneIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-14 0m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
// const CogIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
// const ChatAltDotsIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
// const BriefcaseIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;


// const CheckCircleIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
// const LightBulbIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
// const UsersIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 1.803" /></svg>;

// Social Icons
// const FacebookIcon = <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>;
// const InstagramIcon = <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/></svg>;
// const LinkedinIcon = <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>;
// const YoutubeIcon = <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>;


export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Case Studies', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Career', href: '#' },
  { name: 'Contact Us', href: '#' },
];

export const SOCIAL_LINKS = [
    // { href: '#', icon: FacebookIcon },
    // { href: '#', icon: InstagramIcon },
    // { href: '#', icon: LinkedinIcon },
    // { href: '#', icon: YoutubeIcon },
    { href: '#' },
    { href: '#' },
    { href: '#' },
    { href: '#' },
]

export const SERVICES: Service[] = [
  { title: 'SEO', description: 'Boost your visibility on search engines and attract organic traffic.' },
  { title: 'Social Media Marketing', description: 'Engage your audience and build a strong brand presence on social media.' },
//   { title: 'PPC', description: 'Drive targeted traffic and generate leads with effective pay-per-click campaigns.' },
//   { title: 'Web Development', description: 'Create stunning, responsive, and user-friendly websites that convert.' },
//   { title: 'Content Marketing', description: 'Attract and retain customers with valuable, relevant, and consistent content.' },
//   { title: 'Email Marketing', description: 'Nurture leads and build customer loyalty with personalized email campaigns.' },
//   { title: 'App Store Optimization', description: 'Improve your app\'s visibility and increase downloads in the app stores.' },
//   { title: 'Online Reputation', description: 'Manage and protect your brand\'s online image and reputation.' },
//   { title: 'Voice Agents', description: 'Deploy intelligent voice agents to automate customer interactions and provide 24/7 support.' },
//   { title: 'Custom AI Automations', description: 'Streamline your business processes with tailor-made AI automations for maximum efficiency.' },
//   { title: 'AI Chat', description: 'Engage website visitors in real-time with smart AI chatbots that boost conversions.' },
//   { title: 'AI Consulting', description: 'Leverage our expertise to integrate AI into your marketing strategy and unlock new growth.' },
//   { icon: SearchIcon, title: 'SEO', description: 'Boost your visibility on search engines and attract organic traffic.' },
//   { icon: ShareIcon, title: 'Social Media Marketing', description: 'Engage your audience and build a strong brand presence on social media.' },
//   { icon: ChartBarIcon, title: 'PPC', description: 'Drive targeted traffic and generate leads with effective pay-per-click campaigns.' },
//   { icon: CodeIcon, title: 'Web Development', description: 'Create stunning, responsive, and user-friendly websites that convert.' },
//   { icon: PencilAltIcon, title: 'Content Marketing', description: 'Attract and retain customers with valuable, relevant, and consistent content.' },
//   { icon: MailIcon, title: 'Email Marketing', description: 'Nurture leads and build customer loyalty with personalized email campaigns.' },
//   { icon: DeviceMobileIcon, title: 'App Store Optimization', description: 'Improve your app\'s visibility and increase downloads in the app stores.' },
//   { icon: ShieldCheckIcon, title: 'Online Reputation', description: 'Manage and protect your brand\'s online image and reputation.' },
//   { icon: MicrophoneIcon, title: 'Voice Agents', description: 'Deploy intelligent voice agents to automate customer interactions and provide 24/7 support.' },
//   { icon: CogIcon, title: 'Custom AI Automations', description: 'Streamline your business processes with tailor-made AI automations for maximum efficiency.' },
//   { icon: ChatAltDotsIcon, title: 'AI Chat', description: 'Engage website visitors in real-time with smart AI chatbots that boost conversions.' },
//   { icon: BriefcaseIcon, title: 'AI Consulting', description: 'Leverage our expertise to integrate AI into your marketing strategy and unlock new growth.' },
];

export const STATS: Stat[] = [
    { value: 1200, label: 'Happy Clients', suffix: '+' },
    { value: 2500, label: 'Projects Done', suffix: '+' },
    { value: 10, label: 'Years of Experience', suffix: '+' },
    { value: 50, label: 'Professionals', suffix: '+' },
];

export const FEATURES: Feature[] = [
    { title: 'Result-Oriented Approach', description: 'We focus on strategies that deliver measurable results and a high return on investment.' },
    { title: 'Innovative Strategies', description: 'Our team stays ahead of industry trends to provide cutting-edge solutions.' },
    { title: 'Experienced Team', description: 'Work with a dedicated team of certified digital marketing experts.' },
    // { icon: CheckCircleIcon, title: 'Result-Oriented Approach', description: 'We focus on strategies that deliver measurable results and a high return on investment.' },
    // { icon: LightBulbIcon, title: 'Innovative Strategies', description: 'Our team stays ahead of industry trends to provide cutting-edge solutions.' },
    // { icon: UsersIcon, title: 'Experienced Team', description: 'Work with a dedicated team of certified digital marketing experts.' },
];

export const CASE_STUDIES: CaseStudy[] = [
    { logoUrl: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg', alt: 'Transistor' },
    { logoUrl: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg', alt: 'Reform' },
    { logoUrl: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg', alt: 'Tuple' },
    { logoUrl: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg', alt: 'SavvyCal' },
    { logoUrl: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg', alt: 'Statamic' },
    { logoUrl: 'https://tailwindui.com/img/logos/158x48/workcation-logo-gray-400.svg', alt: 'Workcation' },
];

export const TESTIMONIALS: Testimonial[] = [
    { quote: 'Working with this agency has been a game-changer for our business. Their expertise in SEO and PPC is unparalleled.', author: 'John Doe', role: 'CEO, Tech Solutions', imageUrl: 'https://picsum.photos/100/100?random=10' },
    { quote: 'The team is incredibly responsive and creative. Our social media engagement has skyrocketed since we partnered with them.', author: 'Jane Smith', role: 'Marketing Director, Fashion Retail', imageUrl: 'https://picsum.photos/100/100?random=11' },
    { quote: 'Their data-driven approach and transparent reporting gave us the confidence we needed. Highly recommended!', author: 'Sam Wilson', role: 'Founder, Eco Goods', imageUrl: 'https://picsum.photos/100/100?random=12' },
];

export const TEAM_MEMBERS: TeamMember[] = [
    { imageUrl: 'https://picsum.photos/200/200?random=20', name: 'Alex Johnson', role: 'Founder & CEO' },
    { imageUrl: 'https://picsum.photos/200/200?random=21', name: 'Maria Garcia', role: 'Head of SEO' },
    { imageUrl: 'https://picsum.photos/200/200?random=22', name: 'David Chen', role: 'Lead Developer' },
    { imageUrl: 'https://picsum.photos/200/200?random=23', name: 'Sophia Lee', role: 'Social Media Manager' },
];
