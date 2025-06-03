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
            rgba(137, 66, 76, 0.6) 0%,
            rgba(137, 66, 76, 0.4) 20%,
            rgba(137, 66, 76, 0.1) 50%,
            rgba(17, 17, 17, 0.8) 100%
        );
        width: 500px;
        height: 500px;
        filter: blur(120px) brightness(2);
        z-index: -1;
    }

    .blurred-image.intro_algemeen {
        bottom: -160px;
        right: -70px;
    }

    .blurred-image::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        filter: blur(300px);
        z-index: 0;
    }

    @media (prefers-reduced-motion) {
        .blurred-image.form-page  {
            animation: none; 
        }
    }
</style>