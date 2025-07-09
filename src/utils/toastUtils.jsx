// utils/toastUtils.js
import { toast as baseToast } from 'react-hot-toast';

export const toast = {
  success: (msg) => baseToast.success(msg),
  error: (msg) => baseToast.error(msg),
  loading: (msg) => baseToast.loading(msg),
  dismiss: baseToast.dismiss,
};
