import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";
import { Link} from "react-router-dom";
import Channel from "./channel";

const Channels = ({token}) => {
  const [channels, setChannels] = useState([]);
  const [isfetch, setFetch] = useState(true);

   const getChannels = () => {
        UserService.getAllChannels()
          .then(response => {
            setChannels([channels, ...response.data])
            setFetch(false)

          })
          .catch(e => {

          });
      };
    
      if(isfetch){
        getChannels();
      }

return(

<div>
  {channels.map((channel) => {
    console.log(channel)
    return (
      <li key={channel.channelid}>
        <Link to={"/channels/"+channel.channelid}>
            <h3 className="channelLinks">{channel.channelname}</h3>
            <small>{channel.channeltheme}</small>
            <Channel data = {channel}/>
        </Link>
  </li>
    )
  })}
</div>



)

}

export default Channels;