<script lang="ts">

    export let header: string;
    export let description: string;
    
</script>

<a href="https://n2continuum.com/" target="_blank" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100">
    <!-- <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""> -->
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-2xl">{header}</h5>
        <p class="mb-3 font-normal text-gray-700 text-xl">{description}</p>
    </div>
</a>