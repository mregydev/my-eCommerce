import categories from '../../data/categories.json';

export default defineEventHandler((event) => {
  const query = getQuery(event);

  const searchQuery = query.query?.toString().toLowerCase();
  const filterCategories = query.query
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery || '')
      )
    : [];

  return { categories: filterCategories };
});
