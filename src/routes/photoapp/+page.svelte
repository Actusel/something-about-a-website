<main>
    <h1>
        Photoapp
    </h1>
    <p>
        Denna webbsida lägger till <strong>fina</strong> bilder.
    </p>
</main>
<div class="photos">
    <div class='image-wrapper'> <img src={image} alt="bildinformation"> </div>
    <div class='image-wrapper'> <img src={photo} alt="bildinformation"> </div>
    <div class='image-wrapper'> <img src={picture} alt="bildinformation"> </div>
    </div>
<style>
    h1{
        text-align: center;
    font-size: 50px;
    margin: 20px;
     color: mediumaquamarine}
    p{text-align: center;
    color: MediumSeaGreen}
    .photos{
        display:flex;
        margin-left: 5vw;
        max-width: 90vw;
        display:flex;
        overflow:hidden;
        align-items:center;
        justify-content:center;
        background-color: DeepPink;
    }
    .photos img{ width: 100%; }

    .image-wrapper img{
        width: 100%;
        border-radius: 20px;
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
    }

    .image-wrapper {
        flex:1;
        margin:10px;
        flex-basis: 300px;
    }

    .image-wrapper:hover { flex-grow:2;
        transition:flex .5s;}

    .image-wrapper:active { transform: scale(0.9);}

</style>
<script>
    
let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"

</script>