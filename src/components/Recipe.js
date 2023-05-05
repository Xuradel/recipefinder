import React from 'react'

const Recipe = ({title,calories,image,i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15}) => {
    return (
        <div className='item-container'>
            <h1>{title}</h1>
            <img src={image} alt='test' className='item-image'></img>
            <h2>Kcal: {calories.toFixed(2)}</h2>
            <h3>Ingredients:</h3>
            {i1? <p>• {i1}</p>:null}
            {i2? <p>• {i2}</p>:null}
            {i3? <p>• {i3}</p>:null}
            {i4? <p>• {i4}</p>:null}
            {i5? <p>• {i5}</p>:null}
            {i6? <p>• {i6}</p>:null}
            {i7? <p>• {i7}</p>:null}
            {i8? <p>• {i8}</p>:null}
            {i9? <p>• {i9}</p>:null}
            {i10? <p>• {i10}</p>:null}
            {i11? <p>• {i11}</p>:null}
            {i12? <p>• {i12}</p>:null}
            {i13? <p>• {i13}</p>:null}
            {i14? <p>• {i14}</p>:null}
            {i15? <p>• {i15}</p>:null}
        </div>
    )
}

export default Recipe
