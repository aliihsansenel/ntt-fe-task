import React from 'react';

import "./style.scss";

function OfferItem({ item }) {

    const hasDiscount = item.QuotaInfo.HasDiscount;
    const premiumWithDiscount = item.QuotaInfo.PremiumWithDiscount;
    const premium = hasDiscount ? premiumWithDiscount : item.Cash;

    return (
        <div className='Offer-Item'>
            <div className='logo-cont'>
                <img className='firm-logo' align="left" src={item.ImagePath} />
            </div>
            <div className='seperator'><div>&nbsp;</div></div>
            <div style={{ textAlign: 'start', fontSize: '0.875em' }}>
                <span><b>{item.ProductDesc}</b></span> <br />
                <span>{item.FirmName}</span> <br />
            </div>
            <div className='flex-break' />
            <div>
                <div className='price-cont'>
                    { hasDiscount && (
                    <div>
                        <span className='original-price'>
                            Peşin <span>{ tls(item.Cash) } TL</span>
                        </span>
                        <br />
                    </div> ) }
                    <span className='price'>{ tls(premium) } TL</span>
                </div>
                <PurchaseButton isOnSale={!item.SaleClosed}/>
            </div>

        </div>
    )
}

export default OfferItem

// 1234.5 --> 1.234,50
function tls(number) {
    return number.toLocaleString('tr-TR', { minimumFractionDigits: 2 });
}

function PurchaseButton({ isOnSale }) {
    if ( isOnSale )
        return ( <input type="button" className='purchase-online' value='SATIN AL'/> )
    else    
        return ( <input type="button" className='purchase-phonecall' value='TELEFONDA SATIN AL'/> )
    
}