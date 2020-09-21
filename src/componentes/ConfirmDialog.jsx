import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
const ConfirmDialog = (props) => {
    const { title, open, setOpen, onConfirm } = props;
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="confirm-dialog" >
            
            <DialogTitle id="confirm-dialog">{title}</DialogTitle>
            <DialogContent>
                <Divider />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={() => { setOpen (false);
                                     onConfirm(); }}
                    color="default" >
                    Si
                </Button>
                <Button
                    variant="contained"
                    onClick={() => props.setOpen(false)}
                    color="secondary" >
                    No
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;