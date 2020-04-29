<script>
  import PollDetails from './PollDetails'

  export let polls = []
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
    width: 600px;
    margin: 0 auto;
  }
</style>


<div class="poll-list">
  {#each polls as poll (poll.id)}
    <div>
      <PollDetails {poll}/>
    </div>
  {/each}
</div>
