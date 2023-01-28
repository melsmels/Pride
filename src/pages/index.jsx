import Line from "@/components/Line"
import Searchbar from "@/components/Searchbar"
import Logo from "@/components/Logo"



export default function Home() {
  
  return (
    <>
        
      <div className="h-screen flex flex-col items-center justify-center gap-4">

        <Logo wd={200} h={200}></Logo>
        <Searchbar placeholder={"Buscar player"} w={"350px"} h={"40px"}></Searchbar>

        <div className="flex items-center">
          <Line url={"#"} img={"/img/top_icon.webp"} wd={70} h={70}/>
          <Line url={"#"} img={"/img/jungle_icon.webp"} wd={70} h={70}/>
          <Line url={"#"} img={"/img/mid_icon.webp"} wd={70} h={70}/>
          <Line url={"#"} img={"/img/adc_icon.webp"} wd={70} h={70}/>
          <Line url={"#"} img={"/img/support_icon.webp"} wd={70} h={70}/>
        </div>
      </div>    
    </>
  )
}
