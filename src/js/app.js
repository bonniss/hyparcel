import { h, app } from "hyperapp";
import ProductDetail from './components/product-detail';
import product from '../data/product.json';

const state = {
    product,
    currentVariant: {},
    activeImageSet: [],
    currentImage: {},
    relatedProducts: []
};

const InitApp = stt => {
    const {
        product,
        currentVariant,
        // activeImageSet,
        // currentImage,
        relatedProducts
    } = stt;

    const hasVariants = 'variants' in product;

    let activeImageSet = {};
    let currentImage = {};

    if (hasVariants) {
        const { variants } = product;
        if(variants.length) {
            activeImageSet = variants[0].image_sets;
        }
    } else {
        activeImageSet = product.main_image_set;
    }

    if('images' in activeImageSet) {
        currentImage = activeImageSet.images[0];
    }

    return {
        ...stt,
        activeImageSet,
        currentImage
    };
};

const actions = {};

const view = () => <h1 class="title"><ProductDetail state={state} /></h1>;

app({
    init: () => InitApp(state),
    view,
    node: document.querySelector("#catlin")
});
