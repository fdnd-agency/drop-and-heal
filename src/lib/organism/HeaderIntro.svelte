<script>
    export let headerText = ""; 
</script>

<header class="header">
    <h1>{headerText}</h1>
</header>

<style>
    .header {
        display: none;

        @media (min-width: 1024px) {
            display: block;
            text-align: left;
            align-self: flex-start;
            width: 100%;
            margin-top: 1rem;

            h1 {
                font-size: clamp(32px, 1.527vw + 26px, 48px);
                background-color: #232323;
                padding: 1rem 1.5rem;
                border-radius: 0.75rem;
                border: 1px solid #2E2E2E;
            }
        }
    }
</style>
