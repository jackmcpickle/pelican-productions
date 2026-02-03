import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: { kind: 'local' },
    collections: {
        pages: collection({
            label: 'Pages',
            slugField: 'title',
            path: 'src/content/pages/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description' }),
                hero: fields.object(
                    {
                        title: fields.text({ label: 'Title' }),
                        subtitle: fields.text({ label: 'Subtitle' }),
                        image: fields.text({ label: 'Image URL' }),
                    },
                    { label: 'Hero Section' },
                ),
                highlights: fields.array(
                    fields.object({
                        title: fields.text({
                            label: 'Title',
                            validation: { isRequired: true },
                        }),
                        description: fields.text({
                            label: 'Description',
                            validation: { isRequired: true },
                        }),
                        link: fields.text({
                            label: 'Link',
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'Highlights',
                        itemLabel: props =>
                            props.fields.title.value || 'Highlight',
                    },
                ),
                programs: fields.array(
                    fields.object({
                        title: fields.text({
                            label: 'Title',
                            validation: { isRequired: true },
                        }),
                        description: fields.text({
                            label: 'Description',
                            validation: { isRequired: true },
                        }),
                        image: fields.text({
                            label: 'Image URL',
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'Programs',
                        itemLabel: props =>
                            props.fields.title.value || 'Program',
                    },
                ),
                gallery: fields.array(
                    fields.object({
                        src: fields.text({
                            label: 'Image Source',
                            validation: { isRequired: true },
                        }),
                        alt: fields.text({
                            label: 'Alt Text',
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'Gallery',
                        itemLabel: props => props.fields.alt.value || 'Image',
                    },
                ),
                shows: fields.array(
                    fields.object({
                        name: fields.text({
                            label: 'Show Name',
                            validation: { isRequired: true },
                        }),
                        date: fields.text({
                            label: 'Date',
                            validation: { isRequired: true },
                        }),
                        link: fields.text({
                            label: 'Link',
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'Shows',
                        itemLabel: props => props.fields.name.value || 'Show',
                    },
                ),
                faqs: fields.array(
                    fields.object({
                        question: fields.text({
                            label: 'Question',
                            validation: { isRequired: true },
                        }),
                        answer: fields.text({
                            label: 'Answer',
                            multiline: true,
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'FAQs',
                        itemLabel: props =>
                            props.fields.question.value || 'FAQ',
                    },
                ),
                testimonials: fields.array(
                    fields.object({
                        name: fields.text({
                            label: 'Name',
                            validation: { isRequired: true },
                        }),
                        quote: fields.text({
                            label: 'Quote',
                            multiline: true,
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'Testimonials',
                        itemLabel: props =>
                            props.fields.name.value || 'Testimonial',
                    },
                ),
                contact: fields.object(
                    {
                        heading: fields.text({ label: 'Heading' }),
                        description: fields.text({
                            label: 'Description',
                            multiline: true,
                        }),
                    },
                    { label: 'Contact Section' },
                ),
                team: fields.array(
                    fields.object({
                        title: fields.text({
                            label: 'Group Title',
                            validation: { isRequired: true },
                        }),
                        members: fields.array(
                            fields.object({
                                name: fields.text({
                                    label: 'Name',
                                    validation: { isRequired: true },
                                }),
                                role: fields.text({
                                    label: 'Role',
                                    validation: { isRequired: true },
                                }),
                                image: fields.text({
                                    label: 'Image URL',
                                    validation: { isRequired: true },
                                }),
                                credentials: fields.array(
                                    fields.text({ label: 'Credential' }),
                                    { label: 'Credentials' },
                                ),
                            }),
                            {
                                label: 'Members',
                                itemLabel: props =>
                                    props.fields.name.value || 'Member',
                            },
                        ),
                    }),
                    {
                        label: 'Team Groups',
                        itemLabel: props => props.fields.title.value || 'Group',
                    },
                ),
                content: fields.markdoc({ label: 'Content' }),
            },
        }),
        blog: collection({
            label: 'Blog Posts',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description' }),
                pubDate: fields.text({
                    label: 'Publication Date',
                    validation: { isRequired: true },
                }),
                category: fields.text({ label: 'Category' }),
                coverImage: fields.text({ label: 'Cover Image URL' }),
                content: fields.markdoc({ label: 'Content' }),
            },
        }),
    },
});
