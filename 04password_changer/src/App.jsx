import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //Pasword Generator Function using useCallback Hook
  const PasswordGenerator = useCallback(()=> {
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz"
     if (numberAllowed) str += "0123456789";
     if (charAllowed) str += "!@#$%^&*`~";
     for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
     }
     setPassword(pass);
  }, [numberAllowed,charAllowed,length])

  //Create passwordRef using useRef Hook
  const passwordref = useRef(null);
  //Create CopytoClipboard function
  const CopytoClipboard = ()=> {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,30);
    window.navigator.clipboard.writeText(password);
  }

  // Run passWord Genrator Method Using use Effect Hook
  useEffect(()=>{
    PasswordGenerator();
  },[length,numberAllowed,charAllowed])


  return (
    <>
      <div className='w-full h-2/4 flex justify-center'>
        <div className='w-full max-w-md bg-gray-700 rounded-lg mt-10 px-2 py-2 text-orange-500'>
            <h1 className='text-center mb-3 text-xl font-semibold'>Password Generator</h1>
            <div className='passwordInput flex justify-center w-full overflow-hidden'>
               <input type='text'
                  className='outline-none rounded-s-lg px-2 py-1 w-4/5 mb-4'            
                  value={password}
                  readOnly
                  placeholder='Password'
                  ref={passwordref}   
               /> 
               <button className='bg-orange-500 text-white px-2 
                 rounded-e-lg text-sm h-8 font-semibold'
                 onClick={CopytoClipboard}
               >Copy</button>
            </div> {/*End Of Input-Button Div*/}
            <div className='flex justify-center w-full text-sm gap-x-3'>
                <div className='flex gap-x-1'>
                    <input type="range"
                      min={6}
                      max={30}
                      value={length}
                      className='cursor-pointer'
                      onChange={(e)=> {setLength(e.target.value)}}
                    />
                    <label>length: {length}</label>
                </div> {/*End Of input Range Div*/}
                <div className='flex gap-x-1'>
                    <input 
                    type="checkbox"
                    value={numberAllowed}
                    className='cursor-pointer' 
                    onChange={()=> {
                      setNumberAllowed((prev)=> !prev)
                    }}
                     />
                    <label>NumberAllowed</label>
                </div> {/*End Of Input checkbox NumberAllowed Div*/}
                <div className='flex gap-x-1'>
                    <input 
                    type="checkbox"
                    value={charAllowed}
                    className='cursor-pointer' 
                    onChange={()=> {
                      setCharAllowed((prev)=> !prev)
                    }}
                     />
                    <label>CharAllowed</label>
                </div>{/*End Of Input checkbox CharAllowed Div*/}
            </div> {/*End Of Range & Checkbox Div*/}
        </div> {/*End Of PassworGenerator-Container Div*/}
      </div> {/*End Of Body-Container Div*/}
    </>
  )
}

export default App
