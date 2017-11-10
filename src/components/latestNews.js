import React from 'react';
import { Link } from 'react-router-dom';

const renderLatest = ({latest}) => {

    if (latest) {

      return latest.map((article) => {

        return (

          <Link to={`/news/${article.id}`} key={article.id} className="article">
            <div
              className="image_cover"
              style={{background: `url(/images/articles/${article.img})`}}
              >
              <div className="description">
                <span>{article.category}</span>
                <div>{article.title}</div>
              </div>
            </div>
          </Link>

        )

      })

    }

  }


const LatestNews = (props) => {

  return (

    <div className="home_latest">
      {renderLatest(props)}
    </div>

  )

}

export default LatestNews;
