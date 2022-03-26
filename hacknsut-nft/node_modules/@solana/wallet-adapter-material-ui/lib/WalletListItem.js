var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Button, ListItem } from '@material-ui/core';
import React from 'react';
import { WalletIcon } from './WalletIcon';
export const WalletListItem = (_a) => {
    var { onClick, wallet } = _a, props = __rest(_a, ["onClick", "wallet"]);
    return (React.createElement(ListItem, Object.assign({}, props),
        React.createElement(Button, { onClick: onClick, endIcon: React.createElement(WalletIcon, { wallet: wallet }) }, wallet.name)));
};
//# sourceMappingURL=WalletListItem.js.map