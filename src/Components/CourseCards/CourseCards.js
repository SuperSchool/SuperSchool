import React from 'react';
import './../tailwind.min.css';
import './../Home.css';

class Course extends React.Component {

    render() {
        return [

            <div class="text-gray-800 body-font">
                <div class="container px-5 pt-20 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font mb-4 text-gray-200 tracking-widest">Topics fom how to draw doodles to <br />
                        virtual tour to wonder of world and many more</h1>
                        <p class="lg:w-2/3 mx-auto text-gray-500 text-xs leading-relaxed text-base">Free access to as many topics as your kids wish for first 2 months!</p>
                    </div></div>

                <div class="text-gray-700 body-font">
                    <div class="container px-5 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div class="course-cards-1 bg-gray-200 mb-3 px-5 py-3 rounded-lg overflow-hidden text-center relative flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">

                                    <div class="h-full text-center">

                                        <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.giphy.com/media/l0HlwKpPGceLgQC9W/giphy.gif" />
                                        <div><label class="tag bg-purple-300">Coming Soon!</label></div>

                                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-lg">LET'S DRAW DOODLES</h2>
                                        <label class="bg-orange-800 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Art
</label>
                                        <label class="bg-orange-800 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Age 3-9
</label>
                                        <p class="leading-relaxed pt-2">Step by step drawing classes✏️</p> <br />
                                        {/* <div class="tag bg-indigo-300 w-1/3">ART</div>             <div class="tag bg-indigo-300 w-1/3">ART</div>                     */}
                                    </div></div>
                            </div>
                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div class="course-cards-2 bg-gray-200 mb-3 px-5 py-3 rounded-lg overflow-hidden text-center relative flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">

                                    <div class="h-full text-center">
                                        <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.giphy.com/media/Vt4wDrLAnH1tu/giphy.gif" />

                                        <div><label class="tag bg-purple-300">Coming Soon!</label></div>

                                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-lg">DRAW SEA ANIMALS</h2>
                                        <label class="bg-green-900 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Art
</label>
                                        <label class="bg-green-900 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Age 3-9
</label>
                                        <p class="leading-relaxed pt-2">Draw Orcas & Pufferfish easily🐬</p> <br />


                                    </div></div>
                            </div>
                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div class="course-cards-3 bg-gray-200 mb-3 px-5 py-3 rounded-lg overflow-hidden text-center relative flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">

                                    <div class="h-full text-center">
                                        <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.giphy.com/media/IedrY2VP5IO5ivDQAD/giphy.gif" />
                                        <div><label class="tag bg-purple-300">Coming Soon!</label></div>

                                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-lg">HUMANS IN SPACE</h2>
                                        <label class="bg-blue-800 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Science
</label>
                                        <label class="bg-blue-800 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Age 3-9
</label>
                                        <p class="leading-relaxed">Know more about the life of an astronaut👨🏽‍💼🚀</p>

                                    </div></div>
                            </div>

                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div class="course-cards-4 bg-gray-200 mb-3 px-5 py-3 rounded-lg overflow-hidden text-center relative flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">

                                    <div class="h-full text-center">
                                        <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.giphy.com/media/nfnF2zVPRemXu/giphy.gif" />
                                        <div><label class="tag bg-purple-300">Coming Soon!</label></div>

                                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-lg">ENGINEER TRAINING</h2>
                                        <label class="bg-pink-800 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Science
</label>
                                        <label class="bg-pink-800 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Age 3-9
</label>
                                        <p class="leading-relaxed">Where does the drinking water come from?🔍</p>

                                    </div></div>
                            </div>

                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div class="course-cards-5 bg-gray-200 mb-3 px-5 py-3 rounded-lg overflow-hidden text-center relative flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">

                                    <div class="h-full text-center">
                                        <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.giphy.com/media/L3VvDvnVQ94wTjTPBa/giphy.gif" />
                                        <div><label class="tag bg-purple-300">Coming Soon!</label></div>
                                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-sm">KNOW ABOUT CARTOONS</h2>
                                        <label class="bg-pink-900 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Science
</label>
                                        <label class="bg-pink-900 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Age 3-9
</label>
                                        <p class="leading-relaxed">Know how cartoons like Tom & Jerry are made🤔</p>


                                    </div></div>
                            </div>

                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div class="course-cards-6 bg-gray-200 mb-3 px-5 py-3 rounded-lg overflow-hidden text-center relative flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">

                                    <div class="h-full text-center">
                                        <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.giphy.com/media/10BSluWuIwPEkw/giphy.gif" />
                                        <div><label class="tag bg-purple-300">Coming Soon!</label></div>
                                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-sm">WONDERS OF THE WORLD</h2>
                                        <label class="bg-green-900 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Art
</label>
                                        <label class="bg-green-900 text-white font-bold mx-1 px-2 my-2 rounded">
                                            Age 3-9
</label>
                                        <p class="leading-relaxed">Virtual tour to the 7<br />wonders of the world🗼</p>

                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        ];
    }
}
export default Course;