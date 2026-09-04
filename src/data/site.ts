export const siteInfo = {
    name: 'Pelican Productions',
    tagline: 'Inspiring young performers across South Australia.',
    address: '32 Kyre Avenue Kingswood SA 5062 Australia',
    nestAddress: 'The Nest · 57A Price Avenue, Mitcham SA',
    photoCredit: 'Photography Oliver Toth, Accent Photography',
    phone: '0407 619 925',
    email: 'contact@pelicanproductions.com.au',
    url: 'https://pelicanproductions.com.au',
};

export type NavId = 'whats-on' | 'nest' | 'camps' | 'musicals' | 'about';

export const navigation: { id: NavId; label: string; href: string }[] = [
    { id: 'whats-on', label: "What's on", href: '/whats-on' },
    { id: 'nest', label: 'The Nest', href: '/the-nest' },
    { id: 'camps', label: 'Summer camps', href: '/summer-camps' },
    { id: 'musicals', label: 'Musicals', href: '/musicals' },
    { id: 'about', label: 'About', href: '/about' },
];

export const portalUrl =
    'https://dancestudio-pro.com/online/pelicanproductions';

export const facebookUrl =
    'https://www.facebook.com/PelicanProductionsSA/?ref=bookmarks';

export const campsBookingUrl = 'https://www.trybooking.com/DNSQG';

export const footerMenu = [
    { label: "What's on", href: '/whats-on' },
    { label: 'The Nest', href: '/the-nest' },
    { label: 'Summer camps', href: '/summer-camps' },
    { label: 'Musicals', href: '/musicals' },
    { label: 'About', href: '/about' },
];

export const quickLinks = [
    { label: 'Facebook', href: facebookUrl },
    { label: 'Privacy', href: '/pelican-productions-privacy-policy' },
];

export const socialLinks = [
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/c/PelicanProductions2005',
    },
    {
        label: 'Facebook',
        href: facebookUrl,
    },
];

