<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const cursor = document.querySelector('.gradient-background');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
        });

        // Clean up the event listener when the component is destroyed
        return () => {
            document.removeEventListener('mousemove', () => {});
        };
    });
</script>

<section class="gradient-background"></section>

<style>
    .gradient-background {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 650px;
        height: 650px;
        border-radius: 100%;
        color: white;
        background-color: black;
        background-image: linear-gradient(#1100ff 10%, #ff00f2);
        filter: blur(250px);
        transition: all 450ms ease-out;
        position: fixed;
        pointer-events: none;
        left: 0;
        top: 0;
        transform: translate(calc(-50% + 15px), -50%);
        z-index: -1;
    }
</style>
