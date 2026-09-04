export function isExternal(href: string): boolean {
    return href.startsWith('http');
}
