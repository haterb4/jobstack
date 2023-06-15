export interface NavigationLink {
    name: string,
    href: string,
    dropdown?: boolean,
    sublinks?: {
        header?: string;
        links: NavigationLink[];
    }[]
}