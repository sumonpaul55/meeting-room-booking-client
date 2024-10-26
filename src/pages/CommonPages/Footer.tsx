
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Section from '../../components/common/Section';

const RoomifyFooter = () => {
    const thisYear = new Date().getFullYear()
    return (
        <footer className="bg-slate-900 text-white py-16 font-roboto z-50">
            <Section>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-5">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 border-b border-dotted border-gray-600 pb-2 w-fit">Contact Information</h3>
                            <ul className='mt-6'>
                                <li className="flex items-center mb-2">
                                    <FaEnvelope className="mr-2" />
                                    <span>info@roomify.com</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaPhoneAlt className="mr-2" />
                                    <span>+123-456-7890</span>
                                </li>
                                <li className="flex items-center">
                                    <FaMapMarkerAlt className="mr-2" />
                                    <span>123 Office St, City, Country</span>
                                </li>
                            </ul>
                        </div>

                        {/* Additional Links */}
                        <div className="flex lg:justify-center">
                            <div>
                                <h3 className="text-xl font-bold border-b border-dotted border-gray-600 pb-2 w-fit">Menus</h3>
                                <ul className='space-y-2 mt-6'>
                                    {/* <li><Link to="/">Home</Link></li> */}
                                    <li><Link to="/meeting-rooms">Meeting Rooms</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex lg:justify-center">
                            <div>
                                <h3 className="text-xl font-bold border-b border-dotted border-gray-600 pb-2 w-fit">Follow Us</h3>
                                <div className="flex lg:justify-center space-x-6 mt-6">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600">
                                        <FaFacebook />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
                                        <FaTwitter />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* Additional Links */}
                        <div className="lg:text-right">
                            <h3 className="text-xl font-bold border-b border-dotted border-gray-600 pb-2 w-fit lg:md:ml-auto">Quick Links</h3>
                            <ul className='mt-6'>
                                <li className="mb-2">
                                    <Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                        © {thisYear} Roomify. All Rights Reserved.
                    </div>
                </div>
            </Section>
        </footer>
    );
};

export default RoomifyFooter;
