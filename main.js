const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"]

const generateSpaceLayer = (size, selector, totalStart, duration)=>{

   const layer = []
   for(let i=0;i<totalStart;i++){
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
     const x = Math.floor(Math.random() * 100)
     const y = Math.floor(Math.random() * 100)
     layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`)

   }
   const container = document.querySelector(selector)
   container.style.setProperty("--space-layer", layer.join(","))
   container.style.setProperty("--size", size)
   container.style.setProperty("--duration", duration)
}
generateSpaceLayer("2px",".space1",250,"30s")
generateSpaceLayer("3px",".space2",100,"22s")
generateSpaceLayer("5px",".space3",25,"20s")