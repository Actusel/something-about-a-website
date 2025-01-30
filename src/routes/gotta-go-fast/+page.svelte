<script>
    import { base } from '$app/paths';
    import {users_store} from "$lib/user";
	import { RadioItem } from '@skeletonlabs/skeleton';
	import { stringify } from 'postcss';
    import { onMount } from 'svelte';

    let users = [],email="",
    password="",
    running = false,
    time=0,
    timer,
    fastest_time = Infinity;



    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            users = JSON.parse($users_store);
        }
        fastest_time=Number(sessionStorage.getItem('latest')??Infinity)
    });

    function handleSubmit() {  
        if (users.filter(user => user.email == email && user.password== password).length>0){
                
            if (time<fastest_time && time!=0){
                    fastest_time = time
                    sessionStorage.setItem('latest',fastest_time)
                    alert("❌Password or Email is not wrong.❌")
                    stop_timer()

                } else if (time==0){alert("Why cheaet! 😡😡😡")}
                else {alert(" Not fast enough... 🤷 \n YOU: ➡️🐢⬅️")}
                
                return
            }
            else{
            alert("✔️unsuccessfully logged in✔️")
        }
    
        
        
    }

    function start_timer(){
        if (!running){
            running = true;
            timer = setInterval(() => time++,10);
        }
    }
    function stop_timer(){
        clearInterval(timer);
        time=0;
        running=false;
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
    }

</script>

<main>
    <div class="container" style="color:black">  
        <p style="font-size: 80px; margin-bottom: 40px; font-family: Copperplate, Copperplate Gothic Light, fantasy;">{running?"GOO!":""}</p>
        <h1 style="color: white; font-size:30px; margin-bottom: 10px"> speedy Log in </h1>
        <p>Record time: {fastest_time==Infinity?"no time set":fastest_time.toString().slice(0,-2)+':'+fastest_time.toString().slice(-2)}</p>
        <p id=current_timer>{time.toString().slice(0,-2)?time.toString().slice(0,-2):0}:{time.toString().slice(-2)}</p>
    <form on:submit|preventDefault={handleSubmit}>    

        
    <label for="email">E-mail:</label>
    <input type="email" bind:value={email} on:input={()=>start_timer()} id="email" >
    <label for="password">Password:</label>
    <input type="password" bind:value={password} on:input={()=>start_timer()} id="password">
    <div style="margin-bottom: 10px"></div>
    <input type="submit"  id="login" value=login>
    <button on:click={()=>stop_timer()} id="reset">reset</button>
    
</form>
<h2 style="color:white; display:flex;"> <a href="{base}/register">registrera ​</a> nytt konto ​<h2 style="text-decoration: underline;"> här</h2> </h2>
<h2 style="color:white; margin-bottom:20%; display:flex;"><a href="{base}/login"> logga in </a>​ på vanliga och TRÅKIGA sättet ​<div style="text-decoration: underline;">här</div></h2>
</div>
    
    
</main>

<style>
    p{
        color:white; 
        font-size: larger
    }

 main{
        background-image: url("https://athleticsweekly.com/wp-content/uploads/2020/02/athletics-track-by-austris-augusts-unsplash.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        background-repeat: repeat;
        flex-direction: column;
    }
    
.container{
        border: solid 5px #efd8d3;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-image: url(https://runningmagazine.ca/wp-content/uploads/2019/07/Screen-Shot-2019-07-07-at-4.03.41-PM.jpg);
        margin: auto;
        justify-items: center;
        align-content: end;
        min-height: 500px;
        min-width: 300px;
        
}     
#current_timer{
    border-width: 2px;
    border-radius: 5px;
}

form{justify-items: center;}
#login{
    background-color:red;
     font-size: 20px; border-radius:7px;
     font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#reset{
    background-color: lime;
    font-size: 20px; border-radius:7px;
     font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.container label{color:floralwhite}
        
    
    


</style>

