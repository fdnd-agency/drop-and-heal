<script>
  import { QuestionForm } from "$lib";
  export let data;
  const { surveyData } = data;
</script>

<main>
  <QuestionForm {surveyData} />
</main>

<style>
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
