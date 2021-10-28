import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { AccountSwitcherButton } from '../atoms/Button/AccountSwitcherButton'

interface UserProfileProps {
  name: string
  image: string
  email: string
  isexpanded: boolean
}

export const UserProfile = (props: UserProfileProps) => {
  const { name, image, email , isexpanded} = props
  const [Dorm, setDorm] = React.useState<string | string[]>("asrama1")
  return (
    <Menu>
      <AccountSwitcherButton isexpanded={isexpanded} name={name} selected={Dorm} image={image} email={email} />
      <MenuList shadow="lg" py="4" color={useColorModeValue('gray.600', 'gray.200')} px="3">
        <Text fontWeight="medium" mb="2">
          {email}
        </Text>
        <MenuOptionGroup defaultValue="asrama1" onChange={(value) => setDorm(value)}>
          <MenuItemOption value="asrama1" fontWeight="semibold" rounded="md">
            Khairunnisa Dormitory
          </MenuItemOption>
          <MenuItemOption value="asrama2" fontWeight="semibold" rounded="md">
            Sakinah Dormitory
          </MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuItem rounded="md">Dormitory Settings</MenuItem>
        <MenuItem rounded="md">Manage Profile</MenuItem>
        <MenuDivider />
        <MenuItem rounded="md">Logout</MenuItem>
      </MenuList>
    </Menu>

  )
}
