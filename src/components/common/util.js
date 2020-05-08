 export function  debounce(func,delay){
  let timer = null
  return function(...args) {
    if(timer) clearTimeout(timer)
    setTimeout(()=>{
      func.apply(args)
    },delay)
  }
}

// function a() {
//
// }
// function b(){
//
// }
// a.apply(b)
