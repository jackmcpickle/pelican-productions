export const campsBookingUrl = 'https://www.trybooking.com/DNSQG';

export const campsUploadsBase =
    'https://www.pelicanproductions.com.au/uploads/3/9/5/6/39560363';

export type CampFact = {
    label: string;
    value: string;
};

export type Camp = {
    id: 'mtc' | 'spotlight';
    variant: 'ink' | 'flame';
    buttonVariant: 'primary' | 'inverse';
    length: string;
    name: string;
    blurb: string;
    facts: CampFact[];
};

export type CampDate = {
    when: string;
    what: string;
};

export type PastCampPhoto = {
    src: string;
    alt: string;
};

export const camps: Camp[] = [
    {
        id: 'mtc',
        variant: 'ink',
        buttonVariant: 'primary',
        length: 'Two-week intensive',
        name: 'Music Theatre Camp',
        blurb: 'An intensive two-week day camp for performers aged 8–19 with training in singing, dancing and acting, culminating in a music theatre extravaganza with professional tutors and exceptional technical production.',
        facts: [
            { label: 'Dates', value: '4–17 Jan 2027' },
            { label: 'Ages', value: '8–19yrs' },
            { label: 'Cost', value: '$690 + GST' },
            { label: 'Rehearsals', value: 'Highgate / Fullarton' },
        ],
    },
    {
        id: 'spotlight',
        variant: 'flame',
        buttonVariant: 'inverse',
        length: 'One-week intensive',
        name: 'Spotlight',
        blurb: 'An intensive one-week day camp for performers aged 8–16 with training in singing, dancing and acting, culminating in a spectacular music theatre performance. The perfect first camp.',
        facts: [
            { label: 'Dates', value: '4–9 Jan 2027' },
            { label: 'Ages', value: '8–16yrs' },
            { label: 'Cost', value: '$490 + GST' },
            { label: 'Rehearsals', value: 'Lower Mitcham / Highgate' },
        ],
    },
];

export const campDates: CampDate[] = [
    { when: '9, 10, 11 Oct', what: 'MTC auditions (optional)' },
    {
        when: '17, 18 Oct',
        what: 'MTC auditions · Spotlight preferred audition day Sat 17 Oct',
    },
    {
        when: 'Sun 29 Nov',
        what: 'Program photo and t-shirt pick-up from 4pm, Fullarton Park Community Centre',
    },
    { when: '14, 15, 16 Dec', what: 'Solo rehearsals (scheduled times)' },
    { when: '2, 3 Jan', what: 'Solo rehearsals and costume fittings' },
    { when: '4 Jan 2027', what: 'Camps begin' },
    {
        when: '9 & 17 Jan',
        what: 'Performances at Michael Murray Performance Centre, Westminster School',
    },
];

export const pastCampPhotos: PastCampPhoto[] = [
    {
        src: `${campsUploadsBase}/mtc-2023_orig.jpg`,
        alt: 'MTC 2023',
    },
    {
        src: `${campsUploadsBase}/0009-bro.jpg`,
        alt: 'Camp performance',
    },
    {
        src: `${campsUploadsBase}/mtc-2023-2_orig.jpg`,
        alt: 'MTC 2023 finale',
    },
];

export const campsHeroImage = `${campsUploadsBase}/mtc-2023-2_orig.jpg`;
