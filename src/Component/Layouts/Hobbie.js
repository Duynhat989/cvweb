

import Img from '../Forms/Img'
function Hobbie({data}){
    return (
        <div className="hobbie">
            <div className='hobbie-item'>
                   <div className='title'>
                    <h1>Mục tiêu</h1>
                </div>
                <div className='content'>
                    {
                        data.map((dat,index)=>(
                            <div className='content-item'>
                            <h2><strong>+ {dat}</strong></h2>
                        </div>
                        ))
                    }
                </div>
            </div>    
        </div>
    )
}
export default Hobbie
