import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
    return (
        <div className="chats">

            <Chat name="Quin Aziz"
                   message="Bwanj man"
                   timestamp="60 seconds ago"
                   profilePic="..." 
            />

            <Chat name="Natasha Phri"
                   message="Morning"
                   timestamp="40 seconds ago"
                   profilePic="https://media.istockphoto.com/photos/beautiful-woman-soft-makeup-and-perfect-skin-picture-id1133213198?k=6&m=1133213198&s=612x612&w=0&h=MQGFE8-cfFi3YpfGwPA6KZoCdSPjsRgfwAgIGCmfZ3w=" 
            />
            
            <Chat name="Brian Nkhata"
                   message="Yo what up"
                   timestamp="40 seconds ago"
                   profilePic="https://media.istockphoto.com/photos/beautiful-woman-face-portrait-beauty-model-isolated-on-white-picture-id640299760?k=6&m=640299760&s=612x612&w=0&h=LxrbYFczp6etPY2oj1sqzGfyGU_XYtS2UaKNxXTMaIs=" 
            />

            <Chat name="Joh"
                   message="Boss"
                   timestamp="35 seconds ago"
                   profilePic="https://media.istockphoto.com/photos/handsome-african-american-man-in-blank-black-tshirt-standing-against-picture-id1011172576?k=6&m=1011172576&s=612x612&w=0&h=GbqHpASNKzdaRPgJv_G3l9kmrNWcZyhzZhTzjC1QLnQ=" 
            />
        </div>
    )
}

export default Chats
