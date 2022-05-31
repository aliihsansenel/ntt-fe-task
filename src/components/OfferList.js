import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import OfferItem from './OfferItem';

function OfferList({ sort }) {

    let offerList = useSelector(state => { return state.offers.list; } )
    
    offerList = sort ? offerList.sort((a, b) => getOfferPrice(a) - getOfferPrice(b)) : offerList;
    return (
        <div className='Offer-List'>
            { offerList.length > 0 && offerList.map((offer, idx) => {
                    return <OfferItem key={idx} item={offer} />
                })
            }
        </div>

    )
}

export default OfferList

function getOfferPrice(offer) {
    const hasDiscount = offer.QuotaInfo.HasDiscount;
    const premiumWithDiscount = offer.QuotaInfo.PremiumWithDiscount;
    return hasDiscount ? premiumWithDiscount : offer.Cash;
}