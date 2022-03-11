import { useEffect, useState } from 'react'
import iconMenu from '../../Assets/img/icon.jpg'

function Header({data}){
    const [menu,SetMenu] = useState(false)
    const handleOpenMenu = (e)=>{
        SetMenu(!menu)
        console.log(menu)
    }
    useEffect(()=>{
        var vible = 'visible';
        var opa = '1';
        menu != true ? vible = "hidden" : vible='visible'
        menu != true ? opa = "0" : opa='1'
        if(window.innerWidth < 850){
            document.getElementsByClassName('right')[0].style.visibility=vible
            document.getElementsByClassName('right')[0].style.opacity=opa
        }
    },[menu])
    
    return (
        <header className="header">
            <div className="header-content">
                <div className="row">
                    <div className="left col-lg-4 col-md-3">
                        <div className="logo">
                            <h2>{data.name}</h2>
                            {/* <Img src='https://dbk.vn/uploads/ckfinder/images/1-content/anime-girl-21.jpg' alt="anime-image"/> */}
                        </div>
                        <div className="menu-icon" onClick={(e)=>handleOpenMenu(e)}>
                            <img src={iconMenu}/>
                        </div>
                    </div>
                    <div className="right col-lg-8 col-md-9">
                        <div className="menu flex">
                            <li className="menu-item"><a href="#about">Giới thiệu</a></li>
                            <li className="menu-item"><a href="#kinang">Kĩ năng</a>
                                <div className="sub-menu">
                                    {
                                        data.skills.map((element,index)=>(
                                            <li key={index} className="sub-menu-item">{element.name}</li>
                                        ))
                                    }
                                    <li className="sub-menu-item">Khác</li>
                                </div>
                            </li>
                            <li className="menu-item">Sở thích
                                <div className="sub-menu">
                                    <li className="sub-menu-item">Cá nhân</li>
                                    <li className="sub-menu-item">Công việc</li>
                                    <li className="sub-menu-item">Khác</li>
                                </div>
                            </li>
                            <li className="menu-item"><a href='#target'>Mục tiểu</a></li>
                            <li className="menu-item"><a href='https://www.facebook.com/duyit.dhv'>Kết nối</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header