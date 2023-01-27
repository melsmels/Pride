export default function Searchbar({placeholder, h, w}){
    return(
        <div className={`flex items-center rounded-full border-2 border-white pr-4 pl-3`} style={{width:w, height:h}}>

            <input className="w-full bg-transparent outline-none caret-white text-white " type="search" placeholder={placeholder} />
            <div className="flex items-center justify-center text-white cursor-pointer" style={{width:20, height:h}}>
                <i className="fa-solid fa-magnifying-glass" ></i>
            </div>
        </div>

    )
}