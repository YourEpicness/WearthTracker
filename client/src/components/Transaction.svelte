<script lang="ts">
    export let imageUrl:string;
    export let title:string;
    export let date:Date;
    export let category:string;
    export let amount:number;
</script>

<div class="grid grid-cols-3">
    <img src={imageUrl} alt="">

    <div class="">
        <h3 class="">{title}</h3>
        <p class="">{date}</p>
    </div>
   
    <div class="">
        <span class="">{category}</span>
        <p>${amount}</p>

        <div class="">
            <button class=""> Edit</button>
            <button class=""> Delete </button>
        </div>
    </div>

</div>

<style lang="postcss">

</style>