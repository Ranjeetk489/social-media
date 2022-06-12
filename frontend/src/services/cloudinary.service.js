import { Cloudinary } from '@cloudinary/url-gen';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';


const imageModification = (image) => {
    const cloudinary = new Cloudinary({
        cloud: {
            cloudName: process.env.REACT_APP_CLOUD_NAME,
        }
    });
    image = cloudinary.image(image);
    image
        .resize(thumbnail(150, 150).gravity(focusOn(FocusOn.face())))
        .roundCorners(byRadius(20))
        .format('png')
    return image;
}

const uploadToCloudinary = async (formData) => {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`
        , {
            method: 'POST',
            body: formData
        }).then((response) => response.json());
    return response;
}


export { imageModification, uploadToCloudinary };   