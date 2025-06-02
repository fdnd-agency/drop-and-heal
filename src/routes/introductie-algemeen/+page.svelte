<script>
    import { NavButtons, BlurgradPink} from '$lib';

    
</script>


<main>
  <section class="main-content">

    <BlurgradPink customStyles={"top: -10%; left: 50%; transform: translate(-50%, -50%);"}/>
    <h1>Introductie Algemeen</h1>
    
    <ul class="card-wrapper">
      <li class="card">
        <h2>Testversie</h2>
        <p>We zijn momenteel in ontwikkeling, en waarderen je feedback enorm. Mochten er problemen voorkomen, laat het ons dan gerust weten.</p>
      </li>
      <li class="card">
        <h2>Tools</h2>
        <p>Samen met Rouwexpert Leoniek van der Maarel hebben we tools samengesteld om je te ondersteunen in je reis door rouw. We geven graag eerst een korte introductie over de rouwtaken.</p>
      </li>
      <li class="card">
        <h2>Rouwtaken</h2>
        <p>Onze methode is gebaseerd op de erkende rouwtaken van William Worden, Amerikaans Rouwexepert, zorgvuldig samengesteld om jou te ondersteunen. Ontdek met ons de betekenis en steun die het je kan bieden.</p>
      </li>
    </ul>
      
    <NavButtons 
      leftLink="/"
      rightLink="/introductie-rouwtaken/1"
    />
  </section>
</main>

<style>

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4.75rem;
    height: 100vh;
    height: 100dvh;
    max-width: 1085px;
    margin: auto; 
    position: relative; 
    h1 {
      font-size: clamp(32px, 1.527vw + 26px, 48px);
      background-color: #232323;
      padding: 1rem 1.5rem;
      border-radius: 0.75rem;
      border: 1px solid #2E2E2E;
    }
}

.card-wrapper {
  display: flex;
  justify-content: space-between;
  gap: clamp(1rem, 1.146vw + 11.5px, 1.75rem);
  margin-inline: -1.25rem;
  padding-inline: 2rem;
  anchor-name: --carousel;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  overscroll-behavior-x: contain;
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
      margin-inline: 0;
      padding-inline: 0;
    }
  }
}

.card {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 1.25em;
    border-radius: 0.75em;
    border: 1px solid #2E2E2E;
    background-color: #232323;
    aspect-ratio: 3 / 4;
    height: 100%;
    min-width: 300px;
    width: clamp(300px, 4.106vw + 283.85px, 343px);
    scroll-snap-align: center;

    @media (min-width: 1024px) {
      height: 368px;
    }
}



</style>