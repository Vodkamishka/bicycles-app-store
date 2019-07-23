import React from 'react';
import DetailsMenu from './details-menu';
import DetailsSlider from './details-slider';

export default function DetailsLeft({gallery, allBicycles, newBicycleDetails, lengthAllBicycles, changeDetailsTrue, showDetailsFalse, changeBicycleDetails}) {
  
  return (
    <div className="col-9 col-md-6 col-lg-4 ">
      <DetailsMenu gallery = {gallery} showDetailsFalse = {showDetailsFalse} />
      <DetailsSlider 
      allBicycles={allBicycles}
      lengthAllBicycles = {lengthAllBicycles}
      newBicycleDetails={newBicycleDetails}
      changeDetailsTrue = {changeDetailsTrue}
      changeBicycleDetails = {changeBicycleDetails}
      />
    </div>
  )
}
