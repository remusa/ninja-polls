<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let tabs = [];
  export let activeTab = "";
</script>

<style>
  .tabs {
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  li {
    cursor: pointer;
    margin: 1 1rem;
    color: #555;
  }

  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 0.75rem;
  }
</style>

<div class="tabs">
  <ul>
    {#each tabs as tab}
      <li on:click={() => dispatch('changeTab', tab)}>
        <div class:active={tab === activeTab}>{tab}</div>
      </li>
    {/each}
  </ul>
</div>
