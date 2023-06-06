// // import { NavLink, useLocation } from 'react-router-dom'
//
// import { CBadge } from '@coreui/react'
// import {useRouter} from "next/router";
// import Link from "next/link";
// import {usePathname} from "next/navigation";
// import navigation from '../config/_nav'
//
//
// // @ts-ignore
// export const AppSidebarNav = ({ items }: {items: typeof navigation}) => {
//   const pathname = usePathname()
//   // @ts-ignore
//   const navLink = (name, icon, badge) => {
//     return (
//       <>
//         {icon && icon}
//         {name && name}
//         {badge && (
//           <CBadge color={badge.color} className="ms-auto">
//             {badge.text}
//           </CBadge>
//         )}
//       </>
//     )
//   }
//
//   // @ts-ignore
//   const navItem = (item, index) => {
//     const { component, name, badge, icon, ...rest } = item
//     const Component = component
//     return (
//       <Component
//         {...(rest.to &&
//           !rest.items && {
//             component: Link,
//           })}
//         key={index}
//         {...rest}
//       >
//         {navLink(name, icon, badge)}
//       </Component>
//     )
//   }
//   // @ts-ignore
//   const navGroup = (item, index) => {
//     const { component, name, icon, to, ...rest } = item
//     const Component = component
//     return (
//       <Component
//         idx={String(index)}
//         key={index}
//         toggler={navLink(name, icon)}
//         visible={pathname.startsWith(to)}
//         {...rest}
//       >
//         {item.items?.map((item, index) =>
//           item.items ? navGroup(item, index) : navItem(item, index),
//         )}
//       </Component>
//     )
//   }
//
//   return (
//     <>
//       {items &&
//         items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
//     </>
//   )
// }
//
