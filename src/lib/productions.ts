import { getCollection, type CollectionEntry } from 'astro:content';

export type ProductionEntry = CollectionEntry<'productions'>;

export function hasProductionPage(entry: ProductionEntry): boolean {
    if (entry.data.pageSlug) {
        return false;
    }

    return (
        entry.data.hasPage === true ||
        Boolean(entry.body?.trim()) ||
        Boolean(entry.data.reviews?.length) ||
        Boolean(entry.data.gallery?.length)
    );
}

export function getProductionHref(entry: ProductionEntry): string | undefined {
    if (entry.data.pageSlug) {
        return `/musicals/${entry.data.pageSlug}`;
    }

    if (hasProductionPage(entry)) {
        return `/musicals/${entry.id}`;
    }

    return undefined;
}

function byOrder(a: ProductionEntry, b: ProductionEntry): number {
    return a.data.order - b.data.order;
}

export async function getProductions(): Promise<ProductionEntry[]> {
    const items = await getCollection('productions');
    return items.sort(byOrder);
}

export async function getFeaturedProductions(): Promise<ProductionEntry[]> {
    return (await getProductions()).filter((item) => item.data.featured);
}

export async function getProductionPages(): Promise<ProductionEntry[]> {
    return (await getProductions()).filter(hasProductionPage);
}

export async function getProductionBySlug(
    slug: string,
): Promise<ProductionEntry | undefined> {
    return (await getProductionPages()).find((entry) => entry.id === slug);
}
