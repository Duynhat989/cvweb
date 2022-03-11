import Img from '../Forms/Img'
function Skill({data}){
    return (
        <div className="skill">
            
            <div className='title' id='kinang'>
                <h1>Nhóm kỹ năng</h1>
            </div>
            <div className='skill-content flex'>
                {
                    data.map((skill,index)=>(
                        <div key={index} className='item'>
                            <h2 className='item-title'>{skill.name}</h2>
                            <ul className='sub-skill'>
                                {
                                    skill.content.map((skil)=>(
                                        <li className='sub-skill-item'>{JSON.stringify(skil).replace("{","").replace("}","").replace("\"","").replace("\"","").replace(":"," > ")}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Skill