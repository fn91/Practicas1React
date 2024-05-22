/* eslint-disable react/prop-types */
import { useRef,useState } from "react";
import Tooltip from "./Tooltip";

function TooltipText (props){

const spanElement = useRef ();

const [showToolTip,setShowTooltip] = useState(false);
const [tooltipPosition,setTooltipPosition]=useState ({x: 0, y:0, width:0 , height:0})


function handleMouseOver () {

// get spanElement widht and height ,scrollWidht and scrollHeight

const {x,y,width,height}= spanElement.current.getBoundingClientRect();
setTooltipPosition({ x, y, width, height });
setShowTooltip(true);





}

function handleMouseOut() {
    setShowTooltip(false);
  }





return (
<>

<span className="tooltip-text" ref={spanElement} onMouseOver={ev=>handleMouseOver(ev)} onMouseLeave={ev=>handleMouseOut(ev)}>

{props.children}
</span>
{

showToolTip && <Tooltip position={tooltipPosition} text={props.tooltip}/>


}

</>





)

}


export default TooltipText;