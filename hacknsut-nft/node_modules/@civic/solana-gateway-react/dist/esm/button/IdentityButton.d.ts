import React from 'react';
export declare type ButtonProps = JSX.IntrinsicElements['button'];
export declare enum ButtonMode {
    LIGHT = 0,
    DARK = 1
}
export declare type AdditionalButtonProps = {
    mode?: ButtonMode;
};
export declare type IdentityButtonProps = ButtonProps & AdditionalButtonProps;
declare const IdentityButton: React.FC<IdentityButtonProps>;
export default IdentityButton;
