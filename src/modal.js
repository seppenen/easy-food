import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Context} from './context/dataObj'

const useStyles = makeStyles((theme) => ({
  root: {
    
    position:'static',
    height: '90vh',
    flexGrow: 1,
    minWidth: '100%',
    transform: 'translateZ(0)',
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
      
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(0),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:2,
  },
  paper: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0),
    zIndex:2,
  },
}));

export default function ServerModal({isActive, setIsActive}) {
  const classes = useStyles();
  const rootRef = React.useRef(null);
  const {Reader}=useContext(Context)
  
  return (
    <div className={classes.root} ref={rootRef}>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={isActive}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
      >
        <div className={classes.paper}>
        <Reader setIsActive={setIsActive}/>
        </div>
      </Modal>
    </div>
  );
}
