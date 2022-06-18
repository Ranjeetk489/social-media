import React from "react";
import image from '../../assets/Post/profile.jpg'
import { ReactComponent as Close } from '../../assets/Navbar/Close.svg';

const _ = [{
    "name": "Ranjeet"
}]

const Suggestion = () => {
    return <div className="c-suggestion absolute invisible md:visible">
        <div className="flex flex-col p-2 text-secondary">
            <span className="title">People to follow</span>
            <span className="h-line h-1 bg-tertiary"></span>
            
            {_.map(data => {
                return <div className="flex flex-col p-2 ">
                    <div className="grid grid-cols-4">
                        <img src={image} alt="" className="w-16 h-16" />
                        <div className="wrapper flex flex-col">
                            <span>Ranjeet</span>
                            <span>@ranjeet131</span>
                        </div>
                        <button className="text-primary bg-transparent">Follow</button>
                        <button className="fill-secondary"><Close className="w-6 h-6"/></button>
                        </div>
                    </div>
            })}
        </div>
    </div>;
};

export default Suggestion;
