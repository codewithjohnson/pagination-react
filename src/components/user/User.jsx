import "./user.css";

const User = ({ user }) => {
  const profilePic = user.picture.thumbnail;
  const fullName = user.name.last + user.name.first;
  const userName = user.login.username;
  const country = user.location.country;
  const postCode = user.location.postcode;
  const age = user.dob.age;
  const phone = user.phone;

  return (
    <div className="user">
  
      <div className="userCard">
        <div className="userImage">
          <img src={profilePic} alt="profileImage" />
        </div>
        <div className="profile">
          <div className="name">{fullName}</div>
          <div className="country">{country}</div>
          <div className="userName">{userName}</div>
        </div>
        <div className="agePostCodePhoneNo">
          <div className="age">
            <div className="ageTitle">Age</div>
            <div className="ageNumber">{age}</div>
          </div>
          <div className="postalCode">
            <div className="postalCodeTitle">PostalCode</div>
            <div className="postCodeNumber">{postCode}</div>
          </div>
          <div className="phone">
            <div className="phoneNumberTitle">Phone</div>
            <span className="phoneNo">{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
