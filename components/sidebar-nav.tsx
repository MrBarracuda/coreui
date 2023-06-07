import { CBadge } from '@coreui/react'
import Link from "next/link";
import nav from "@/config/nav";
import {usePathname} from "next/navigation";

const SidebarNav = ({ items }: {items: typeof nav}) => {
  console.log(items);
  const pathname = usePathname()
  const navLink = (name: string, icon: any, badge: any) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item: any, index: number) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: Link,
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }
  const navGroup = (item: any, index: number) => {
    const { component, name, icon, to, ...rest } = item
    const Component = component
    return (
      <Component
        idx={String(index)}
        key={index}
        // toggler={Link}
        visible={pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item: any, index: number) =>
          item.item ? navGroup(item, index) : navItem(item, index),
        )}
      </Component>
    )
  }

  return (
    <>
      {items?.map((item, index) => (item ? navGroup(item, index) : navItem(item, index)))}
    </>
  )
}

export default SidebarNav
