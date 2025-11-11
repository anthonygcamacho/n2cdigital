<script lang="ts">
    import { FAQS } from '../constants.ts';
    import type { FAQ } from '../types';

    let openStates: boolean[] = FAQS.map(() => false);

    function toggleFaq(index: number) {
        openStates[index] = !openStates[index];
        openStates = [...openStates]; // Trigger reactivity
    }
</script>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <p class="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Have questions? We've got answers. Here are some of the most common inquiries we receive.</p>
    </div>
    
    <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div class="border-b border-gray-200 py-6">
            {#each FAQS as faq, i}
                <div class="mb-8">
                    <button 
                        class="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none" 
                        aria-expanded={openStates[i]}
                        on:click={() => toggleFaq(i)}
                    >
                        <span>{faq.question}</span>
                        <span class="transform transition-transform duration-300" class:rotate-180={openStates[i]}>
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </span>
                    </button>
                    <div 
                        class="overflow-hidden transition-all duration-300 ease-in-out"
                        class:max-h-0={!openStates[i]}
                        class:max-h-screen={openStates[i]}
                    >
                        <p class="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>