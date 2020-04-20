<script>
  import Button from '../shared/Button'

  let fields = {
    question: "",
    answerA: "",
    answerB: "",
  }

  const onSubmit = e => {
    console.log(`${Object.entries(fields)}`)
  }
</script>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 1rem auto;
  }

  input {
    width: 100%;
    border-radius: 6x;
  }

  label {
    margin: 0.75rem auto;
    text-align: left;
  }
</style>

<form on:submit|preventDefault={onSubmit} >
  <div class="form-field">
    <label for="question">Poll Question: </label>
    <input type="text" id="question" bind:value={fields.question}/>
  </div>

  <div class="form-field">
    <label for="answer-a">Answer A: </label>
    <input type="text" id="answer-a" bind:value={fields.answerA}/>
  </div>

  <div class="form-field">
    <label for="answer-b">Answer B: </label>
    <input type="text" id="answer-b" bind:value={fields.answerB}/>
  </div>

  <Button type="secondary" flat={true}>Add Poll</Button>
</form>

