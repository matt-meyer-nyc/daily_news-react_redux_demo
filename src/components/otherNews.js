import React from 'react'
import { Link } from 'react-router-dom';


const renderOther = ({otherNews}) => { //REMINDER: this comes from props in Home.js

    if (otherNews) {

      return otherNews.map((item) => {

        return (

          <Link to={`/news/${item.id}`} key={item.id} className="item">
            <div
              className="left"
              style={{background: `url(/images/articles/${item.img})`}}
              ></div>
            <div className="right">
              <h3>{item.title}</h3>
              <div className="category_tag">{item.category}</div>
              <div className="tags">
                <span>
                  <i className="fa fa-eye"></i>
                  {item.views}
                </span>
                <span>
                  <i className="fa fa-thumbs-up"></i>
                  {item.likes[0]}
                </span>
              </div>
            </div>
          </Link>

        )

      });

    }


}

const OtherNews = (props) => {
  console.log(props);
  return (
    <div className="other_news">
      <h2>Other News</h2>
      <div className="other_news_items">
        {renderOther(props)}
      </div>
    </div>

  )

}



export default OtherNews;
