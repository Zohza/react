function ProfileStats({ projects, followers, following }) {
  
  return (
    <div className="stats">
      <p>
     <span className="colorChange">  Projects:{projects} </span> <span className="colorChange">| Followers:{followers}</span><span className="colorChange">
          | Following:  {following}
        </span>
      </p>
    </div>
  );
}
export default ProfileStats;
