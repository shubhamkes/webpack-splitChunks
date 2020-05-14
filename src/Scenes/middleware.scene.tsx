import React from 'react';

/**
 * middleware component to inherit functional hooks component into classical components
 * 
 * @param  {Object} Component
 * @param  {} HookComponent
 */
export const WithHook = (Component: any, HookComponent: any) => {
    return ((props: any) => {
        const vals = HookComponent(props);

        const updatedProps = { ...props, ...vals };
        return <Component {...updatedProps} />
    })
}
