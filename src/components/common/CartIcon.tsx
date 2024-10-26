
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const CartIcon = () => {
    const items = useAppSelector(state => state.booking.booking)
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <>
            {
                pathname === "/checkout" ? null : !items?.length ? null :
                    <motion.div
                        className="fixed right-0 w-[50px] top-16 sm:top-24 z-50 p-2 rounded-l-full bg-blue-600 text-white shadow-lg"
                        whileHover={{ scale: 1.04, }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}>
                        <Link to="/checkout">
                            <div className='relative cursor-pointer mt-1'>
                                <FaShoppingCart className="h-5 w-5" />
                                <span className='absolute text-red-500 -top-2 right-2 bg-white size-4 flex justify-center items-center rounded-full p-1 font-semibold'>{items.length}</span>
                            </div>
                        </Link>
                    </motion.div>
            }

        </>

    );
};

export default CartIcon
