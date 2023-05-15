import axios from 'axios';
import { useState } from 'react';
import { useCallback } from 'react';
import { DEFAULT_URL } from '../constant/url';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const BASE_URL = DEFAULT_URL;

  const sendRequest = useCallback(
    async (requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios({
          method: requestConfig.method ? requestConfig.method : 'GET',
          url: BASE_URL + requestConfig.url,
          headers: requestConfig.headers ? requestConfig.headers : {},
          data: requestConfig.body ? requestConfig.body : null,
        });

        const data = response.data;

        applyData(data);
      } catch (err) {
        let error = err;
        if (err.response) {
          error = err.response.data?.message || 'Something went wrong!';
        } else {
          error = err.message || 'Something went wrong!';
        }
        if (error === 'Invalid credentials') {
          error = 'Password salah';
        }
        if (err.response.data?.errors) {
          const { field, message } = err.response.data.errors[0];
          error = `${field} doesn't ${message}`;
        }
        setError(error);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error,
          visibilityTime: 2000,
          autoHide: true,
        });
      } finally {
        setIsLoading(false);
      }
    },
    [BASE_URL]
  );

  return {
    isLoading,
    error,
    sendRequest,
    setIsLoading,
  };
};

export default useHttp;
