import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("")
  const [inputTime, setInputTime] = useState(0)
  const [records, setRecords] = useState(
    [
    
  ]
    );


  const changeInput = (event)=> setInputText(event.target.value)

  const addItem = ()=>{
    // const newRecords = {...records}
  }
  return (
    <>
    
     <div><p>学習内容</p><input type="text" value={inputText} onChange={changeInput}/></div>
     <div><p>学習時間</p><input type="number" value={inputText} onChange={changeInput}/><p>時間</p></div>

     <p>学習記録一覧</p>
     {
       records.map((record,index)=>{
         return (
          <ul>
            <div>
              <p>{record.title}　　学習時間は{record.time}時間</p>
            </div>
          </ul>
         )
       })
     }
     <button　onClick={addItem}>登録</button>
    </>
  )
}

export default App
