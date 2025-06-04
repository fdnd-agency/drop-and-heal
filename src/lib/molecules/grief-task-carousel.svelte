<script>
  import { page } from '$app/stores';
  import { GriefTaskCard } from '$lib';

  export let tasks = [];
  export let themeComponents;
  export let cardWrapper;
  export let currentIndex;


  $: slug = $page.params.slug;

  $: currentIndex = tasks.findIndex(task => task.id == $page.params.slug);

  $: {
    if (cardWrapper && currentIndex >= 0) {
      const activeCard = cardWrapper.children[currentIndex];
      activeCard?.scrollIntoView();
    }
  }
</script>


<GriefTaskCard {tasks} {themeComponents} bind:cardWrapper />
<nav class="dot-nav">
  <ul>
    {#each tasks as task, i}
      <li class:active={task.id == slug}>
        <a href={`#${task.id}`} aria-label={`Ga naar taak ${i + 1}`}></a>
      </li>
    {/each}
  </ul>
</nav>


<style>
  .dot-nav {
  display: flex;
  justify-content: center;
  margin-top: 1rem;

   @media (min-width: 1024px) {
      display: none;
    }
}
.dot-nav ul {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}
.dot-nav a {
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: #383838;
  text-indent: -9999px;
}
.dot-nav a:focus,
.dot-nav a:hover {
  border: 1px solid #CDCDCD;
  outline: none;
}

.dot-nav li.active a {
  background-color: #CDCDCD;
}

@supports (scroll-marker-group: after) {
    .dot-nav {
      display: none;
    }
}
</style>