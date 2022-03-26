var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { Button, Collapse, Fade, ListItemIcon, makeStyles, Menu, MenuItem, } from '@material-ui/core';
import CopyIcon from '@material-ui/icons/FileCopy';
import DisconnectIcon from '@material-ui/icons/LinkOff';
import SwitchIcon from '@material-ui/icons/SwapHoriz';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { useMemo, useState } from 'react';
import { useWalletDialog } from './useWalletDialog';
import { WalletConnectButton } from './WalletConnectButton';
import { WalletDialogButton } from './WalletDialogButton';
import { WalletIcon } from './WalletIcon';
const useStyles = makeStyles((theme) => ({
    root: {},
    menu: {
        '& .MuiList-root': {
            padding: 0,
        },
        '& .MuiMenuItem-root': {
            padding: theme.spacing(1, 2),
            boxShadow: 'inset 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.1)',
            '&:not(.MuiButtonBase-root)': {
                padding: 0,
                '& .MuiButton-root': {
                    borderRadius: 0,
                },
            },
            '&:hover': {
                boxShadow: 'inset 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.1)' + ', 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.05)',
            },
        },
        '& .MuiListItemIcon-root': {
            marginRight: theme.spacing(),
            minWidth: 'unset',
            '& .MuiSvgIcon-root': {
                width: 20,
                height: 20,
            },
        },
    },
}));
export const WalletMultiButton = (_a) => {
    var { color = 'primary', variant = 'contained', type = 'button', children } = _a, props = __rest(_a, ["color", "variant", "type", "children"]);
    const styles = useStyles();
    const { publicKey, wallet, disconnect } = useWallet();
    const { setOpen } = useWalletDialog();
    const [anchor, setAnchor] = useState();
    const base58 = useMemo(() => publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), [publicKey]);
    const content = useMemo(() => {
        if (children)
            return children;
        if (!wallet || !base58)
            return null;
        return base58.slice(0, 4) + '..' + base58.slice(-4);
    }, [children, wallet, base58]);
    if (!wallet) {
        return (React.createElement(WalletDialogButton, Object.assign({ color: color, variant: variant, type: type }, props), children));
    }
    if (!base58) {
        return (React.createElement(WalletConnectButton, Object.assign({ color: color, variant: variant, type: type }, props), children));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, Object.assign({ color: color, variant: variant, type: type, startIcon: React.createElement(WalletIcon, { wallet: wallet }), onClick: (event) => setAnchor(event.currentTarget), "aria-controls": "wallet-menu", "aria-haspopup": "true", className: styles.root }, props), content),
        React.createElement(Menu, { id: "wallet-menu", anchorEl: anchor, open: !!anchor, onClose: () => setAnchor(undefined), className: styles.menu, marginThreshold: 0, TransitionComponent: Fade, transitionDuration: 250, keepMounted: true },
            React.createElement(MenuItem, { onClick: () => setAnchor(undefined), button: false },
                React.createElement(Button, Object.assign({ color: color, variant: variant, type: type, startIcon: React.createElement(WalletIcon, { wallet: wallet }), className: styles.root, onClick: (event) => setAnchor(undefined), fullWidth: true }, props), wallet.name)),
            React.createElement(Collapse, { in: !!anchor },
                React.createElement(MenuItem, { onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                        setAnchor(undefined);
                        yield navigator.clipboard.writeText(base58);
                    }) },
                    React.createElement(ListItemIcon, null,
                        React.createElement(CopyIcon, null)),
                    "Copy address"),
                React.createElement(MenuItem, { onClick: () => {
                        setAnchor(undefined);
                        setOpen(true);
                    } },
                    React.createElement(ListItemIcon, null,
                        React.createElement(SwitchIcon, null)),
                    "Connect a different wallet"),
                React.createElement(MenuItem, { onClick: () => {
                        setAnchor(undefined);
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        disconnect().catch(() => {
                            // Silently catch because any errors are caught by the context `onError` handler
                        });
                    } },
                    React.createElement(ListItemIcon, null,
                        React.createElement(DisconnectIcon, null)),
                    "Disconnect")))));
};
//# sourceMappingURL=WalletMultiButton.js.map