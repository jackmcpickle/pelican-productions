import { getCollection, type CollectionEntry } from 'astro:content';

export type ProductionEntry = CollectionEntry<'productions'>;

export function hasProductionPage(entry: ProductionEntry): boolean {
    return entry.data.hasPage === true || Boolean(entry.body?.trim());
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
