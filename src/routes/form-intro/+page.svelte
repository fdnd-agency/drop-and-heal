<script>
  import { BlurgradPink, QuestionForm } from "$lib";
  export let data;
  const { surveyData } = data;
</script>

<main>
  <h1>Vragenlijst</h1>

  <QuestionForm {surveyData} />

  <BlurgradPink pageStyle="form-page" />
</main>

<style>
  h1 {
    font-family: Calvino;
    z-index: 10;
  }
  h2,
  p {
    font-family: Figtree;
  }
  h1 {
    font-size: clamp(2.2rem, 10vw, 3.5rem);
    font-weight: 600;
  }
  h2 {
    font-weight: 100;
    font-size: clamp(1.6rem, 5vw, 2rem);
  }

  p {
    color: var(--border-grey);
    font-weight: 100;
    font-size: clamp(1rem, 5vw, 1.2rem);
    font-style: italic;
  }

  main {
    background-color: #1d1d1d;
    align-items: center;
    background-color: var(--black);
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 7.5em;
    justify-content: center;
    min-height: 100dvh;
    overflow: hidden;
    padding: 10em 2em 5em;
    position: relative;
    text-align: center;
    width: 100%;
  }

  div:nth-of-type(1),
  hgroup {
    display: flex;
    flex-direction: column;
    gap: 1em;
    z-index: 10;
  }

  div:nth-of-type(1) {
    gap: 2em;
  }

  div:nth-of-type(1) h1 {
    max-width: 15em;
  }

  progress[value] {
    appearance: none;
    border: none;
    height: 0.25em;
    -moz-appearance: none;
    -webkit-appearance: none;
    min-width: 100%;
  }

  progress[value]::-webkit-progress-bar {
    background-color: var(--progress-bg);
    border-radius: 20px;
  }

  progress[value]::-webkit-progress-value {
    background-color: var(--white);
  }

  div:nth-of-type(3) {
    position: absolute;
    right: 0em;
    bottom: 0em;
  }
</style>
