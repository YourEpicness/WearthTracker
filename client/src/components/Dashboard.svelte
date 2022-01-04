<script lang="ts">
    import Transaction from './Transaction.svelte';
    let totalIncome:number = 0;
    let totalExpense:number = 0;
    let netIncome:number = 0;

    let transactions:any = [];

</script>

<main class="w-full bg-bgSecondary p-16 grid gap-x-10 grid-cols-2">
    <div class="flex flex-col col-start-1 col-end-2">
        <div class="flex justify-between">
            <h1 class="text-4xl font-bold mr-10"> Recent Transactions </h1>
            <button><img src="static/icons/addicon.svg" alt="Add"></button>
        </div>
    
        <div class="flex mt-5 gap-5 ">
            <p>From: <input class="date" type="date" name="" id=""></p>
            <p>To: <input class="date" type="date" name="" id=""></p>
        </div>

        <div class="flex mt-5 justify-between">
            <div class="">
                <p class="font-semibold text-darkSecondary"> Total Income </p>
                <p class="">${totalIncome}</p>
            </div>
            <div class="">
                <p class="font-semibold text-error"> Total Expense </p>
                <p class="">${totalExpense}</p>
            </div>
            <div class="">
                <p class="font-semibold"> Net Income </p>
                <p class="">${netIncome}</p>
            </div>
        </div>

        <input class="mt-5 rounded-default shadow-light bg-bgPrimary text-neutral italic px-4 py-1" type="search" name="" id="" placeholder="Search...">

        <div class="flex flex-col min-h-[25%] mt-10 rounded-default bg-neutral-50">
            {#if transactions.length === 0}
                <p class="font-bold text-center"> Currently empty. Please add a transaction</p>
            {:else}
                {#each transactions as transaction}
                    <Transaction imageUrl="/static/placeholdergrocery.jpg" title={''}/>
                {/each}
            {/if}
        </div>
    </div>

    <div class="col-start-2 col-end-3 p-12">
        <h2 class="font-bold text-4xl"> Monthly Budget</h2>
    </div>
 
	
</main>

<style lang="postcss">
    .date {
        @apply border-2 border-black bg-neutral-50
    }
</style>