import { useEffect,useState } from "react";
function Contador (){

const {targetSeconds,setTargetSeconds}=useState(null);

const {seconds,setSeconds}=useState(0);
const parseForm =(event)=>{
event.preventDefault ();
const seconds =event.target.seconds.value;
setTargetSeconds(seconds);




};

useEffect(() => {
    if (targetSeconds === null) {
      return;
    }

    setSeconds(0);

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setSeconds, targetSeconds]);

  if (targetSeconds === null) {

return (
    <>
<p>Cuantos segundos quiers contar?</p>

<form action="#" onSubmit={ev=>parseForm(ev)}>
    <input name="seconds" type="number"></input>
    <button type="submit">Iniciar</button>


</form>

</>
)
}

if ((seconds+1)>targetSeconds){

return (

<>
<p>Termino</p>
<button onClick={()=> setTargetSeconds(null)}>Reiniciar</button>


</>


)

}
return(

<p>Quedan {targetSeconds-seconds}segundos</p>

);




}
export default Contador