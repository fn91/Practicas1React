import "./Presentation.css";
import avatar from "../assets/avatar.jpg";
const name = "Claudio";

function Presentation (){

return (

<div className="presentation-card">

<img src={avatar} alt="Avatar" className="avatar" ></img>
<h1>Hola  soy {name} y estoy aprendiendo React</h1>

</div>


)



}
export default Presentation;