import { Instance, Placement, createPopper } from "@popperjs/core"
import { createRef, useState, RefObject } from "react"

const Dropdown: React.FC = () => {
    const [popoverShow, setPopoverShow] = useState<boolean>(false);
  const btnDropdownRef = createRef<HTMLAnchorElement>();
  const popoverDropdownRef = createRef<HTMLDivElement>();

    const openDropdownPopover = () => {
            setPopoverShow(!popoverShow)
            createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
                placement: "bottom-start" as Placement,
              });
              setPopoverShow(true);
        }
    const closeDropdownPopover = () => {
        setPopoverShow(false)
    }

    return (

        <>
            <a
        className="text-blueGray-500 block py-1 px-3"
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          popoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-bell"></i>
      </a>
      <div
        className={
          (popoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
        }
      >
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Profile
        </a>
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Settings
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Logout
        </a>
      </div>            
        </>
    )
}
export default Dropdown