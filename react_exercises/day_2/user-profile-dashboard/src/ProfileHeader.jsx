function ProfileHeader({ name, title, avatar }) {
  return (
    
    <div>
        <img src={avatar} alt="avatar image"  style={{width:'20%', height:'15%'}}/>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
export default ProfileHeader;
