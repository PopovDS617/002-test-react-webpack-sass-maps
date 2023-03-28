import { useCallback, useEffect, useState } from 'react';
import { TPickpointList } from '@src/models/Pickpoint';

type UseAsync = (
  callback: () => Promise<unknown>,
  dependencies?: [] | unknown[]
) => { loading: boolean; error: boolean; value: TPickpointList };

export const useAsync: UseAsync = (callback, dependencies = []) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
};
