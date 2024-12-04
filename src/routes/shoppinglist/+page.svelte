<script>
    import {fade} from 'svelte/transition'
    let varor = [{name:"parkerings_skylt", köpt: true, prio: 0}, {name:"avgasrör", köpt: false, prio: 0}, {name: "c4 explosive", köpt: false, prio: 0},{name:"teddybjörn", köpt: false, prio: 0}]
    let naeme = ""
    function remove(i){
        varor[i].köpt = false
        varor=varor
    }
    function add(i){
        varor[i].köpt = true
        varor=varor
    }
    function del(i){
        varor.splice(i,1)
        varor=varor
    }
    function number_sort(i){
        varor=varor.sort(function(a,b) {return b.prio - a.prio})
    }
    function handleSubmit(){
        if (naeme.length>0){
            varor.push({name: naeme, köpt: false, prio: 0})
            varor=varor
        }
    
        
    }
</script>

<main>
    <div class="container">
        <h1>⠀Shopping list⠀</h1>
        <div class="categories_container">
            <section style="overflow-y:scroll; max-height:80vh">
                <h2>Varor att köpa</h2>
                <ol>
                    {#each varor as vara,i}
                    {#if vara.köpt == false}
                    <li transition:fade>
                        {vara.name} <button  on:click={()=>add(i)}> add</button> <button style="color:maroon" on:click={()=>del(i)}> delete</button> <input bind:value={varor[i].prio} on:change={()=>number_sort(i)} type=number style="color:black" min="0" max="9"> 
                    </li>
                    {/if}
                    {/each}
                </ol>
            </section>
            <section style="overflow-y:scroll; max-height:80vh">
            <h2>varor köpta</h2>
            
            <ul>
                {#each varor as vara,i}
                {#if vara.köpt}
                    <li transition:fade>
                        {vara.name} <button  on:click={()=>remove(i)}> remove</button> <button style="color:maroon" on:click={()=>del(i)}> delete </button> <input bind:value={varor[i].prio} on:change={()=>number_sort(i)} type=number style="color:black" min="0" max="9">
                    </li>
                    {/if}
                    {/each}
            </ul>
            </section>
            
        </div>
        <form on:submit|preventDefault={handleSubmit}>
            <input type="text" bind:value={naeme} style="color:black;">
            <input type="image"  id="add" alt="submit" style="width:4%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Christmas_tree_02.svg/794px-Christmas_tree_02.svg.png">
        </form>
    </div>
</main>

<style>
    form{
        display:block;
        text-align: center;
    }
    ul button{
        color: cadetblue;
        text-decoration: underline;
    }
    ol button{text-decoration: underline;
    color:Lime}
    .container{   
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;  
        background-color: darkmagenta;
        width: 60vw;
        height: 70vh;
        border-radius: 20px;
        } 
        .container h1{
            align-self: center;
            justify-self: center;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 5px;
            font-size: 22px;
        }
    .categories_container{
        background-color: deeppink;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 10px;
    }
    section{width: 100%;
        justify-items: center;
    height: 100%;}
    
 .categories_container section:nth-child(1){  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1) /* svart bakgrund med 10% opacitet */
  }
 
  .categories_container section:nth-child(2){  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }
  h2{
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 5px;
            margin-top: 5px;
            font-size: 16px;
            
            }

li{
    max-width: 400px;
    border-width: 5px;
    margin-bottom: 5px;
    border-radius: 15px;
    border-color: MidnightBlue;
    list-style-image: radial-gradient(circle, #f500ff, #c12dec, #9037d4, #6337b8, #393299, #39388f, #3a3d85, #3d417a, #585783, #716e8d, #888696, #9f9f9f);
}
</style>