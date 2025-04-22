<script>
  import NavButtons from "$lib/NavButtons.svelte";
  import HeaderIntro from "$lib/HeaderIntro.svelte";
  import BlurgradGreen from "$lib/blurgrad-green.svelte";
</script>

<main>
  <HeaderIntro
    headerText_l1="Introductie"
    headerText_l2="algemeen"
    progressValue={30}
  />

  <section>
    <article>
      <h2>Privacy</h2>
      <p>
        Jouw privacy en comfort zijn onze prioriteit. Alles wat je deelt blijft
        vertrouwelijk.
      </p>
    </article>
    <article>
      <h2>Tools</h2>
      <p>
        We hebben tools samengesteld om je te ondersteunen in je reis door rouw.
        Straks geven we een rondleiding binnen de omgeving. <br /><br />
        Laten we nu eerst samen het landschap van rouw verkennen.
      </p>
    </article>
    <article>
      <h2>Rouwtaken</h2>
      <p>
        Onze methode is gebaseerd op de erkende rouwtaken van William Worden,
        Amerikaans rouwexpert, zorgvuldig samengesteld om jou te ondersteunen
        tijdens je rouwreis. <br /><br />
        Ontdek met ons de betekenis en steun die het jou kan bieden.
      </p>
    </article>
  </section>

  <BlurgradGreen pageStyle="intro_algemeen" />

  <div class="intro-buttons">
    <NavButtons
      leftLink="./uitleg-metafoor"
      rightLink="./introductie-rouwtaken"
      borderColor="var(--rt-3)"
    />
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-block-size: 100dvh;
    gap: 2rem;
    align-items: center;
    color: var(--w);
    background-color: var(--b);
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    padding: 2rem;
  }

  section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 8rem 0rem 5% 0rem;
    justify-items: center;
  }

  article {
    padding: 2rem;
    max-width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (min-width: 50rem) {
    section {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      padding: 5rem 2rem 0rem 2rem;
    }

    article {
      padding: 1rem;
      max-width: 24rem;
    }
  }

  @media (min-width: 65rem) {
    section {
      gap: 3rem;
    }

    article {
      padding: 1rem;
    }
  }
</style>
