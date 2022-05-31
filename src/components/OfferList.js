import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadOffers } from 'redux/actions/offerActions';
import OfferItem from './OfferItem';

function OfferList() {

    const dispatch = useDispatch()

    const { fetchState, offerList } = useSelector(state => {
        const offers = state.offers;
        return {
            fetchState: offers.fetchState,
            offerList: offers.list
        }
    } )
    
    useEffect(() => {
        dispatch(loadOffers('case2'));
    }, [])
    
    return (
        <div className='Offer-List'>
            { fetchState === 'loading' && <div className='spinner' style={{ marginTop: '5rem' }} /> }
            { fetchState === 'success' && offerList.map((offer, idx) => {
                    return <OfferItem key={idx} item={offer} />
                })
            }
        </div>

    )
}

export default OfferList