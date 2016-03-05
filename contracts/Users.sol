contract Users is GroupOwner {
  // admin address
  address _owner;
  // 사용자 지갑 주소에 따라 User Index 제공
	mapping (address => uint) Userid;
  // 등록된 사용자 리스트
  User[] Users;

  // 사용자 객체
  struct User {
    // 사용자 Whisper identity
    string id;
    // 사용자 설정 닉네임
    string nickname;
    // 사용자 image
    // string imageurl;
    // 사용자 가입일
    uint since;
  }

  // constructor 유저 관리자 지정
  function Users(address owner) {
    if(!owner)
      _owner = owner;
  }

  // add user
  // todo
  function AddUser(string id, string nickname) onlyOwner {
    uint userid;
  }
}
