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
import { makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));
export const WalletIcon = (_a) => {
    var { wallet } = _a, props = __rest(_a, ["wallet"]);
    const styles = useStyles();
    return wallet && React.createElement("img", Object.assign({ src: wallet.icon, alt: `${wallet.name} icon`, className: styles.root }, props));
};
//# sourceMappingURL=WalletIcon.js.map