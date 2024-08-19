import { getCollection } from 'astro:content';

export async function get() {
  const courses = await getCollection('course');
  return {
    body: JSON.stringify(courses.map(course => ({
      id: course.id,
      slug: course.slug,
      ...course.data
    }))),
  };
}