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
<div style="text-decoration:underline;">stats: </div>
{#each pokemon.response.stats as vaporeon}
  <div style="border-width: 4px; display:flex; margin-top:1px">
    
    <div style="border-width:1px;">
      {vaporeon.stat.name}
    </div>
    {vaporeon.base_stat}
  </div>
{/each}
  <div style="display: flex; border-width:4px; margin-top:1px"> 
    <div style="border-width:1px;">weight(kg)</div>{Math.round(pokemon.response.weight*0.1)}
  </div> 
  <div style="text-decoration:underline; margin-top:3px">​ moves: ​</div>
  {#each pokemon.response.abilities as ability}
    <div>{ability.ability.name}</div>
  {/each}

  

  {/await} 
  <style>
    article{
        display: flex;
        width: 90%;
        height: 30%;
        gap: 1em;
        justify-content: center;
    }
  </style>
    