import React from 'react';
declare type InternalWrapperProps = {
    logo?: string;
    wrapper?: React.FC;
    onClose: () => void;
    loaded?: boolean;
};
export declare const Wrapper: React.FC<InternalWrapperProps>;
export {};
