<script>
    export let customStyles = {};
    export let pageStyle = 'default';
</script>

<div
    class={`blurred-image ${pageStyle}`}
    style="{customStyles}" >
</div>

<style>
    .blurred-image {
        position: absolute;
        background: radial-gradient(
            circle,
            rgba(98, 66, 30, 0.6) 0%,
            rgba(98, 66, 30, 0.4) 20%,
            rgba(98, 66, 30, 0.1) 50%,
            rgba(98, 66, 30, 0.8) 50%
        );
        width: 400px;
        height: 400px;
        filter: blur(100px) brightness(2);
        z-index: -1;
    }

    @media (prefers-reduced-motion) {
        .blurred-image.form-page  {
            animation: none; 
        }
    }
</style>