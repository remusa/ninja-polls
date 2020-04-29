import { writable } from 'svelte/store'

const PollStore = writable([
  {
    id: 1,
    question: 'Python or JavaScript',
    answerA: 'Python',
    answerB: 'JavaScript',
    votesA: 9,
    votesB: 15,
  },
  {
    id: 2,
    question: 'Do you like marmite?',
    answerA: 'Yep',
    answerB: 'Nah',
    votesA: 3,
    votesB: 6,
  },
])

export { PollStore }
