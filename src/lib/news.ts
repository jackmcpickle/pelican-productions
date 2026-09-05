import { getCollection, type CollectionEntry } from 'astro:content';

export type NewsCtaVariant = 'primary' | 'secondary';
export type NewsEntry = CollectionEntry<'news'>;

function bySortDateDesc(a: NewsEntry, b: NewsEntry): number {
    return b.data.sortDate.getTime() - a.data.sortDate.getTime();
}

export async function getNews(): Promise<NewsEntry[]> {
    const items = await getCollection('news');
    return items.sort(bySortDateDesc);
}

export async function getFeaturedNews(): Promise<NewsEntry[]> {
    return (await getNews()).filter((item) => item.data.featured);
}

export async function getTickerItems(): Promise<string[]> {
    return (await getNews())
        .filter((item) => item.data.ticker)
        .map((item) => item.data.ticker as string);
}
