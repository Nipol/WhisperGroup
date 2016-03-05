contract Users is GroupOwner {
  // 사용자 지갑 주소에 따라 whisper identity 설정
	mapping (address => string) identity;
}
