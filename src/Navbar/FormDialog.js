import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';  
import Contacts from './Contacts';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('')
  const [lname, setLname] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    <Contacts name={name} lname={lname} phone={phone} />
    setOpen(false);
    
    
  };
  const Hnadlephone = (e) => {
    setPhone(e.target.value)
  }

  const HandleLname = (e) => {
    setLname(e.target.value)
  }
  const Handlename = (e) => {
    setName(e.target.value)
  }

  const HandleEmail = (e) => {
    setName(e.target.value)
  }



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleSubmit}>
        <DialogTitle>CONTACT FORM    </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Kindly Add Your Contact Details Here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="First_name"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={Handlename}
          />
          <TextField
            autoFocus
            margin="dense"
            id="L_name"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={HandleLname}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone Number"
            type="number"
            
            maxLength="10"
            variant="standard"
            onChange={Hnadlephone}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={HandleEmail}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={handleSubmit}> Add </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
