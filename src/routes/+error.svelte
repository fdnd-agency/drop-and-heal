<script>
    import HeaderIntro from '$lib/HeaderIntro.svelte';
    import { page } from '$app/stores';
    import MeshCarousel from '$lib/molecules/meshgrad-carousel.svelte';
</script>

<main>

    <h2>Whoops! Er is iets fout gegaan</h2>

    <div class="animation-carousel">
        <MeshCarousel />
    </div>   

    <h2>Deze pagina is: {$page.error?.message} </h2>
    <a class="back-button" href="/">Ga terug naar het begin</a>
</main>

<style>

    main {
        display: flex;
        color: var(--w);
        background-color: var(--b);
        padding: 2em;
        width: 100%;
        min-height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .animation-carousel {
            height: 20em;
            margin: 5em 0em;
            width: 100%;
        }

        .back-button{
            background-color: var(--rt-1);
            text-decoration: none;
            border-radius: 80px;
            padding: 0.6em 1.2em;
            color: white;
            text-align: center;
        }
    }   
    
</style>