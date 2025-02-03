<!-- https://codepen.io/manishjanky/pen/eRNKLL -->

<script lang="ts">
    import { onMount } from "svelte";

    // ---------------------------------------
    // Exports 
    // ---------------------------------------
    export let captchaValid = false;
    export let captchaErrorFlag = '';
    export let captchaErrorMessages: any;
    export let captchaBckImg: any;

    // ---------------------------------------
    // Local State 
    // ---------------------------------------

    let captchaCode: any;
    let captchaInput: any;

    let captchaImg: HTMLElement;
    let captchaInputEl: HTMLInputElement;

    // ---------------------------------------
    // Lifecycle Methods 
    // ---------------------------------------

    onMount(async () => {
        createCaptcha();
    });

    // ---------------------------------------
    // Utils 
    // ---------------------------------------

    function validateCaptcha(){
        captchaValid = captchaCode == captchaInput ? true : false;
    }

    function createCaptcha() {
        //clear the contents of captcha div first 
        captchaImg.innerHTML = "";
        captchaInputEl.value = '';

        // var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
        var charsArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lengthOtp = 6;
        var captchaCharsNew = [];

        for (var i = 0; i < lengthOtp; i++) {
            //below code will not allow Repetition of Characters
            var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
            if (captchaCharsNew.indexOf(charsArray[index]) == -1) {
                captchaCharsNew.push(charsArray[index]);
            } else {
                i--;
            } 
        }

        let canv = document.createElement("canvas");
        canv.id = "captcha";
        canv.width = 170;
        canv.height = 43;
        let ctx: any = canv.getContext("2d");
        ctx.font = "30px Georgia bolder";
        ctx.letterSpacing  = "5px";
        ctx.strokeText(captchaCharsNew.join(""), 0, 30);
        //storing captcha so that can validate you can save it somewhere else according to your specific requirements
        captchaCode = captchaCharsNew.join("");

        // console.log(captchaCode)

        captchaImg.appendChild(canv); // adds the canvas to the body element
    }
    
    // ---------------------------------------
    // Events 
    // ---------------------------------------

    function onCaptchaInput(e: Event){
        captchaInput = captchaInputEl.value;
        validateCaptcha();
    }
    
</script>

<div class="mb-5" id="captcha">
    <label for="captcha-input" class="form-label">Prove you are a human: <span class="text-red-600">*</span></label>
    <div class="bg-white px-3 mb-2 w-[200px]" bind:this={captchaImg} style={`background-image: url(${captchaBckImg.src});`}></div>
    <div class="flex">
        <input type="text" id="captcha-input" class="form-input-captcha {captchaErrorFlag}" placeholder="Captcha" bind:this={captchaInputEl} on:keyup|preventDefault={onCaptchaInput} />
        <button class="button-editor-edit-captcha" on:click|preventDefault={createCaptcha}><i class="fa-solid fa-rotate-right"></i></button>
    </div>
    {#if captchaErrorFlag}
        {#each captchaErrorMessages as m}
            <p class="form-error-field-message">{m}</p>
        {/each}
    {/if}
</div>