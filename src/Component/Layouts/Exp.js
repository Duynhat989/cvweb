
function Exp({data}){
    return (
        <div className="exp" id='exp'>
            <div className='exp-item'>
                <div className='title'>
                    <h1>Kinh nghiệm làm việc</h1>
                </div>
                <div className='content'>
                    {
                        data.map((dat,index)=>(
                            <div className='content-item'>
                            <h2><strong>+ {dat.name}</strong></h2>
                            <ul>
                                <li>- {dat.content}</li>
                                <li>- {dat.target}</li>
                            </ul>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Exp