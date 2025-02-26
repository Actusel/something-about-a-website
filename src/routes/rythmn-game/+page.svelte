<script>
    import { onMount } from 'svelte';

    let hitLine;
    let notes = [];
    let combo = 0;
    let judgement = '';
    let judgement_element;
    let bpm = 150;
    let note_speed = 100;
    let intervalId;

    function checkHitLine(lane_number) {
        const notes_in_lane = notes.filter(note => note.lane_number == lane_number);
        if (hitLine && notes_in_lane.length > 0) {
            const hit_line = hitLine.getBoundingClientRect();
            for (const note of notes_in_lane) {
                if (note.element) {
                    const note_rect = note.element.getBoundingClientRect();

                    if (note_rect.top > hit_line.top - note_speed && note_rect.top < hit_line.bottom + note_speed) {
                        combo++;
                        note.element.remove();
                        judgement = 'Hit!';
                        judgement_animation();
                    }
                }
            }
        }
    }

    function judgement_animation() {
        if (judgement_element){
            judgement_element.classList.remove('judge');
            void judgement_element.offsetWidth; // Trigger reflow
            judgement_element.classList.add('judge');
        }
    }


    function onKeyDown(e){
        if (e.repeat) return;
        switch(e.keyCode){
        case 90: // 'z' key
            checkHitLine(1);
            break;
        case 88: // 'x' key
            checkHitLine(2);
            break;
        case 188: // ',' key
            checkHitLine(3);
            break;
        case 190: // '.' key
            checkHitLine(4);
            break;
        case 32: // Space bar
            createNote();
            break;
        }
    }

    function createNote() {
        const noteId = notes.length + 1 + Date.now();
        notes = [...notes, { id: noteId, element: null, lane_number: Math.floor(Math.random() * 4) + 1 }];

    }

    function handleAnimationEnd(event) {
        const noteId = event.target.id.split('-')[1];
        notes = notes.filter(note => note.id != noteId);
        combo = 0;
        judgement = 'Miss!';
    }

    $: {
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(() => {
            createNote();
        }, 60000 / bpm);
    }
</script>
<svelte:window on:keydown|preventDefault={onKeyDown} />



<main>
    <form id='customisation' style='position:absolute; align-self:center'>
        <div style='font-weight:bold'>bpm:</div>
        <input bind:value={bpm} type="number" style='color:black;'>
        <div style='font-weight:bold; margin-top:10px;'>note speed:</div>
        <input bind:value={note_speed} type="number" style='color:black;'>
    </form>
    

    <div bind:this={hitLine} id="hit-line">​ z ​  ​ x ​ ​​, ​  ​ ​.</div>


    <div id="combo" class='gameplay-elemements' style="margin-bottom: 80px;">Combo: {combo}</div>

    <div bind:this={judgement_element} id="judgement" class='gameplay-elemements' style="font-family: 'Brush Script MT', cursive; font-weight: bold;"> {judgement}</div>

    {#each notes as note (note.id)}
    <div bind:this={note.element} id="note-{note.id}" class="note fall lane-{note.lane_number}" style="grid-column: {note.lane_number}; animation-duration: {100/note_speed}s;" on:animationend={handleAnimationEnd} ></div>
    {/each}
</main>

<style>
    .note{
        width: 100px;
        height: 40px;
        background-color: white;
        align-self: start;
        position: absolute;
    }
    .gameplay-elemements{
        position: absolute; justify-self:center; align-self:center; font-size:200%; 

    }
    .judge{
        animation: judgement 0.4s linear;
    }

    .fall {
        animation-name: fall;
        animation-timing-function: linear;
    }

    @keyframes fall {
        0% {
            top: 3%;
        }
        100% {
            top: 100vh;
        }
    }
    
    @keyframes judgement {
        0% {
            transform: scale(1);
        }
        25% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    .lane-2 {
        background-color: deepskyblue;
    }

    .lane-3 {
        background-color: deepskyblue;
    }

    main{
        display: grid;
        grid-template-columns: repeat(4, 100px);
        grid-template-rows: repeat(4, 100%);
        position: relative;
        height: 100vh;
        width: 100vw;
        background-color: black;
        justify-content: center;
    }

    #hit-line{
        position: absolute;
        height: 7px;
        width: 400px;
        background-color: lightpink;
        justify-self: center;
        align-self: end;
        margin-bottom: 70px;
        border-radius: 3px;
        font-size: 100px;
    }
</style>