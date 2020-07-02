
const srcset = (img, alt) => {

     let stem = 'https://storynory.net/media';
     let webp = img.replace("jpg", "webp");


     return `<picture class="responsive">
                        <source type="image/webp"  
                        srcset=" 
                             ${stem}/800/${webp} 1024w,
                             ${stem}/640/${webp} 640w,
                             ${stem}/320/${webp} 320w"  />
                        <source  srcset=" 
                             ${stem}/800/${img}  1024w,
                             ${stem}/640/${img}  640w,
                             ${stem}/320/${img}  320w"  />       
                        <image src="/img/${img}" alt="${alt}" />
                </picture>`


}



module.exports = srcset