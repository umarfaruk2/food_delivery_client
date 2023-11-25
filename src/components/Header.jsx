import React from "react";
import { Navbar } from "keep-react";
import { CaretDown, FacebookLogo } from "phosphor-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar fluid={true} className="py-5 lg:py-1 bg-gray-200">
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Brand>
            {/* <Image src="" alt="keep" width="100" height="40" /> */}
            <h3>This logo</h3>
          </Navbar.Brand>


          <Navbar.Container className="flex items-center gap-6">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-4"
          >
            <Navbar.Link
              linkName="Home"
              iconAnimation={false}
            />
            <Navbar.Link
              linkName="Dashboard"
              iconAnimation={false}
            />
          </Navbar.Container>
          <Navbar.Container className="flex gap-1">
            <Navbar.Toggle className="block" />
          </Navbar.Container>
        </Navbar.Container>



          <Navbar.Collapse
            collapseType="sidebar"
            className="fixed right-0 top-0 bg-white p-10 xl:!w-1/6 lg:!w-2/6 md:!w-1/2"
          >
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link
                linkName="Home"
                className="!py-0"
              />
            </Navbar.Container>
          </Navbar.Collapse>
          {/* <Navbar.Container className="flex gap-1">
            <Navbar.Toggle className="block" />
            Menu
          </Navbar.Container> */}
        </Navbar.Container>
      </Navbar>
    </>
  );
};

export default Header;
