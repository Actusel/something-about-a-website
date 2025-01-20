<script>
	import { list } from 'postcss';
	import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    let listy=[]

    function storage_data(_data){
      for (let number in listy){
        if (listy[number].name == _data.response.name){
          listy.splice(number,1)
        }
      }
      listy.push(_data.response);
      sessionStorage.setItem('latest',JSON.stringify(listy))
    }

    function load_data(){
      let sadfsf = sessionStorage.getItem('latest')??"[]"
      if (sadfsf.length > 2){
        listy=JSON.parse(sadfsf)
      }
      
    }

    onMount(
      ()=>{load_data();storage_data(data)}
    )

  </script>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon} 
  <article>
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <img src={sprites[1]} />
      {/if}
    {/each}
  </article>
  <h1>{pokemon.response.name}</h1>
  {pokemon.response.moves[0].move.name}
  <div>{Math.round(pokemon.response.weight*0.45359237/4.5)} kg</div>

  {/await} 
  <style>
    article{
        display: flex;
        width: 90%;
        height: 30%;
        gap: 1em;
    }
  </style>
    