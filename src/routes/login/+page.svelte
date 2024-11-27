<script>
    import { base } from '$app/paths';
    import {users_store} from "$lib/user";

    import { onMount } from 'svelte';

    let users = []
    let email=""
    let password=""


    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            users = JSON.parse($users_store);
        }
    });

    function handleSubmit() {   
        if (users.filter(user => user.email == email && user.password== password).length>0){
            alert("logged in(❓probably❓)")
            return
        } else{
            alert("𝔂𝓸𝓾𝓻 𝓮𝔁𝓼𝓲𝓽𝓮𝓷𝓬𝓮 𝓲𝓼 𝓽𝓸𝓸 𝓲𝓷𝓼𝓲𝓰𝓷𝓲𝓯𝓲𝓬𝓪𝓷𝓽")
        }
        
        
        
    }

</script>

<main>
    <div class="container" style="color:black">  
        <h1 style="color:white; font-size:30px; margin-bottom: 10px"> Log in </h1>
    <form on:submit|preventDefault={handleSubmit}>    
    <label for="email">E-mail:</label>
    <input type="email" bind:value={email} id="email" >
    <label for="password">Password:</label>
    <input type="password" bind:value={password} id="password">
    <div style="margin-bottom: 10px"></div>
    <input type="submit"  id="login" value=login >
</form>
<h2 style="color:white"> har du inte ett konto? <a href="{base}/register" style="text-decoration: underline;">REGISTERA</a> </h2>
</div>
    
    
</main>

<style>


 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        background-repeat: repeat;
        flex-direction: column;
        
    }
    
.container{
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: #3a2e3b;
        margin: auto;
        justify-items: center;
        align-content: center;
        min-height: 500px;
        min-width: 300px;
        
}     

form{justify-items: center;}
#login{
    background-color:white;
     font-size: 20px; border-radius:7px;
     font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.container label{color:floralwhite}
        
    
    


</style>

