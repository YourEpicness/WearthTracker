<script lang="ts">
    export let imageUrl:string;
    export let title:string;
    export let date:string;
    export let category:string;
    export let amount:number;
    export let type:string;

    let hidden:boolean = true;

    function showCategory() {
        hidden = !hidden
    }
</script>

<div class="grid grid-cols-3 bg-lightPrimary rounded-default shadow-transaction mb-3 py-2">
    <div class="flex items-center justify-center">
        <img src={imageUrl} alt="Transaction Logo" class="w-12 h-12 rounded-circle -ml-10">
    </div>

    <div class="flex flex-col justify-center -ml-10">
        <h3 class="font-semibold text-xl">{title}</h3>
        <p class="text-primary">{date}</p>
    </div>
   
    <div class="flex flex-col mr-3">
        <span on:click={showCategory} class="text-xs cursor-pointer bg-green-400 mt-2 h-2 rounded-default">{!hidden ? category: ''}</span>
        <p class="font-semibold text-xl mt-2">${`${type === 'expense' ? '-' : ''}${amount}`}</p>

        <div class="flex justify-between mt-2">
            <button class="btn text-black border-black"> Edit</button>
            <button class="btn text-error border-error"> Delete </button>
        </div>
    </div>

</div>

<style lang="postcss">
    .btn {
        @apply border-2 font-semibold bg-inherit rounded-button text-xs px-2 py-[0.25px];
    }
</style>