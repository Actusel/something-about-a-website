<script>
    import { base } from '$app/paths';
    import {users_store} from "$lib/user";
    
    import { onMount } from 'svelte';
    let users = [];
    
    

    let color = "#3a2e3b"
    let password=""
    let email=""
    let name=""

    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            users = JSON.parse($users_store);
        }
    });

    

    function handleSubmit() {
        
        let new_user = {username: name, password: password, email: email, color: color};
        if (users.filter(user => user.username == name && user.email == email).length>0){
            alert("uǝʞɐʇ ʎpɐǝɹlɐ")
            return 
        }
        
        users = [...users, new_user];
        $users_store = JSON.stringify(users);
        alert("Välkommen")
    }

</script>

<main>
    <div class="container" style="color:black">  
        <h1 style="color:white; font-size:30px; margin-bottom: 10px"> Registrering </h1>
    <form on:submit|preventDefault={handleSubmit}>    
    <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"> </div>   
    <label for="name">Namn:</label>
    <input type="text" bind:value={name} id="name" >
    <label for="email">E-mail:</label>
    <input type="email" bind:value={email} id="email" >
    <label for="password">Password:</label>
    <input type="password" bind:value={password}  id="password">
    <label for="color">favoritfärg:</label>
    <select id="colors" bind:value={color}>
        <option value="#E1D9D1" >darkwhite</option>
        <option value="gainsboro">gainsboro</option>
        <option value="lightgray" >lightgray/lightgrey</option>
        <option value="silver" >silver</option>
        <option value="#aaaaaa" >Neongray/Neongrey</option>
        <option value="darkgray" >darkgray/darkgrey</option>
        <option value="gray" >gray/grey</option>
        <option value="dimgray" >dimgray/dimgrey</option>
        <option value="lightslategray" >lightslategray/lightslategrey</option>
        <option value="slategray" >slategray/slategrey</option>
        <option value="darkslategray" >darkslategray/darkslategrey</option>
        <option value="#232b2b" >lightblack</option>
    </select>
    <div style="margin-bottom: 10px"></div>
    <input type="submit"  id="register" value=Registrera >

</form>
<h2 style="color:white"> har du redan ett konto? <a href="{base}/login" style="text-decoration: underline;">LogIn</a> </h2>
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
#register{
    background-color:white;
     font-size: 20px; border-radius:7px;
     font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.container label{color:floralwhite}

</style>

