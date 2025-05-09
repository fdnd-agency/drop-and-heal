import fetchJson from "$lib/fetch-json";

export async function load({ params }) {
  const url = 'https://fdnd-agency.directus.app/items/dropandheal_task';
  const response = await fetchJson(url);

  const tasks = response.data.map(task => ({
    ...task,
    description: task.description.replace(/<\/?[^>]+(>|$)/g, "") 
  }));

  const index = tasks.findIndex(task => task.id == params.slug);

  if (index === -1) {
    throw error(404, 'Not found');
  }

  return {
    tasks,
    currentIndex: index
  };
}
