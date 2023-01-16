import React ,{useState} from 'react'

const App = () => {
  // const relatives=["Mama", "kaka","Atya","Mavshi","Tai"]
  const [relatives, setRelatives]=useState("Mama", "chachu","bro","sis","uncle")
  return (
    <div id="main">
          <ol>
            {relatives.map((relative,idx)=>{
              return <li key={relative+idx}>Name: {relative}</li>
            })}
          </ol>     
    </div>
  )
}

export default App
