import Image from 'next/image';

const GalleryImage = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="position-relative mb-3">
                    <Image className="img-fluid card-img-top shadow bg-white p-3 rounded-3 mb-3"
                        src={props.image} alt="..." />
                </div>
            </div>
        </>
    )
}

export default GalleryImage