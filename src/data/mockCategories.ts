import type { CategoryType } from "@/types/CategoryType";

export const MOCK_CATEGORIES: CategoryType[] = [
    { id: 1, name: "Електроніка", slug: "electronics", url: "https://loremflickr.com/500/300/laptop,smartphone?lock=1", parentId: null },
    { id: 2, name: "Одяг", slug: "clothing", url: "https://loremflickr.com/500/300/fashion,clothes?lock=1", parentId: null },
    { id: 3, name: "Книги", slug: "books", url: "https://loremflickr.com/500/300/books,library?lock=1", parentId: null },
    { id: 4, name: "Спорт", slug: "sports", url: "https://loremflickr.com/500/300/fitness,sports?lock=1", parentId: null },
    { id: 5, name: "Дім та сад", slug: "home-and-garden", url: "https://loremflickr.com/500/300/house,garden?lock=1", parentId: null },
    { id: 6, name: "Краса та здоров'я", slug: "beauty-health", url: "https://loremflickr.com/500/300/beauty,health?lock=1", parentId: null },
    { id: 7, name: "Дитячі товари", slug: "kids", url: "https://loremflickr.com/500/300/toys,kids?lock=1", parentId: null },
    { id: 8, name: "Автотовари", slug: "auto", url: "https://loremflickr.com/500/300/car,auto?lock=1", parentId: null },
    { id: 9, name: "Зоотовари", slug: "pets", url: "https://loremflickr.com/500/300/pets,dog?lock=1", parentId: null },
    { id: 10, name: "Канцтовари", slug: "stationery", url: "https://loremflickr.com/500/300/stationery,pen?lock=1", parentId: null }
];
