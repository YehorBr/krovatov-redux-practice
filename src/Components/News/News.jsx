import { useEffect, useState } from "react"

const NEWS_API_KEY = '3ce63eea477043d7a470d2b21dc5ab4b'

export const News = () =>{
    const [recentNews, setRecentNews] = useState([])

   useEffect(() => {
  fetch(`https://api.unsplash.com/search/photos?query=room&per_page=10&client_id=jHh7tWbk2lZqOUp3MeHzq5lgOOWQqgjNoABwyhq4avk`)
    .then((res) => res.json()).then((res)=> setRecentNews(res.results))
    },[])
    
    console.log(recentNews);

    return <>
    <h2>Свіжі статті та останні новини</h2>
    <ul>
        {recentNews.map((img)=>{
            return <li key={img.id}>
                <img src={img.urls.small} alt="" style={{height: "200px"}}/>
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>


            </li>
        })
            
        }
    </ul>

    </>
} 