import { h } from "hyperapp";

const ProductDetail = ({ state }) => {
    const {
        product: item,
        currentVariant,
        activeImageSet,
        currentImage,
        relatedProducts,
    } = state;

    return (
        <div className="dt-product-detail-wrapper container mx-auto mt-12">
            <div className="dt-product-detail px-8">
                <div className="flex -mx-4">
                    <div className="w-3/5 px-4">
                        {/* <img src={} alt=""/> */}
                    </div>
                    <div className="w-2/5 px-4">
                        <h1 class="text-3xl font-semibold text-gray-800">
                            {item.name}
                        </h1>
                        <h2 class="text-xl mb-4 font-semibold text-gray-600">
                            {item.user_defined_id}
                        </h2>

                        <p class="border-b border-gray-300 py-2 mb-2">
                            <span class="uppercase font-semibold">bề mặt</span>
                            <span class="float-right font-semibold text-gray-700">
                                Bóng, In nổi
                            </span>
                        </p>
                        <p class="border-b border-gray-300 py-2 mb-2">
                            <span class="uppercase font-semibold">
                                nhãn hiệu
                            </span>
                            <span class="float-right font-semibold text-gray-700">
                                Premier
                            </span>
                        </p>
                        <p class="border-b border-gray-300 py-2 mb-2">
                            <span class="uppercase font-semibold">
                                nhà sản xuất
                            </span>
                            <span class="float-right font-semibold text-gray-700">
                                Premie Phổ Yên
                            </span>
                        </p>
                        <p class="border-b border-gray-300 py-2 mb-2">
                            <span class="uppercase font-semibold">
                                Kích thước
                            </span>
                            <span class="float-right font-semibold text-gray-700">
                                600x600 mm
                            </span>
                        </p>
                        <p>{item.description_short}</p>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
