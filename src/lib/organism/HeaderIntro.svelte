<script>
    export let headerText = ""; 
    export let progressValue = 0; 
    export let progressMax = 100; 
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
                background-color: #232323;
                padding: 1rem 1.5rem;
                border-radius: 0.75rem;
                border: 1px solid #2E2E2E;
            }
        }
    }

    .progress-container {
        display: flex;
        align-items: center;
    }

    progress {
        appearance: none;
        border: none;
        height: 2px;
        width: 100%;
        background-color: transparent;
    }

    progress::-webkit-progress-bar {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }

    progress::-webkit-progress-value {
        background-color: white;
        border-radius: 10px;
        border-right: 3px solid black;
        border-left: 3px solid black;
    }

    progress::-moz-progress-bar {
        background-color: white;
        border-radius: 10px;
    }
</style>
