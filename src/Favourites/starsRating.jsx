import React from 'react';
import { IonIcon } from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';
import styled from 'styled-components';



const StarIcon = styled(IonIcon)`
    height: 1rem;
    width: 1rem;
    display: flex;
    color: var(--star-color);
`
const StarIconAbs = styled(IonIcon)`
    height: 1rem;
    width: 1rem;
    display: flex;
    color: var(--star-color);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
`

const RatingStars = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 6rem;
    
`

const StarPair = styled.div`
    position: relative;
    display: inline-block;
    color: var(--star-color);
    width: 1rem;
    height: 1rem;
`

const FiveStarsRating = ({ value }) => {
  const intValue = Math.floor(value);
  const remStars = 5 - intValue;
  let fraction = value - intValue;

  const stars = [];

  for (let i = 0; i < intValue; i++) {
    stars.push(<StarIcon icon={star} key={i}/>);
  }

  for (let j = 0; j < remStars; j++) {
    const percentage = fraction * 100;
    const starFull = fraction !== 0 ? (
      <StarIcon key={j + intValue} icon={star} style={{ clipPath: `inset(0 ${100 - percentage}% 0 0)` }}/>
    ) : null;

    const starOut = <StarIconAbs key={j + intValue + remStars} icon={starOutline}/>;

    stars.push(
      <StarPair key={j + intValue + remStars} >
        {starFull}
        {starOut}
      </StarPair>
    );

    fraction = 0;
    
  }

  return <RatingStars>{stars} </RatingStars>;
};

export default FiveStarsRating;