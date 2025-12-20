<script lang="ts">

    let formAction: string;
if (import.meta.env.DEV) {
    formAction = "https://n8n.srv1048712.hstgr.cloud/webhook-test/be20835b-efec-405c-84c1-013830edbde5";
} else {
    formAction = "https://n8n.srv1048712.hstgr.cloud/webhook-test/be20835b-efec-405c-84c1-013830edbde5";
}

  let role: string = '';
  let repetitiveTasks: string = '';
  let adminTasks: string[] = [];
  let enoughTime: string = '';

  let alreadyAutomated: string = '';
  let automationHelp: string[] = [];
  let savedTimeUse: string = '';

  let aiFamiliarity: string = '';
  let usedAiAtWork: string = '';
  let aiFeelings: string[] = [];

  let familiarWithHitl: string = '';
  let humanReviewImportance: string = '';
  let aiTasksHumanOversight: string[] = [];
  let comfortableWithReviewControl: string = '';

  let highVolumeCalls: string = '';
  let phoneCallChallenges: string[] = [];
  let aiVoiceReceptionistComfort: string = '';
  let aiReceptionistTasks: string[] = [];
  let humanStepInImportance: string = '';

  let concernsAboutAiJobs: string = '';
  let biggestAiConcern: string = '';
  let aiStatementAgreement: string = '';
  let transparencyReduceConcern: string = '';

  let openToLearningAi: string = '';
  let helpConfidenceAi: string[] = [];
  let aiImproveWorkExperience: string = '';
  let involvedInDiscussions: string = '';
  let additionalThoughts: string = '';

  let submissionSuccess = false;
  let isSubmitting = false;
  let submissionMessage = '';

  async function handleSubmit() {
    isSubmitting = true;
    submissionMessage = '';
    submissionSuccess = false;

    const surveyData = {
      section1: {
        role,
        repetitiveTasks,
        adminTasks,
        enoughTime,
      },
      section2: {
        alreadyAutomated,
        automationHelp,
        savedTimeUse,
      },
      section3: {
        aiFamiliarity,
        usedAiAtWork,
        aiFeelings,
      },
      section4: {
        familiarWithHitl,
        humanReviewImportance,
        aiTasksHumanOversight,
        comfortableWithReviewControl,
      },
      section5: {
        highVolumeCalls,
        phoneCallChallenges,
        aiVoiceReceptionistComfort,
        aiReceptionistTasks,
        humanStepInImportance,
      },
      section6: {
        concernsAboutAiJobs,
        biggestAiConcern,
        aiStatementAgreement,
        transparencyReduceConcern,
      },
      section7: {
        openToLearningAi,
        helpConfidenceAi,
        aiImproveWorkExperience,
        involvedInDiscussions,
        additionalThoughts,
      },
    };
    
    try {
      const response = await fetch(formAction, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(surveyData),
      });

      if (response.ok) {
        submissionMessage = 'Thank you for your submission!';
        submissionSuccess = true;
      } else {
        const errorText = await response.text();
        submissionMessage = `Error: ${response.statusText}. Please try again.`;
        console.error('Submission failed:', response.status, errorText);
      }
    } catch (error) {
      submissionMessage = 'An error occurred while submitting the form. Please check your network connection.';
      console.error('Submission error:', error);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<style>
  .survey-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    color: #333;
  }

  h1 {
    color: #0056b3;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  h2 {
    color: #0056b3;
    border-top: 2px solid #e0e0e0;
    padding-top: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.2rem
  }

  h3 {
    color: #333;
    /* margin-top: 1.5rem; */
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .question-group {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .options label {
    display: block;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  .options input[type="radio"],
  .options input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-height: 80px;
    margin-top: 0.5rem;
  }

  button {
    display: block;
    width: 100%;
    padding: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 2rem;
  }

  button:hover {
    background-color: #0056b3;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .success-message {
    text-align: center;
    padding: 3rem;
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
    border-radius: 8px;
    color: #0056b3;
  }

  .error-message {
    color: #d93025;
    text-align: center;
    margin-top: 1rem;
  }
</style>

<div class="survey-container !mt-[80px]">
  <h1>Office Automation & AI Readiness Survey</h1>
  <p style="text-align: center; font-style: italic; color: #666;">
    Human-Centered • Practical • Forward-Looking
  </p>

  {#if submissionSuccess}
    <div class="success-message">
      <h2>Thank you!</h2>
      <p>Your survey has been submitted successfully.</p>
    </div>
  {:else}
    <form on:submit|preventDefault={handleSubmit}>
      <h2>Section 1: Your Role & Current Work (Context)</h2>

      <div class="question-group">
        <h3>What best describes your role?</h3>
        <div class="options">
          <label>
            <input type="radio" name="role" value="Administrative / Office Support" bind:group={role} />
            Administrative / Office Support
          </label>
          <label>
            <input type="radio" name="role" value="Operations" bind:group={role} />
            Operations
          </label>
          <label>
            <input type="radio" name="role" value="Management / Leadership" bind:group={role} />
            Management / Leadership
          </label>
          <label>
            <input type="radio" name="role" value="HR" bind:group={role} />
            HR
          </label>
          <label>
            <input type="radio" name="role" value="Sales / Client Support" bind:group={role} />
            Sales / Client Support
          </label>
          <label>
            <input type="radio" name="role" value="Other" bind:group={role} />
            Other
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>How much of your weekly work involves repetitive or routine tasks?</h3>
        <div class="options">
          <label>
            <input type="radio" name="repetitiveTasks" value="Very little" bind:group={repetitiveTasks} />
            Very little
          </label>
          <label>
            <input type="radio" name="repetitiveTasks" value="Some" bind:group={repetitiveTasks} />
            Some
          </label>
          <label>
            <input type="radio" name="repetitiveTasks" value="About half" bind:group={repetitiveTasks} />
            About half
          </label>
          <label>
            <input type="radio" name="repetitiveTasks" value="Most" bind:group={repetitiveTasks} />
            Most
          </label>
          <label>
            <input type="radio" name="repetitiveTasks" value="Almost all" bind:group={repetitiveTasks} />
            Almost all
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>Which administrative tasks take up the most time in your role? (Select all that apply)</h3>
        <div class="options">
          <label>
            <input type="checkbox" name="adminTasks" value="Scheduling / calendar management" bind:group={adminTasks} />
            Scheduling / calendar management
          </label>
          <label>
            <input type="checkbox" name="adminTasks" value="Email handling" bind:group={adminTasks} />
            Email handling
          </label>
          <label>
            <input type="checkbox" name="adminTasks" value="Data entry" bind:group={adminTasks} />
            Data entry
          </label>
          <label>
            <input type="checkbox" name="adminTasks" value="Document management" bind:group={adminTasks} />
            Document management
          </label>
          <label>
            <input type="checkbox" name="adminTasks" value="Phone calls / reception" bind:group={adminTasks} />
            Phone calls / reception
          </label>
          <label>
            <input type="checkbox" name="adminTasks" value="Reporting" bind:group={adminTasks} />
            Reporting
          </label>
          <label>
            <input type="checkbox" name="adminTasks" value="Other" bind:group={adminTasks} />
            Other
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>Do you feel you have enough time to focus on higher-value or meaningful work?</h3>
        <div class="options">
          <label>
            <input type="radio" name="enoughTime" value="Always" bind:group={enoughTime} />
            Always
          </label>
          <label>
            <input type="radio" name="enoughTime" value="Often" bind:group={enoughTime} />
            Often
          </label>
          <label>
            <input type="radio" name="enoughTime" value="Sometimes" bind:group={enoughTime} />
            Sometimes
          </label>
          <label>
            <input type="radio" name="enoughTime" value="Rarely" bind:group={enoughTime} />
            Rarely
          </label>
          <label>
            <input type="radio" name="enoughTime" value="Never" bind:group={enoughTime} />
            Never
          </label>
        </div>
      </div>

      <h2>Section 2: Automation (Non-AI First)</h2>

      <div class="question-group">
        <h3>Are any of your current tasks already automated (without AI)?</h3>
        <div class="options">
          <label>
            <input type="radio" name="alreadyAutomated" value="Yes" bind:group={alreadyAutomated} />
            Yes
          </label>
          <label>
            <input type="radio" name="alreadyAutomated" value="No" bind:group={alreadyAutomated} />
            No
          </label>
          <label>
            <input type="radio" name="alreadyAutomated" value="Not sure" bind:group={alreadyAutomated} />
            Not sure
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>Which types of automation would most help your role? (Select all that apply)</h3>
        <div class="options">
          <label>
            <input type="checkbox" name="automationHelp" value="Scheduling & reminders" bind:group={automationHelp} />
            Scheduling & reminders
          </label>
          <label>
            <input type="checkbox" name="automationHelp" value="File organization" bind:group={automationHelp} />
            File organization
          </label>
          <label>
            <input type="checkbox" name="automationHelp" value="Data syncing between systems" bind:group={automationHelp} />
            Data syncing between systems
          </label>
          <label>
            <input type="checkbox" name="automationHelp" value="Reporting" bind:group={automationHelp} />
            Reporting
          </label>
          <label>
            <input type="checkbox" name="automationHelp" value="Task tracking" bind:group={automationHelp} />
            Task tracking
          </label>
          <label>
            <input type="checkbox" name="automationHelp" value="None" bind:group={automationHelp} />
            None
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>If routine tasks were automated, how would you prefer to use the saved time?</h3>
        <div class="options">
          <label>
            <input type="radio" name="savedTimeUse" value="Focus on quality work" bind:group={savedTimeUse} />
            Focus on quality work
          </label>
          <label>
            <input type="radio" name="savedTimeUse" value="Improve client interactions" bind:group={savedTimeUse} />
            Improve client interactions
          </label>
          <label>
            <input type="radio" name="savedTimeUse" value="Reduce workload stress" bind:group={savedTimeUse} />
            Reduce workload stress
          </label>
          <label>
            <input type="radio" name="savedTimeUse" value="Learn new skills" bind:group={savedTimeUse} />
            Learn new skills
          </label>
          <label>
            <input type="radio" name="savedTimeUse" value="Support teammates" bind:group={savedTimeUse} />
            Support teammates
          </label>
        </div>
      </div>

      <h2>Section 3: AI Awareness & Experience</h2>

      <div class="question-group">
        <h3>How familiar are you with AI tools used in office environments?</h3>
        <div class="options">
          <label>
            <input type="radio" name="aiFamiliarity" value="Very familiar" bind:group={aiFamiliarity} />
            Very familiar
          </label>
          <label>
            <input type="radio" name="aiFamiliarity" value="Somewhat familiar" bind:group={aiFamiliarity} />
            Somewhat familiar
          </label>
          <label>
            <input type="radio" name="aiFamiliarity" value="Heard of them but not used" bind:group={aiFamiliarity} />
            Heard of them but not used
          </label>
          <label>
            <input type="radio" name="aiFamiliarity" value="Not familiar" bind:group={aiFamiliarity} />
            Not familiar
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>Have you personally used AI tools at work?</h3>
        <div class="options">
          <label>
            <input type="radio" name="usedAiAtWork" value="Yes, regularly" bind:group={usedAiAtWork} />
            Yes, regularly
          </label>
          <label>
            <input type="radio" name="usedAiAtWork" value="Yes, occasionally" bind:group={usedAiAtWork} />
            Yes, occasionally
          </label>
          <label>
            <input type="radio" name="usedAiAtWork" value="No, but interested" bind:group={usedAiAtWork} />
            No, but interested
          </label>
          <label>
            <input type="radio" name="usedAiAtWork" value="No, and not interested" bind:group={usedAiAtWork} />
            No, and not interested
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>What words best describe how you currently feel about AI at work? (Select up to 3)</h3>
        <div class="options">
          <label>
            <input type="checkbox" name="aiFeelings" value="Curious" bind:group={aiFeelings} />
            Curious
          </label>
          <label>
            <input type="checkbox" name="aiFeelings" value="Cautious" bind:group={aiFeelings} />
            Cautious
          </label>
          <label>
            <input type="checkbox" name="aiFeelings" value="Optimistic" bind:group={aiFeelings} />
            Optimistic
          </label>
          <label>
            <input type="checkbox" name="aiFeelings" value="Concerned" bind:group={aiFeelings} />
            Concerned
          </label>
          <label>
            <input type="checkbox" name="aiFeelings" value="Neutral" bind:group={aiFeelings} />
            Neutral
          </label>
          <label>
            <input type="checkbox" name="aiFeelings" value="Excited" bind:group={aiFeelings} />
            Excited
          </label>
          <label>
            <input type="checkbox" name="aiFeelings" value="Overwhelmed" bind:group={aiFeelings} />
            Overwhelmed
          </label>
        </div>
      </div>

      <h2>Section 4: Human-In-The-Loop (Key Philosophy)</h2>

      <div class="question-group">
        <h3>Before today, were you familiar with the term “Human-In-The-Loop”?</h3>
        <div class="options">
          <label>
            <input type="radio" name="familiarWithHitl" value="Yes" bind:group={familiarWithHitl} />
            Yes
          </label>
          <label>
            <input type="radio" name="familiarWithHitl" value="No" bind:group={familiarWithHitl} />
            No
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>How important is it to you that a human reviews or approves AI-assisted work?</h3>
        <div class="options">
          <label>
            <input type="radio" name="humanReviewImportance" value="Extremely important" bind:group={humanReviewImportance} />
            Extremely important
          </label>
          <label>
            <input type="radio" name="humanReviewImportance" value="Very important" bind:group={humanReviewImportance} />
            Very important
          </label>
          <label>
            <input type="radio" name="humanReviewImportance" value="Somewhat important" bind:group={humanReviewImportance} />
            Somewhat important
          </label>
          <label>
            <input type="radio" name="humanReviewImportance" value="Not important" bind:group={humanReviewImportance} />
            Not important
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>Which AI tasks should always include human oversight? (Select all that apply)</h3>
        <div class="options">
          <label>
            <input type="checkbox" name="aiTasksHumanOversight" value="Client communications" bind:group={aiTasksHumanOversight} />
            Client communications
          </label>
          <label>
            <input type="checkbox" name="aiTasksHumanOversight" value="Scheduling decisions" bind:group={aiTasksHumanOversight} />
            Scheduling decisions
          </label>
          <label>
            <input type="checkbox" name="aiTasksHumanOversight" value="Financial actions" bind:group={aiTasksHumanOversight} />
            Financial actions
          </label>
          <label>
            <input type="checkbox" name="aiTasksHumanOversight" value="HR-related tasks" bind:group={aiTasksHumanOversight} />
            HR-related tasks
          </label>
          <label>
            <input type="checkbox" name="aiTasksHumanOversight" value="Reporting" bind:group={aiTasksHumanOversight} />
            Reporting
          </label>
          <label>
            <input type="checkbox" name="aiTasksHumanOversight" value="All of the above" bind:group={aiTasksHumanOversight} />
            All of the above
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>Would you feel more comfortable using AI if you had final review control?</h3>
        <div class="options">
          <label>
            <input type="radio" name="comfortableWithReviewControl" value="Yes" bind:group={comfortableWithReviewControl} />
            Yes
          </label>
          <label>
            <input type="radio" name="comfortableWithReviewControl" value="Maybe" bind:group={comfortableWithReviewControl} />
            Maybe
          </label>
          <label>
            <input type="radio" name="comfortableWithReviewControl" value="No" bind:group={comfortableWithReviewControl} />
            No
          </label>
        </div>
      </div>

      <h2>Section 5: AI Voice Receptionist</h2>

      <div class="question-group">
        <h3>Does your office currently handle a high volume of phone calls?</h3>
        <div class="options">
          <label>
            <input type="radio" name="highVolumeCalls" value="Yes" bind:group={highVolumeCalls} />
            Yes
          </label>
          <label>
            <input type="radio" name="highVolumeCalls" value="Somewhat" bind:group={highVolumeCalls} />
            Somewhat
          </label>
          <label>
            <input type="radio" name="highVolumeCalls" value="No" bind:group={highVolumeCalls} />
            No
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>What challenges exist with phone calls today? (Select all that apply)</h3>
        <div class="options">
          <label>
            <input type="checkbox" name="phoneCallChallenges" value="Missed calls" bind:group={phoneCallChallenges} />
            Missed calls
          </label>
          <label>
            <input type="checkbox" name="phoneCallChallenges" value="Interruptions to work" bind:group={phoneCallChallenges} />
            Interruptions to work
          </label>
          <label>
            <input type="checkbox" name="phoneCallChallenges" value="After-hours calls" bind:group={phoneCallChallenges} />
            After-hours calls
          </label>
          <label>
            <input type="checkbox" name="phoneCallChallenges" value="Repetitive questions" bind:group={phoneCallChallenges} />
            Repetitive questions
          </label>
          <label>
            <input type="checkbox" name="phoneCallChallenges" value="Scheduling conflicts" bind:group={phoneCallChallenges} />
            Scheduling conflicts
          </label>
          <label>
            <input type="checkbox" name="phoneCallChallenges" value="None" bind:group={phoneCallChallenges} />
            None
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>How would you feel about an AI voice receptionist handling initial calls only?</h3>
        <div class="options">
          <label>
            <input type="radio" name="aiVoiceReceptionistComfort" value="Very comfortable" bind:group={aiVoiceReceptionistComfort} />
            Very comfortable
          </label>
          <label>
            <input type="radio" name="aiVoiceReceptionistComfort" value="Somewhat comfortable" bind:group={aiVoiceReceptionistComfort} />
            Somewhat comfortable
          </label>
          <label>
            <input type="radio" name="aiVoiceReceptionistComfort" value="Unsure" bind:group={aiVoiceReceptionistComfort} />
            Unsure
          </label>
          <label>
            <input type="radio" name="aiVoiceReceptionistComfort" value="Uncomfortable" bind:group={aiVoiceReceptionistComfort} />
            Uncomfortable
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>Which tasks would you be comfortable with an AI voice receptionist handling? (Select all that apply)</h3>
        <div class="options">
          <label>
            <input type="checkbox" name="aiReceptionistTasks" value="Answering common questions" bind:group={aiReceptionistTasks} />
            Answering common questions
          </label>
          <label>
            <input type="checkbox" name="aiReceptionistTasks" value="Scheduling appointments" bind:group={aiReceptionistTasks} />
            Scheduling appointments
          </label>
          <label>
            <input type="checkbox" name="aiReceptionistTasks" value="Routing calls" bind:group={aiReceptionistTasks} />
            Routing calls
          </label>
          <label>
            <input type="checkbox" name="aiReceptionistTasks" value="Taking messages" bind:group={aiReceptionistTasks} />
            Taking messages
          </label>
          <label>
            <input type="checkbox" name="aiReceptionistTasks" value="None" bind:group={aiReceptionistTasks} />
            None
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>How important is it that a human can step in or review calls when needed?</h3>
        <div class="options">
          <label>
            <input type="radio" name="humanStepInImportance" value="Extremely important" bind:group={humanStepInImportance} />
            Extremely important
          </label>
          <label>
            <input type="radio" name="humanStepInImportance" value="Very important" bind:group={humanStepInImportance} />
            Very important
          </label>
          <label>
            <input type="radio" name="humanStepInImportance" value="Somewhat important" bind:group={humanStepInImportance} />
            Somewhat important
          </label>
          <label>
            <input type="radio" name="humanStepInImportance" value="Not important" bind:group={humanStepInImportance} />
            Not important
          </label>
        </div>
      </div>

      <h2>Section 6: Fear, Trust & Workplace Impact</h2>

      <div class="question-group">
        <h3>Do you have concerns about AI impacting jobs in the workplace?</h3>
        <div class="options">
          <label>
            <input type="radio" name="concernsAboutAiJobs" value="Yes" bind:group={concernsAboutAiJobs} />
            Yes
          </label>
          <label>
            <input type="radio" name="concernsAboutAiJobs" value="Some concerns" bind:group={concernsAboutAiJobs} />
            Some concerns
          </label>
          <label>
            <input type="radio" name="concernsAboutAiJobs" value="No" bind:group={concernsAboutAiJobs} />
            No
          </label>
          <label>
            <input type="radio" name="concernsAboutAiJobs" value="Unsure" bind:group={concernsAboutAiJobs} />
            Unsure
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>What is your biggest concern related to AI at work? (Optional open response)</h3>
        <textarea bind:value={biggestAiConcern} placeholder="Type your concern here..."></textarea>
      </div>

      <div class="question-group">
        <h3>Which statement do you agree with most?</h3>
        <div class="options">
          <label>
            <input type="radio" name="aiStatementAgreement" value="AI should support employees, not replace them" bind:group={aiStatementAgreement} />
            AI should support employees, not replace them
          </label>
          <label>
            <input type="radio" name="aiStatementAgreement" value="AI should improve efficiency even if roles change" bind:group={aiStatementAgreement} />
            AI should improve efficiency even if roles change
          </label>
          <label>
            <input type="radio" name="aiStatementAgreement" value="I’m undecided" bind:group={aiStatementAgreement} />
            I’m undecided
          </label>
          <label>
            <input type="radio" name="aiStatementAgreement" value="AI should be limited in the workplace" bind:group={aiStatementAgreement} />
            AI should be limited in the workplace
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>Would transparency around how AI is used reduce concern?</h3>
        <div class="options">
          <label>
            <input type="radio" name="transparencyReduceConcern" value="Yes" bind:group={transparencyReduceConcern} />
            Yes
          </label>
          <label>
            <input type="radio" name="transparencyReduceConcern" value="Somewhat" bind:group={transparencyReduceConcern} />
            Somewhat
          </label>
          <label>
            <input type="radio" name="transparencyReduceConcern" value="No" bind:group={transparencyReduceConcern} />
            No
          </label>
        </div>
      </div>

      <h2>Section 7: Readiness & Future Outlook</h2>

      <div class="question-group">
        <h3>How open are you to learning how AI tools work in your role?</h3>
        <div class="options">
          <label>
            <input type="radio" name="openToLearningAi" value="Very open" bind:group={openToLearningAi} />
            Very open
          </label>
          <label>
            <input type="radio" name="openToLearningAi" value="Somewhat open" bind:group={openToLearningAi} />
            Somewhat open
          </label>
          <label>
            <input type="radio" name="openToLearningAi" value="Neutral" bind:group={openToLearningAi} />
            Neutral
          </label>
          <label>
            <input type="radio" name="openToLearningAi" value="Not open" bind:group={openToLearningAi} />
            Not open
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>What would help you feel more confident using AI at work? (Select all that apply)</h3>
        <div class="options">
          <label>
            <input type="checkbox" name="helpConfidenceAi" value="Training" bind:group={helpConfidenceAi} />
            Training
          </label>
          <label>
            <input type="checkbox" name="helpConfidenceAi" value="Clear boundaries" bind:group={helpConfidenceAi} />
            Clear boundaries
          </label>
          <label>
            <input type="checkbox" name="helpConfidenceAi" value="Human approval steps" bind:group={helpConfidenceAi} />
            Human approval steps
          </label>
          <label>
            <input type="checkbox" name="helpConfidenceAi" value="Documentation" bind:group={helpConfidenceAi} />
            Documentation
          </label>
          <label>
            <input type="checkbox" name="helpConfidenceAi" value="Time to learn" bind:group={helpConfidenceAi} />
            Time to learn
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>Do you believe AI could improve your work experience if implemented thoughtfully?</h3>
        <div class="options">
          <label>
            <input type="radio" name="aiImproveWorkExperience" value="Yes" bind:group={aiImproveWorkExperience} />
            Yes
          </label>
          <label>
            <input type="radio" name="aiImproveWorkExperience" value="Maybe" bind:group={aiImproveWorkExperience} />
            Maybe
          </label>
          <label>
            <input type="radio" name="aiImproveWorkExperience" value="No" bind:group={aiImproveWorkExperience} />
            No
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>Would you like to be involved in discussions around AI and automation decisions?</h3>
        <div class="options">
          <label>
            <input type="radio" name="involvedInDiscussions" value="Yes" bind:group={involvedInDiscussions} />
            Yes
          </label>
          <label>
            <input type="radio" name="involvedInDiscussions" value="Maybe" bind:group={involvedInDiscussions} />
            Maybe
          </label>
          <label>
            <input type="radio" name="involvedInDiscussions" value="No" bind:group={involvedInDiscussions} />
            No
          </label>
        </div>
      </div>

      <div class="question-group">
        <h3>Any additional thoughts or concerns you’d like to share? (Optional)</h3>
        <textarea bind:value={additionalThoughts} placeholder="Type your thoughts here..."></textarea>
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Survey'}
      </button>
      {#if submissionMessage && !submissionSuccess}
        <p class="error-message">{submissionMessage}</p>
      {/if}
    </form>
  {/if}
</div>