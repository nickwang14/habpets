import { useState } from "react";
import { Header, Log } from "./Exports";
import NftBox from "./Components/NftBox/NftBox";
import "./App.css";
import axios from 'axios';
import UserInput from './Components/alturaGuard'

//import EvilPet from 'https://cdn.discordapp.com/attachments/1003507609749442701/1005678437953962034/turntable_2_gif.gif';
const { Altura } = require("@altura/altura-js");

/*
export type TAlturaUser = {
  address: string;
  name: string;
  bio?: string;
  profilePic?: string;
  socialLink?: string;
  profilePicUrl?: string;
  balance?: number; //available when fetching an item's holders
};
*/

const altura = new Altura(process.env.ALTURA_API_KEY);

function App() {
  //const [ user, setUser ] = useState()
  const [lastLog, setLastLog] = useState(" Never ");
  const [streak, setStreak] = useState(0);



  const handleLog = () => {
    setStreak(streak + 1);
    setLastLog(Date());
  };

  return (
    <div className="App">
      <Header title={"HabiPets"} />
      <UserInput />
      <NftBox type={true} />
      <NftBox type={false} />
      <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
      <button onClick={() => console.log(process.env)}></button>
    </div>
  );
}

export default App;
