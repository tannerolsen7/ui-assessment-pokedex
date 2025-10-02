import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { createUseStyles } from 'react-jss';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type AlertDialogSlideProps = {
    title: React.ReactNode;
    mainText: string | React.ReactNode;
    open: boolean;
    onClose: () => void;
    actions?: React.ReactNode;
};

export function BaseModal({
    title,
    mainText,
    open,
    onClose,
    actions,
  }: AlertDialogSlideProps) {
  const classes = useStyles();


  return (
    <Dialog
      open={open}
      slots={{
        transition: Transition,
      }}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      classes={{ paper: classes.dialogPaper }}
    >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      {mainText}
    </DialogContent>
    <DialogActions>
      {actions ? actions : <Button onClick={onClose}>Close</Button>}
    </DialogActions>
    </Dialog>
  );
}

const useStyles = createUseStyles(
  {
    dialogPaper: {
      borderRadius: '16px !important',
      padding: '8px 12px'
    }
  }
)