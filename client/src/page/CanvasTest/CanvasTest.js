import { styled } from '@linaria/react';
import React, { useEffect, useRef,useState } from 'react'

export default function CanvasTest() {
  
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  
  const [ctx, setCtx] = useState();
  useEffect(()=>{
    let canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth -100;
    canvas.height  = window.innerHeight -100;
    console.log(canvas);

    let context = canvas.getContext('2d');
    context.fillStyle = 'green'
    context.fillRect(10,10,100,100);
    // context.scale(2,2)
    // context.lineCap = "round"
    // context.strokeStyle = "Black"
    // context.lineWidth = 5
    // context.current = context;
    console.log(context);
    
    var dino = {
      x:10,
      y:200,
      width:50,
      height:50,
      draw(){
        context.fillStyle = 'green'
        context.fillRect = (10,10,100,100)
        console.log(dino);
      }
    }
    dino.draw() 

  },[]);

  const startDrawing = ({nativeEvent}) => {
    const {offsetX,offsetY} = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX,offsetY)
  }

  return (
    <div>
      <canvas id = "canvas" ref={canvasRef}>
      {/* <div ></div> */}
      {/* <Cat></Cat> */}
      </canvas>
    </div>
  )
}
