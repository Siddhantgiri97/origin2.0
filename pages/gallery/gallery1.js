import GalleryImage from './galleryImage'
import seven from '../../public/galleryImages/7.jpeg'
import eight from '../../public/galleryImages/8.jpeg'
import nine from '../../public/galleryImages/9.jpeg'
import ten from '../../public/galleryImages/10.jpeg'
import ele from '../../public/galleryImages/11.jpeg'
import twe from '../../public/galleryImages/12.jpeg'
import thi from '../../public/galleryImages/13.jpeg'



const Gallery1 = () => {
    return (
        <>
            <GalleryImage image={seven} />
            <GalleryImage image={eight} />
            <GalleryImage image={nine} />
            <GalleryImage image={ten} />
            <GalleryImage image={ele} />
            <GalleryImage image={twe} />
            <GalleryImage image={thi} />

        </>
    )
}

export default Gallery1