import { collection, config, fields } from '@keystatic/core';

const optionalText = (label: string, multiline = false) =>
  fields.text({ label, multiline, validation: { isRequired: false } });

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: optionalText('Description', true),
        hero: fields.object(
          {
            title: optionalText('Title'),
            subtitle: optionalText('Subtitle', true),
            image: optionalText('Image'),
          },
          { label: 'Hero' }
        ),
        highlights: fields.array(
          fields.object(
            {
              title: fields.text({ label: 'Title' }),
              description: fields.text({ label: 'Description', multiline: true }),
              link: fields.text({ label: 'Link' }),
            },
            { label: 'Highlight' }
          ),
          {
            label: 'Highlights',
            itemLabel: (item) => item.fields.title.value || 'Highlight',
          }
        ),
        programs: fields.array(
          fields.object(
            {
              title: fields.text({ label: 'Title' }),
              description: fields.text({ label: 'Description', multiline: true }),
              image: fields.text({ label: 'Image' }),
            },
            { label: 'Program' }
          ),
          {
            label: 'Programs',
            itemLabel: (item) => item.fields.title.value || 'Program',
          }
        ),
        gallery: fields.array(
          fields.object(
            {
              src: fields.text({ label: 'Image Path' }),
              alt: fields.text({ label: 'Alt Text' }),
            },
            { label: 'Image' }
          ),
          {
            label: 'Gallery',
            itemLabel: (item) => item.fields.alt.value || 'Image',
          }
        ),
        shows: fields.array(
          fields.object(
            {
              name: fields.text({ label: 'Name' }),
              date: fields.text({ label: 'Date' }),
              link: fields.text({ label: 'Link' }),
            },
            { label: 'Show' }
          ),
          {
            label: 'Shows',
            itemLabel: (item) => item.fields.name.value || 'Show',
          }
        ),
        faqs: fields.array(
          fields.object(
            {
              question: fields.text({ label: 'Question' }),
              answer: fields.text({ label: 'Answer', multiline: true }),
            },
            { label: 'FAQ' }
          ),
          {
            label: 'FAQs',
            itemLabel: (item) => item.fields.question.value || 'FAQ',
          }
        ),
        testimonials: fields.array(
          fields.object(
            {
              name: fields.text({ label: 'Name' }),
              quote: fields.text({ label: 'Quote', multiline: true }),
            },
            { label: 'Testimonial' }
          ),
          {
            label: 'Testimonials',
            itemLabel: (item) => item.fields.name.value || 'Testimonial',
          }
        ),
        contact: fields.object(
          {
            heading: optionalText('Heading'),
            description: optionalText('Description', true),
          },
          { label: 'Contact' }
        ),
        team: fields.array(
          fields.object(
            {
              title: fields.text({ label: 'Group Title' }),
              members: fields.array(
                fields.object(
                  {
                    name: fields.text({ label: 'Name' }),
                    role: fields.text({ label: 'Role' }),
                    image: fields.text({ label: 'Image' }),
                    credentials: fields.array(fields.text({ label: 'Credential' }), {
                      label: 'Credentials',
                      itemLabel: (item) => item.value || 'Credential',
                    }),
                  },
                  { label: 'Member' }
                ),
                {
                  label: 'Members',
                  itemLabel: (item) => item.fields.name.value || 'Member',
                }
              ),
            },
            { label: 'Team Group' }
          ),
          {
            label: 'Team',
            itemLabel: (item) => item.fields.title.value || 'Team Group',
          }
        ),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: optionalText('Description', true),
        pubDate: fields.text({ label: 'Publish Date' }),
        category: optionalText('Category'),
        coverImage: optionalText('Cover Image'),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
