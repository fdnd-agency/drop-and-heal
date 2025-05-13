<script>
  export let surveyData = [];

  let currentStep = 0;
  let selectedAnswers = Array(surveyData.length).fill(undefined);

  function nextStep() {
    if (currentStep < surveyData.length - 1) {
      currentStep += 1;
    }
  }

  function handleSelect(optionValue) {
    selectedAnswers[currentStep] = optionValue;
    nextStep();
  }
</script>

<form method="POST" action="?/submit">
  <div>
    {#each surveyData as question, index}
      {#if index === currentStep}
        <fieldset>
          <legend>{question.legend}</legend>
          {#each question.options as option}
            <div class="answers">
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
            </div>
          {/each}
        </fieldset>
      {/if}
    {/each}
  </div>

  {#if currentStep === surveyData.length - 1}
    <button type="submit">Bekijk uw resultaat</button>
  {/if}

  <button class="submitButton" type="submit">Submit</button>
</form>

<style>
  legend {
    font-size: 20px;
    font-weight: bolder;
    line-height: 2;
    font-family: Figtree;
    text-align: left;
    max-width: 534px;
  }

  input[type="radio"] {
    display: none;
  }

  .radio-button {
    display: inline-block;
    padding: 1rem 1rem;
    margin: 0.5rem;
    border: 2px solid rgba(43, 43, 43, 0.56);
    border-radius: 12px;
    background-color: rgba(33, 33, 33, 1);
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 1rem;
    user-select: none;
    text-align: left;
    line-height: 2;
  }

  .radio-button input[type="radio"]:checked,
  .radio-button:has(input[type="radio"]:checked) {
    border-color: rgb(168, 168, 168);
    background-color: #d3d7da;
    color: rgba(33, 33, 33, 1);
    font-weight: 600;
    font-size: 16px;
  }

  /* Hover effect */
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

  .answers {
    @media (min-width: 50rem) {
      width: 660px;
    }
  }

  button {
    color: white;
    display: inline-block;
    padding: 24px;
    margin: 0.5rem;
    border: 2px solid rgba(43, 43, 43, 0.56);
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
