
function Extra_skill({data}){
    return (
        <div className="extra_skill" id='extra_skill'>
            <div className='extra_skill-item'>
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
                            </ul>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Extra_skill