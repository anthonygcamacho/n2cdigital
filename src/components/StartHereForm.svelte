<script lang="ts">
    let formAction: string;

    if (import.meta.env.DEV) {
        formAction = "https://n8n.srv1048712.hstgr.cloud/webhook-test/your-start-here-test-webhook-id"; // TODO: Update with the actual test webhook ID for the "Start Here" form
    } else {
        formAction = "https://n8n.srv1048712.hstgr.cloud/webhook/your-start-here-production-webhook-id"; // TODO: Update with the actual production webhook ID for the "Start Here" form
    }

    let submitting = false;
    let success = false;
    let error = '';

    async function handleSubmit(event: Event) {
        submitting = true;
        success = false;
        error = '';

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const minDisplayTime = new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay

        try {
            const responsePromise = fetch(formAction, {
                method: 'POST',
                body: formData
            });

            const [response] = await Promise.all([responsePromise, minDisplayTime]);

            if (response.ok) {
                success = true;
                form.reset();
            } else {
                const result = await response.json();
                error = result.message || 'An unknown error occurred.';
            }
        } catch (e) {
            error = 'An error occurred while submitting the form.';
        } finally {
            submitting = false;
        }
    }
</script>

<section id="onboarding" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">Let's Get Started</h2>
                <p class="mt-4 text-lg text-gray-500">Please provide us with some details to begin the onboarding process. We're excited to learn more about your needs.</p>
            </div>
            
            {#if !success}
            <form on:submit|preventDefault={handleSubmit} class="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input id="first-name" placeholder="John" class="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required type="text" value="" name="first-name">
                    </div>
                    <div>
                        <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input id="last-name" placeholder="Doe" class="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required type="text" value="" name="last-name">
                    </div>
                    <div class="md:col-span-2">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input id="email" placeholder="john.doe@example.com" class="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required type="email" value="" name="email">
                    </div>
                    <div class="md:col-span-2">
                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input id="phone" placeholder="+1 (555) 123-4567" class="w-full px-4 bg-gray-50 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required type="tel" value="" name="phone">
                    </div>
                    <div class="md:col-span-2">
                        <label for="services-details" class="block text-sm font-medium text-gray-700 mb-1">Where would you like to begin?</label>
                        <textarea id="services-details" name="services-details" placeholder="Tell us about your project, goals, and which of our services you're most interested in (e.g., SEO, Social Media, AI Chatbots)." rows="6" class="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                    </div>
                </div>
                <div class="text-left mt-8">
                    <button type="submit" class="w-full sm:w-auto px-10 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center" disabled={submitting}>
                        {#if submitting}
                            <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                        {:else}
                            Submit Onboarding Form
                        {/if}
                    </button>
                </div>
                {#if error}
                    <p class="mt-4 text-red-600">{error}</p>
                {/if}
            </form>
            {/if}
            {#if success}
                <div class="bg-white text-gray-800 p-8 rounded-lg shadow-lg text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Onboarding Form Submitted Successfully!</h3>
                    <p class="mb-2 text-lg text-gray-700">Thank you for your interest in our services.</p>
                    <p class="mb-4 text-lg text-gray-700">We have received your information and will be in touch shortly to discuss your needs.</p>
                    <p class="text-md text-gray-500 mt-2">Please allow up to 24-48 hours for a response.</p>
                </div>
            {/if}
        </div>
    </div>
</section>