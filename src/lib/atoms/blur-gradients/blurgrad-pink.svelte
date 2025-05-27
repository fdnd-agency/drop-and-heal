<script>  
    export let pageStyle = 'default';
    export let customStyles = {};
</script>

<div
    class={`blurred-image ${pageStyle}`}
    style="{customStyles}" >
</div>
 
<style>
    .blurred-image {
        background: linear-gradient(
            to right,
            rgba(108, 85, 68, 1) 36%,
            rgba(119, 64, 75, 1) 55%,
            rgba(108, 85, 68, 1) 100%
        );
        position: absolute;
        width: 30%;
        height: 100%;
        filter: blur(150px);
        z-index: -1;
        overflow: hidden;
    }


    .blurred-image.form-page {
        transform: scale(2);
    }

    @keyframes bg-gradient {
        25% { transform: scale(1.2); }
        50% { transform: scale(1.1); }
        75% { transform: scale(1.2); }
    }


    @media (prefers-reduced-motion) {
        .blurred-image.form-page  {
            animation: none; 
        }
    }
</style>