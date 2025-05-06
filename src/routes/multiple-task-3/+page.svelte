<script>
  import Header from "../../lib/components/Header.svelte";
  import Card from "../../lib/components/Card.svelte";
  import { MeshgradGreen } from "$lib";
  import Nav from "../../lib/components/Nav.svelte";
</script>

<Header title="Het verlies aanvaarden" progressColor="#6e9158" />

<main>
  <MeshgradGreen class="meshgrad" />
  <h2>Rouwstappen van de dag</h2>
  <h4>2 oefeningen open vandaag</h4>
</main>

<section class="exercises">
  <Card
    imageSrc="/icon/rouwtaak-3-foto.png"
    imageAlt="Rouwtaak Foto"
    actionText="Start oefening"
    description="Schrijven"
    title="Jouw plattengrond"
    buttonColor="#415932"
    communityDrops="47"
    communityImages={[
      "/icon/community1.png",
      "/icon/community2.png",
      "/icon/community3.png",
    ]}
  />
  <Card
    imageSrc="/icon/rouwtaak-3-foto.png"
    imageAlt="Rouwtaak Foto"
    actionText="Start oefening"
    description="Schrijven"
    title="Jouw plattengrond"
    buttonColor="#415932"
    communityDrops="47"
    communityImages={[
      "/icon/community1.png",
      "/icon/community2.png",
      "/icon/community3.png",
    ]}
  />
  <Card
    imageSrc="/icon/rouwtaak-3-foto.png"
    imageAlt="Rouwtaak Foto"
    actionText="Start oefening"
    description="Schrijven"
    title="Jouw plattengrond"
    buttonColor="#415932"
    communityDrops="47"
    communityImages={[
      "/icon/community1.png",
      "/icon/community2.png",
      "/icon/community3.png",
    ]}
  />
  <Card
    imageSrc="/icon/rouwtaak-3-foto.png"
    imageAlt="Rouwtaak Foto"
    actionText="Start oefening"
    description="Schrijven"
    title="Jouw plattengrond"
    buttonColor="#415932"
    communityDrops="47"
    communityImages={[
      "/icon/community1.png",
      "/icon/community2.png",
      "/icon/community3.png",
    ]}
  />
</section>

<Nav />

<style>

  h2 {
    font-family: Calvino;
    font-size: 2em;
  }

  main {
    position: relative;
    background-color: var(--b);
    background-image: radial-gradient(
        circle,
        rgba(98, 66, 30, 0.6) 0%,
        rgba(98, 66, 30, 0.4) 20%,
        rgba(98, 66, 30, 0.1) 50%,
        rgba(17, 17, 17, 0.8) 100%
    );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    justify-content: center;
    text-align: center;
    padding-top: 5em;
    padding-bottom: 2em;
    overflow: hidden;
}


  main h2 {
    margin-top: 5em;
    margin-bottom: 0.3em;
  }

  main h4 {
    color: rgb(225, 223, 223);
  }

  .exercises {
    display: grid;
    background-color: rgb(17, 17, 17);
    grid-template-columns: 1fr;
    gap: 1.5em;
    padding: 1em;
    padding-bottom: 10em;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    .exercises {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
