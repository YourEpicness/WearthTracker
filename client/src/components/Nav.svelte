<script lang="ts">
    let navPages = ["Dashboard", "Transactions", "Accounts", "Reports"]
    let selected = navPages[0]

    // Hidden for favorites
    let hidden = true;

    function signOut() {

    }

    function toggleFavorites() {
        hidden = !hidden
    }
</script>


<nav class="flex flex-col md:justify-between lg:justify-start bg-bgPrimary items-center border-r border-black">
    <div class="my-1 ">
        <img src="static/svg/WearthLogo.svg" alt="Logo" width="100" height="50"/>
    </div>

    <section class="flex border-y border-black p-5 items-center">
        <div class="">
            <img src="static/profilepic.png" alt="Profile">
        </div>
        <div class="ml-3">
            <p class="text-sm">Welcome home,</p>
            <span class="font-bold text-lg"> John</span>
        </div>
    </section>

    <section class="flex"> 
        <ul class="flex flex-col gap-5 justify-center p-3 border-black"> 
            <li class="navitem" class:selected={selected === "Dashboard"}> <img src="static/icons/home.svg" alt="Home Icon" class="ico"> Dashboard </li>
            <li class="navitem"><img src="static/icons/transactions.svg" alt="Transactions" class="ico">Transactions </li>
            <li class="navitem"><img src="static/icons/accounts.svg" alt="Accounts" class="ico"> Accounts </li>
            <li class="navitem"><img src="static/icons/reports.svg" alt="Reports" class="ico"> Reports </li>
        </ul>
    </section>

    <section class="flex flex-col border-t border-black w-full">
        <ul class="flex flex-col items-center py-3">
            <h2 class="font-bold"> <i on:click={toggleFavorites} class={`arrow cursor-pointer ${!hidden ? 'down' : 'up'}`}></i> Favorites </h2>
            {#if !hidden}
                <li> Report 1</li>
                <li> Report 2</li>
                <li> Report 3</li>
            {/if}
        </ul>
    </section>
    

    <section class="flex flex-col border-y border-black w-full items-center py-3">
        <button class="flex items-center"> <img src="static/icons/light.svg" alt="light" class="ico"> Light Mode </button>
    </section>

    <section class="flex flex-col border-b border-black w-full items-center py-3">
        <button on:click={signOut} class="flex items-center"> <img src="static/icons/signout.svg" alt="signout" class="ico"> Sign Out </button>
    </section>
</nav> 


<style lang="postcss">
    .selected {
        @apply text-lightSecondary fill-lightSecondary
    }

    .ico {
        @apply -ml-2 mr-2
    }

    .arrow {
        @apply border-r-[3px] border-b-[3px] inline-block p-[3px] border-black
    }

    .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }

    .up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
    }
</style>