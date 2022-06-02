import React from 'react';

const FAQ = () => {
    return (
        <div>
            {/* <!-- Container for demo purpose --> */}
            <div class="container my-24 px-6 mx-auto">

                {/* <!-- Section: Design Block --> */}
                <section class="mb-32 text-gray-800">
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="mb-6 md:mb-0">
                            <h2 class="text-3xl font-bold mb-6">Frequently asked questions</h2>

                            <p class="text-gray-500">
                                Didn't find your answer in the FAQ?
                                <a href="#!"
                                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300">Contact
                                    our sales team</a>.
                            </p>
                        </div>

                        <div class="mb-6 md:mb-0">
                            <p class="font-bold mb-4">Anim pariatur cliche reprehenderit?</p>
                            <p class="text-gray-500 mb-12">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem numquam dolore
                                molestias aperiam culpa alias veritatis architecto eos, molestiae vitae ex eligendi
                                libero eveniet dolorem, doloremque rem aliquid perferendis.
                            </p>

                            <p class="font-bold mb-4">Non cupidatat skateboard dolor brunch?</p>
                            <p class="text-gray-500 mb-12">
                                Distinctio corporis, iure facere ducimus quos consectetur ipsa ut magnam autem
                                doloremque ex! Id, sequi. Voluptatum magnam sed fugit iusto minus et suscipit? Minima
                                sunt at nulla tenetur, numquam unde quod modi magnam ab deserunt ipsam sint aliquid
                                dolores libero repellendus cupiditate mollitia quidem dolorem odit
                            </p>

                            <p class="font-bold mb-4">
                                Praesentium voluptatibus temporibus consequatur non aspernatur?
                            </p>
                            <p class="text-gray-500 mb-12">
                                Minima sunt at nulla tenetur, numquam unde quod modi magnam ab deserunt ipsam sint
                                aliquid dolores libero repellendus cupiditate mollitia quidem dolorem.
                            </p>
                        </div>
                    </div>
                </section>
                {/* <!-- Section: Design Block --> */}

            </div>
            {/* <!-- Container for demo purpose --> */}
        </div>
    );
};

export default FAQ;