<script>
  import {HeaderIntro, BlurgradPink} from "$lib";
</script>

<main>
  <HeaderIntro
    headerText_l1="Hulp op maat, of"
    headerText_l2="liever zelf kiezen?"
    progressValue={90}
  />

  <section class="intro-content">
    <article>
      <h2>Persoonlijke reis</h2>
      <p>
        Nu je meer weet over de rouwtaken zelf, is het tijd om jouw persoonlijke
        reis te samen te stellen.<br /><br />
        Rouw is een uniek proces en niet lineair, daarom bieden we ondersteuning
        om je verder te helpen.
      </p>
    </article>
    <article>
      <h2>Ontmoet Yana</h2>
      <p>
        Maak kennis met Yana, jouw persoonlijke digitale hulp. Yana is getraind
        met informatie uit een breed scala literatuur over rouw.<br /><br />
        Yana kan je voorzien van een programma dat bij jou aansluit.
      </p>
    </article>
    <article>
      <h2>Jouw keuze</h2>
      <p>
        Als Yana iets vraagt wat je liever niet beantwoordt, is dat helemaal
        oké. Je kunt vragen overslaan wanneer jij dat wilt, je hoeft dit alleen
        maar aan te geven.<br /><br />
        Liever zelf kiezen waar je start? Dat is ook mogelijk. Kies hieronder dan
        voor je eigen pad. Je kan op elk moment schakelen tussen de verschillende
        rouwtaken.<br /><br />
        Jouw reis, jouw tempo.
      </p>
    </article>
  </section>

  <BlurgradPink pageStyle="intro_algemeen" />

  <div class="intro-buttons">
    <div class="nav-buttons">
      <button>
        <a href="./multiple-task-1" class="nav-link">Eigen pad</a>
      </button>
      <button>
        <a href="./form-intro" class="nav-link">Gepersonaliseerd</a>
      </button>
    </div>
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

  .intro-content {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    @media (min-width: 50rem) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      padding: 5rem 2rem 0rem 2rem;
    }
    @media (min-width: 65rem) {
      gap: 3rem;
    }
  }

  article {
    padding: 2rem;
    max-width: 35rem;
    min-width: 14rem;
    display: flex;
    flex-direction: column;
    @media (min-width: 50rem) {
      padding: 1rem;
      max-width: 24rem;
    }
  }

  .nav-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .nav-buttons button {
    padding: 1rem;
    background: none;
    border-radius: 50px;
    border: 1px solid var(--w);
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition:
      background-color 0.3s,
      color 0.3s,
      border-color 0.3s;
  }

  .nav-buttons button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .nav-buttons button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .nav-link {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: var(--w);
  }
</style>
