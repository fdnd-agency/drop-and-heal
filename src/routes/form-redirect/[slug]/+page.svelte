<script>
  import {
    MeshgradBlue,
    MeshgradRed,
    MeshgradPink,
    MeshgradGreen,
    BlurgradPink,
    BlurgradBlue,
    BlurgradGreen,
    BlurgradRed,
  } from "$lib";
  import { page } from "$app/stores";

  const content = {
    rouwtaak1: {
      title: "De realiteit van het verlies onder ogen zien",
      description:
        "Op basis van je antwoorden sluit rouwtaak 1: ”De realiteit van het verlies onder ogen zien.” op dit moment het beste aan bij waar jij nu staat.",
      descriptionTask: [
        "De oefeningen zijn zorgvuldig gekozen om je hierbij te ondersteunen:",
        "• Bewust stilstaan bij het verlies",
        "• Reflectie op tastbare herinneringen",
        "• Begrijpen van de emoties die erbij horen",
      ],
      resultPage: "/form-redirect/rouwtaak1",
      taskPage: "/multiple-task-1",
      components: [MeshgradBlue, BlurgradBlue],
      className: "blue-theme",
    },
    rouwtaak2: {
      title: "Het voelen van alle facetten van verdriet",
      description:
        "Op basis van je antwoorden sluit rouwtaak 2:  “Het voelen van alle facetten van verdriet” op dit moment het beste aan bij waar jij nu staat.",
      descriptionTask: [
        "De oefeningen zijn zorgvuldig gekozen om je hierbij te ondersteunen:",
        "• Het toelaten van gevoel zonder oordeel",
        "• Het vinden van woorden of symbolen voor wat je ervaart",
        "• Het erkennen van de impact die dit verlies op je heeft",
      ],
      resultPage: "/form-redirect/rouwtaak2",
      taskPage: "/multiple-task-2",
      components: [MeshgradRed, BlurgradRed],
      className: "red-theme",
    },
    rouwtaak3: {
      title: "De weg vinden in het leven zonder degene die overleden",
      description:
        "Op basis van je antwoorden sluit rouwtaak 3:  “De weg vinden in het leven zonder degene die overleden is” op dit moment het beste aan bij waar jij nu staat.",
      descriptionTask: [
        "De oefeningen die volgen helpen je bij:",
        "• Het onderzoeken van wat jou kracht en houvast geeft",
        "• Het verkennen van jouw nieuwe rol en identiteit",
        "• Het (her)vinden van richting en betekenis in je leven",
      ],
      resultPage: "/form-redirect/rouwtaak3",
      taskPage: "/multiple-task-3",
      components: [MeshgradGreen, BlurgradGreen],
      className: "green-theme",
    },
    rouwtaak4: {
      title:
        "Op een nieuwe manier verbonden blijven met degene die is overleden",
      description:
        "Op basis van je antwoorden sluit rouwtaak 4: “Op een nieuwe manier verbonden blijven met degene die is overleden” op dit moment het beste aan bij waar jij nu staat.",
      descriptionTask: [
        "De volgende oefeningen zullen je helpen bij",
        "• Het verkennen van de blijvende plek die de ander in je leven heeft",
        "• Het vormgeven van verbinding",
        "• Het creëren van ruimte voor herinnering én toekomst",
      ],
      resultPage: "/form-redirect/rouwtaak4",
      taskPage: "/multiple-task-4",
      components: [MeshgradPink, BlurgradPink],
      className: "pink-theme",
    },
  };

  let slug = "";
  let currentContent = content[slug] || { className: "default-theme" };

  $: {
    if ($page?.url?.pathname) {
      const pathParts = $page.url.pathname.split("/");
      slug = pathParts[pathParts.length - 1];
      currentContent = content[slug] || {
        title: "Geen inhoud gevonden",
        description: "Geen beschrijving beschikbaar voor deze pagina.",
        taskPage: "#",
        components: [],
      };
    }
  }
</script>

<main class={currentContent.className}>
  <div class="background-meshgrad">
    {#if currentContent.components[0]}
      <svelte:component this={currentContent.components[0]} />
    {/if}
  </div>
  <article>
    <div class="card-meshgrad">
      {#if currentContent.components[0]}
        <svelte:component this={currentContent.components[0]} />
      {/if}
    </div>
    <h2>Jouw resultaat</h2>
    <p class="description-task">{currentContent.description}</p>
    {#each currentContent.descriptionTask as line}
      <p>{line}</p>
    {/each}
    <a href={currentContent.taskPage}>Starten</a>
  </article>
</main>

<style>
  .blue-theme {
    --rt: #64aac7;
  }
  .red-theme {
    --rt: #984a4a;
  }
  .green-theme {
    --rt: #6e9158;
  }
  .pink-theme {
    --rt: #7c6097;
  }
  
  main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(29, 29, 29, 1);
    color: var(--white);
    overflow-x: hidden;
    height: 100vh;
  }

  .background-meshgrad {
    position: fixed;
    top: 18em;
    bottom: 5em;
    left: 0;
    right: 0;
    width: 152px;
    transform: scale(2.5);
    height: 50%;
    pointer-events: none;
  }

  .card-meshgrad {
    width: 120px;
    height: 120px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  h2 {
    font-family: Calvino Grande;
    font-weight: 800;
    font-size: 32px;
    padding: 0.5em 0.5em 0.5em 0;
  }

  p {
    font-family: Figtree;
    color: rgba(245, 245, 245, 1);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
  }

  .description-task {
    padding-bottom: 1em;
  }

  a {
    margin-top: 0.5em;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: var(--white);
    background-color: var(--rt);
    padding: 1em 2em 1em 2em;
    border-radius: 8px;
    border: 1px solid #7aa2ae;
    @media (min-width: 50rem) {
      margin-top: 4em;
    }
  }

  main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(29, 29, 29, 1);
    color: var(--white);
    overflow-x: hidden;
    height: 100vh;
    overflow: auto;
    padding-top: 0.4em;
  }

  article {
    z-index: 1;
    margin: 1em;
    padding: 24px;
    width: 346px;
    max-width: 495px;
    max-height: 90vh;
    overflow-y: auto;
    /* height: 674px; */
    background-color: rgba(33, 33, 33, 1);
    border-radius: 12px;
    border: 1px solid rgba(43, 43, 43, 0.56);
    @media (min-width: 50rem) {
      width: 495px;
    }
  }
</style>