import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectedGallery, clearSelectedGallery } from '../actions';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';

//counter
import Counter from './LikesCounter';

const settings = {

  dots: true,
  infinite: true,
  arrows: false,
  speed: 500

}

 class GalleryItem extends Component {

  componentDidMount() {
    this.props.selectedGallery(this.props.match.params.id);
  }

  componentWillUnmountMount() {
    this.props.clearSelectedGallery();
  }

  renderSlider = ({selected}) => {

    if (selected) {
      // no need to map here for artist name, so instead directly access array and template into returned JSX
      const gallery  = selected[0];

      return (

        <div>
          <h3>The best of {gallery.artist}</h3>
          <Slider {...settings}>
            {gallery.images.map((item, index) =>{  {/*adding index so can create a key value*/}

              return (

                <div key={index} className="slider_item">
                  <div>
                    <div
                      className="image"
                      style={{background: `url(/images/galleries/${item.img})`}}
                      ></div>
                      <div className="description">
                        <span>{item.desc}</span>
                      </div>
                  </div>
                </div>

              )

            }) }
          </Slider>
          <Counter
            articleId={gallery.id}
            type="HANDLE_LIKES_GALLERY" // set here so can be dynamically implemented with reducers
            section="galleries" // this being used so Counter component can by dynamic within action creator (handleLikes in index.js of actions)
            likes={gallery.likes[0]}      // 3 props to pass to LikesCounter.js
            dislikes={gallery.likes[1]}
          />
        </div>

      )


    }

  }



  render() {

    const item = this.props.gallery;

    return (

      <div className="slider_item_wrap">
        {this.renderSlider(item)}
      </div>

    );

  }

}

function mapStateToProps(state) {
  console.log(state);

  return {

    gallery: state.gallery

  }

}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({selectedGallery, clearSelectedGallery}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);
