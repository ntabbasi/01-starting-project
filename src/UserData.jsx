function UserData(){
  const user = {
    first: "Noor",
    last: "Abbasi",
    age: 20,
  };
  return (
    <div>
      <ul>
        User Data 
        <li> first:{user.fname}</li>
        <li>last:{user.lname}</li>
        <li>Age:{user.age}</li>
      </ul>
    </div>
  );
  
}

export default UserData;