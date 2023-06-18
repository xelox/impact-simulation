<script lang='ts'>

    import type { Artifact } from './components/artifacts/artifactModel';
    import {artifactsInventory} from './artifactStore';
    import ArtifactView from "./components/artifacts/artifactView.svelte"

    let artifactPreview: null | Artifact = null;

    const previewChanged = () => artifactPreview = artifactPreview;

    const showPreviewArtifact = (artifact: Artifact) => {
        artifactPreview = artifact;
    }

    let sortedArr = new Array<Artifact>();
    $: if($artifactsInventory){
        sortedArr = $artifactsInventory.sort((a, b) => {return a.rarity > b.rarity ? -1 : 1})
    }
</script>

<style>
    main{
        display: flex;
        flex-direction: row;
        width: calc(816px + 300px);
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
    }
    .inventoryWrap{
        display: flex;
        flex-wrap: wrap;
        padding: 4px;
        overflow: auto;
        max-height: 700px;
        min-width: 816px;
        max-width: 816px;

    }
    .artifactImgWrap{
        width: 60px;
        aspect-ratio: 1/1;
        margin: 4px;
        overflow: hidden;
        border-radius: 2px;
        display: block;
        position: relative;
        background: none;
        border: none;
    }
    .artifactImgWrap>img{
        position: absolute;
        width: inherit;
        top: 0;
        left: 0;
    }
    /* .levelSpan{
        position: absolute;
        color: white;
        font-size: 1rem;
        bottom: 0;
        right: 0;
        z-index: 2;
    } */
</style>

<main>
    <div class="inventoryWrap">
        {#each sortedArr as artifact}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="artifactImgWrap" on:click="{()=>{showPreviewArtifact(artifact)}}">
                <!-- <span class=levelSpan>{artifact.getLevel()}</span> -->
                <img src={`./genshin-assets/Misc/Glows/${artifact.rarity}_star_background.png`} alt="">
                <img src="{`./genshin-assets/Artifacts/${String(artifact.setName).replace(/[^\w\s-]+/gi, '').toLowerCase().replaceAll(' ', '_')}_${artifact.pieceType.toLowerCase()}.png`}" alt="">
            </div>
        {/each}
    </div>
   
    <div class="previewWrap">
        {#if artifactPreview}
            <ArtifactView artifact={artifactPreview} levelup={true} onChange={previewChanged}/>
        {/if}
    </div>

</main>
