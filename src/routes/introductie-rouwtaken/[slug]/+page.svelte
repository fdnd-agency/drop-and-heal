<script>
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import {HeaderIntro, MeshgradBlue, MeshgradRed, MeshgradGreen, MeshgradPink, NavButtons} from "$lib";
  export let data;
  const { tasks } = data;

  const themeComponents = {
    blue: MeshgradBlue,
    red: MeshgradRed,
    green: MeshgradGreen,
    pink: MeshgradPink
  };

  let cardWrapper;
  let isDesktop = false;
  onMount(() => {
    isDesktop = window.matchMedia('(min-width: 1024px)').matches;
  });

  $: currentIndex = tasks.findIndex(task => task.id == $page.params.slug);

  $: prevLink = currentIndex > 0
    ? `/introductie-rouwtaken/${tasks[currentIndex - 1].id}`
    : "/introductie-algemeen";

  $: nextLink = currentIndex < tasks.length - 1
    ? `/introductie-rouwtaken/${tasks[currentIndex + 1].id}`
    : "/introductie-hulp";

  $: {
    if (cardWrapper && currentIndex >= 0) {
      const activeCard = cardWrapper.children[currentIndex];
      activeCard?.scrollIntoView();
    }
  }
</script>

<main>
  <section>
    <HeaderIntro headerText="Introductie rouwtaken"/>
    <div class="carousel">
      <ul class="card-wrapper" bind:this={cardWrapper}>
        {#each tasks as task, i}
          <li class="card" id={`${task.id}`}>
            <article>
              {#if themeComponents[task.theme]}
                <svelte:component this={themeComponents[task.theme]} />
              {/if}
              <h2>Rouwtaak <em>{task.number}</em></h2>
              <p>{task.description}</p>
            </article>
            <p>Waarbij je leert omgaan met nieuwe keuzes en mogelijkheden</p>
          </li>
        {/each}
      </ul>
      <nav class="dot-nav">
        <ul>
          {#each tasks as task, i}
            <li class:active={task.id == $page.params.slug}>
              <a href={`#${task.id}`} aria-label={`Ga naar taak ${i + 1}`}></a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>

    
    {#if browser && !isDesktop}
      <NavButtons 
        leftLink={prevLink}
        rightLink={nextLink}
      />
    {:else}
      <NavButtons 
        leftLink="/introductie-algemeen"
        rightLink="/introductie-hulp"
      />
    {/if}
  </section>
</main>

<style>
section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  height: 100dvh;
  max-width: 1295px;
  margin: auto; 
  position: relative; 
  padding-top: 1rem;

  @media (min-width: 1024px) {
    padding-top: 0;
    gap: 2em;
    justify-content: center;
  }
}

.card-wrapper {
  display: flex;
  justify-content: space-between;
  gap: clamp(1.5rem, 1.527vw + 18px, 2.5rem);
  margin-inline: -1.25rem;
  padding-inline: 3.25rem;
  anchor-name: --carousel;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  overscroll-behavior-x: contain;

  @media (min-width: 1024px) {
    padding-inline: 1.25rem;
  }
  
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25em;
  border-radius: 0.75em;
  border: 1px solid #2E2E2E;
  background-color: #232323;
  height: min(65.06vh, 614px);
  width: clamp(294px, -1.05vw + 309.13px, 305px);
  flex-shrink: 0;
  scroll-snap-align: center;
}  
.card > p {
  color: #AFAFAF;
}
.card article {
  display: grid;
  gap: 1.5rem;
}
.card article h2 {
  font-size: 2.5rem;
  border-bottom: 1px solid #2C2C2C;
  padding-bottom: 1rem;
}
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
  .card-wrapper {
    scroll-marker-group: after;
    &::scroll-marker-group {
      position: fixed;
      position-anchor: --carousel;
      position-area: block-end;
      margin: 1rem;
      display: grid;
      grid-auto-columns: 0.75rem;
      grid-auto-flow: column;
      gap: 0.25rem;
    }
    > li::scroll-marker {
      content: ' ';
      cursor: pointer;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #383838;
    }
    > li::scroll-marker:target-current {
      background-color: #CDCDCD;
    }
    @media (min-width: 1024px) {
      scroll-marker-group: none;
    }
  }
}

</style>