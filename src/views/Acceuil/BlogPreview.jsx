import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogAcceuilCard from '../../components/Card/BlogAcceuilCard';

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function BlogPreview() {
    const [datas, setDatas] = useState([]);

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,  // Nombre de cartes à montrer simultanément
    //     slidesToScroll: 2,
    //     arrows: true
    // };

    useEffect(()=>{
        (async()=>{
            try {
                let {data} = await axios.get("https://api.mockfly.dev/mocks/23f5448c-be68-4a78-bc33-255b98b4348b/blog")                
                setDatas(data['articles'])
            } catch (error) {

            }

        })()
    }, []);
    
    return (
    <div className='my-8'>
        <h2 className='text-xl pb-4 text-primary'>Blog</h2>
        <h1 className='text-3xl pb-8 text-secondary font-bold'>Nous vous tenons informer</h1>

        <div className='flex gap-8 overflow-x-hidden py-4'>
            {!datas.length ? <div className='p-3 bg-red-100 text-red-600 w-full text-center rounded border border-red-600'>
                Pas d'articles trouves
            </div> : datas.map((data, index)=>{
				return (
					<BlogAcceuilCard key={index} theme={data.theme} date={data.date} titre={data.titre} description={data.description}/>
				)
			})}
        </div>

        {/* <Slider {...settings}>
            {datas.map((data, index) => (
                <BlogAcceuilCard
                    key={index}
                    theme={data.theme}
                    date={data.date}
                    titre={data.titre}
                    description={data.description}
                />
            ))}
        </Slider> */}
    </div>
    )
}

export default BlogPreview