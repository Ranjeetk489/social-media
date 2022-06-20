import React, { useState } from "react";
import { ReactComponent as Photo } from '../../assets/Post/photo.svg';
import { ReactComponent as Quote } from '../../assets/Post/quote.svg';
import { ReactComponent as Audio } from '../../assets/Post/sound.svg';
import { ReactComponent as Video } from '../../assets/Post/video.svg';
import { ReactComponent as Text } from '../../assets/Post/text.svg';
import { ReactComponent as Close } from '../../assets/Navbar/Close.svg';
import { ReactComponent as Setting } from '../../assets/Post/setting.svg';
import {ReactComponent as Gif} from '../../assets/Post/gif.svg';
import Modal from "react-modal/lib/components/Modal";

const CreatePost = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);


    return <div className="c-post">
        <div className="invisible md:visible fixed top-[45vh] left-[23vw] 2xl:left-[35vw] ">
            <div className="wrapper flex gap-12">
                <div className="wrapper text-secondary text-center">
                    <div className="wrapper text-center w-28 h-28 rounded-full bg-secondary mb-4">
                        <Text className="w-10 relative top-9 left-9"></Text>
                    </div>
                    Text
                </div>
                <div className="wrapper text-secondary text-center">
                    <div className="wrapper text-center w-28 h-28 rounded-full bg-secondary mb-4">
                        <Quote className="w-10 relative top-9 left-9"></Quote>
                    </div>
                    Quote
                </div>
                <div className="wrapper text-secondary text-center">
                    <div className="wrapper text-center w-28 h-28 rounded-full bg-secondary mb-4">
                        <Audio className="w-10 relative top-9 left-9"></Audio>
                    </div>
                    Audio
                </div>
                <div className="wrapper text-secondary text-center">
                    <div className="wrapper text-center w-28 h-28 rounded-full bg-secondary mb-4">
                        <Photo className="w-10 relative top-9 left-9"></Photo>
                    </div>
                    Photo
                </div>
                <div className="wrapper text-secondary text-center">
                    <div className="wrapper text-center w-28 h-28 rounded-full bg-secondary mb-4">
                        <Video className="w-10 relative top-9 left-9"></Video>
                    </div>
                    Video
                </div>
            </div>
        </div>
        <PostInputCard modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>;
};

export default CreatePost;


const PostInputCard = ({ modalIsOpen, setModalIsOpen, name }) => {
    const customStyles = {
        content: {
            top:'50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            'min-width': '20rem',
            
        },
    };
    return <div className="c-post-input-card w-full">
        <div>
            <button onClick={() => { setModalIsOpen(true) }}>Open</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { setModalIsOpen(false) }}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <div className="wrapper flex justify-between">
                    <button onClick={() => { setModalIsOpen(false) }}><Close className="w-4 h-4 cursor-pointer"  /></button>
                    <select name="post-options" className="p-2 h-8 rounded-md cursor-pointer">
                        <option value="postnow">Post now</option>
                        <option value="draft">Draft</option>
                        <option value="schedule">Schedule</option>
                    </select>
                </div>
                <div className="wrapper flex justify-between mt-2">
                    <div>name </div>
                    <Setting className="w-6"></Setting>
                </div>

                <form>
                    <div className="flex mt-6 items-start  justify-between">
                        <textarea className="outline-none h-40 w-[60%] resize-none" placeholder="Go ahead, start typing...." />
                        <div className="wrapper flex justify-end flex-nowrap gap-2 w-[30%] mr-4 cursor-pointer">
                            <Photo className="w-6 fill-primary"></Photo>
                            <Video className="w-6 fill-pink-400"></Video>
                            <Gif className="w-10 fill-cyan-500"></Gif>
                            <Audio className="w-5 fill-violet-500"></Audio>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    </div>
}
