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
            rgba(60, 148, 180, 0.6) 0%,
            rgba(60, 148, 180, 0.4) 20%,
            rgba(60, 148, 180, 0.1) 50%,
            rgba(17, 17, 17, 0.8) 100%
        );
        width: 300px;
        height: 300px;
        filter: blur(100px) brightness(2);
        z-index: -1;
    }

    @media (prefers-reduced-motion) {
        .blurred-image.form-page  {
            animation: none; 
        }
    }
</style>