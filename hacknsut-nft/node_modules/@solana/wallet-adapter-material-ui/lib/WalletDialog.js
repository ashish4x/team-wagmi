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
import { Button, Collapse, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, makeStyles, } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { useCallback, useMemo, useState } from 'react';
import { useWalletDialog } from './useWalletDialog';
import { WalletListItem } from './WalletListItem';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiDialog-paper': {
            width: theme.spacing(40),
            margin: 0,
        },
        '& .MuiDialogTitle-root': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiTypography-root': {
                display: 'flex',
                justifyContent: 'space-between',
                lineHeight: theme.spacing(5) + 'px',
            },
            '& .MuiIconButton-root': {
                flexShrink: 1,
                padding: theme.spacing(),
                marginRight: theme.spacing(-1),
                color: theme.palette.grey[500],
            },
        },
        '& .MuiDialogContent-root': {
            padding: 0,
            '& .MuiCollapse-root': {
                '& .MuiList-root': {
                    background: theme.palette.grey[900],
                },
            },
            '& .MuiList-root': {
                background: theme.palette.grey[900],
                padding: 0,
            },
            '& .MuiListItem-root': {
                boxShadow: 'inset 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                    boxShadow: 'inset 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.1)' + ', 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.05)',
                },
                padding: 0,
                '& .MuiButton-endIcon': {
                    margin: 0,
                },
                '& .MuiButton-root': {
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    padding: theme.spacing(1, 3),
                    borderRadius: undefined,
                    fontSize: '1rem',
                    fontWeight: 400,
                },
                '& .MuiSvgIcon-root': {
                    color: theme.palette.grey[500],
                },
            },
        },
    },
}));
export const WalletDialog = (_a) => {
    var { title = 'Select your wallet', featuredWallets = 3, onClose } = _a, props = __rest(_a, ["title", "featuredWallets", "onClose"]);
    const styles = useStyles();
    const { wallets, select } = useWallet();
    const { open, setOpen } = useWalletDialog();
    const [expanded, setExpanded] = useState(false);
    const [featured, more] = useMemo(() => [wallets.slice(0, featuredWallets), wallets.slice(featuredWallets)], [wallets, featuredWallets]);
    const handleClose = useCallback((event, reason) => {
        if (onClose)
            onClose(event, reason);
        if (!event.defaultPrevented)
            setOpen(false);
    }, [setOpen, onClose]);
    const handleWalletClick = useCallback((event, walletName) => {
        select(walletName);
        handleClose(event);
    }, [select, handleClose]);
    const handleExpandClick = useCallback(() => setExpanded(!expanded), [setExpanded, expanded]);
    return (React.createElement(Dialog, Object.assign({ open: open, onClose: handleClose, className: styles.root }, props),
        React.createElement(DialogTitle, null,
            title,
            React.createElement(IconButton, { onClick: handleClose },
                React.createElement(CloseIcon, null))),
        React.createElement(DialogContent, null,
            React.createElement(List, null,
                featured.map((wallet) => (React.createElement(WalletListItem, { key: wallet.name, onClick: (event) => handleWalletClick(event, wallet.name), wallet: wallet }))),
                more.length ? (React.createElement(React.Fragment, null,
                    React.createElement(Collapse, { in: expanded, timeout: "auto", unmountOnExit: true },
                        React.createElement(List, null, more.map((wallet) => (React.createElement(WalletListItem, { key: wallet.name, onClick: (event) => handleWalletClick(event, wallet.name), wallet: wallet }))))),
                    React.createElement(ListItem, null,
                        React.createElement(Button, { onClick: handleExpandClick },
                            expanded ? 'Less' : 'More',
                            " options",
                            expanded ? React.createElement(ExpandLess, null) : React.createElement(ExpandMore, null))))) : null))));
};
//# sourceMappingURL=WalletDialog.js.map