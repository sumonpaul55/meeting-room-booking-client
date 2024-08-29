
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const RoomifyFooter = () => {
    const thisYear = new Date().getFullYear()
    return (
        <footer className="bg-slate-900 text-white py-16 font-roboto z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <ul>
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

                    {/* Social Media Links */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex justify-center space-x-6">
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

                    {/* Additional Links */}
                    <div className="text-right">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
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
        </footer>
    );
};

export default RoomifyFooter;
