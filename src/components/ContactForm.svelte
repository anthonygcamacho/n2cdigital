<script lang="ts">
    import ButtonSaveDisabled from "@/components/general/ButtonSaveDisabled.svelte";
    import ContactFormSchema from '@schemas/ContactFormSchema';
    import getformData from '@libs/utils/getformData';
    import formErrorHandlingFull from '@/libs/utils/formErrorHandlingFull';
    import errorStateReset from '@libs/utils/errorStateReset';
    import errorStateLog from '@libs/utils/errorStateLog';
    import Captcha from "@/components/general/Captcha.svelte";

    // ---------------------------------------
    // Exports 
    // ---------------------------------------
    export let captchaBckImg: any;

    // ---------------------------------------
    // Local State 
    // ---------------------------------------

    let formSent = false;
    let formErrorsFlag = false;
    let submitEnabled = true;
    let formErrorPlaceholderFlag = false;

    let captchaValid = false;

    let numErrors = 0;

    let errorState: any = {
        api: {
            fieldName: 'API',
            errorFlag: '',
            errorMessages: []
        },
        email: {
            fieldName: 'Email',
            errorFlag: '',
            errorMessages: []
        },
        confirmEmail: {
            fieldName: 'Confirm Email',
            errorFlag: '',
            errorMessages: []
        },
        subject: {
            fieldName: 'Subject',
            errorFlag: '',
            errorMessages: []
        },
        message: {
            fieldName: 'Message',
            errorFlag: '',
            errorMessages: []
        },
        captcha: {
            fieldName: 'Captcha',
            errorFlag: '',
            errorMessages: []
        },
    }

    // ---------------------------------------
    // Events 
    // ---------------------------------------

    async function onSubmit(e: Event) {

        // 1. Get form data
        let formData = getformData(e.target)
        // console.log(formData)

        let messageSplit = formData.message?.toString().split('\n');
        formData.message = messageSplit.filter((n: any) => n != '');

        formData['captcha'] = captchaValid ? 'true' : 'false';

        try {
            submitEnabled = false
            formErrorsFlag = false
            // 2a. Reset error state
            errorStateReset(errorState)
            // 2b. Zod validation
            ContactFormSchema.parse(formData)
            // 2c. Post contact form
            let response = await fetch(`/api/contact`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: formData.email?.toString(),
                    confirmEmail: formData.confirmEmail?.toString(),
                    subject: formData.subject?.toString(),
                    message: formData.message,
                    captcha: captchaValid ? 'true' : 'false'
                })
            })
            if(response.ok == false) {
                let responseError = await response.json()
                // console.log(responseError)
                throw responseError
            }
            // console.log(response)
            // console.log(await response.json())
            formSent = true
        } catch(error: any) {
            // console.log(error);
            // saveEnabled = true;
            submitEnabled = true;
            let errors = formErrorHandlingFull(error, errorState, ['Bad response.']);
            errorState = errors.errorState;
            numErrors = errors.numErrors;
            formErrorsFlag = true;
        }
    }
</script>

{#if formSent == true}

    <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 text-center" role="alert">
        <span class="font-medium">Message Sent!</span> We will connect with you by email within 3 to 5 business days (weekends excluded).
    </div>

{:else}

    <form on:submit|preventDefault={onSubmit}>

        <!-- Personal Information -->
        <div class="">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="email" class="form-label">Email: <span class="text-red-600">*</span></label>
                    <input type="text" id="email" name="email" class="form-input {errorState.email.errorFlag}" placeholder="">
                    {#if errorState.email.errorFlag}
                        {#each errorState.email.errorMessages as m}
                            <p class="form-error-field-message">{m}</p>
                        {/each}
                    {/if}
                </div>  
                <div>
                    <label for="confirm-email" class="form-label">Confirm Email: <span class="text-red-600">*</span></label>
                    <input type="text" id="confirm-email" name="confirmEmail" class="form-input {errorState.confirmEmail.errorFlag}" placeholder="">
                    {#if errorState.confirmEmail.errorFlag}
                        {#each errorState.confirmEmail.errorMessages as m}
                            <p class="form-error-field-message">{m}</p>
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="mb-6">
                <label for="subject" class="form-label">Subject: <span class="text-red-600">*</span></label>
                <select id="subject" class="form-select {errorState.subject.errorFlag}" name="subject">
                    <option value="" selected>Choose a subject</option>
                    <option value="inquiry">Inquiry</option>
                    <option value="other">Other</option>
                </select>
                {#if errorState.subject.errorFlag}
                    {#each errorState.subject.errorMessages as m}
                        <p class="form-error-field-message">{m}</p>
                    {/each}
                {/if}
            </div>
            <div class="mb-6">
                <label for="message" class="form-label">Message: <span class="text-red-600">*</span></label>
                <textarea id="message" rows="4" name="message" class="form-textarea {errorState.message.errorFlag}" placeholder=""></textarea>
                {#if errorState.message.errorFlag}
                    {#each errorState.message.errorMessages as m}
                        <p class="form-error-field-message">{m}</p>
                    {/each}
                {/if}
            </div>
            <div class="mb-6">
                <Captcha bind:captchaValid={captchaValid} bind:captchaErrorFlag={errorState.captcha.errorFlag} bind:captchaErrorMessages={errorState.captcha.errorMessages} captchaBckImg={captchaBckImg} />
            </div>
        </div>
        <!-- Modal footer -->
        <div class="main-modal-footer">
            {#if !submitEnabled}
                <ButtonSaveDisabled>Submit</ButtonSaveDisabled>
            {/if}
            {#if submitEnabled}
                <button type="submit" class="main-modal-form-button-submit">Submit</button>
            {/if}
            {#if formErrorsFlag}
                <div class="ml-5 text-red-600">
                    {`${numErrors} form ${numErrors > 1 ? 'errors' : 'error'}`}
                </div>
            {/if}
        </div>
        <!-- {#if submitEnabled == false}
            <button disabled type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 rounded-lg border border-gray-200 bg-gray-100 inline-flex items-center">
                <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                </svg>
                Submit
            </button>
        {/if}
        {#if submitEnabled == true}
            <button type="submit" class="form-button-submit-orange">Submit</button>
        {/if} -->
    </form>

{/if}