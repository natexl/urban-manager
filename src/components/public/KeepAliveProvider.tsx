import React, { useState, useEffect } from 'react';

type CacheItem = {
  component: React.ReactElement;
  pathname: string;
};

interface KeepAliveContextProps {
  cache: CacheItem[];
  addCache: (item: CacheItem) => void;
  removeCache: (pathname: string) => void;
}

export const KeepAliveContext = React.createContext<KeepAliveContextProps>({
  cache: [],
  addCache: () => {},
  removeCache: () => {},
});

interface KeepAliveProviderProps {
  children: React.ReactNode;
}

export const KeepAliveProvider: React.FC<KeepAliveProviderProps> = ({
  children,
}) => {
  const [cache, setCache] = useState<CacheItem[]>([]);

  const addCache = (item: CacheItem) => {
    setCache((prevCache) => {
      if (prevCache.some((cacheItem) => cacheItem.pathname === item.pathname)) {
        return prevCache;
      }
      return [...prevCache, item];
    });
  };

  const removeCache = (pathname: string) => {
    setCache((prevCache) =>
      prevCache.filter((cacheItem) => cacheItem.pathname !== pathname)
    );
  };

  useEffect(() => {
    return () => {
      setCache([]);
    };
  }, []);

  return (
    <KeepAliveContext.Provider value={{ cache, addCache, removeCache }}>
      {children}
    </KeepAliveContext.Provider>
  );
};