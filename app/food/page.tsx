import type { Metadata } from 'next';
import FoodClient from './FoodClient';

export const metadata: Metadata = {
  title: 'Food of Kutch | Famous Dishes & Culinary Guide',
  description: 'Explore the unique flavors of Kutch. From the famous Kutchi Dabeli to traditional Thalis and sweet Gulab Pak. A foodie\'s guide to the White Desert.',
  keywords: ['Kutchi food', 'Food of Kutch', 'Kutchi Dabeli', 'Kutchi Thali', 'Best food in Bhuj', 'Kutch cuisine', 'Vegetarian food Kutch'],
  openGraph: {
    title: 'Food of Kutch | Famous Dishes & Local Cuisine',
    description: 'Explore the unique flavors of Kutch. From Dabeli to traditional Thalis.',
    images: ['/images/food/food-hero.webp'],
  },
};

export default function FoodPage() {
  return <FoodClient />;
}
