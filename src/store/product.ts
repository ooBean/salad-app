import quinoaFruitSalad from '@/assets/images/salad/quinoa-fruit-salad.png';
import tropicalFruitSalad from '@/assets/images/salad/tropical-fruit-salad.png';
import melonFruitSalad from '@/assets/images/salad/melon-fruit-salad.png';
import avocadoChickenSalad from '@/assets/images/salad/avocado-chicken-salad.png';
import cheeseSalad from '@/assets/images/salad/cheese-salad.png';
import chickenBreastSalad from '@/assets/images/salad/chicken-breast-salad.png';
import orangeAvocadoSalad from '@/assets/images/salad/orange-avocado-salad.png';
import salmonSalad from '@/assets/images/salad/salmon-salad.png';

// 1. 定义产品标签的枚举
export enum ProductTag {
  Hottest = 'Hottest',
  Popular = 'Popular',
  NewCombo = 'New Combo',
}

// 2. 定义产品分类的枚举
export enum ProductCategory {
  All = 'All',
  Recommended = 'Recommended Combo',
  Salad = 'Salad Combo',
  Strawberry = 'Strawberry',
  Meat = 'Meat',
  Goog = 'Goog',
}

// 3. 定义一个清晰的 Product 类型
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  bgColor: string;
  tag: ProductTag; // 使用枚举类型
  classify: string[]; // 使用字符串数组
  categories: ProductCategory[]; // 使用枚举数组
};

// 4. 使用新的类型和枚举来构建数据
export const hottestProducts: Product[] = [
  { id: 1, name: 'Quinoa fruit salad', price: 10000, image: quinoaFruitSalad, bgColor: '#F0FBF6', tag: ProductTag.Hottest, classify: ['watermelon', 'fruit', 'cherry', 'apple'], categories: [ProductCategory.Recommended, ProductCategory.Salad] },
  { id: 2, name: 'Tropical fruit salad', price: 10000, image: tropicalFruitSalad, bgColor: '#F0F8FF', tag: ProductTag.Popular, classify: ['strawberry', 'pineapple', 'orange', 'fruit'], categories: [ProductCategory.Recommended, ProductCategory.Salad, ProductCategory.Strawberry] },
  { id: 3, name: 'Melon fruit salad', price: 10000, image: melonFruitSalad, bgColor: '#FFF0E5', tag: ProductTag.NewCombo, classify: ['strawberry', 'fruit', 'blueberry', 'kiwi'], categories: [ProductCategory.Strawberry] },
  { id: 4, name: 'Avocado chicken', price: 10000, image: avocadoChickenSalad, bgColor: '#F5F5F5', tag: ProductTag.NewCombo, classify: ['tofu', 'bagie'], categories: [ProductCategory.Recommended] },
  { id: 5, name: 'Cheese salad', price: 10000, image: cheeseSalad, bgColor: '#EDFAFA', tag: ProductTag.Popular, classify: ['cheese', 'veg', 'tomato'], categories: [ProductCategory.Salad] },
  { id: 6, name: 'Chicken breast', price: 10000, image: chickenBreastSalad, bgColor: '#FEFCF1', tag: ProductTag.Hottest, classify: ['goog', 'chicken', 'breast', 'veg'], categories: [ProductCategory.Meat, ProductCategory.Salad, ProductCategory.Goog] },
  { id: 7, name: 'Orange avocado', price: 10000, image: orangeAvocadoSalad, bgColor: '#FDF4F4', tag: ProductTag.Popular, classify: ['orange', 'fruit'], categories: [ProductCategory.Salad] },
  { id: 8, name: 'Salmon salad', price: 10000, image: salmonSalad, bgColor: '#F1EFF7', tag: ProductTag.NewCombo, classify: ['fish', 'cucumber'], categories: [ProductCategory.Meat] },
];
