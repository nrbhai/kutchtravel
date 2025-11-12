import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog - Travel Stories & Guides | TravelKutch',
  description: 'Discover insider tips, travel guides, and inspiring stories from Kutch. Learn about destinations, culture, food, and photography in this magical region of Gujarat.',
  keywords: 'Kutch blog, travel guide, Kutch stories, Gujarat travel, White Rann guide, Kutch culture, travel tips',
};

export default function BlogPage() {
  return <BlogClient />;
}
