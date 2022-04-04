import React, { useState, useEffect } from 'react';
import Ratings from '../subcomponents/Ratings.jsx';
import ProductImg from '../subcomponents/ProductImg.jsx';
import ComparisonModal from '../subcomponents/ComparisonModal.jsx';
import ActionButton from '../subcomponents/ActionButton.jsx';

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { CardsContainer, CardsWrapper, ContentWrapper, Content, LeftChevron, RightChevron, CardContainer, CardAssetContainer, CardAssetImg } from '../../../theme/carouselStyle.js';

export default function RelatedCarousel ({ products, mainProduct, show }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);
  const [modal, setModal] = useState({
    display: false,
    clickedProduct: {}
  });

  const { display, clickedProduct } = modal;

  //set the length to match current children from props
  useEffect(() => {
    setLength(products.length)
  }, [products])

  const toggleModal = (product) => {
    setModal({
      display: !display,
      clickedProduct: product
    });
  }

  const next = () => {
    if (currentIndex < (length - (show - 1))) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  const Card = products.map((product) =>
    <CardContainer
      key={product.name}
      style={{width: `calc(100% / ${show})`}}
    >
      <CardAssetContainer>
        <div className='product-card__img' onClick={() => toggleModal(product)}>
          <ProductImg
            product={product}
            mainProduct={mainProduct}
          />
        </div>
        <ActionButton product={product}/>
      </CardAssetContainer>

      <div className='product-card__details'>
        <p className='product-card__category'>
          {product.category.toUpperCase()}
        </p>
        <p className='product-card__name'>
          {product.name}
        </p>
        <p className='product-card__price'>
          ${product.price.replace(/\.00$/,'')}
        </p>
        <p className='product-card__rating'>
          <Ratings />
        </p>
      </div>

    </CardContainer>
  );

  return (

    <CardsContainer>
      <CardsWrapper>
        {
          currentIndex > 0 &&
          <LeftChevron className='left-arrow' onClick={prev}>
            <FaChevronLeft />
          </LeftChevron>
        }
          <ContentWrapper>
            <Content style={{transform: `translateX(-${currentIndex * (100 / (show + 1))}%)`}}>
              {Card}
            </Content>
          </ContentWrapper>
        {
          currentIndex < (length - (show - 1)) &&
          <RightChevron className='right-arrow' onClick={next}>
            <FaChevronRight />
          </RightChevron>
        }
      </CardsWrapper>

      {display && (
        <ComparisonModal
          toggleModal={toggleModal}
          product={clickedProduct}
          mainProduct={mainProduct}
        />
      )}
    </CardsContainer>
  );
}