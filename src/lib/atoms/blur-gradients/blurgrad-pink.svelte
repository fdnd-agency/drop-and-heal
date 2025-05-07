<script>  
import { page } from '$app/stores';
export let pageStyle = 'default';
export let customStyles = {};
</script>

<div
class={`blurred-image ${pageStyle}`}
style="{customStyles}" ></div>
 
<style>
    .blurred-image {
        background: radial-gradient(circle, rgba(125, 66, 74, 0.7));
        position: absolute;
        width: 300px;
        height: 300px;
        z-index: 1;
        filter: blur(100px);
        border-radius: 50%;
    }

    .blurred-image::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        filter: blur(200px);
        z-index: 0;
    }

    .blurred-image.form-page {
        transform: scale(2);
        /* animation: bg-gradient 10s linear infinite; */
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