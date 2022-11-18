const canvas = document.getElementById('canvas-item');
// console.log(canvas);
canvas.width = window.innerWidth*0.98;
canvas.height = window.innerHeight*0.98;
let c = canvas.getContext('2d');
// c.fillStyle = 'pink'
// c.fillRect(100,100,100,100);

// console.log(c)
// c.beginPath()
// c.moveTo(50,300);
// c.lineTo(200,400);
// c.lineTo(100,50)
// c.strokeStyle = 'black';
// c.stroke()
// for(let i = 0; i < 100000; i++){
//   x = Math.random()*window.innerWidth;
//   y = Math.random()*window.innerHeight;


//     colors = ['red', 'yellow','blue','green','orange','violet','indigo']
// c.fillStyle = colors[Math.floor(Math.random()*colors.length)];
//  c.fillRect(x,y,20,20);
  
// }
// for(let i = 0; i < 10000000; i++){
//   x = Math.random()*window.innerWidth;
//   y = Math.random()*window.innerHeight;
//   c.beginPath()
//   c.moveTo(y,x);
//   c.lineTo(x,y);
//     colors = ['red', 'yellow','blue','green','orange','violet','indigo']
// c.strokeStyle = colors[Math.floor(Math.random()*colors.length)];
 
//   c.stroke()
// }
// for(let i = 0; i< 2000000; i++){
//   x = Math.random()*window.innerWidth;
//   y = Math.random()*window.innerHeight;
// c.beginPath()
// c.arc(x,y,100,0,Math.PI*2, false)
//   colors = ['red', 'yellow','blue','green','orange','violet','indigo']
// c.strokeStyle = colors[Math.floor(Math.random()*colors.length)];
// c.stroke()
// }


  // c.beginPath()
  //  c.arc(x,y,radius,0,Math.PI*2, false);
  // c.strokeStyle = 'blue';
  // c.stroke()
 
  // if(x+radius>=innerWidth || x+radius<=0 ){
  //  // if(dx > 0){
  //  //   dx += 2
  //  // }
  //   dx = - dx;
  // }
  // // if( x+radius <= innerWidth){
  // //   dx = 2;
  // // }
  // if(y+radius >= innerHeight || y+radius <= 0){
  //   // if(dy > 0){
  //   //   dy += 1;
  //   // }
  //   dy = -dy;

  // }
  // // if(y+radius < 0){
  // //   dy = 2
  // // }
  // // console.log(x,y)
  // x += dx;
  // y += dy;

const mouse = {
  x: undefined,
  y: undefined
}
window.addEventListener('mousemove', (ev) => {
    // console.log('mousemove element run')
  // console.log(ev.x,ev.y)
  mouse.x = ev.x;
  mouse.y = ev.y;
})
window.addEventListener('touchmove',(ev) => {
    // console.log('touch move event');
    mouse.x = ev.changedTouches[0].clientX;
    mouse.y = ev.changedTouches[0].clientY;
})
window.addEventListener('touchend', (ev) => {
    // console.log('touch event ended');
    mouse.x = undefined;
    mouse.y = undefined;
})

window.addEventListener('resize', (ev) =>{
  canvas.width = window.innerWidth*0.96;
canvas.height = window.innerHeight*0.96;
  init()
})

function Circle(x,y,radius,dx,dy){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.realRadius = radius;
  this.color = ['#00078A', '#EEBCEB','#FF7300','#FFFFFF','#000000'][Math.floor(Math.random()*5)];

  
  this.draw = () =>{
    c.beginPath()
   c.arc(this.x,this.y,this.radius,0,Math.PI*2, false);
  // c.strokeStyle = this.color;
  // c.stroke()
  c.fillStyle = this.color;
    
  c.fill()

  // c.beginPath()
  //   c.arc(this.x,this.y,this.radius-2,Math.PI*2,false);
  //   c.stroke();
  //   c.fill();
  //   c.fillStyle = this.color;
  }
  this.update = () =>{
    if(this.x+this.radius > canvas.width || this.x-this.radius < 0 ){
    this.dx = -this.dx;
  }
  if(this.y+this.radius > canvas.height || this.y- this.radius < 0){
    this.dy = -this.dy;
  }
    this.x += this.dx;
    this.y += this.dy;
    
    if(mouse.x - this.x < 50 && mouse.x - this.x > -50  && mouse.y - this.y < 50 && mouse.y - this.y > -50){
      if(this.radius < 40){
      this.radius += 2
        
      }
    }
    else if(this.radius > this.realRadius){
      this.radius -= 1;
    }
    
    
    this.draw();
  }
}
// circleArray = [];
// for(let i = 0; i < 1000; i++){
//   let radius = 1+Math.random()*10;
// var x = radius+Math.random()*(canvas.width-radius*2);
// var y = radius+Math.random()*(canvas.height-radius*2);
// var dy = (Math.random() - 0.5)*5;
// var dx = (Math.random() - 0.5)*5;
//   // console.log(x,y,dx,dy);
//   circleArray[i] = new Circle(x,y,radius,dx,dy);
// }

circleArray = [];

const init = () =>{
circleArray = [];
  
for(let i = 0; i < 800; i++){
  let radius = 1+Math.random()*4;
var x = radius+Math.random()*(canvas.width-radius*2);
var y = radius+Math.random()*(canvas.height-radius*2);
var dy = (Math.random() - 0.5);
var dx = (Math.random() - 0.5);
  // console.log(x,y,dx,dy);
  circleArray[i] = new Circle(x,y,radius,dx,dy);
}

}


// console.log(circleArray)
// circle.draw();
// var x = Math.random()*innerWidth;
// var y = Math.random()*innerHeight;
// var dy = (Math.random() - 0.5)*5;
// var dx = (Math.random() - 0.5)*5;
// var radius = 25;
const animate = () => {
  requestAnimationFrame(animate);
  
  c.clearRect(0,0,innerWidth,innerHeight)
  for(let idx = 0; idx < circleArray.length;idx++){
    circleArray[idx].update()
  }
  // 

  
}
animate()
init()
