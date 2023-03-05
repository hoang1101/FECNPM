import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useFetch = ({
  initialValue = null,
  apiService,
  keyDataName = 'data',
}) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    try {
      (async () => {
        let res;
        if (id) {
          res = await apiService(id);
        } else {
          res = await apiService();
        }

        if (res?.success) {
          setData(res[keyDataName]);
        }
      })();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};

export default useFetch;
