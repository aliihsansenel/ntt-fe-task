import React, { useEffect } from 'react';

import OfferList from 'components/OfferList';
import { useDispatch, useSelector } from 'react-redux';
import { getOfferCount, loadOffers  } from 'redux/actions/offerActions';

import './style.scss';

function Case3() {

    const dispatch = useDispatch()

    const { offerCount, fetchState } = useSelector(state => {
        const offers = state.offers;
        return {
            offerCount: offers.count,
            fetchState: offers.fetchState
        }
    } )
    const offerList = useSelector(state => state.offers.list );

    useEffect(() => {
        if (fetchState === 'loading')
            return;
        if (offerCount === -1)
            dispatch(getOfferCount());
        else if (offerCount !== offerList.length )
            dispatch(loadOffers('case3'));
    }, [offerCount, offerList])

    return (
        
        <div className='Case'>
            <h3 style={{ textAlign: 'center' }}>CASE 3</h3>
            { offerCount !== -1 && 
                <div className='info'>We will provide {offerCount} insurance offers for you.</div>
            }
            <OfferList sort/>
            { offerCount !== -1 && fetchState === 'loading' && 
                <div className='spinner' style={{ marginTop: '3rem' }} />
            }
        </div>
    )
}

export default Case3