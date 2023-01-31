export default function Boton({children}){
    return(
        <div className={`flex justify-center uppercase py-2 px-5 border border-main hover:bg-main cursor-pointer rounded text-main hover:text-white font-bold transition-colors`}>
            <span>{children}</span>
        </div>
    )
}