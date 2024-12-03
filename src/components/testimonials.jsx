import zeroless from "../assets/roundZeroless.png";
import letsellify from "../assets/roundLetsellify.png";
import mana from "../assets/roundMana.png";
export default function Testimonials(){

    const contents = [
        {
            body : `Drop Innovation is beyond mobility. It 
            is an seamless and secure transporting. It 
            is an empowerment scheme. It is
            revolutionary in comfortations.`,
            image : mana,
            name : "Abdulkadir S. Abdulkadir",
            position : "Executive Director ",
            company : "Mana-Mana School Services Limited"
        },
        {
            body : `Drop Innovation is beyond mobility. It 
            is an seamless and secure transporting. It 
            is an empowerment scheme. It is
            revolutionary in comfortations.`,
            image : mana,
            name : "Abdulkadir S. Abdulkadir",
            position : "Executive Director ",
            company : "Mana-Mana School Services Limited"
        },
        {
            body : `Drop Innovation is beyond mobility. It 
            is an seamless and secure transporting. It 
            is an empowerment scheme. It is
            revolutionary in comfortations.`,
            image : mana,
            name : "Abdulkadir S. Abdulkadir",
            position : "Executive Director ",
            company : "Mana-Mana School Services Limited"
        },
    ]
    return(
        <div className="flex flex-col gap-32 xl:px-24 px-8 py-32">
            <div className="text-center">
                <p className="text-[#238949] text-[25px]">Testimonial</p>
                <p className="text-[31px]">Hear What People Are Saying About Us</p>
            </div>
            <div className="xl:grid grid-cols-3 flex flex-col gap-12">
                {
                    contents.map((content, index)=>(
                        <div className="xl:p-12 p-6 flex flex-col gap-12 shadow-sm">
                            <small>{content.body}</small>
                            <div className="flex gap-4 items-center">
                                <img src={content.image} alt="" />
                                <div className="flex flex-col gap-2">
                                    <h4>{content.name}</h4>
                                    <small>{content.position}</small>
                                    <small>{content.company}</small>
                                    <small>Partner</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}