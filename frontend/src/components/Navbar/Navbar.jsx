import React from "react";
import { ReactComponent as MainLogo } from "../../assets/Navbar/Logo.svg";
import { ReactComponent as SearchLogo } from "../../assets/Navbar/Search.svg";
import {ReactComponent as Trending} from "../../assets/Navbar/Trending.svg";
import {ReactComponent as Home} from "../../assets/Navbar/Home.svg";
import {ReactComponent as Message} from "../../assets/Navbar/Message.svg";
import {ReactComponent as Account} from "../../assets/Navbar/Account.svg";
import {ReactComponent as Create} from "../../assets/Navbar/Create.svg"
import {ReactComponent as Notification} from "../../assets/Navbar/Notification.svg";
import {ReactComponent as Menu} from "../../assets/Navbar/HamBurger.svg";
import {ReactComponent as Close} from "../../assets/Navbar/Close.svg";

const Navbar = () => {
    return (
        <>
        <div className="c-navbar top-0 mt-4 absolute flex justify-between w-full invisible md:visible fill-secondary">
            <div className="left-nav flex items-end  mx-6">
                <MainLogo className="w-8"></MainLogo>
                    <SearchLogo className="relative top-0 left-6 w-5 -translate-y-1"></SearchLogo>
                    <input type="text" placeholder="Search" className="border-2 bg-secondary rounded-md pl-6"/>
            </div>
            {false ? <div className="right-nav flex items-baseline gap-8 ">
                <Home className="w-8" />
                <Trending className="w-8 translate-y-1" />
                <Message className="w-6"/>
                <Notification className="w-6 translate-y-1"/>
                <Create />
                <Account className="w-6 mr-6"/>
            </div> : <div>
                <div className="right-nav flex items-baseline gap-8">
                    <button className="px-2 py-1 bg-green rounded-sm">Sign In</button>
                    <button className="px-2 py-1 bg-skyblue mr-8 rounded-sm">Sign Up</button>
                </div>
                </div>}
        </div>: 
        {false ? <div className="c-navbar-mob visible md:invisible">
            <MainLogo className="fill-secondary w-8 absolute left-[49%] top-2"></MainLogo>
            <Menu className="absolute top-6 left-6 w-6 fill-secondary"/>
            <Close className="absolute top-6 left-6  w-6 h-6 fill-secondary"></Close>
            <div className="wrapper mt-12 bg-bg-clr">
                <div className="wrapper absolute ml-[35%]">
                <Create className="relative top-8 left-1 "></Create>
                <button className=" mx-auto bg-primary py-2 px-3 pl-8 rounded-sm active:bg-primary-dark">Create a post </button>
                </div>
                <table className="menu-items absolute top-32 text-secondary fill-secondary">
                    <tr className="flex p-2 ml-4 text-secondary">
                        <Home className="w-8"></Home>
                        <span className="item-title">Dashboard</span>
                    </tr>
                    <tr className="flex p-2 ml-4 ">
                        <Trending  className="w-8 -translate-y-1 mr-1"></Trending>
                        <span className="item-title">Trending</span>
                    </tr>
                    <tr className="flex p-2 pt-0 ml-4 ">
                        <Message className="w-8 mr-1 -translate-y-1" ></Message>
                        <span className="item-title">Messages</span>
                    </tr>
                    <tr className="flex p-2 pt-0 ml-4 ">
                        <Notification className="w-6"></Notification>   
                        <span className="item-title ml-2">Activity</span>
                    </tr>
                    <tr className="flex p-2 pt-0 ml-4 ">
                        <Account className="w-6"></Account>
                        <span className="item-title ml-2">Account</span>
                    </tr>
                </table>
            </div>
        </div> :
        <div className="c navbar-mob visible md:invisible">
            <MainLogo className="fill-secondary w-8 absolute left-[47%] top-2"></MainLogo>
            <Menu className="absolute top-6 left-6 w-6 fill-secondary"/>
            <Close className="absolute top-6 left-6  w-6 h-6 fill-secondary"></Close>
            <div className="wrapper mt-12 bg-bg-clr">
            <table className="menu-items absolute ml-4 top-20 text-secondary fill-secondary">
                <tr className="p-2 text-primary">
                    <td> Sign In </td>
                </tr>
                <tr className="p-2 text-secondary">
                    <td> Sign up </td>
                </tr>
            </table>
            </div>
        </div>
        }
        </>
    );
};

export default Navbar;

