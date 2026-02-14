import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate()
   const order = ()=>{
    navigate("/recipes")
  }
  return (
    <div className="flex gap-50 ">

    <img src="/assets/flower-japan.svg" alt=""  className="absolute h-[5vh] w-[4vw] left-260 top-34"/>
     <img src="/assets/leaf-1.svg" alt=""  className="absolute h-[4vh] w-[3vw] left-280 top-75"/>
    <img src="/assets/flower-japan.svg" alt=""  className="absolute h-[4.5vh] w-[3.5vw] left-172 top-132"/>

      <div className="left w-[25%] h-[70vh] bg-[#BC3740] ml-19 rounded-2xl relative">
        <img src="/assets/about-img.png" alt="" className="relative left-18 top-20 " />
      </div>
      <div className="right">
        <p className="text-[#BE3740] font-[lora] font-bold text-xl mt-5">About us</p>
        <h1 className="text-5xl font-[Lora] font-bold text-[#2B2823] tracking-wider mt-2 leading-15">We Serve You The <br />Authentic <span className="text-[#BE3740]">Japanese <br /> Flavour</span></h1>
        <p className="text-[#918273] tracking-wider mt-3 px-1">
          We have been operating for 10 years to continue serving <br /> Japanese food, with authentic flavours that we will continue to <br />naturalize for you.
        </p>
        <button className="text-[#FEEFDF] bg-[#BC3740] px-3 py-2 rounded  mt-5 hover:scale-105 hover:shadow-2xl" onClick={order}>See Recipe</button>
      </div>
    </div>
  )
}

export default About
