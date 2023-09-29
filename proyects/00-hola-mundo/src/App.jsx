import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App(){
  const format = (userName) => `@${userName}`
  const [name, setName] = useState('midudev')
  return (
    <section className="App">
      <TwitterFollowCard 
      formatUserName={format} 
      userName={name} 
      name="Miguel Angel Duran" 
    />  

      <TwitterFollowCard 
        formatUserName={format} 
        userName="soydalto" 
        name="Miguel Angel Duran" 
      />  

      <TwitterFollowCard 
        formatUserName={format}
        userName="midudev" 
        name="Miguel Angel Duran"
      /> 

      <TwitterFollowCard 
        formatUserName={format}
        userName="elonmusk" 
        name="Miguel" 
      />

      <button onClick={()=> setName('pedroMikel')}>Cambiar nombre</button>  
    </section>
   )
}