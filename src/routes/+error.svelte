<script>
    import BlurgradPink from '$lib/blurgrad-pink.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte';
    import { page } from '$app/stores';
</script>

<main class="intro-main">
    <HeaderIntro headerText_l1="Whoops! Something went wrong" headerText_l2="" progressValue={0} />
    <h2>{$page.status}: {$page.error?.message} </h2>
    <BlurgradPink pageStyle=intro_algemeen/>
</main>

<style>
h2 {
    font-family: Poppins;
    margin: 0;
    font-size: 2em;
    max-width: none;
  }

</style>