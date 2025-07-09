// components/Toast.jsx
import { Toaster } from 'react-hot-toast';
import { BiCheckCircle, BiError } from 'react-icons/bi';

const Toast = () => (
  <Toaster
    position="top-right"
    toastOptions={{
      duration: 4000,
      style: {
        background: '#0d0d0d',
        color: '#facc15',
        padding: '14px 20px',
        fontSize: '14px',
        borderRadius: '12px',
        border: '1px solid #facc15',
        boxShadow: '0 4px 15px rgba(250, 204, 21, 0.1)',
      },
      success: {
        icon: <BiCheckCircle className="text-yellow-400 text-xl" />,
      },
      error: {
        icon: <BiError className="text-red-400 text-xl" />,
      },
    }}
  />
);

export default Toast;
