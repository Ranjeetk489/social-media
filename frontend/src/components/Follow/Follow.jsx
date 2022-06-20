import React from "react";
import { PropagateLoader } from "react-spinners";
import {ReactComponent as Menu} from './../../assets/Post/menu.svg';
import image from '../../assets/Post/profile.jpg';

const Follow = () => {
  return <div className="c-follow w-1/4">
      <div className="follow-count">12 Following</div>
      <div className="absolute">
      <input type="text" className="p-1 mr-4 bg-tertiary text-secondary-dark"  placeholder="Enter a username to follow"/>
      <button className="inline border-2 px-2 py-1 rounded-sm  border-tertiary text-secondary-dark active:bg-primary active:text-white">Follow</button>
      <div className= "relative top-4 left-24">
      <PropagateLoader color="#FF4930"  width={150} speedMultiplier={0.75}/></div>
      <FollowCard/>
      </div>
  </div>;
};

export default Follow;


const FollowCard = () => {
    return <div className="c-follow-card text-secondary">
            <div className="grid grid-cols-4 mt-11">
                <img src={image} alt="" className="w-16 h-16" />
                <div className="wrapper flex flex-col">
                    <span>Ranjeet</span>
                    <span>@ranjeet131</span>
                    </div>
                <button className="text-primary bg-transparent">Unfollow</button>
                <button className="fill-primary"><Menu className="w-6 h-6"/></button>
            </div>
        </div>
} 