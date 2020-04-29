<script>
  import Header from "./components/Header"
  import Footer from "/components/Footer"
  import CreatePollForm from "/components/CreatePollForm"
  import PollList from "/components/PollList"
  import Tabs from "/shared/Tabs"

  const tabs = ["Current Polls", "Add New Poll"]
  let activeTab = tabs[0]

  const changeTab = e => activeTab = e.detail

  const onAdd = e => {
    polls = [...polls, e.detail]
    activeTab = tabs[0]
  }

  const onVote = e => {
    const { option, id } = e.detail
    const copiedPolls = [...polls]
    const upvotedPoll = copiedPolls.find(poll => poll.id === id)

    if (option.toLowerCase() === 'a') {
      upvotedPoll.votesA++
    }
    else if (option.toLowerCase() === 'b') {
      upvotedPoll.votesB++
    }

    polls = copiedPolls
  }
</script>

<Header />

<main>
  <Tabs {tabs} {activeTab} on:changeTab={changeTab} />

  {#if activeTab === tabs[0]}
    <PollList on:vote={onVote} />
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
