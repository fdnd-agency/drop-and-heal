<script>
  import {MeshgradBlue, MeshgradRed, MeshgradGreen, MeshgradPink} from '$lib';

  export let tasks = [];
  export let themeComponents = {
    blue: MeshgradBlue,
    red: MeshgradRed,
    green: MeshgradGreen,
    pink: MeshgradPink
  };
  export let cardWrapper;

</script>

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

<style>
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

  article {
    display: grid;
    gap: 1.5rem;

    h2 {
      font-size: 2.5rem;
      border-bottom: 1px solid #2C2C2C;
      padding-bottom: 1rem;
    }
  }

  > p {
     color: #8F8F8F;
  }
}  

.card article, p {
  animation: fadeinUp 0.8s ease-out both;
  animation-range: entry 0% 60%;
  animation-timeline: view(inline);

  @media (min-width:768px) {
    animation: none;
  }
}

@keyframes fadeinUp {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@supports (scroll-marker-group: after) {
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