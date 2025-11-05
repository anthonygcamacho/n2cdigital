<script lang="ts">
    let isMenuOpen = false;
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        console.log("Menu state:", isMenuOpen); 
    }   
</script>

<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">

            <div class="flex-shrink-0">
                <a href="/" class="text-2xl font-bold text-white"><u>n2c</u>Digital</a>
            </div>

            <nav class="hidden lg:block">
                <ul class="flex items-center space-x-8">
                    <li><a href="/" class="font-medium transition-colors duration-200 text-white hover:text-gray-200">Home</a></li>
                    <li><a href="#about-us" class="font-medium transition-colors duration-200 text-white hover:text-gray-200">About Us</a></li>
                    <li><a href="#services" class="font-medium transition-colors duration-200 text-white hover:text-gray-200">Services</a></li>
                    <!-- <li><a href="blog" class="font-medium transition-colors duration-200 text-white hover:text-gray-200">Blog</a></li> -->
                    <li><a href="#testimonials" class="font-medium transition-colors duration-200 text-white hover:text-gray-200">Testimonials</a></li>
                    <li><a href="faq" class="font-medium transition-colors duration-200 text-white hover:text-gray-200">FAQ</a></li>
                    <li><a href="contact" class="font-medium transition-colors duration-200 text-white hover:text-gray-200">Contact Us</a></li>
                </ul>
            </nav>
            <div class="hidden lg:block">
                <!-- svelte-ignore a11y_invalid_attribute -->
                <a href="/starthere" class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300">Let's Talk</a>
            </div>
            <div class="lg:hidden">
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button on:click={toggleMenu} class="focus:outline-none text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </div>
    </div>

    {#if isMenuOpen}
        <div class="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-40">
            <div class="flex justify-end p-4">
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button on:click={toggleMenu} class="focus:outline-none text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path><svg>
                </button> 
            </div>
            <nav class="flex flex-col items-center space-y-8 mt-8"> 
                <a href="/" on:click={toggleMenu} class="font-medium text-2xl text-white">Home</a>
                <a href="#about-us" on:click={toggleMenu} class="font-medium text-2xl text-white">About Us</a>
                <a href="#services" on:click={toggleMenu} class="font-medium text-2xl text-white">Services</a>
                <!-- <li><a href="blog" class="font-medium transition-colors duration-200 text-white hover:text-gray-200">Blog</a></li> -->
                <a href="#testimonials" on:click={toggleMenu} class="font-medium text-2xl text-white">Testimonials</a>
                <a href="faq" on:click={toggleMenu} class="font-medium text-2xl text-white">FAQ</a>
                <a href="contact" on:click={toggleMenu} class="font-medium text-2xl text-white">Contact Us</a>
                <a href="/starthere" on:click={toggleMenu} class="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300">Let's Talk</a>
            </nav>
        </div>
    {/if} 
</header>