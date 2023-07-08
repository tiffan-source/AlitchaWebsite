import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogAcceuilCard from '../../components/Card/BlogAcceuilCard';

function BlogPreview() {
    const [datas, setDatas] = useState([]);

    useEffect(()=>{
        (async()=>{
            let {data} = await axios.get("https://api.mockfly.dev/mocks/23f5448c-be68-4a78-bc33-255b98b4348b/blog")

            setDatas(data['articles'])
        })()
    }, []);
    
    return (
    <div className='my-8'>
        <h2 className='text-xl pb-4 text-primary'>Blog</h2>
        <h1 className='text-3xl pb-8 text-secondary font-bold'>Nous vous tenons informer</h1>

        <div className='flex gap-8 overflow-x-hidden py-4'>
            {datas.map((data, index)=>{
				return (
					<BlogAcceuilCard key={index} theme={data.theme} date={data.date} titre={data.titre} description={data.description}/>
				)
			})}
        </div>
    </div>
    )
}

export default BlogPreview