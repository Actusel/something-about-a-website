<script>
    import { base } from '$app/paths';
    import { goto } from "$app/navigation";
	import { list } from "postcss";
    import { onMount } from "svelte";

    let search = ''
    let listy = []

    function load_data(){
        let sadfsf = sessionStorage.getItem('latest')??"[]"
        if (sadfsf.length > 2){
        listy = JSON.parse(sadfsf)
      }
    }
    function restart_world(){
        sessionStorage.clear()
        listy = JSON.parse(sessionStorage.getItem('latest')??"[]")
    }

    onMount(
      ()=>{load_data()}
    )
</script>

<form on:submit|preventDefault={()=> goto({base}+'/search/'+search.toLowerCase())}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  </form>
  
    <button style='background-color:red; margin-bottom:10px; margin-top:10px; border-radius:10px' on:click={()=>{restart_world()}}>​ CLEAR ​</button>
    previous searches:
    <footer>
    <nav>
    {#each listy.splice(-5) as data}
     <div>
         <a href="{base}/search/{data.name}" > {data.name} </a>
     </div>  
    {/each}
</nav>
</footer>

  <style>
    input{
        color:lightblue;
        background-color: darkblue;
        border-radius: 10px;
    }
    a:hover{
      background-color: lightblue;
      color: black;
      font-size: large;
    }
    footer{
      display: flex;
      min-width: 100px;
      border-width:3px; 
      justify-content: center;
      align-content: center;
    }
    nav{display: flex;flex-direction: column-reverse}
  </style>
                   