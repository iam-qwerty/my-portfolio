
import { PortableTextBlock } from '@portabletext/types';

export interface Post {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    mainImage?: {
        asset: {
            url: string;
        };
    };
    excerpt?: string; // Made optional as it wasn't used in page.tsx
    categories?: string[];
    _createdAt: string; // Added creation timestamp
    authorName?: string; // Added author name (optional based on usage)
    body?: PortableTextBlock[]; // Added body for Portable Text (optional)
}
