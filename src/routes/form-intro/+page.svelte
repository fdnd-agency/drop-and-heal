<script>
  import { BlurgradPink, QuestionForm } from "$lib";
  export let data;
  const { surveyData } = data;
</script>

<main>
  <h1>Vragenlijst</h1>

  <QuestionForm {surveyData} />

  <!-- <BlurgradPink pageStyle="form-page" /> -->
</main>

<style>
  h1 {
    font-family: Calvino Grande;
    z-index: 10;
    font-size: clamp(2.2rem, 10vw, 3.5rem);
    font-weight: 800;
  }

  main {
    background-color: #1d1d1d;
    align-items: center;
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 7.5em;
    justify-content: center;
    min-height: 100dvh;
    overflow: hidden;
    padding: 2em 2em 5em;
    position: relative;
    text-align: center;
    width: 100%;
  }
</style>
