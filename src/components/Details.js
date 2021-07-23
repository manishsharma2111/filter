import React, { useState } from 'react';
import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core';

Modal.setAppElement('#root');

const useStyles = makeStyles({
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
});
export default function Details() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                className={classes.content}
            ></Modal>
        </div>
    );
}
