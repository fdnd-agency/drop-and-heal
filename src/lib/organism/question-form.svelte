<script>
  export let surveyData = [];
</script>

{#each surveyData as question}
  <fieldset>
    <legend>{question.legend}</legend>
    {#each question.options as option}
      <div>
        <label>
          <input type="radio" name={question.name} value={option.value} />
          {option.labelText}
        </label>
      </div>
    {/each}
  </fieldset>
{/each}

<style>
  legend {
    font-size: 40px;
    font-weight: 700;
    font-family: Figtree;
  }

  fieldset {
    border: none;
  }
</style>
