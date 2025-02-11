<script>
  export let title = "Geen titel";
  export let progressValue = Math.random() * 100;
  export let progressColor = "red";
  
  let isMenuOpen = false; 
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="header">
  <div class="title">
    <div class="title-row">
      <h1>{title}</h1>
    </div>
    <progress value={progressValue} max="100" style="--progress-color: {progressColor}" aria-label="Task progress"></progress>
  </div>

  <button class="hamburger" 
    on:click={toggleMenu} 
    aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
    aria-expanded={isMenuOpen ? "true" : "false"}>
    {#if isMenuOpen}
        &#10005;
    {:else}
       &#9776;
    {/if}
  </button>

  <nav class="navigation-items {isMenuOpen ? 'open' : ''}" >
    <ul> 
      <li>
        <a href="multiple-task-1" class="multiple-tasks">
          <img src="/icon/rouwtaak-1.png" alt="waterdrop gradient">
          Het verlies aanvaarden
        </a>
      </li>
      <li>
        <a href="multiple-task-2" class="multiple-tasks">
          <img src="/icon/rouwtaak-2.png" alt="lightning gradient">
          De pijn doorvoelen
        </a>
      </li>
      <li>
        <a href="multiple-task-3" class="multiple-tasks">
          <img src="/icon/rouwtaak-3.png" alt="swirl gradient">
          Verder in verandering
        </a>
      </li>
      <li>
        <a href="multiple-task-4" class="multiple-tasks">
          <img src="/icon/rouwtaak-4.png" alt="flower gradient">
          Emotioneel verder
        </a>
      </li>
  </ul> 
  </nav>
</header>

<style>
  :root {
    --w: #ffff;
    --b: #111;
    --g: #a6a6a6;
    --progress-bg: #595959;
    --border-color: #1F1F1F;
  }

  header {
    --_border-color: var(--border-color, #1F1F1F);
    container-type: inline-size;
    background-color: var(--b);
    width: 100%;
    color: var(--w);
    border-bottom: 2px solid var(--_border-color);
    margin-bottom: 1em;
    margin: 0em;
    position: relative;
    display: flex;
    margin-left: auto;
    justify-content: space-between;
    align-items: center;

    .title {
     margin: 1em;
    
      .title-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        h1 {
          font-family: Calvino;
          margin: 0;
          font-size: 2em;
          max-width: none;
        }
      }
      progress {
        width: 55%;
        height: 2px;
        margin-top: 1em;
        appearance: none;

        &::-webkit-progress-bar {
          background-color: var(--g);
          border-radius: 5px;
        }
        &::-webkit-progress-value {
          background-color: var(--progress-color);
          }
      }
    }

    .hamburger {
      display: none;
      background: none;
      border: none;
      color: var(--w);
      font-size: 1.875em;
      cursor: pointer;
      margin-right: 1em;

    @container (max-width: 1200px){
      display: block;
      z-index: 15;
    }
    &:focus {
        outline: 2px solid var(--w);
        outline-offset: 2px;
      }
    }

   .navigation-items {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      display: block;

      @container (max-width: 1200px){
      display: none;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      background-color: var(--b);
      padding: 1em;
      position: absolute;
      top: 1.25em;
      left: 0;
      z-index: 10;
      margin: 0;
      }

    @container (min-width: 1201px){
      display: flex;
      flex-wrap: wrap;
    }

    &.open {
      display: flex;

      @media (max-width: 1200px){
        display: flex;
      }

      .multiple-tasks {
        @media (max-width: 1200px){
          border: 2px solid var(--border-color);
        }
      }
    }

    ul {
      list-style-type: none;
      display: flex;
      margin: 0;
      padding: 0;

    @container (max-width: 1200px){
       display: block;
       width: 100%;
    }
      .multiple-tasks {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 1em;
        color: var(--w);
        margin-right: 1.25em;
        text-align: center;
        flex-direction: column;
        transition: 0.5s all;
        border: 2px solid transparent;
        border-radius: 5px; 

        @container (max-width: 1200px){
          margin: 1em 0;
          width: 100%;
          text-align: left;
        }
        @container (min-width: 1201px){
          margin: 0 1em;
          flex-direction: column;
          max-width: 10ch;
      }

        img {
          width: 3.125em;
          height: 3.125em;
          background-color: #1F1F1F;
          padding: 0.2em;
          border-radius: 5px;
          margin-bottom: 0.625em; 
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>