import Image from "next/image";
import Link from "next/link";

export default function FeaturedImage({ post }) {
    let img = '';
    if(post.featuredImage) {
        let size = post.featuredImage.node.mediaDetails.sizes[3];
        img = {
            src: size.sourceUrl,
            width: size.width,
            height: size.height,
            alt: post.featuredImage.node.altText
        }
    }
    else {
        img = {
            src: 'https://www.budzoracing.com/x/wp-content/uploads/2019/09/083119_IMG0632-590x393.jpg',
            width: 590,
            height: 393,
            alt: 'Budzo Racing'
        }
    }

    return (
        <Link href="https://budzoracing.com">
            <Image src={img.src} width={img.width} height={img.height} alt={img.alt} />
        </Link>
    )
}