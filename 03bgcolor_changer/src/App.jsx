import { useState, useEffect } from 'react'

function App() {
  const [color, setcolor] = useState("Black");
  useEffect(() => {
    let getColors = document.querySelectorAll("#colors button");
    getColors.forEach((co) => {
      co.addEventListener("click", (e) => {
        setcolor(e.target.innerHTML)
      })
    })
  }, [])

  return (
    <>
        <div className='w-full h-screen flex justify-center ' 
          style={{backgroundColor: color}}
        >
            <div className=' fixed bg-white px-3 py-2 rounded-3xl bottom-10' id='colors'>
                <button className='px-3 py-2 rounded-3xl text-white mr-2' 
                style={{backgroundColor: "Red", }}
                id='red'
                >
                  Red
                </button>
                <button className='px-3 py-2 rounded-3xl text-white mr-2' 
                style={{backgroundColor: "Olive", }}
                id='olive'
                >
                  Olive
                </button>
                <button className='px-3 py-2 rounded-3xl text-white mr-2' 
                style={{backgroundColor: "Orange", }}
                id='orange'
                >
                  Orange
                </button>
                <button className='px-3 py-2 rounded-3xl text-white mr-2' 
                style={{backgroundColor: "Seagreen", }}
                id='seagreen'
                >
                  Seagreen
                </button>
                <button className='px-3 py-2 rounded-3xl text-white mr-2' 
                style={{backgroundColor: "Pink", }}
                >
                  Pink
                </button>
                <button className='px-3 py-2 rounded-3xl text-white mr-2' 
                style={{backgroundColor: "yellowgreen", }}
                >
                  Yellowgreen
                </button>
                <button className='px-3 py-2 rounded-3xl text-white mr-2' 
                style={{backgroundColor: "lightsalmon", }}
                >
                  Lightsalmon
                </button>
                <button className='px-3 py-2 rounded-3xl text-white mr-2' 
                style={{backgroundColor: "lightblue", }}
                >
                  Lightblue
                </button>
                <button className='px-3 py-2 rounded-3xl text-white ' 
                style={{backgroundColor: "Teal", }}
                >
                  Teal
                </button>
                
            </div>
        </div>
    </>
  )
}

export default App
