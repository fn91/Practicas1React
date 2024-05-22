
import { useEffect,useState,useRef } from "react";
import * as ReactDom from "react-dom";

function Tooltip ({position,text}){

    const [calculatedPosition, setCalculatedPosition] = useState({ x: 0, y: 0 });
    const tooltipElement = useRef();
  



    useEffect (() => {
        const { x, y, width, height } = tooltipElement.current.getBoundingClientRect();
        const coords = {x,y};

if (position.y < height){
coords.y= position.y +position.height;
}else{

coords.y=position.y - height;


}

coords.x = position.x (position.widht / 2) - (width / 2)
setCalculatedPosition(coords);

},[position]);




return ReactDom.createPortal (


<div className="tooltip" ref={tooltipElement} style={{left: calculatedPosition.x,top:calculatedPosition.y}}
>
{text}

</div>,
document.querySelector("body")

)

}



export default Tooltip;

