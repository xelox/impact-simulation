<script lang="ts">
    import { Artifact } from "../artifacts/artifactModel";
    import { dataSheet } from "../dataSheet";
  import InfoView from "../views/infoView.svelte";
    const farmArtifacts = () => {
        console.clear();
        const farmReturn = {3: [], 4: [], 5: []};
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

        for(const [tier, artifacts] of Object.entries(farmReturn)){
            console.log(`Rarity: ${tier}`);
            for(const artifact of artifacts) artifact.print();
        }
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
        margin-top: 20px;
    }
    .FarmButton{
        font-size: 1.5rem;

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
            {#each Object.entries(showingDomainInfo.artifactSets) as [rarity, artifactNames]}
                    {#each artifactNames as name}
                        <div class=artifact_card on:mouseenter={()=>showArtifactInfo(String(name))} on:mouseleave={()=>clearArtifactInfo()}>
                            <img src={`./genshin-assets/Misc/Glows/${rarity}_star_background.png`} alt="">
                            <img src="{`./genshin-assets/Artifacts/${String(name).replace(/[^\w\s-]+/gi, '').toLowerCase().replaceAll(' ', '_')}_flower.png`}" alt="">
                        </div>
                    {/each}
            {/each}
            </div>
        </div>
    </div>
</div>
<InfoView/>
<div class="artifactFarmSectionWrap">
    <button class=FarmButton on:click={farmArtifacts}>Generate artifact</button>
</div>
