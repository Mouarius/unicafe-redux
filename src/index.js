import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD',
    })
  }
  const neutral = () => {
    store.dispatch({
      type: 'OK',
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD',
    })
  }
  const zero = () => {
    store.dispatch({
      type: 'ZERO',
    })
  }
  const all = () => {
    const state = store.getState()
    return state.good + state.ok + state.bad
  }
  const average = () => {
    const state = store.getState()
    const total = all()
    if (total !== 0) {
      const average = (state.good - state.bad) / total
      return average
    }
    return 0
  }
  const positive = () => {
    const state = store.getState()
    const total = all()
    if (total !== 0) {
      const positive = (state.good / total) * 100
      return positive
    }
    return 0
  }

  return (
    <div>
      <div className="give-feedback">
        <h2>give feedback</h2>
        <button onClick={good}>good</button>
        <button onClick={neutral}>neutral</button>
        <button onClick={bad}>bad</button>
        <button onClick={zero}>reset stats</button>
      </div>
      <div className="statistics">
        <h2>statistics</h2>
        <div>good : {store.getState().good}</div>
        <div>neutral : {store.getState().ok}</div>
        <div>bad : {store.getState().bad}</div>
        <div>all : {all()}</div>
        <div>average : {average()}</div>
        <div>positive : {positive()} %</div>
      </div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
