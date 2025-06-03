<script>
  import {ArrowL, NavButtons} from "$lib";

  let innerWidth;
</script>

<svelte:window bind:innerWidth />
<main>
  <section class="introduction-help">
    <a href="/introductie-rouwtaken/4" aria-label="Go back"><ArrowL/></a>
    <header>
      <h1>Hulp op maat, of liever zelf kiezen?</h1>
      <p> Nu je meer weet over de rouwtaken, is het tijd om jouw persoonlijke reis te starten. Iedereen rouwt op zijn eigen manier. Daarom helpen we je graag kiezen wat op dit moment het beste bij jou past.</p>
    </header>
    <section>
      <article>
        <h2>Wil je persoonlijk advies?</h2>
        <p>Beantwoord een paar korte vragen, dan laten we je zien waar je het beste kunt beginnen. Zo weet je zeker dat je start op een plek waar jij nu het meeste aan hebt.</p>
        <div class="">
          <p>Aanbevolen keuze</p>
          <a href="/form-intro">Vragenlijst</a>
        </div>
      </article>
      <article>
        <h2>Liever zelf kiezen waar je start?</h2>
        <p>Voel je je al zeker over wat je nodig hebt? Blader dan rustig door de rouwtaken en kies zelf de taak die op dit moment het meest aansluit bij jouw gevoel of situatie.</p>
        <a href="/multiple-task-1">Zelf kiezen</a>
      </article>
    </section>

    {#if innerWidth >= 1024}
      <NavButtons 
        leftLink="/introductie-rouwtaken/4"
        rightLink=""
        />
    {/if}
  </section>
</main>

<style>
  .introduction-help {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-block: 1.25rem;
    max-width: 720px;
    margin-inline: auto;

    @media (min-width: 1024px) {
      height: 100vh;
      justify-content: center;
    }

    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 3rem;
      background-color: #232323;
      border: 1px solid #2E2E2E;
      border-radius: 0.75rem;
      @media (min-width: 1024px) {
        display: none;
      }
    }
    
    header {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      @media (min-width: 1024px) {
        text-align: center;
      }

      h1 {
        font-size: clamp(32px, 1.527vw + 26px, 48px);
      }

      p {
        @media (min-width: 1024px) {
          padding-inline: 3rem;
      }
      }
    }
    > section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      @media (min-width: 1024px) {
        flex-direction: row;
      }
    article {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      padding: 1.5rem;
      border-radius: 0.75rem;
      background-color: #232323;
      border: 1px solid #2E2E2E;

      h2 {
        font-size: 1.25rem;
      }
    }
    article:first-of-type {
      div {
        margin-top: 1rem;
        p {
          font-style: italic;
        }
        a {
          display: inline-block;
          width: 100%;
          padding: 1rem 1rem;
          background-color: var(--white);
          border-radius: 0.75rem;
          color: #1D1D1D;
          font-weight: bold;
          text-align: center;
          text-decoration: none;
          margin-top: 0.5rem;
        }
      }
    }

    article:last-of-type {
      a {
        display: inline-block;
        width: 100%;
        padding: 1rem 1rem;
        background-color: #474747;
        border-radius: 0.75rem;
        color: inherit;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        margin-top: 1rem;

        @media (min-width: 1024px) {
          margin-top: auto;
        }
      }
    }
  }
}
</style>
