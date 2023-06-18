<script>
    import InventorySystem from "../inventorySystem.svelte";
    import Domain from "./domain/domain.svelte";
    let activeInterface = 'domain';

</script>

<style>
    .interfaceWrapper{
        display: none;
    }
    .active{
        display: block;
    }
    header{
        background-color: rgb(74, 78, 100);    
        display: flex;
        justify-content: center;
        margin-bottom: 48px;
    }
    header>span{
        margin: 12px;
        color: aliceblue;
        padding: 6px;
        border-radius: 4px;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */

    }
    header>span:hover{
        background-color: rgb(42, 46, 68);
        cursor: pointer;
    }
</style>

<main>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
    <header>
        <span on:click={()=>{activeInterface='domain'}}>Domains</span>
        <span on:click={()=>{activeInterface='inventory'}}>Inventory</span>
    </header>
    <div class="interfaceWrapper {activeInterface==='domain'?'active':''}">
        <Domain/>
    </div>
    
    <div class="interfaceWrapper {activeInterface==='inventory'?'active':''}">
        <InventorySystem/>
    </div>
</main>