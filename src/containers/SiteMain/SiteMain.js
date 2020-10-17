import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SiteMain extends Component {
    state = {
        width: 0,
        show: false
    }
    
    openNavHandler = () => {
        this.setState({show: !this.state.show})
    }

    render() {
// do you have a dream , enter your dream
        let navClass = ["bg-gray-900 w-full text-white px-2 absolute hidden"]
        if (this.state.show) {
            navClass = ["bg-gray-900 w-full text-white px-2 absolute "]
        }
        return (
            <main className="font-defualt">
                <header className="container mx-auto px-2 py-1 text-base relative flex flex-row  items-center flex-shrink justify-between">
                    <div className="bg-red-800 w-10 h-12 mr-4 flex justify-center items-center text-2xl text-white">
                        A
                    </div>
                    <input className="hidden sm:block border border-gray-300 rounded-full flex-grow px-4 py-1 bg-gray-100 outline-none"
                    placeholder="Have a topic in mind ? "/>
                    <nav className="ml-4 hidden sm:block">
                        <ul className="flex justify-end flex-row">
                            <li className="px-3 py-2 cursor-pointer hover:text-primary ">Topics 
                          </li>
                            <li className="px-3 py-2 cursor-pointer  hover:text-primary">Course</li>
                            <li className="px-3 py-2 cursor-pointer  hover:text-primary">Instructors</li>
                            <li className="px-3 py-2 cursor-pointer bg-primary text-white hover:bg-secondary">Contact</li>
                        </ul>
                    </nav>
                    <div onClick={this.openNavHandler} className="sm:hidden ">
                        <FontAwesomeIcon 
                            icon={['fas', 'bars']} 
                            className="text-xl"/>
                    </div>
                </header>
                <div className="w-full bg-gray-300 border-t-1 relative">
                    <div className="w-full bg-gray-900 bgurl relative">
                        <ul className={navClass.join("")}>
                            <li className="py-2 cursor-pointer hover:text-gray-200">Topics</li>
                            <li className="py-2 cursor-pointer hover:text-gray-200">Course</li>
                            <li className="py-2 cursor-pointer hover:text-gray-200">Search</li>
                            <li className="py-2 cursor-pointer hover:text-gray-200">Instructors</li>
                            <li className="py-2 cursor-pointer hover:text-gray-200">Contact</li>
                        </ul>
                        <div className="bg-gray-900 bg-opacity-25">
                            <div className="container mx-auto z-1 ">
                                <div className="text-center pt-8 w-full pb-8 sm:pb-0 px-2">
                                    <h1 className="text-base text-white">How big is your dream</h1>
                                    <p className="text-2xl py-4 font-bold textshadow">We take you step by step to achieve it</p>
                                    <h2 className="text-base text-white">Afrilean have everything you need to accomplish it, for free</h2>
                                    <button className="mx-auto mt-6 rounded-full outline-none bg-primary py-2 w-40 text-white flex flex-row  cursor-pointer justify-center items-center hover:bg-secondary">
                                        Get Started
                                        <FontAwesomeIcon 
                                            icon={['fas', 'arrow-right']} 
                                            className="ml-5"/>
                                    </button>
                                </div>
                                <div className="hidden sm:flex w-full bg-white border border-gray-400 outline-none flex-row justify-center items-center bottom-0 relative py-4 px-4 top-middle z-10">
                                    <div className="relative mr-4 ">
                                        <input type="text" placeholder="Email Address" className="w-40 lg:w-auto outline-none border-gray-400 border focus:border-primary  py-2 pl-4 pr-8 rounded-sm"/>
                                        <div className="form-icn">
                                            <FontAwesomeIcon
                                                icon={['fas', 'envelope']} 
                                                className="opacity-25"/>
                                        </div>
                                    </div>
                                    <div className="relative mr-4">
                                        <input type="text" placeholder="Password" className="w-40  lg:w-auto outline-none border-gray-400 border focus:border-primary  py-2 pl-4 pr-8  rounded-sm"/>
                                        <div className="form-icn">
                                            <FontAwesomeIcon
                                                icon={['fas', 'lock']} 
                                                className="opacity-25"/>
                                        </div>
                                    </div>
                                    <button className="rounded-2 bg-primary py-2 w-24 outline-none shadow-lg text-white flex flex-row justify-center items-center hover:bg-secondary cursor-pointer">Login</button>
                                    <div className="relative flex justify-center">
                                        <div className="line bg-gray-500"></div>
                                        <div className="border-2 border-white ml-8 w-8 h-8 transform relative text-sm flex justify-center items-center bg-gray-300 rotate-45">
                                            <span className="transform relative block rotate-anti-45 text-gray-600">OR</span>
                                        </div>
                                    </div>
                                    <button className="rounded-2 bg-blue-700 py-2 px-4 ml-8 outline-none shadow-lg text-white flex flex-row justify-center items-center hover:bg-blue-900 cursor-pointer">
                                        <span >
                                            <FontAwesomeIcon 
                                            icon={['fab', 'facebook-f']}
                                            className="text-white"/>
                                        </span>
                                        <span className="ml-2 hidden lg:block">Login with facebook</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="mt-8 sm:mt-16">
                    <div className="container px-2 mx-auto">
                        <h1 className="text-xl font-bold text-center mb-0">Choose a Learning Path</h1>
                        <h2 className="text-sm text-center mb-4">We take you along, step by step </h2>
                        <div className="w-full flex flex-row">
                            <div className="w-1/3 flex items-center flex-col pr-2">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                                    <FontAwesomeIcon
                                        icon={['fas', 'fire']} 
                                        className="text-3xl opacity-25"/>
                                </div>
                                <p className="font-medium">Trending</p>
                                <div className="w-full border border-primary mt-4"></div>
                            </div>
                            <div className="w-1/3 flex items-center flex-col px-2">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                                    <FontAwesomeIcon
                                        icon={['fas', 'fingerprint']} 
                                        className="text-3xl opacity-25"/>
                                </div>
                                <p className="font-medium">Mordern</p>
                                <div className="w-full border border-gray-200 mt-4"></div>
                            </div>
                            <div className="w-1/3 flex items-center flex-col pl-2">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                                    <FontAwesomeIcon
                                        icon={['fas', 'layer-group']} 
                                        className="text-3xl opacity-25"/>
                                </div>
                                <p className="font-medium">Latest</p>
                                <div className="w-full border border-gray-200 mt-4"></div>
                            </div>
                        </div>
                        <div className="w-full">
                            <ul className="flex flex-row pt-2 w-full">
                                <li className="bg-primary  py-1 px-4 text-white mt-0">Materials</li>
                                <li className="bg-gray-200  py-1 px-4 ml-2">Instructor</li>
                                <li className="bg-gray-200  py-1 px-4 ml-2">Quiz</li>
                            </ul>
                            <div className="w-full flex flex-col lg:flex-row mt-8 gap-2">
                                <div className="w-full lg:w-1/3 flex items-center flex-col lg:pr-4 mb-8">
                                   <div className="shadow-2xl rounded-md">
                                        <img src="https://th.bing.com/th/id/OIP.7Ynz1fXK7VGK9ARZoce3JAHaE8?pid=Api&rs=1" alt="" className="w-full h-40 bg-gray-500 rounded-t-md object-cover"/>
                                        <p className="px-2 text-base">How to program for beginner/intermediate learner
                                        in this tutorial we teach you the basics, core, fundamental</p>
                                        <ul className="flex flex-row px-2 mt-2 text-gray-600">
                                            <li className="text-sm">view: 24k</li>
                                            <li className="ml-2 text-sm">
                                                <FontAwesomeIcon 
                                                    icon={['fas', 'clock']} 
                                                    className="mr-1"/> 1/2Hrs
                                            </li>
                                            <li className="ml-2 text-sm">
                                            <FontAwesomeIcon 
                                                    icon={['fas', 'calendar']} 
                                                    className="mr-1"/>10/16/2020</li>
                                        </ul>
                                        <div className="px-2 pb-4 flex-1">
                                            <button className="relative px-4 mt-2 rounded-full outline-none bg-primary py-1 text-white flex flex-row  cursor-pointer justify-center items-center hover:bg-secondary shadow-lg">
                                                Learn More
                                                <FontAwesomeIcon 
                                                    icon={['fas', 'arrow-right']} 
                                                    className="ml-4"/>
                                            </button>
                                        </div>
                                   </div>
                                </div>
                                <div className="w-full lg:w-1/3 flex items-center flex-col lg:px-4 mb-8">
                                   <div className="shadow-2xl rounded-md">
                                        <img src="https://th.bing.com/th/id/OIP.7Ynz1fXK7VGK9ARZoce3JAHaE8?pid=Api&rs=1" alt="" className="w-full h-40 bg-gray-500 rounded-t-md object-cover"/>
                                        <p className="px-2">How to program for beginner/intermediate learner
                                        in this tutorial we teach you the basics, core, fundamental</p>
                                        <ul className="flex flex-row px-2 mt-2 text-gray-600">
                                            <li className="text-sm">view: 24k</li>
                                            <li className="ml-2 text-sm">
                                                <FontAwesomeIcon 
                                                    icon={['fas', 'clock']} 
                                                    className="mr-2"/> 1/2Hrs
                                            </li>
                                            <li className="ml-2 text-sm">
                                            <FontAwesomeIcon 
                                                    icon={['fas', 'calendar']} 
                                                    className="mr-2"/>10/16/2020</li>
                                        </ul>
                                        <div className="px-2 pb-4">
                                            <button className="relative px-4 mt-2 rounded-full outline-none bg-primary py-1 text-white flex flex-row  cursor-pointer justify-center items-center hover:bg-secondary shadow-lg">
                                                Learn More
                                                <FontAwesomeIcon 
                                                    icon={['fas', 'arrow-right']} 
                                                    className="ml-4"/>
                                            </button>
                                        </div>
                                   </div>
                                </div>
                                <div className="w-full lg:w-1/3 flex items-center flex-col lg:pl-4 mb-8">
                                   <div className="shadow-2xl rounded-md">
                                        <img src="https://th.bing.com/th/id/OIP.7Ynz1fXK7VGK9ARZoce3JAHaE8?pid=Api&rs=1" alt="" className="w-full h-40 bg-gray-500 rounded-t-md object-cover"/>
                                        <p className="px-2">How to program for beginner/intermediate learner
                                        in this tutorial we teach you the basics, core, fundamental</p>
                                        <ul className="flex flex-row px-2 mt-2 text-gray-600">
                                            <li className="text-sm">view: 24k</li>
                                            <li className="ml-2 text-sm">
                                                <FontAwesomeIcon 
                                                    icon={['fas', 'clock']} 
                                                    className="mr-1"/> 1/2Hrs
                                            </li>
                                            <li className="ml-2 text-sm">
                                            <FontAwesomeIcon 
                                                    icon={['fas', 'calendar']} 
                                                    className="mr-1"/>10/16/2020</li>
                                        </ul>
                                        <div className="px-2 pb-4">
                                            <button className="relative px-4 mt-2 rounded-full outline-none bg-primary py-1 text-white flex flex-row  cursor-pointer justify-center items-center hover:bg-secondary shadow-lg">
                                                Learn More
                                                <FontAwesomeIcon 
                                                    icon={['fas', 'arrow-right']} 
                                                    className="ml-4"/>
                                            </button>
                                        </div>
                                   </div>
                                </div>
                            </div>
                            <ul className="w-full justify-center items-center flex-row flex">
                                <li className="w-8 h-8 text-primary bg-white border border-primary rounded-full flex justify-center items-center cursor-pointer">1</li>
                                <li className="w-8 h-8 bg-white border border-gray-400 ml-4 rounded-full flex justify-center items-center hover:border-primary hover:text-primary cursor-pointer">2</li>
                                <li className="w-8 h-8 bg-white border border-gray-400 ml-4 rounded-full flex justify-center items-center  hover:border-primary hover:text-primary cursor-pointer">3</li>
                            </ul> 
                        </div>
                    </div>
                </section>
                <section className="mt-8 sm:mt-16 bg-gray-900">
                    <div className="container px-2 mx-auto bg-gray-900">
                        <h1 className="text-xl font-bold text-center pt-8 text-white">Target Audience</h1>
                        <h2 className="text-sm text-center pb-4 text-white">Anyone who want to learn, For Enquiry contact us </h2>
                        <div className="w-full flex flex-col sm:flex-row relative">
                            <input type="text" placeholder="Email Address" className="outline-none flex flex-1 py-2 px-4 rounded-full mb-4 sm:mb-0"/>
                            <input type="text" placeholder="Your Name" className="sm:ml-4 outline-none flex flex-1 py-2 px-4 rounded-full"/>
                            <div className="bg-gray-800 px-4 py-2 sm:ml-4 w-4 rounded-full flex justify-center items-center mt-4 sm:mt-0">
                                <FontAwesomeIcon 
                                    icon={['fas', 'arrow-right']} 
                                    className="text-white"/>
                            </div>
                        </div>
                        <p className="text-white pt-4">Connect with us on our social media platforms</p>
                        <ul className="flex flex-row pb-8">
                            <li className="w-8 h-8 rounded-full bg-blue-700  hover:bg-blue-900 cursor-pointer flex justify-center items-center shadow-md">
                                <FontAwesomeIcon 
                                    icon={['fab', 'facebook-f']} 
                                    className="text-white"/>
                            </li>
                            <li className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-700  cursor-pointer  flex justify-center items-center ml-4 shadow-md">
                                <FontAwesomeIcon 
                                    icon={['fab', 'twitter']} 
                                    className="text-white"/>
                            </li>
                            <li className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-700  cursor-pointer flex justify-center items-center ml-4 shadow-md">
                                <FontAwesomeIcon 
                                    icon={['fab', 'google-plus-g']} 
                                    className="text-white"/>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="mt-4 sm:mt-8 ">
                    <div className="container px-2 mx-auto">
                        <h1 className="text-xl font-bold text-center pt-8 ">Available on all device</h1>
                        <h2 className="text-sm text-center pb-4 ">Mobile, Tablet, Desktop</h2>
                        <ul className="w-full flex flex-col sm:flex-row relative sm:justify-around">
                            <li>
                                <FontAwesomeIcon 
                                    icon={['fab', 'googlestore']} 
                                    className="text-gray-300"/>
                            </li>
                            <li>
                                <FontAwesomeIcon 
                                    icon={['fab', 'google-plus-g']} 
                                    className="text-white"/>
                            </li>
                            <li>
                                <FontAwesomeIcon 
                                    icon={['fab', 'google-plus-g']} 
                                    className="text-white"/>
                            </li>
                        </ul>
                    </div>
                </section>
                <footer className="mt-8 bg-gray-900 border-t-2 border-primary">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between text-white text-sm leading-10">
                        <ul className="">
                            <li>Service</li>
                            <li>Blog</li>
                            <li>Job</li>
                            <li>Privacy</li>
                        </ul>
                        <ul>
                            <li>Terms of service</li>
                            <li>Sitemap</li>
                            <li>Resources</li>
                            <li>Chat</li>
                        </ul>
                        <ul>
                            <li>Sponsors</li>
                            <li>Instructors</li>
                            <li>Backers</li>
                            <li>Chat</li>
                        </ul>
                        <div className="bg-gray-800 px-2 shadow-xl">
                            <h1 className="border-b border-gray-900 pb-2">Our location</h1>
                            <h2>for more information or enquire visit us at <br/> NO 12 lagos state Nigeria</h2>
                            <p>  
                                <FontAwesomeIcon 
                                    icon={['fas', 'phone']} 
                                    className="mr-5"/>
                                +234-000
                            </p>
                        </div>
                    </div>
                    <p className="text-center py-2 text-white text-sm bg-gray-800 border-t border-gray-900">&copy; 2020 by devOPs developer for assignment </p>
                </footer>
            </main>
        )
    }
}

export default withRouter(SiteMain); 