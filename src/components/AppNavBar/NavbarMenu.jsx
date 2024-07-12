import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material'
import { Box } from '@mui/system';
import { colors } from '../utils/colors.js' // from utils folder 



function NavbarMenu() {

    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const handleButtonClick = (index) => {
        console.log(index)
        handleClose();
    }

    const buttons = [
        'Bio',
        'Address',
        'Experience',
        'Projects',
        'Education',
        'Key Skills',
        'Download'
    ];

    return (
        <>
            <Box>
                <IconButton
                    sx={{
                        marginTop: '2rem',
                        marginLeft: '0.5rem',
                        position: "sticky",
                        top: 80,
                        color: colors.cyan600,
                        backgroundColor: colors.gray950,
                        '&:hover': {
                            color: colors.cyan500,
                            backgroundColor: colors.gray950
                        },
                    }}
                    aria-label='more'
                    aria-controls='long_menu'
                    aria-expanded='true'
                    aria-haspopup="true"
                    onClick={(e) => handleClick(e)}
                >
                    < MoreVertIcon />
                </IconButton>
                <Menu
                    id='long_menu'
                    anchorEl={anchorEl}
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            width: '20ch',
                            maxHeight: ITEM_HEIGHT * 7.5,
                            backgroundColor: colors.gray950,
                        },
                    }}
                >
                    {buttons.map((button, index) => (
                        <MenuItem
                            key={index}
                            onClick={() => handleButtonClick(index)}
                        >
                            <Button
                                variant={'text'}
                            >
                                {button}
                            </Button>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    )
}

export default NavbarMenu