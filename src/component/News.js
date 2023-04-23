import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general'

    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }
    state = {
        articles: [],
        loading: true,
        page: 1,
        nextDisabled: false,
        totalResults: 0,
        Total : 0
    }
    // constructor() {
    //     super();
    //     // this.state = {
    //     //     articles: [],
    //     //     loading: true,
    //     //     page: 1,
    //     //     nextDisabled: false,
    //     //     totalResults: 0,
    //     //     Total : 0
    //     // }

    // }


    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72a150afaa704124a47db3010e5bec4f&page=${this.state.page}&pageSize=12`;

        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false,Total : parsedData.articles.length  });
        this.props.setProgress(100);
    }
    nextHandler = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=72a150afaa704124a47db3010e5bec4f&page=${this.state.page + 1}&pageSize=12`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        });
        //console.log(this.state.totalResults)

        if (this.state.page + 1 === Math.ceil(this.state.totalResults / 10)) {
            this.setState({
                nextDisabled: true
            })
        }

    }
    previousHandler = async () => {
        this.setState({
            nextDisabled: false
        })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=72a150afaa704124a47db3010e5bec4f&page=${this.state.page - 1}&pageSize=12`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        });
    }


    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72a150afaa704124a47db3010e5bec4f&page=${this.state.page}&pageSize=12`;

        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), Total : this.state.Total + parsedData.articles.length,  loading: false });
        console.log(this.state.totalResults);
        console.log(this.state.Total)
    }

    render() {

        return (
            <div style={{backgroundColor:"rgba(52,53,65,var(--tw-bg-opacity))"}}>
              





               <>
                    <InfiniteScroll
                        dataLength={this.state.articles.length} //This is important field to render the next data
                        next={this.fetchMoreData}
                        hasMore={ !(this.state.page + 1 === Math.ceil(this.state.totalResults / 12)) }
                             
                        loader={<div className = "text-center"><Spinner /></div>

                            }
                        endMessage={
                            <p style={{ textAlign: 'center' , margin : '4px' ,fontSize : '50px' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }


                    >

                 
       <div className="container">
                    <div className="row my-4">
                        <div className="text-center m-5" > <h2>Welcomd ! to My News Company</h2></div>

                        {this.state.articles.map((element) => {

                            return <div className="col-sm" key={element.url}> <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} /></div>

                        })}

                        {/* <div className="container d-flex justify-content-between my-5">
                            <button type="button" disabled={this.state.page === 1} onClick={this.previousHandler} className="btn btn-primary">&#8592; Previous</button>
                            <button type="button" disabled={this.state.nextDisabled} onClick={this.nextHandler} className="btn btn-primary">Next &#8594;</button>
                        </div> */}
                    </div>
                    </div>
                    </InfiniteScroll>
            </>
                
            </div>
        )
    }
}

export default News