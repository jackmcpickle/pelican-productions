export const homeMeta = {
    title: 'Pelican Productions',
    description:
        'Classes, camps and full-scale musicals for young performers across South Australia. Professional tutors, a proper stage, and a flock that cheers loudest for each other.',
};

const UPLOADS =
    'https://www.pelicanproductions.com.au/uploads/3/9/5/6/39560363';

export const homeImages = {
    logo: '/images/logo.jpg',
    nestBanner: `${UPLOADS}/thenest-banner_orig.jpg`,
    mtcPerformance: `${UPLOADS}/mtc-2023_orig.jpg`,
    mtcCast: `${UPLOADS}/mtc-2023-2_orig.jpg`,
    inTheHeights: `${UPLOADS}/ith-5_orig.jpg`,
    musicalProduction: `${UPLOADS}/5963801.jpg`,
    sportsVouchers: `${UPLOADS}/sports-vouchers-plus-1920x400-banner-generic_orig.jpg`,
};

export const tickerItems = [
    'MTC & Spotlight 2027 bookings open',
    'Europe Tour 2028 info night · 17 Sept',
    'Cert IV auditions extended to 30 Aug',
    'Diploma of Musical Theatre launches 2027',
    'Term 3 classes at The Nest now enrolling',
];

export const newsItems = [
    {
        tag: 'Bookings open',
        date: 'Jan 2027',
        title: 'Music Theatre Camp & Spotlight 2027',
        body: 'Two weeks (MTC, 8–19yrs) or one week (Spotlight, 8–16yrs) of singing, dancing, acting and a fully staged finale. 2026 sold out in record time.',
        cta: 'Book now',
        href: 'https://www.trybooking.com/DNSQG',
    },
    {
        tag: 'Info session',
        date: '17 Sept, 6pm',
        title: 'Europe Tour 2028',
        body: 'A month-long performing arts tour to Europe and London — Disneyland Paris, a Norwegian Cruise Line ship and workshops at Pineapple Dance Studios. Performers 10–24yrs.',
        cta: 'Book your spot',
        href: 'https://www.trybooking.com/DPAAF',
    },
    {
        tag: 'Training',
        date: '2027 intake',
        title: 'Cert IV & Diploma of Musical Theatre',
        body: 'Accredited CUA40520 Cert IV auditions open now, and the new CUA50220 Diploma launches 2027 — full-time professional training, Tuesday to Friday. With Empowerdance RTO 40397.',
        cta: 'Audition info',
        href: 'https://www.pelicanproductions.com.au/cert4.html',
    },
];

export const stats = [
    { label: 'Making theatre since', value: '2004', variant: 'flame' as const },
    {
        label: 'Full-scale musicals staged',
        value: '20+',
        variant: 'flame' as const,
    },
    {
        label: 'Performer age range',
        value: '7–19',
        variant: 'flame' as const,
    },
    {
        label: 'Alumni on stage in',
        value: 'West End · Broadway tours · Opera Australia',
        variant: 'violet' as const,
    },
];

export const nestPrograms = [
    {
        short: 'MTA',
        name: 'Music Theatre Academy',
        ages: '7–18yrs · three age groups',
        when: 'Fridays 4.30–8.00pm · Saturdays 9.30am–12.30pm',
        blurb: 'Become a triple threat. Rotate through an hour each of vocal, acting and dance every week, with guest artists, excursions and two showcases a year.',
    },
    {
        short: 'VOX',
        name: 'Vocal Academy',
        ages: '7yrs+ · private lessons',
        when: 'Mon / Tue / Thu · 3.30–8.00pm',
        blurb: '30-minute personalised lessons with acclaimed teachers Jemma Allen, Kylie Green and Michael Griffiths.',
    },
    {
        short: 'GO',
        name: 'SMASH Dance',
        ages: '7–17yrs · two levels',
        when: 'Tuesdays · L1 5.15–6.00pm · L2 4.15–5.15pm',
        blurb: 'Fresh choreography every week in an upbeat, welcoming class. No competitions, no concerts — just great music and a space to dance your heart out.',
    },
    {
        short: 'ACT',
        name: 'Acting',
        ages: '7–17yrs · two groups',
        when: 'Tuesdays · 4.30–5.15pm (7–11) · 5.15–6.15pm (12–17)',
        blurb: "Scene work, camera work, improvisation, comic and dramatic timing — the whole actor's instrument, for stage and screen.",
    },
];

export const shows = [
    { year: '2025', name: 'We Will Rock You' },
    { year: '2024', name: 'Heathers' },
    { year: '2024', name: 'Newsies' },
    { year: '2023', name: 'Legally Blonde' },
    { year: '2023', name: 'Frozen JR' },
    { year: '2021', name: 'School of Rock' },
    { year: '2021', name: 'Chicago' },
    { year: '2020', name: 'In the Heights' },
    { year: '2018', name: 'Annie JR' },
    { year: '2017', name: 'Bring It On' },
    { year: '2017', name: 'Seussical' },
    { year: '2015', name: 'Chitty Chitty Bang Bang' },
    { year: '2014', name: 'The Little Mermaid JR' },
    { year: '2013', name: 'Grease' },
];

export const campBookingUrl = 'https://www.trybooking.com/DNSQG';

export const sportsVoucherFormUrl =
    'https://www.sportsvouchers.sa.gov.au/2025-Sports-Voucher-Registration-Form.pdf';
