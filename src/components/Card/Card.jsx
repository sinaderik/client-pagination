import React from 'react'

export default function Card({ imageUrl, name, skills, mobile, email }) {
    return (
        <div className='card text-center border-0 shadow-lg'>
            <div className='card-body'>
                <img
                    className='d-inline-block rounded-circle mb-3'
                    width="96"
                    src={imageUrl}
                    alt="programmer-image"
                />
                <h6>{name}</h6>
                <p className='fs-sm text-muted'>{skills}</p>
                <p className='fs-sm fw-bold mt-4 mb-0'>{mobile}</p>
                <p className='fs-sm fw-bold'>{email}</p>
            </div>
        </div>
    )
}
