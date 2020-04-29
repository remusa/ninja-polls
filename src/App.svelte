<script>
  import Header from "./components/Header";
  import Footer from "/components/Footer";
  import CreatePollForm from "/components/CreatePollForm";
  import PollList from "/components/PollList";
  import Tabs from "/shared/Tabs";

  const tabs = ["Current Polls", "Add New Poll"];
  let activeTab = tabs[0];

  const changeTab = e => (activeTab = e.detail);

  let polls = [
    {
      id: 1,
      question: 'Python or JavaScript',
      answerA: 'Python',
      answerB: 'JavaScript',
      votesA: 9,
      votesB: 15
    },
    {
      id: 2,
      question: 'Do you like marmite?',
      answerA: 'Yep',
      answerB: 'Nah',
      votesA: 3,
      votesB: 6
    },
  ]

  const onAdd = e => {
    polls = [...polls, e.detail]
    activeTab = tabs[0]
  }
</script>

<Header />

<main>
  <Tabs {tabs} {activeTab} on:changeTab={changeTab} />

  {#if activeTab === tabs[0]}
    <PollList {polls} />
  {:else if activeTab === tabs[1]}
    <CreatePollForm on:addPoll={onAdd} />
  {/if}
</main>

<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
