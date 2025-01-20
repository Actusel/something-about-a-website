<script>
</script>

<main>
    <slot/>
</main>

<div class="backdrop"> 
    <img src="https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960" alt="albin_i">
</div>


<style>
main{
    height: 100vh;width: 80vw;
    background-color:rgba(255, 255, 255, 0.5);
    margin: 5vh auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.backdrop{
    width: 100vw; height: 100vh;
    position: fixed;
    background-size: cover;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(5px);

}
</style>