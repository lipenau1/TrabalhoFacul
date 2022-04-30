import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Your tables bro</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='name-of-image'
              text='The name of cards'
              path='/'
            />
            <CardItem
              src='name-of-image'
              text='The name of cards'
              path='/'
            />
            <CardItem
              src='name-of-image'
              text='The name of cards'
              path='/'
            />
          </ul>
        </div>
                <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='name-of-image'
              text='The name of cards'
              path='/'
            />
            <CardItem
              src='name-of-image'
              text='The name of cards'
              path='/'
            />
            <CardItem
              src='name-of-image'
              text='The name of cards'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;