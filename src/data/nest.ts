export const nestMeta = {
    title: 'The Nest | Pelican Productions',
    description:
        'The Nest is the home of Pelican Productions and a creative arts precinct in Lower Mitcham.',
};

export const nestHeroImage =
    'https://www.pelicanproductions.com.au/uploads/3/9/5/6/39560363/thenest-banner_orig.jpg';

export type NestProgram = {
    short: string;
    name: string;
    ages: string;
    times: string[];
    blurb: string;
    more: string;
    cta: string;
};

export const nestPrograms: NestProgram[] = [
    {
        short: 'MTA',
        name: 'Music Theatre Academy',
        ages: '7–18yrs · three age groups',
        times: [
            'Fridays 4.30–8.00pm (8–18yrs, incl. 30min dinner break)',
            'Saturdays 9.30am–12.30pm (7–18yrs)',
        ],
        blurb: 'Build your skills as a triple threat in dance, voice and acting for musical theatre. Students rotate through an hour each of vocal, acting and dance every week — three classes on one night, in one location.',
        more: 'Resident tutors bring a wealth of teaching and performance experience, with special guests covering vocal technique, cabaret and audition technique. Excursions to music theatre productions plus a mid-year and end-of-year showcase.',
        cta: 'Register for Term 3, 2026',
    },
    {
        short: 'VOX',
        name: 'Vocal Academy',
        ages: '7yrs+ · private lessons',
        times: [
            'Mondays, Tuesdays, Thursdays',
            'Lesson times between 3.30 & 8.00pm',
        ],
        blurb: 'Private 30-minute personalised vocal lessons with acclaimed teachers Jemma Allen, Kylie Green and Michael Griffiths.',
        more: 'Bookings are now open for lessons in 2026.',
        cta: 'Book a lesson',
    },
    {
        short: 'GO',
        name: 'SMASH Dance',
        ages: '7–17yrs · recreational',
        times: [
            'Level 1 — Tuesdays 5.15–6.00pm (7–11yrs)',
            'Level 2 — Tuesdays 4.15–5.15pm (12–17yrs)',
        ],
        blurb: 'Learn fresh choreography each week in an upbeat, welcoming class that builds strong dance technique while keeping the focus on fun.',
        more: 'No competitions, no concerts. Just great music, great energy and a supportive space to dance your heart out.',
        cta: 'Register for Term 3, 2026',
    },
    {
        short: 'ACT',
        name: 'Acting',
        ages: '7–17yrs · two groups',
        times: [
            'Tuesdays 4.30–5.15pm (7–11yrs)',
            'Tuesdays 5.15–6.15pm (12–17yrs)',
        ],
        blurb: 'Explore a wide range of theatrical styles, scene work and camera work — acting technique, vocal development, comic and dramatic timing, improvisation.',
        more: "Voice and body integration (the actor's instrument) for stage and screen performance.",
        cta: 'Register for Term 3, 2026',
    },
];
