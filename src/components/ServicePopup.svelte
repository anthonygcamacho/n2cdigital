<script lang="ts">
    import type { Service } from '../types';

    export let service: Service;
    export let onClose: () => void;
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" on:click={onClose}>
    <div class="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full mx-4" on:click|stopPropagation>
        <div class="flex justify-between items-start mb-4">
            <h3 class="text-2xl font-bold text-gray-900">{service.title}</h3>
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button on:click={onClose} class="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <p class="text-gray-600">{service.detailedDescription}</p>
    </div>
</div>
