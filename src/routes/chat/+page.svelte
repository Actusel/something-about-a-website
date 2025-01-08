<script>
    import ElizaBot from 'elizabot';
    import { enhance } from "$app/forms";
    import {dunno} from "$lib/chat";
    import { onMount } from 'svelte';
    



    const eliza = new ElizaBot();

    let chat = [{ user: 'Eliza', message: eliza.getInitial() }];

    onMount(() => {
    chat = JSON.parse($dunno);
});

    
    
    async function write(message) {
    //TODO: Add the new message to the chat
        chat.push({user: 'you', message: message})
        chat=chat
    // random delay for Eliza's response time
    //Hämta HTML-elementet med id:et visible
    var element = document.getElementById("visible");
    //Ändrar elementets CSS-egenskap display till default
element.style.display = "flex"; // Visa elementet
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
        element.style.display = "none";
        chat.push({user:'Eliza', message:eliza.transform(message)})
        chat=chat
        $dunno = JSON.stringify(chat);
  }         


function restart(){
    chat = [{ user: 'Eliza', message: eliza.getInitial() }]
       }
</script>

<main>
    <section id=lucas>
        {#each chat as message}
        <article class={message.user}>
            <p>{message.user}: {message.message}</p>
        </article>
        {/each}
       
        <article id=visible>
            <span class=circle></span>
            <span class=circle></span>
            <span class=circle></span>
        </article>
    </section>
    
    
    <form style="color: black;" method="post"
    use:enhance={({ formElement, formData, action, cancel }) => {
      cancel(); //don't post anything to server
      const text = formData.get("text"); // what does "text" refer to?
      write(text);

      // TODO: reset the form using _____.reset() - what do we want to reset? the element or the data?
        formElement.reset()

      }}> 
        <input type="text" name='text' required placeholder="type something to start wasting your time 💪😺🤜">
    </form>
    <button on:click={restart}>reset chat</button>
</main>

<style>
    .circle{
        display: inherit;
        margin:5px;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: blue;
        animation-name: typing;
  animation-duration: 1s; /* Längd på animationen (till exempel 3 sekunder) */
  animation-timing-function:linear; /* Funktion som styr tidsförloppet (till exempel "ease-in-out") */
  animation-iteration-count: infinite;
  
    }
    
            /* CSS-stilar för .circle med index 1 (den första cirkeln) */
            .circle:nth-child(1) {
                animation-delay: 0ms; /* Ingen fördröjning */
            }
            /* CSS-stilar för .circle med index 2 (den andra cirkeln) */
            .circle:nth-child(2) {
                animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
            }
            /* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
            .circle:nth-child(3) {
                animation-delay: 666ms; /* Starta animationen efter 666 ms */
            }
            
    #visible{
        
        height: 60px;
        width: 100px;
        display: none;
        justify-content: center;
        align-items: center;
        
    }
    main{
        width: 60vw;
        height: 70vh;
        padding: 10px;
        background-color: lightgreen;
    }
    section{height: 90%;
        overflow-y: scroll;
    }
    article,
    input{ background-color: coral;
    margin: 10px;
padding: 10px;
                border-radius: 10px;
    width: 90%;
}
 
@keyframes typing {
    0% {transform: scale(1); }
    25%{transform: scale(1); }
    50% {transform: scale(1.4); }
    100% {transform: scale(1); }
}
.you{
    background-color: bisque;
    margin-left: 8.915855884%;
}
</style>