import GalleryImage from './galleryImage'
import fou from '../../public/galleryImages/14.jpeg'
import fiv from '../../public/galleryImages/15.jpeg'
import sixt from '../../public/galleryImages/16.jpeg'
import sev from '../../public/galleryImages/17.jpeg'
import eig from '../../public/galleryImages/18.jpeg'
import nin from '../../public/galleryImages/19.jpeg'
import twt from '../../public/galleryImages/20.jpeg'
import twto from '../../public/galleryImages/21.jpeg'
import twtt from '../../public/galleryImages/22.jpeg'


const Gallery2 = () => {
    return (
        <>
            <GalleryImage image={fou} />
            <GalleryImage image={fiv} />
            <GalleryImage image={sixt} />
            <GalleryImage image={sev} />
            <GalleryImage image={eig} />
            <GalleryImage image={nin} />
            <GalleryImage image={twt} />
            <GalleryImage image={twto} />
            <GalleryImage image={twtt} />
        </>
    )
}

export default Gallery2