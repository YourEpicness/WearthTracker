<script lang="ts">
    import { onMount } from 'svelte';
    import Modal,{getModal} from './Modal.svelte';

    import Transaction from './Transaction.svelte';
    let totalIncome:number = 0;
    let totalExpense:number = 0;
    let netIncome:number = totalIncome - totalExpense;
    
    interface Transaction {
        transactionId: number,
        transactionVendor:string,
        transactionDate: Date,
        transactionCategory:string,
        transactionAmount:number,
        transactionType:string
    }

    let transactions:Transaction[] = [];

    onMount(async() => {
        transactions = await fetchTransactions()
        console.log(transactions)
    })

    function convertDate(date) {
        const normDate = new Date(date)
        const converedDate = normDate.toDateString().slice(4)
        return converedDate
    }
    const imageUrl = '/static/placeholdergrocery.jpg';
    const postUrl = 'http://localhost:3005/api/transactions';

    async function fetchTransactions() {
        const url = "http://localhost:3005/api/transactions"
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res = await fetch(url, options)
        return res.json()
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const options = {
            method: "POST",
            body: JSON.stringify({
                vendor: e.target.vendor.value,
                date: e.target.date.value,
                amount: e.target.amount.value,
                category: e.target.category.value,
                transactionType: e.target.expense.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }
        console.log(options)
        const res = await fetch(postUrl, options)
        return res.json()
    }

    $:transactions.forEach(transaction => {
        if(transaction.transactionType == 'expense') {
            totalExpense += transaction.transactionAmount
        } else {
            totalIncome += transaction.transactionAmount
        }
    })

</script>

<main class="w-full bg-bgSecondary p-16 grid gap-x-10 grid-cols-2">
    <div class="flex flex-col col-start-1 col-end-2">
        <div class="flex justify-between">
            <h1 class="text-4xl font-bold mr-10"> Recent Transactions </h1>
            <button on:click={() => getModal().open()}><img src="static/icons/addicon.svg" alt="Add"></button>
        </div>
        <Modal>
            <form on:submit={handleSubmit} class="flex flex-col bg-lightPrimary">
                <label for="Vendor">Vendor </label>
                <input type="text" name="vendor" id="vendor">
                

                <label for="Date">Date </label>
                <input type="date" name="date" id="date">

                <label for="Amount">Amount </label>
                <input type="number" step="0.01" name="amount" id="amount">

                <label for="Category">Category </label>
                <input type="text" name="category" id="category">

                <label for="type" class="font-bold">Type </label>
                <div class="">
                    <input class="text-white" type="radio" name="expense" value="expense" checked>
                    <label for="expense">Expense </label>
                </div>
                <div class="">
                    <input class="text-white" type="radio" name="expense" value="income">
                    <label for="income">Income </label>
                </div>
              

                <button type="submit" class="bg-primary text-white rounded-default mt-5"> Submit</button>
            </form>
        </Modal>
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

        <div class="flex flex-col min-h-[25%] mt-10 rounded-default bg-neutral-50 p-4">
            {#if transactions.length === 0}
                <p class="font-bold text-center"> Currently empty. Please add a transaction</p>
            {:else}
                {#each transactions as {transactionAmount, transactionCategory, transactionDate, transactionId, transactionType, transactionVendor} (transactionId)}
                    <Transaction 
                        id={transactionId}
                        {imageUrl} 
                        title={transactionVendor} 
                        date={convertDate(transactionDate)} 
                        category={transactionCategory} 
                        amount={transactionAmount}
                        type={transactionType}
                    />
                {/each}
            {/if}
        </div>
    </div>

    <div class="col-start-2 col-end-3 p-12">
        <h2 class="font-bold text-4xl"> Monthly Budget</h2>

        <h3 class="font-bold text-3xl"> Expenses by category</h3>
    </div>
 
	
</main>

<style lang="postcss">
    .date {
        @apply border-2 border-black bg-neutral-50;
    }
</style>