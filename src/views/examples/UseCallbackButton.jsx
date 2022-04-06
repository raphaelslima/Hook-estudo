import React from "react";

export default function UseCallbackButton(props){
  return(
    <div>
      <button className="btn" onClick={() => {props.inc(3)}}>Adiciona +3</button>
      <button className="btn" onClick={() => {props.inc(6)}}>Adiciona +6</button>
      <button className="btn" onClick={() => {props.inc(12)}}>Adiciona +12</button>
    </div>
  )
}