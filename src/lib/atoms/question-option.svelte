<script>
  let {name, value, labelText, bindGroup, ...others} = $props();
</script>

<label>
  <input type="radio" name={name} value={value} bind:group={bindGroup} />
  {labelText}
</label>

<style>
  input[type='radio'] {
    position: absolute;
    left: -10000px;
  }

  label {
    border: 1px solid var(--border-grey);
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.25em;
    overflow: hidden;
    padding: .6em 1.4em;
    position: relative;
  }

  label:has(input[type=radio]) {
    transition: all 0.5s ease-in;
  }

  label:has(input[type=radio]:hover) {
    background-color: var(--border-grey);
    border: .1em solid var(--white);
    color: var(--black);
  }

  label:has(input[type=radio]:checked) {
    background-color: var(--white);
    border: .1em solid var(--white);
    color: var(--black);
  }

  label:focus-within {
    outline: 3px solid var(--border-pink);
  }
</style>