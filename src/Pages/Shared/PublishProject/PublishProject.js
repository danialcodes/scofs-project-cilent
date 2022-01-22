import { Avatar, Button, Divider, TextField } from '@mui/material';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
const PublishProject = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='bg-gray-300 rounded-lg h-48'>

            <div className="">
                <h1 className='text-2xl font-medium p-4'>Publish Project</h1>
                <Divider />
            </div>

            <div className="">
                <div className='flex items-center px-4 py-5	'>
                    <Avatar alt="ay there" src="{}" sx={{ width: 56, height: 56 }} />
                    <form className="ml-3 w-full ">
                        <input type="text" className="rounded border-none w-full bg-gray-300 outline-none" placeholder="Enter your project details..." onClick={handleClickOpen} />
                    </form>
                </div>
                <Divider />
            </div>








            {/* <Dialog open={open} onClose={handleClose}>
                <div className="flex justify-between items-center">
                    <DialogTitle >Publish Project </DialogTitle>
                    <CloseIcon onClick={handleClose} className="mr-4 cursor-pointer"></CloseIcon>
                </div>

                <DialogContent dividers>

                    <Box>
                        <TextField fullWidth label="fullWidth" id="fullWidth" />
                    </Box>



                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog> */}




        </div>
    );
};

export default PublishProject;