import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleComponent from './Components/UseToggle/UseToggleComponenet'
import CounterComponent from './Components/Counter/CounterComponent'
import Debounce from './Components/Debounce/DebounceComponent'
import Parent from './Components/Memo/ParentChild/parent'
import Dashboard from './Components/Memo/dashboard/Dashboard'
import WindowResize from './Components/WindowResize/WinowResize'
import Form from './Components/UseForm/FormComponenet'
// import LocalStorage from './Components/LocalStorage/LocalStorage'
import Throttle from './Components/Throttle/ThrottleComponent'
import EmailForm from './Components/Validation/ValidationComponent'

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
   * Kritika Bhardwaj
13:37
usefetch use local storage use seeeion storarage use window resize usedebouce usethrottle , useform , usevalidation,
keep
Pinned
Kritika Bhardwaj
17:54
React.memo	🔲 Component (based on props)	Jab aap child component ko unnecessary render se bachana chahte ho
useCallback	🎮 Function	Jab aap koi function props mein bhej rahe ho
useMemo	📦 Value / Calculation Result	Jab koi expensive calculation dobara na karna ho
usefetch use local storage use seeeion storarage use window resize usedebouce usethrottle , useform , usevalidation,
keep
Abhishek Deshwal
17:55
useForm
useValidation
   */
  
  const [count, setCount] = useState(0)

  return (
    <>
      <ToggleComponent/>
      <CounterComponent/>
      <Debounce/>
      <Parent/>
      <Dashboard/>
      <WindowResize/>
      <Form/>
      {/* <LocalStorage/> */}
      <Throttle/>
       <EmailForm/>
    </>
  )
}

export default App
