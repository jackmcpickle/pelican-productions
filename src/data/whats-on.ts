export type NewsCtaVariant = 'primary' | 'secondary';

export interface WhatsOnNewsItem {
    tag: string;
    date: string;
    title: string;
    body: string;
    facts: string[];
    cta: string;
    href: string;
    ctaVariant: NewsCtaVariant;
}

export interface WhatsOnDateItem {
    when: string;
    what: string;
}

export const whatsOnNews: WhatsOnNewsItem[] = [
    {
        tag: 'Bookings open',
        date: 'Summer 2027',
        title: 'Music Theatre Camp & Spotlight 2027',
        body: 'Join Pelican for an unforgettable summer of singing, dancing, acting and live performance. Two-week MTC for 8–19yrs, one-week Spotlight for 8–16yrs.',
        facts: [
            'MTC: 4–17 Jan 2027 · $690 + GST · Highgate/Fullarton',
            'Spotlight: 4–9 Jan 2027 · $490 + GST · Lower Mitcham/Highgate',
            'Performances at Michael Murray Performance Centre, Westminster School',
        ],
        cta: 'Book now',
        href: 'https://www.trybooking.com/DNSQG',
        ctaVariant: 'primary',
    },
    {
        tag: 'Info session',
        date: 'Thu 17 Sept, 6pm',
        title: 'Europe Tour 2028',
        body: 'Imagine a month-long performing arts tour to Europe and London for performers and their families. Performing at Disneyland Paris, on a Norwegian Cruise Line ship, and workshops at the iconic Pineapple Dance Studios.',
        facts: [
            'Performers 10–24yrs in 2028',
            'Info session at The Nest — book your spot',
        ],
        cta: 'Book info night',
        href: 'https://www.trybooking.com/DPAAF',
        ctaVariant: 'primary',
    },
    {
        tag: 'Auditions',
        date: 'Extended to 30 Aug',
        title: 'CUA40520 Certificate IV in Musical Theatre',
        body: 'Audition submissions now open for the 2027 intake. Accredited training in partnership with Empowerdance PTY LTD RTO 40397.',
        facts: ['Submit your audition online', '2027 intake'],
        cta: 'Audition info',
        href: 'https://www.pelicanproductions.com.au/cert4.html',
        ctaVariant: 'primary',
    },
    {
        tag: 'Announcement',
        date: 'Launching 2027',
        title: 'CUA50220 Diploma of Musical Theatre',
        body: 'Professional training for post-school performers. Train Tuesday to Friday, full time. More information coming soon.',
        facts: ['In partnership with Empowerdance PTY LTD RTO 40397'],
        cta: 'Register your interest',
        href: 'https://forms.gle/v1y9QRgQ3wHDVTz99',
        ctaVariant: 'secondary',
    },
    {
        tag: 'Enrolling',
        date: 'Term 3, 2026',
        title: 'Huge line-up of classes at The Nest',
        body: 'Music Theatre Academy, acting, SMASH dance, Vocal Academy and more. Sports Vouchers Plus accepted on every program.',
        facts: [
            '57A Price Avenue, Mitcham',
            'Reception–Year 9: 2 × $100 vouchers per year',
        ],
        cta: 'Register for Term 3',
        href: 'https://dancestudio-pro.com/online/pelicanproductions',
        ctaVariant: 'primary',
    },
    {
        tag: 'Program filled',
        date: 'Tuesdays 7–9pm',
        title: 'Sing!OZ 2026 adult choir',
        body: 'Your midweek reset. A community choir for ages 18+ where the only requirement is a love of singing. Final concert with live band at Norwood Concert Hall.',
        facts: [
            'Concert: Sat 24 October, Norwood Concert Hall',
            '2026 full — waitlist for 2027',
        ],
        cta: 'Join the waitlist',
        href: 'https://www.pelicanproductions.com.au/contact.html',
        ctaVariant: 'secondary',
    },
];

export const whatsOnDates: WhatsOnDateItem[] = [
    {
        when: '30 Aug',
        what: 'Cert IV Musical Theatre audition submissions close',
    },
    {
        when: '17 Sept',
        what: 'Europe Tour 2028 info session, 6pm at The Nest',
    },
    {
        when: '9–11, 17–18 Oct',
        what: 'MTC & Spotlight auditions (optional — Spotlight preferred day Sat 17 Oct)',
    },
    {
        when: '24 Oct',
        what: 'Sing!OZ final concert, Norwood Concert Hall',
    },
    {
        when: '29 Nov',
        what: 'Program photo and t-shirt pick-up from 4pm, Fullarton Park Community Centre',
    },
    {
        when: '14–16 Dec, 2–3 Jan',
        what: 'Solo rehearsals (scheduled times) · Costume fittings 2–3 Jan',
    },
    {
        when: '4 Jan 2027',
        what: 'Music Theatre Camp and Spotlight begin',
    },
];
