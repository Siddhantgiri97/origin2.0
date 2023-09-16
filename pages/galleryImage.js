import React from 'react'


const GalleryImage = ({ images }) => {
    return (
        <>
            <div className="row gx-2 d-flex justify-content-center">
                {images.map((filename, index) =>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="position-relative mb-3">
                            <img className="img-fluid card-img-top shadow bg-white p-3 rounded-3 mb-3" key={index}
                                src={`/galleryImages/${filename}`} alt="..." loading='lazy' />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default GalleryImage