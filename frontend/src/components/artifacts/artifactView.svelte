<script lang="ts">
    import { dataSheet } from "../dataSheet";
    import type { Artifact } from "./artifactModel";
    import {slide} from "svelte/transition";

    export let artifact: Artifact;
    let info = artifact.serialized();

    $: if(artifact.getLevel()){
        info = artifact.serialized();
    }

    export let onChange = null;
    export let levelup = false;
    
</script>

<style>
    main{
        background-color: rgb(243, 239, 202);
        color: white;
        max-width: max-content;
        width: 300px;
    }
    main *{
        margin: 0;
    }
    h2{
        background-color: #ca6841;
        padding: 6px;
    }
    img{
        width: 100%;
    }
    .bgImgWrap{
        display: flex;
        justify-content: space-between;
        background-size: cover;
    }
    .bgImgWrap>img{
        max-width: 150px;
    }
    .lhs{
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .substatsWrap{
        margin-top: 8px;
        transform: translateX(-16px);
    }
    .pieceComboDescWrap{
        padding: 8px;
    }
    .levelUpBtn{
        background-color: green;
        padding: 4px;
        margin: 24px;
        border-radius: 4px;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        cursor: pointer;

    }
</style>

<main>
    <h2>{artifact.setName}</h2>
    <div class="bgImgWrap" style="background-image: url({`./genshin-assets/Misc/Glows/${artifact.rarity}_star_background.png`});">
        <div class="lhs">
            <span><b style="font-size: 1.4rem">{artifact.pieceType}</b> +{artifact.getLevel()}</span>
            <div class="second">
                <p style="opacity: 0.6">{info.mainstatType}</p>
                <p style="font-size: 2.4rem">{info.mainstatValue}{info.mainstatType.charAt(info.mainstatType.length - 1) === '%' ? '%' : ''}</p>
            </div>
        </div>
        <img src="{`./genshin-assets/Artifacts/${String(artifact.setName).replace(/[^\w\s-]+/gi, '').toLowerCase().replaceAll(' ', '_')}_${artifact.pieceType.toLowerCase()}.png`}" alt="">
    </div>
    <ul class="substatsWrap" style="color: black;">
        {#each info.substats as substat}
            <li><b>{substat.type}</b> {substat.value}</li>
        {/each}
    </ul>
    <div class="pieceComboDescWrap" style="color: black;">
        {#each Object.keys(dataSheet.setsDescription[artifact.setName]) as pieceAmount}
            <div class="pieceCombo">
                <b>{pieceAmount}:</b> {dataSheet.setsDescription[artifact.setName][pieceAmount]}
            </div>
        {/each}
    </div>

    {#if levelup}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span class="levelUpBtn" on:click={()=>{artifact.upgradeArtifactOnce(); onChange();}}>Level Up +1</span>
    {/if}
</main>
