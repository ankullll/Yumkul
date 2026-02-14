import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    
    <div className="flex justify-between gap-x-10 mb-10 items-center  pb-2 px-2 pt-0 mt-0 ">
      <div className="left">
        <h2 className="text-xl text-[#BE3740] font-bold pl-18"><span className="font-[Lora] ">Yumkul</span></h2>
      </div>
      <div className="right flex justify-between gap-17  items-center text-l  px-2">
        <NavLink to="/" className={(e)=>e.isActive ? "text-red-600 scale-105" : ""} >Home</NavLink>
        <NavLink to="/recipes" className={(e)=>e.isActive ? "text-red-600 scale-105" : ""} >Recipes</NavLink>
        <NavLink to="/create-recipes" className={(e)=>e.isActive ? "text-red-600 scale-105" : ""} >Create Recipe</NavLink>
        <NavLink to="/about" className={(e)=>e.isActive ? "text-red-600 scale-105" : ""} >About</NavLink>
      </div>
      
        
    </div>
   
    
  )
}

export default Nav
