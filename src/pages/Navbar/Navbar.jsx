import * as React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AuthContext } from "@/components/functions/AuthProvider";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user, logOut } = React.useContext(AuthContext);

  return (
    <div className="navbar flex justify-between items-center px-4 shadow-md w-full">

      <div className="navbar-left text-left">
        <h1 className="text-xl font-bold">University of Chittagong</h1>
        <p className="text-xs">Certificate Withdrawal Management System</p>
      </div>


      <div className="navbar-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <Link to="/common-path">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {user && user.role === "student" ? (
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    History
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
                <Link to="/othersHistory">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    History
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>


      <div className="navbar-right flex items-center space-x-4">
        {user && (
          <div className="relative group">
            <img
              src={user.profilePic || "/user.png"}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />

            <div className="absolute right-0 mt-2 w-48 p-2 bg-gray-100 border text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium">{user.first_name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
          </div>
        )}


        <div>
          {user ? (
            <Button onClick={logOut} className="ml-2">
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button className="ml-2">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
