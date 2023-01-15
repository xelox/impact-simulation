<script lang="ts">
    let rarity = 5;
    let name = 'Emblem of Severed Fate'
</script>
<style>
    main{
        background-color: wheat;
        width: 300px;
        min-height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    
</style>

<main>
    <div class="{`title title_${rarity}`}">
        {name}
    </div>
</main>