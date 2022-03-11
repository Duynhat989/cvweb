import Img from '../Forms/Img'

function About({data}){
    return (
        <section className='about' id='about'>
            <div className='about-content'>
                <div className='row'>
                    <div className='left col-lg-6'>
                        <div className='left-content'>
                            <Img src={data.imgage} alt='Hình anime xinh'/> 
                        </div>
                    </div>
                    <div className='right col-lg-6'>
                        <div className='right-content'>
                            <h1 className='name'><em>{data.name}</em></h1>
                            <p><em>------------    --------------- <strong>Chức vụ:</strong> {data.position} ---------------    ------------</em></p>
                            <div className='info'>
                                <div className='info-show flex'>
                                    <label htmlFor='brith_day'>Ngày sinh: </label>
                                    <p>&ensp;{data.dayofbrith}</p>
                                </div>
                                <div className='info-show flex'>
                                    <label htmlFor='brith_day'>Email: </label>
                                    <p>&ensp;{data.email}</p>
                                </div>
                                <div className='info-show flex'>
                                    <label htmlFor='brith_day'>Điện thoại: </label>
                                    <p>&ensp;{data.phone}</p>
                                </div>
                                <div className='info-show flex'>
                                    <label htmlFor='brith_day'>Địa chỉ: </label>
                                    <p>&ensp;{data.address}</p>
                                </div>
                                <div className='info-show'>
                                    <label htmlFor='brith_day'> ---- Mô tả ngắn ---- </label>
                                    <p>&ensp;{data.discription}
</p>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    )
}
export default About