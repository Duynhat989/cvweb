import Img from '../Forms/Img'
function Education({data}){
    return (
        <div className="education" id='education'>
            <div className='education-item'>
                <div className='title'>
                    <h1>Trình độ học vấn</h1>
                </div>
                <div className='content'>
                    {
                        data.map((dat,index)=>(
                            <div className='content-item'>
                            <h2><strong>+ Thời gian : {dat.time}</strong></h2>
                            <ul>
                                <li>{dat.learn}</li>
                                <li>{dat.type}</li>
                            </ul>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Education