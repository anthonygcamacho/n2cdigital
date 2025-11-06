<script lang="ts">
    import { SERVICES } from '../constants.ts';
    import type { Service } from '../types';
    import ServicePopup from './ServicePopup.svelte';

    let selectedService: Service | null = null;
    let serviceChunks: Service[][] = [];

    function openPopup(service: Service) {
        selectedService = service;
        console.log('Selected service:', service);
    }

    function closePopup() {
        selectedService = null;
    }

    // Chunk the services into groups of 4
    $: serviceChunks = [];
    $: {
        for (let i = 0; i < SERVICES.length; i += 4) {
            serviceChunks.push(SERVICES.slice(i, i + 4));
        }
    }
</script>

<section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">Our Services</h2>
            <p class="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">We offer a wide range of digital marketing services to elevate your brand.</p>
        </div>
        {#each serviceChunks as chunk}
            <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"> -->
            <div class="flex justify-center flex-col lg:flex-row gap-4 mb-8">
                {#each chunk as service}
                    <button on:click={() => openPopup(service)} class="group w-full bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        <div class="inline-block p-4 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            {@html service.icon}
                        </div>
                        <h3 class="text-xl font-bold mb-2">{service.title}</h3>
                        <p class="text-gray-600">{service.description}</p>
                    </button>
                {/each}
            </div>
        {/each}
    </div>
</section>

{#if selectedService}
    <ServicePopup service={selectedService} onClose={closePopup} />
{/if}