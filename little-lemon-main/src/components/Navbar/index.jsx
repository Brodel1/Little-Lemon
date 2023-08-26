import { Button, ButtonGroup, IconButton, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import data from "./data.json"
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
    const isNonMobile = useMediaQuery("(min-width: 992px)");
    const navigate = useNavigate();

    return (
        <>
            {
                isNonMobile[0] ?
                    <ButtonGroup variant="primaryGhost" spacing="0">
                        {
                            data.map((e) => {
                                return <Button key={e.name} isDisabled={e.url === "/"} onClick={() => navigate(e.url)}>{e.name}</Button>
                            })
                        }
                    </ButtonGroup >
                    :
                    <Menu>
                        <MenuButton
                            aria-label='Options'
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            {
                                data.map((e) => {
                                    return <MenuItem key={e.name} isDisabled={e.url === "/"} onClick={() => navigate(e.url)}>{e.name}</MenuItem>
                                })
                            }
                        </MenuList>
                    </Menu>
            }
        </>
    );
}

export default Navbar;