<script lang="ts">
    import { TESTIMONIALS } from '../constants.ts';
    import type { Testimonial } from '../types';

    let currentIndex = 0;

    $: currentTestimonial = TESTIMONIALS[currentIndex];

    function showNext() {
        currentIndex = (currentIndex + 1) % TESTIMONIALS.length;
    }

    function showPrevious() {
        currentIndex = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    }
</script>

<section id="testimonials" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">What Our Clients Say</h2>
        </div>
        <div class="relative max-w-3xl mx-auto">
            <div class="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center transition-opacity duration-500 ease-in-out">
                <img alt={currentTestimonial.author} class="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-blue-200" src={currentTestimonial.imageUrl} />
                <p class="text-lg text-gray-600 italic mb-6">{currentTestimonial.quote}</p>
                <h4 class="font-bold text-xl text-gray-900">{currentTestimonial.author}</h4>
                <p class="text-gray-500">{currentTestimonial.role}</p>
            </div>
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button on:click={showPrevious} class="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button on:click={showNext} class="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>
    </div>
</section>