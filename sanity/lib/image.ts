import imageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '@/sanity/env';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => builder.image(source);