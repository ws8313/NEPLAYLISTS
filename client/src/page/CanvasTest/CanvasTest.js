import { styled } from '@linaria/react';
import React, { useEffect, useRef,useState } from 'react'

export default function CanvasTest() {
  
  // three.js를 쓰던가
  // 2D로 하던가 => canvas 

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  
  const [ctx, setCtx] = useState();
  

  useEffect(()=>{
    let canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth -100;
    canvas.height  = window.innerHeight -100;

    let context = canvas.getContext('2d');
    context.scale(2,2)
    context.lineCap = "round"
    context.strokeStyle = "Black"
    context.lineWidth = 5
    
    context.fillStyle = 'green'
    context.fillRect = (10,10,100,100)

    context.current = context;
    
    var dino = {
      x:10,
      y:200,
      width:50,
      height:50,
      draw(){
        console.log('하이');
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
