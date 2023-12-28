import Header from "../../UI/Header/Header";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <div className="profileInfoBlock">
        <div className="profileInfoContainer">
          <div className="profileName">
            <div className="profileNameHeader">Имя</div>
            <div className="profileNameValue">+79532566634</div>
          </div>
          <div className="profileActionContainer">
            <button>edit</button>
            <button>exit</button>
          </div>
        </div>
      </div>
    </>
  );
}
