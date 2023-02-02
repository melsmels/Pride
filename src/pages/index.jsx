import Line from "@/components/Line"
import Searchbar from "@/components/Searchbar"
import Logo from "@/components/Logo"
import Team from "./team"
import Layout from "@/components/Layout" 



export default function Home() {
  
	return (
		<>
			<Layout title={'Inicio'} py={'4rem'} maxw={'6xl'}>
				<div className="flex flex-col items-center justify-center gap-4 w-full">
					<Logo href={'/matches'} wd={200} h={200}></Logo>
					<div className="w-full">
						<Team />
					</div>
				</div>    
			</Layout>
		</>
	)
}
