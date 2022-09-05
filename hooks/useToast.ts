import { toast, ToastOptions } from 'react-toastify';

type Level = 'error' | 'success' | '';
const useToast = (config?: ToastOptions<{}> | undefined) =>
    (message: string, level: Level) => {
        config = config ? config : {};
        switch (level) {
            case 'error':
                toast.error(message, config);
                break;
            case 'success':
                toast.success(message, config);
                break;
            default:
                toast(message);
        }
    };
export default useToast;

