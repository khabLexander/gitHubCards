import { useState } from 'react';
import './App.css'
const axios = require('axios');

const testData = [
    {id: '001' , name: "Mauricio Matango", avatar_url: "https://avatars.githubusercontent.com/u/61792044?v=4", company: "@Yavirac"},
    {id: '002',name: "Bryan Perez", avatar_url: "https://avatars.githubusercontent.com/u/59462642?v=4", company: "@Yavirac"},
    {id: '003',name: "Henrry Acosta", avatar_url: "https://avatars.githubusercontent.com/u/67518799?v=4", company: "@Yavirac"},
];

const CardList = ({profiles}) => (
	<div>
  	{profiles.map(profile => <Tarjeta key={profile.id} {...profile}/>)}
	</div>
);

const Tarjeta = ({name,avatar_url,company}) =>{

  	return (
    	<div className="github-profile">
    	  <img alt=''src={avatar_url} />
        <div className="info">
          <div className="name">{name}</div>
          <div className="company">{company}</div>
        </div>
    	</div>
    );
}

const Form =  ({onSubmited})  => {

  const [userName, setUserName] = useState('')
  
	const handleSubmit = async(event) => {
  	event.preventDefault();
    const resp =  await axios.get(`https://api.github.com/users/${userName}`);
    console.log(resp)
    onSubmited(resp.data)
    setUserName('');
  };

  	return (
    	<form onSubmit={handleSubmit} >
    	  <input 
          type="text" 
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
}

export const App = ({title})=> {
  const [profiles, setProfiles] = useState(testData)
  const addNewProfile = (profileData)=>{
    
    setProfiles([
      ...profiles, profileData
    ])
    console.log(profileData)
  }
  	return (
    	<div>
    	  <div className="header">{title}</div>
        <Form onSubmited={addNewProfile}/>
        <CardList profiles={profiles} />
    	</div>
    );
}

