<script lang="ts">
    let formAction: string;

    if (import.meta.env.DEV) {
        formAction = "https://n8n.srv1048712.hstgr.cloud/webhook-test/5312f882-6269-4dec-8c44-f3ceae39a963";
    } else {
        formAction = "https://n8n.srv1048712.hstgr.cloud/webhook/5312f882-6269-4dec-8c44-f3ceae39a963";
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

<section id="contact-us" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">Get in Touch</h2>
            <p class="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">Have a question or want to work together? Fill out the form below, or reach out to us directly. We're here to help you achieve your AI automation and marketing goals.</p>
        </div>
        <!-- <div class="grid lg:grid-cols-5 gap-12 items-start"> -->
        <div class="flex flex-col items-start justify-center items-center">
            <div class="w-full max-w-[500px] bg-white py-8 rounded-lg shadow-lg">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <ul class="space-y-6 text-gray-600">
                    <li class="flex items-start">
                        <span class="mt-1 mr-4 flex-shrink-0 text-blue-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span>
                        <div>
                            <h4 class="font-semibold text-gray-800">Phone</h4>
                            <a href="tel:+16195484432" class="hover:text-blue-600">+1 (619) 548-4432</a>
                        </div>
                    </li>
                </ul>
            </div>
            
            {#if !success}
            <form on:submit|preventDefault={handleSubmit} class="lg:col-span-3 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="md:col-span-2">
                        <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input id="first-name" placeholder="John" class="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required type="text" value="" name="first-name">
                    </div>
                    <div class="md:col-span-2">
                        <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input id="last-name" placeholder="Doe" class="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required type="text" value="" name="last-name">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input id="email" placeholder="john.doe@example.com" class="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required type="email" value="" name="email">
                    </div>
                    <div>
                        <label for="phone-number" class="block text-sm font-medium text-gray-700 mb-1">Phone Number <span class="text-gray-500">(Optional)</span></label>
                        <input id="phone-number" placeholder="+1 (555) 123-4567" class="w-full px-4 bg-gray-50 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="tel" value="" name="phone-number" required>
                    </div>
                    <div class="md:col-span-2">
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" name="message" placeholder="How can we help you?" rows="5" class="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                    </div>
                </div>
                <div class="text-left mt-6">
                    <button type="submit" class="px-10 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center" disabled={submitting}>
                        {#if submitting}
                            <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                        {:else}
                            Submit Message
                        {/if}
                    </button>
                </div>
                {#if error}
                    <p class="mt-4 text-red-600">{error}</p>
                {/if}
            </form>
            {/if}
            {#if success}
                <div class="lg:col-span-3 bg-white text-gray-800 p-8 rounded-lg shadow-lg text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
                    <p class="mb-2 text-lg text-gray-700">Thank you for reaching out to us.</p>
                    <p class="mb-4 text-lg text-gray-700">We have received your message and will get back to you as soon as possible.</p>
                    <p class="text-md text-gray-500 mt-2">Please allow up to 24-48 hours for a response.</p>
                </div>
            {/if}
        </div>
    </div>
</section>