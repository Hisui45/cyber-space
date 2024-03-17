import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CodeBracketIcon
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";


const navListMenuItems = [
  {
    title: "Website Development",
    description: "Find the perfect solution for your needs.",
    icon: ComputerDesktopIcon,
  },
  {
    title: "Mobile App Development",
    description: "Meet and learn about our dedication",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "Software Development",
    description: "Find the perfect solution for your needs.",
    icon: CodeBracketIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  // {
  //   title: "Services",
  //   description: "Learn how we can help you achieve your goals.",
  //   icon: SunIcon,
  // },
  // {
  //   title: "Support",
  //   description: "Reach out to us for assistance or inquiries",
  //   icon: GlobeAmericasIcon,
  // },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  // {
  //   title: "News",
  //   description: "Read insightful articles, tips, and expert opinions.",
  //   icon: NewspaperIcon,
  // },
  // {
  //   title: "Products",
  //   description: "Find the perfect solution for your needs.",
  //   icon: RectangleGroupIcon,
  // },
  // {
  //   title: "Special Offers",
  //   description: "Explore limited-time deals and bundles",
  //   icon: TagIcon,
  // },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-primary-elevation-1 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-accent-blue w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              className="flex items-center text-sm font-semibold text-high-emphasis"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-medium-emphasis"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 10 }}
        placement="bottom-start"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="medium">
            <ListItem
              className="flex items-center gap-2 py-0 pr-4 p-0"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-lg lg:block">
          <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}


function NavList() {
  return (
    <List className="mt-0 mb-0 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 lg:justify-end lg:items-center">
      <NavListMenu />
      {/* <Typography
          as="a"
          href="#"
          variant="medium"
          className="cursor-pointer lg:ml-2 no-underline"
        >
          Contact
        </Typography> */}
        
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      fullWidth="true"
      shadow="false"
      color="transparent"
      className="p-4"
    >
      <div className="flex items-center justify-between text-high-emphasis">
        <Typography
          as="a"
          href="#"
          variant="p"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 no-underline"
        >
          cyber·space
        </Typography>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Button variant="filled" size="md">
              Schedule Free Consultation
            </Button>
          </div>
          <IconButton
            variant="text"
            className="lg:hidden text-accent-blue"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="filled" size="sm" fullWidth>
              Schedule Free Consultation
            </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
