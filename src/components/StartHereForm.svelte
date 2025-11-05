<script lang="ts">

</script>

<section id="onboarding" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">Let's Get Started</h2>
                <p class="mt-4 text-lg text-gray-500">Please provide us with some details to begin the onboarding process. We're excited to learn more about your needs.</p>
            </div>
            
            <form class="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
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
                        <label for="availability" class="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                        <textarea id="availability" name="availability" placeholder="e.g., Weekdays after 3 PM EST, flexible on weekends." rows="4" class="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                    </div>
                    <div class="md:col-span-2">
                        <label for="services-details" class="block text-sm font-medium text-gray-700 mb-1">Details on services you are interested in</label>
                        <textarea id="services-details" name="services-details" placeholder="Tell us about your project, goals, and which of our services you're most interested in (e.g., SEO, Social Media, AI Chatbots)." rows="6" class="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                    </div>
                </div>
                <div class="text-left mt-8">
                    <button type="submit" class="w-full sm:w-auto px-10 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 disabled:bg-blue-400 disabled:cursor-not-allowed">Submit Onboarding Form</button>
                </div>
            </form>
        </div>
    </div>
</section>