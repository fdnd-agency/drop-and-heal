<script>
    import { page } from '$app/stores';
    import { MeshgradCarousel } from '$lib';
</script>

<main>

    <h2>Whoops! Er is iets fout gegaan</h2>

    <div class="animation-carousel">
        <MeshgradCarousel />
    </div>   

    <h2>Deze pagina is: {$page.error?.message} </h2>
    <a class="back-button" href="/">Ga terug naar het begin</a>
</main>

<style>

    main {
        display: flex;
        color: var(--white);
        background-color: var(--black);
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
            border: 1px solid #F5F5F5;
            text-decoration: none;
            border-radius: 25px;
            padding: 0.6em 1.2em;
            color: white;
            text-align: center;

            &:hover {
                background-color: rgba(245, 245, 245, 0.1);
            }
            &:active {
                background-color: rgba(245, 245, 245, 0.2);
            }
        }
    }   
    
</style>