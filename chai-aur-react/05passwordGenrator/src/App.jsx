import { useState,useCallback,useEffect,useRef } from 'react'

function App() {

  const [length,setLength] = useState(8)
  const [addNumber,setAddNumber] = useState(false)
  const [addChar,setAddChar] = useState(false)
  const [Password,setPassword] = useState("")
  const [copyText,setCopyText] = useState('Copy')
  const [isCopyClicked, setIsCopyClicked] = useState(false);

  

  //useref hook
  const passowrdRef = useRef(null)

  const PasswordGenrator = useCallback(() => {
       let pass = '';
       let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
       if (addNumber) str += '01234567889'
       if (addChar) str += '!@#$%^&*(){}~`[]' 
       for (let i = 1; i <= length; i++) {
        
        let char = Math.floor(Math.random() * str.length + 1)

        pass += str.charAt(char)
        
       }
       setPassword(pass)
  },[length,addChar,addNumber,setPassword])

  const copyPasswordClipbord = useCallback( () => {
    passowrdRef.current?.select()
    passowrdRef.current?.setSelectionRange(0,51)
    window.navigator.clipboard.writeText(Password)

    setIsCopyClicked(true);

    setInterval( () => {
         setIsCopyClicked(false)
    },3000)


    setCopyText('Copied!')
    
   
    setInterval(() => {
      setCopyText('Copy')
    },3000)
    
  },[Password] )

  useEffect(() => {
 PasswordGenrator()
  },[length,addNumber,addChar,PasswordGenrator])

  return (
   
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
   <h1 className='text-white text-center my-3'>Password Genrator</h1>
   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
   <input
   type='text'
   value={Password}
   className='outline-none w-full py-1 px-3'
   placeholder='password'
   readOnly
   ref={passowrdRef}
   />
  <button
  onClick={copyPasswordClipbord}
  className={`outline-none ${isCopyClicked ? 'bg-green-700' : 'bg-red-500'} text-white px-3 py-0.5 shrink-0`}
>
  {copyText}
</button>


   </div>
   <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={50}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className='flex items-centre gap-x-1'>
      <input
        type='checkbox'
        defaultChecked ={addNumber}
        id='numberInput'
        onChange={() => {setAddNumber((prev) => !prev )
        }}
      />
          <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
      type="checkbox"
      defaultChecked={addChar}
              id="characterInput"
              onChange={() => {
                  setAddChar((prev) => !prev )
              }}
          />
           <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
   </div>
  

  
   
  )
}

export default App
