<script lang="ts">
    import { Artifact } from "../artifacts/artifactModel";
    import ArtifactView from "../artifacts/artifactView.svelte";
    import { dataSheet } from "../dataSheet";
    import {slide} from "svelte/transition";
    import {artifactsInventory} from '../../artifactStore';

    let lastOutcrop: null | Artifact[] = null;
    let artifactPreview: null | Artifact = null;

    const farmArtifacts = () => {
        console.clear();
        const farmReturn = {5: [], 4: [], 3: []};
        const dropRates = dataSheet.domains.dropRates.max;
        for(const [rarity, dropRate] of Object.entries(dropRates)){
            let dropRateTmp = dropRate;
            while(dropRateTmp > 1){
                dropRateTmp--;
                farmReturn[rarity].push(new Artifact(selectedDomainInfo.artifactSets[rarity], Number(rarity)));
            }
            if(dropRateTmp > Math.random()){
                farmReturn[rarity].push(new Artifact(selectedDomainInfo.artifactSets[rarity], Number(rarity)));
            }
        }
        const tmpArr = [];
        for(const [tier, artifacts] of Object.entries(farmReturn)){
            console.log(`Rarity: ${tier}`);
            for(const artifact of artifacts) {
                tmpArr.push(artifact);
                $artifactsInventory = [...$artifactsInventory, artifact];
            }
        }
        lastOutcrop = tmpArr.sort((a, b)=>{
            return a.rarity > b.rarity ? -1 : 1;
        });
    }
    let selectedDomainName = "Momiji-Dyed Court";
    let selectedDomainInfo = dataSheet.domains.domainsInfo[selectedDomainName];
    let showingDomainInfo = selectedDomainInfo;
    const showDomainInfo = (info: any) => {
        showingDomainInfo = info;
    }
    const hideDomainInfo = () => {
        showingDomainInfo = selectedDomainInfo;
    }
    const selectDomain = (newDomainName: string, newDomainInfo:any) => {
        selectedDomainName = newDomainName;
        selectedDomainInfo = newDomainInfo;
    }
    const showArtifactInfo = (artifactName: string) => {
        console.log(artifactName);
    }
    const clearArtifactInfo = () => {

    }

    const showPreviewArtifact = (artifact: Artifact) => {
        artifactPreview = artifact;
    }
</script>

<style>
    .outerDomainSelectionWrapper{
        background-color: rgb(57, 61, 70);
    }
    .innerDomainSelectionWrapper{
        display: flex;
        max-width: max-content;
        background-color: rgb(57, 61, 70);
        color: rgb(230, 209, 185);
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
    }
    .domainListWrapperNamesWrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .domain_artifacts_info_cards_wrapper{
        display: flex;
    }
    .artifact_card{
        width: 60px;
        aspect-ratio: 1/1;
        margin: 10px;
        overflow: hidden;
        border-radius: 4px;
        display: block;
        position: relative;
    }
    .artifact_card>img{
        position: absolute;
        width: inherit;
        top: 0;
    }
    .domainListWrapperNamesWrapper>button{
        padding: 4px;
        border-radius: 4px;
        margin: 0 4px 0 4px;
        border: 1px solid transparent;
        background: none;
        cursor: pointer;
        color: rgb(230, 209, 185);
        transition: 0.1s;
    }
    .domainListWrapperNamesWrapper>button:hover{
        background-color: rgba(255, 255, 255, 0.315);
    }
    .activeDomainButtonHandle{
        background-color: rgb(196, 188, 177) !important;
        color: black !important;
    }
    .domainTitle{
        background-color: rgb(77, 82, 94);
        margin: 0;
        padding: 10px;
        color: rgb(230, 209, 185);
        font-size: 2rem;
        display: flex;
        justify-content: left;
    }
    .domainTitle>span{
        vertical-align: center;
    }
    .domainTitle img{
        height: 1.5em;
    }

    .domainInfoCard{
        background-color: rgb(241, 234, 221);
    }
    .domainImageWrap{
        width: 100%;
    }
    .artifactFarmSectionWrap{
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: rgb(74, 78, 100);
        padding: 18px;
    }
    .FarmButton{
        font-size: 1.5rem;

    }
    .outcropViewWrap{
        position: fixed;
        background-color: #000000a8;
        width: 100vw;
        height: 100vh;
        top: 0; left: 0;
        backdrop-filter: blur(5px);
    }
    .outcropContainer{
        position: fixed;
        left: 0; top: 50%;
        width: 100vw;
        transform: translate(0, -50%);
        background-color: #b3af7a;
        display: flex;
        justify-content: center;
    }
    .outcropContainer>.artifactImgWrap{
        width: 60px;
        aspect-ratio: 1/1;
        margin: 10px;
        overflow: hidden;
        border-radius: 4px;
        display: block;
        position: relative;
        background: none;
        border: none;
    }
    .outcropContainer>.artifactImgWrap>img{
        position: absolute;
        width: inherit;
        top: 0;
        left: 0;
    }
    .previewArtifactElement{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: block;
        background-color: red;
    }
</style>
<div class="outerDomainSelectionWrapper">
    <div class=innerDomainSelectionWrapper>
        <div class=domainListWrapperNamesWrapper>
            {#each Object.entries(dataSheet.domains.domainsInfo) as [domainName, info]}
                <button class="domainButtonHandle {selectedDomainName === domainName ? 'activeDomainButtonHandle' : ''}" on:mouseenter={()=>showDomainInfo(info)} on:mouseleave={()=>hideDomainInfo()} on:click={()=>selectDomain(domainName, info)}>{domainName}</button>
            {/each}
        </div>
        <div class="domainInfoCard">
            <div class=domainTitle>
                <img src="./genshin-assets/Misc/domain.png" alt="">
                <span>{showingDomainInfo.name}</span>
            </div>
            <img class=domainImageWrap src="{showingDomainInfo.img}" alt="">
            <div class=domain_artifacts_info_cards_wrapper>
            {#each Object.keys(showingDomainInfo.artifactSets) as rarity}
                    {#each showingDomainInfo.artifactSets[rarity] as name}
                        <div class=artifact_card on:mouseenter={()=>showArtifactInfo(String(name))} on:mouseleave={()=>clearArtifactInfo()}>
                            <img src={`./genshin-assets/Misc/Glows/${rarity}_star_background.png`} alt="">
                            <img src="{`./genshin-assets/Artifacts/${String(name).replace(/[^\w\s-]+/gi, '').toLowerCase().replaceAll(' ', '_')}_flower.png`}" alt="">
                        </div>
                    {/each}
            {/each}
            </div>
        </div>
    </div>
    <!-- <InfoView/> -->
    <div class="artifactFarmSectionWrap">
        <button class=FarmButton on:click|self={farmArtifacts}>Generate artifact</button>
    </div>
</div>


{#if lastOutcrop && !artifactPreview}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="outcropViewWrap" on:click|self="{()=>{lastOutcrop = null}}"></div>
{/if}

{#if lastOutcrop}
    <div class="outcropContainer" in:slide out:slide>
        {#each lastOutcrop as artifact}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="artifactImgWrap" on:click="{()=>{showPreviewArtifact(artifact)}}">
                <img src={`./genshin-assets/Misc/Glows/${artifact.rarity}_star_background.png`} alt="">
                <img src="{`./genshin-assets/Artifacts/${String(artifact.setName).replace(/[^\w\s-]+/gi, '').toLowerCase().replaceAll(' ', '_')}_${artifact.pieceType.toLowerCase()}.png`}" alt="">
            </div>
        {/each}
    </div>
{/if}

{#if artifactPreview}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="outcropViewWrap" on:click|self="{()=>{artifactPreview = null}}"></div>
    <div class="previewArtifactElement"><ArtifactView artifact={artifactPreview}/></div>
{/if}