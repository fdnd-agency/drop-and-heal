<script>
    import { NavButtons, MeshgradCarousel} from '$lib';

    
</script>


<main>
    <section class="main-content">
        <MeshgradCarousel/>
        
        <article>
            <h1 class="">Welkom bij Drop & Heal</h1>
            <p>Op basis van de analyse sluit de rouwtaak het verlies een betekenisvolle plek geven op dit moment het beste bij jou aan. 
                We hebben een oefening voor je beschikbaar die je hiermee op weg kan helpen. </p>
        </article>
                
        <div class="nav-buttons">
            <a href="/introductie-algemeen" class="nav-link">Starten</a>
            <a href="/" class="nav-link">Inloggen</a>
        </div>
    </section>
</main>

<style>

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    height: 100vh;
    max-width: 1085px;
    margin: auto;
    position: relative;

    article {
        display: grid;
        gap: 2em;

        p {
            @media (min-width:625px) {
                width: 60%;
            }
            @media (min-width:1024px) {
                width: 42%;
            }
        }
    }
}

 .nav-buttons {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    a {
        border: 1px solid #2B2B2B;
        background: #232323;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
}



</style>