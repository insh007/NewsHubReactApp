import React from 'react'

export default function NewsItem(props) {

    
        let { title, description, imageUrl, newsUrl, author, date, source } = props
        return (
            <div className='my-3'>
                <div className="card" >
                    <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
                        <span className="badge rounded-pill bg-danger">
                            {source}</span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://images.moneycontrol.com/static-mcnews/2022/10/software-770x433.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.length > 44 ? title + "..." : title} <span className="badge rounded-pill bg-info text-dark">New</span></h5>
                        <p className="card-text">{description.length > 87 ? description + "..." : description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "someone"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}
