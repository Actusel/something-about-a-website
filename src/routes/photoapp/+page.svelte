<nav> <a href="/">Hem</a> </nav>
<main>
    <h1>
        Photoapp
    </h1>
    <p>
        Denna webbsida lägger till <strong>fina</strong> bilder.
    </p>
</main>
<div class="photos">
    <div class='image-wrapper'> <img src="https://i.redd.it/rofzm44oka091.png" alt="bildinformation"> </div>
    <div class='image-wrapper'> <img src="https://i.redd.it/vd9dc7wfk9471.png" alt="bildinformation"> </div>
    <div class='image-wrapper'> <img src="https://miro.medium.com/v2/resize:fit:1400/0*YeaUsQyhXSL1TCTH.png" alt="bildinformation"> </div>
    </div>
<style>
    .photos{
        display:flex;
        max-width: 90vw;
        display:flex;
        overflow:hidden;
        align-items:center;
        justify-content:center;
    }
    .photos img{ width: 100%; }

    .image-wrapper img{width: 100%}

    .image-wrapper {
        flex:1;
        margin:10px;
    }

    .image-wrapper:hover { flex:2; }

    .image-wrapper:active { transform: scale(0.9); }

</style>