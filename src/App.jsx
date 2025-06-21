import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Timer.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
  <div id="menu-options">
    <nav>
      <ul>
        <li className="title">Menu</li>
        <li>Op 1</li>
        <li>Op 2</li>
        <li>Op 3</li>
        <li>Op 4</li>
      </ul>
    </nav>
  </div>

  <div id="big-box">
    <div id="session-time" style={{ order: 1 }}>
      <button id="increment-session" style={{ order: 1 }}>up</button>
      <h3 style={{ order: 2 }}>25</h3>
      <button id="decrement-session" style={{ order: 3 }}>down</button>
    </div>

    <div id="timer-box" style={{ order: 2 }}>
      <div className="timer-part" id="mins" style={{ order: 1 }}>
        <h2 id="minutes">00</h2>
      </div>
      <div className="timer-part" id="colon" style={{ order: 2 }}>
        <h2>:</h2>
      </div>
      <div className="timer-part" id="secs" style={{ order: 3 }}>
        <h2 id="seconds">00</h2>
      </div>
    </div>

    <div id="break-time" style={{ order: 3 }}>
      <button id="increment-break">up</button>
      <h3>5</h3>
      <button id="decrement-break">down</button>
    </div>
  </div>

  <div id="about-section">
    <nav>
      <ul>
        <li className="title">Menu</li>
        <li>Op 1</li>
        <li>Op 2</li>
        <li>Op 3</li>
        <li>Op 4</li>
      </ul>
    </nav>
  </div>
</>
  )
}

export default App
