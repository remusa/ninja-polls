<script>
  import Header from "./components/Header";
  import Footer from "/components/Footer";
  import CreatePollForm from "/components/CreatePollForm";
  import Tabs from "/shared/Tabs";

  let tabs = ["Current Polls", "Add New Poll"];
  let activeTab = tabs[0];

  const changeTab = e => (activeTab = e.detail);
</script>

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>

<Header />

<main>
  <Tabs {tabs} {activeTab} on:changeTab={changeTab} />

  {#if activeTab === tabs[0]}
    <p>Poll list goes here</p>
  {:else if activeTab === tabs[1]}
    <CreatePollForm />
  {/if}
</main>

<Footer />
