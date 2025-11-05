<script lang="ts">

</script>

<section id="contact-us" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">Get in Touch</h2>
            <p class="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">Have a question or want to work together? Fill out the form below, or reach out to us directly. We're here to help you achieve your digital marketing goals.</p>
        </div>
        <div class="grid lg:grid-cols-5 gap-12 items-start">
            <div class="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
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
            
            <form class="lg:col-span-3 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
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
                    <button type="submit" class="px-10 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 disabled:bg-blue-400 disabled:cursor-not-allowed">Submit Message</button>
                </div>
            </form>
        </div>
    </div>
</section>