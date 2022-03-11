import '../../Assets/css/bootstrap.min.css'
import '../../Assets/css/main.min.css'
import Header from '../Layouts/Header'
import Banner from '../Layouts/Banner'
import About from '../Layouts/About'
import Skill from '../Layouts/Skill'
import Education from '../Layouts/Education'
import Hobbie from '../Layouts/Hobbie'
import Extra_skill from '../Layouts/Extra_skill'
import Target from '../Layouts/Target'
import Exp from '../Layouts/Exp'
import getInfo from '../../Apis/getinfo'
import React, { useEffect, useState } from 'react'


function Home(){
    const [data,SetData] = useState()
    const [isLoad,SetIsLoad] = useState(false)
    useEffect(()=>{
        // const tmp = Getinfo();
        
        // console.log(tmp,'tmp');   
        const handleScroll = () =>{
            
            if(window.scrollY > 100){
                document.getElementsByClassName('about')[0].classList.add("show");
                //add thêm nhé
            }else{
                document.getElementsByClassName('about')[0].classList.remove("show");
                //xoá thêm nhé 
            }
            if(window.scrollY > 850){
                document.getElementsByClassName('skill')[0].classList.add("show");
                //add thêm nhé
            }else{
                document.getElementsByClassName('skill')[0].classList.remove("show");
                //xoá thêm nhé 
            }
            if(window.scrollY > 1200){
                document.getElementsByClassName('education')[0].classList.add("show");
                //add thêm nhé
            }else{
                document.getElementsByClassName('education')[0].classList.remove("show");
                //xoá thêm nhé 
            }
            if(window.scrollY > 2800){
                document.getElementsByClassName('target')[0].classList.add("show");
                //add thêm nhé
            }else{
                document.getElementsByClassName('target')[0].classList.remove("show");
                //xoá thêm nhé 
            }
        }
        window.addEventListener('scroll',handleScroll);
        return()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[])
    useEffect(()=>{
         getInfo('GET',"http://echipauto.com/apisevice.php?id=1",(content)=>{
            SetData(content)
            SetIsLoad(true)
         })
    },[isLoad])
    return(
    
      <React.Fragment>
            { data && isLoad &&  <div className='main'>
                    <Header data={data}/>
                    <Banner src={data.banner} alt='Banner-anime-boy' slogen={data.slogen}/>
                    <About data={data}/>
                    <Skill data={data.skills} />
                    <Education data={data.education}/>
                    <Exp data={data.exp}/>
                    <Extra_skill data={data.extra_skill}/>
                    <Target data={data.target}/>
                </div>
            
            }
      </React.Fragment>
    )
}
export default Home