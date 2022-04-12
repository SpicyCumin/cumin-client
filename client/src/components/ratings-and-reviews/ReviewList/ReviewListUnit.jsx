import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { TiStar, TiStarOutline } from 'react-icons/ti';
import moment from 'moment';
import ReviewPicsUnit from './ReviewPicsUnit';
import {
  ButtonDefaultSM
} from '../../../theme/buttonStyle.js';

export default function ReivewListUnit({ review }) {
  const review2 = review || {
    summary: '',
    rating: '',
    body: '',
    date: '',
    reviewer_name: '',
    response: '',
    helpfulness: 0,
    recommend: true,
    photos: { url: '' },
  };

  const [singleReview, setSingleReview] = useState(review2);

  const handleHelpful = () => {
    setSingleReview({ ...review2, helpfulness: review2.helpfulness + 1 });
  };

  const handleReport = () => {
    setSingleReview({ ...review2, helpfulness: review2.helpfulness - 1 });
  };

  return (
    <div
      className="ratings-flexbox-container"
      style={{
        borderBottom: '1px solid black',
        paddingTop: '10px',
      }}
    >
      <div>
        <span className="ratings-starRatings">
          {singleReview.rating >= 1
            ? <span className="rating-star"><TiStar /></span> : <TiStarOutline />}
          {singleReview.rating >= 2
            ? <span className="rating-star"><TiStar /></span> : <TiStarOutline />}
          {singleReview.rating >= 3
            ? <span className="rating-star"><TiStar /></span> : <TiStarOutline />}
          {singleReview.rating >= 4
            ? <span className="rating-star"><TiStar /></span> : <TiStarOutline />}
          {singleReview.rating >= 5
            ? <span className="rating-star"><TiStar /></span> : <TiStarOutline />}
        </span>
        <div style={{
          float: 'right',
        }}
        >
          <span>
            {singleReview.reviewer_name}
            ,
          </span>
          {' '}
          <span>{moment(singleReview.date).format('MMMM Do YYYY')}</span>
        </div>

      </div>
      <div>
        <h4>
          {singleReview.summary}
        </h4>
      </div>
      <div>
        {singleReview.body}
      </div>
      <br />
      <div>
        {singleReview.photos.map((photo) => (
          <span key={photo.id}>
            <ReviewPicsUnit src={photo.url} />
          </span>
        ))}
      </div>
      <br />
      <div>{singleReview.response ? `Response: ${singleReview.response}` : null}</div>
      <div>
        {singleReview.recommend ? <AiOutlineCheck /> : null}
        {singleReview.recommend ? '| I recommend this product' : null}
      </div>
      <br />
      <div style={{ paddingBottom: '10px' }}>
        <ButtonDefaultSM
          className="helpful"
          onKeyPress={null}
          tabIndex={0}
          onClick={handleHelpful}
          style={{ cursor: 'pointer' }}
        >
          {`Yes (${singleReview.helpfulness})`}
        </ButtonDefaultSM>
        <ButtonDefaultSM
          className="helpful"
          onKeyPress={null}
          tabIndex={0}
          onClick={handleReport}
          style={{ cursor: 'pointer' }}
        >
          No
        </ButtonDefaultSM>
      </div>
    </div>
  );
}
