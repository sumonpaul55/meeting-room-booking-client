
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="text-2xl mt-4">Oops! The page you're looking for doesn't exist.</p>
                <p className="mt-2 text-gray-600">It looks like you took a wrong turn.</p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => navigate("/")}
                        className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
