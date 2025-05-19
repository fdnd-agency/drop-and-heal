<script>
    import {ArrowL, ArrowR} from "$lib";

    export let leftLink = "#"; 
    export let rightLink = "#"; 
    export let borderColor = "#FFFFFF";

    $: layoutClass =
        leftLink && rightLink
            ? 'both-buttons'
            : leftLink
            ? 'left-only'
            : rightLink
            ? 'right-only'
            : '';
</script>

<div class="nav-buttons {layoutClass}">
    {#if leftLink}
        <a href={leftLink} class="nav-link">
            <ArrowL /> <span></span> Terug
        </a>
    {/if}
    {#if rightLink}
        <a href={rightLink} class="nav-link">
            Volgende <span></span> <ArrowR />
        </a>
    {/if}
</div>

<style>
    .nav-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 0.5rem;

        @media (min-width: 1024px) {
            position: relative;
        }
    }
    .nav-buttons.left-only {
        justify-content: flex-start;
    }
    .nav-buttons.right-only {
        justify-content: flex-end;
    }
    .nav-buttons.both-buttons {
        justify-content: space-between;
        border: 1px solid #2B2B2B;
        background: #232323;
        border-radius: 0.75rem;
        height: 4rem;

        @media (min-width: 1024px) {
            border: none;
            background: none;
            padding: 0;
        }
    }
    .nav-buttons a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: inherit;
        cursor: pointer;
        text-decoration: none;
        padding: 0.5rem 1rem;
        span {
            height: 1.75rem;
            width: 1px;
            background-color: #2c2c2c;
        }

        @media (min-width: 1024px) {
            padding: 1rem 2rem;
            background: #232323;
            border: 1px solid #2B2B2B;
            border-radius: 0.75rem;
        }
    }

    .nav-buttons a:hover {
        background-color: rgba(255, 255, 255, 0.1); 
        border: 1px  solid rgba(255, 255, 255, 1);
        color: rgba(255, 255, 255, 1); 
        border-radius: 0.75rem;
        height: 100%;
    }

    .nav-buttons a:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>