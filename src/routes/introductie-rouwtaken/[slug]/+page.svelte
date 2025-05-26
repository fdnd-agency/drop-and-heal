<script>
  export let data;
  import { page } from '$app/stores';
  import {HeaderIntro, MeshgradBlue, MeshgradRed, MeshgradGreen, MeshgradPink, NavButtons} from "$lib";
  const { tasks } = data;

  const themeComponents = {
    blue: MeshgradBlue,
    red: MeshgradRed,
    green: MeshgradGreen,
    pink: MeshgradPink
  };

  $: currentIndex = tasks.findIndex(task => task.id == $page.params.slug);
  $: progressValue = ((currentIndex + 1) / tasks.length) * 100;

  $: prevLink = currentIndex > 0
    ? `/introductie-rouwtaken/${tasks[currentIndex - 1].id}`
    : "/introductie-algemeen";

  $: nextLink = currentIndex < tasks.length - 1
    ? `/introductie-rouwtaken/${tasks[currentIndex + 1].id}`
    : "/introductie-hulp"
</script>

<main>
  <HeaderIntro headerText_l1="Introductie" headerText_l2="rouwtaken" progressValue={progressValue} />

  <section class="intro-content">
    {#each tasks as task, index}
      <article class={index === currentIndex ? "active" : ""}>
        <h2>Rouwtaak <em>{task.number}</em></h2>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        {#if themeComponents[task.theme]}
          <svelte:component this={themeComponents[task.theme]} />
        {/if}
      </article>
    {/each}
  </section>

  <NavButtons 
    leftLink={prevLink}
    rightLink={nextLink}
    borderColor="var(--white)" 
  />
</main>

<style>
  main {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-block-size: 100dvh;
    gap: 2rem;
    align-items: center;
    color: var(--white);
    background-color: var(--black);
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem;
    position: relative;
    @media (min-width: 45rem) {
      overflow: hidden;
    }
  }

  .intro-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8rem;
    padding: 8rem 0rem 5% 0rem;
    justify-items: center;
    @media (min-width: 45rem) {
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
      padding: 1rem 3rem 0 3rem;
    }
  }

  article,
  article.active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 1s ease;
    @media (min-width: 45rem) {
      width: 100%;
      margin-bottom: 1rem;
      max-width: 13rem;
      max-height: 30rem;
      opacity: 0.6;
      filter: brightness(0.7);
    }
    &:hover {
      opacity: 1;
      filter: none;
      transform: scale(1.4);
    }
  }

  article p {
    color: var(--grey);
    @media (min-width: 45rem) {
      font-size: 12px;
      line-height: 1.2rem;
      margin-bottom: 0.2rem;
      margin-top: 0;
    }
  }

  article h2 {
    margin-top: 1.5rem;
    @media (min-width: 45rem) {
      font-size: 27px;
      margin-bottom: 0.2rem;
      margin-top: 0;
    }
  }

  @media (min-width: 45rem) {
    article h4 {
      font-size: 14px;
      margin-bottom: 0.2rem;
    }

    article em {
      font-size: 22px;
    }

    article h2,
    article h4,
    article p {
      display: none;
    }

    article.active h2,
    article.active h4,
    article.active p,
    article:hover h2,
    article:hover h4,
    article:hover p  {
      display: block;
      opacity: 1;
    }

    article.active {
      opacity: 1;
      filter: brightness(1);
    }
  }
</style>