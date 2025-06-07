import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleComponent from './Components/UseToggle/UseToggleComponenet'
import CounterComponent from './Components/Counter/CounterComponent'
import Debounce from './Components/Debounce/DebounceComponent'
import Parent from './Components/Memo/ParentChild/parent'
import Dashboard from './Components/Memo/dashboard/Dashboard'

function App() {
  /**
   * todays target *
   * useToggle
   * useTimeout
   * useDebounce
   * useUpdateEffect
   * useArray
   * usePrevious
   * useStateWithHistory
   * useStorage
   * useAsync
   * useFetch
   * useScript
   * useDeepCompareEffect
   * useEventListener
   * useOnScreen
   * useWindowSize
   */
  
  const [count, setCount] = useState(0)

  return (
    <>
      <ToggleComponent/>
      <CounterComponent/>
      <Debounce/>
      <Parent/>
      <Dashboard/>
    </>
  )
}

export default App
