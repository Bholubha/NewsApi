import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="card" style={{width: "18rem" ,backgroundColor:"rgba(52,53,65,var(--tw-bg-opacity))"}}>

  <img src={imageUrl?imageUrl:"https://i.ytimg.com/vi/Kmy0i_8ls3w/maxresdefault.jpg"} className="card-img-top" alt="..."/>
  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style = {{zIndex : "1" ,left : "90%"}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
  <div className="card-body">
    <h5 className="card-title">{title?title.slice(0,30)+"...":""}</h5>
    <p className="card-text">{description?description.slice(0,40)+"...":""}</p>
    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"}  On {new Date(date).toUTCString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Read More </a>
  </div>
</div>

    )
  }
}

export default NewsItem