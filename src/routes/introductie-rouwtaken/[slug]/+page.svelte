<script>
  import {HeaderIntro, NavButtons, GriefTaskCarousel} from "$lib";
  export let data;
  const { tasks } = data;

  let cardWrapper;
  let currentIndex;
  let themeComponents;


  $: prevLink = currentIndex > 0
    ? `/introductie-rouwtaken/${tasks[currentIndex - 1].id}`
    : "/introductie-algemeen";

  $: nextLink = currentIndex < tasks.length - 1
    ? `/introductie-rouwtaken/${tasks[currentIndex + 1].id}`
    : "/introductie-hulp";
</script>

<main>
  <section>
    <HeaderIntro headerText="Introductie rouwtaken"/>
    <GriefTaskCarousel {tasks} {themeComponents} bind:cardWrapper bind:currentIndex />

    
    <NavButtons 
      leftLink={prevLink}
      rightLink={nextLink}
      variant="mobile"
    />

    <NavButtons 
      leftLink="/introductie-algemeen"
      rightLink="/introductie-hulp"
      variant="desktop"
    />
  </section>
</main>

<style>
section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  height: 100dvh;
  max-width: 1300px;
  margin: auto; 
  position: relative; 
  padding-top: 1rem;

  @media (min-width: 1024px) {
    padding-top: 0;
    gap: 2em;
    justify-content: center;
  }
}
</style>