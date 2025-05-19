<script>
  export let surveyData = [];
  import { onMount } from "svelte";

  let currentStep = 0;
  let selectedAnswers = Array(surveyData.length).fill(undefined);

  function prevStep() {
    if (currentStep > 0) {
      currentStep -= 1;
    }
  }

  function skipQuestion() {
    selectedAnswers[currentStep] = null;
    nextStep();
  }

  function nextStep() {
    if (currentStep < surveyData.length - 1) {
      currentStep += 1;
    }
  }

  function handleSelect(optionValue) {
    selectedAnswers[currentStep] = optionValue;
    nextStep();
  }

  let steps;

  onMount(() => {
    document.documentElement.classList.add("js-enhanced");
    steps = document.querySelectorAll("[data-step]");
    updateActiveStep();
  });

  $: if (steps) updateActiveStep();

  function updateActiveStep() {
    steps.forEach((el, i) => {
      el.classList.toggle("active", i === currentStep);
    });
  }
</script>

<form method="POST" action="?/submit">
  {#each surveyData as question, index}
    <fieldset data-step={index} class:active={index === currentStep}>
      <legend>{question.legend}</legend>
      {#each question.options as option}
        <label class="radio-button">
          <input
            type="radio"
            name={question.name}
            value={option.value}
            checked={selectedAnswers[index] === option.value}
            on:change={() => handleSelect(option.value)}
          />
          {option.labelText}
        </label>
      {/each}
    </fieldset>
  {/each}

  <div class="form-buttons">
    <button type="button" on:click={prevStep} disabled={currentStep === 0}>
      Terug
    </button>

    <button type="button" on:click={skipQuestion}> Overslaan </button>

    {#if currentStep === surveyData.length - 1}
      <button type="submit">Bekijk uw resultaat</button>
    {/if}

    <button type="submit" class="submitButton">Submit</button>
  </div>
</form>

<style>
  [data-step] {
    display: block;
  }

  :global(.js-enhanced) [data-step] {
    display: none;
  }

  :global(.js-enhanced) [data-step].active {
    display: block;
  }

  legend {
    width: 100%;
    display: block;
    font-size: 20px;
    font-weight: bolder;
    line-height: 1.6;
    font-family: Figtree;
    text-align: left;
    padding-left: 0.6em;
    padding-bottom: 0.8em;
    max-width: 999px;
  }

  input[type="radio"] {
    display: none;
  }

  .radio-button {
    display: inline-block;
    padding: 1rem 1rem;
    margin: 0.3rem;
    border: 1px solid rgba(43, 43, 43, 0.56);
    border-radius: 12px;
    background-color: rgba(33, 33, 33, 1);
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 1rem;
    user-select: none;
    text-align: left;
    line-height: 2;
    font-weight: lighter;
  }

  .radio-button input[type="radio"]:checked,
  .radio-button:has(input[type="radio"]:checked) {
    border-color: rgb(168, 168, 168);
    background-color: #d3d7da;
    color: rgba(33, 33, 33, 1);
    font-weight: 600;
    font-size: 16px;
  }

  .radio-button:hover {
    border-color: #999;
    background-color: rgba(125, 66, 74, 0.7) 100%;
  }

  fieldset {
    border: none;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 352px;
  }

  .radio-button {
    @media (min-width: 50rem) {
      width: 660px;
    }
  }

  legend {
    @media (min-width: 50rem) {
      font-size: 32px;
      text-align: center;
    }
  }

  label {
    @media (min-width: 50rem) {
      min-width: 660px;
    }
  }

  .form-buttons {
    margin-top: 1em;
    padding-top: 0.8em;
    width: 100%;
    /* min-width: 352px; */
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(33, 33, 33, 1);
  }

  button {
    color: white;
    display: inline-block;
    padding: 20px;
    margin: 0.5rem;
    border: 1px solid rgba(43, 43, 43, 0.56);
    border-radius: 12px;
    background-color: rgba(33, 33, 33, 1);
    cursor: pointer;
  }

  @media (scripting: enabled) {
    .submitButton {
      display: none;
    }
  }
</style>
