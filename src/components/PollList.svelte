<script>
  // import { onDestroy } from 'svelte'
  import PollDetails from './PollDetails'
  import { PollStore } from '../stores/PollStore'

  // export let polls = []

  // const unsubscribe = PollStore.subscribe(data => {
  //   polls = data
  // })

  // onDestroy(() => {
  //   unsubscribe()
  // })
</script>

<div class="poll-list">
  <!-- {#each polls as poll (poll.id)} -->
  {#each $PollStore as poll (poll.id)}
    <div>
      <!-- <PollDetails {poll} on:vote /> -->
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
