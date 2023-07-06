import React, { useContext, useEffect } from 'react';
import { KeepAliveContext } from './KeepAliveProvider';
import { useLocation } from 'react-router-dom';

function withKeepAlive<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  const KeepAliveComponent: React.FC<P> = (props) => {
    const { cache, addCache, removeCache } = useContext(KeepAliveContext);
    const location = useLocation();

    useEffect(() => {
      const cachedItem = cache.find(
        (item) => item.pathname === location.pathname
      );

      if (!cachedItem) {
        addCache({
          component: <WrappedComponent {...props} />,
          pathname: location.pathname,
        });
      }

      return () => {
        // removeCache(location.pathname);
      };
    }, [location.pathname]);

    return (
      <>
        {cache.map((item) => {
          const isActive = item.pathname === location.pathname;
          return React.cloneElement(item.component, {
            key: item.pathname,
            // style: { display: isActive ? 'block' : 'none' },
          });
        })}
      </>
    );
  };

  return KeepAliveComponent;
}

export default withKeepAlive;