type User = {
  userId: string;
  userPassword: string;
  userEmail: string;
  userAddress: string;
  userAddressDatail: string;
  userName: string;
  userPhone: string;
  userKidBirth?: string;
  userWithdraw?: string;
}

const mockUserData: User[] = [
  {
    userId: "qwe123",
    userPassword: "qwe123123",
    userEmail: "qwe123@qwe.com",
    userAddress: "부산시",
    userAddressDatail: "부산진구",
    userName: "seugnah",
    userPhone: "010-1111-2222",
    userKidBirth: "2024-03-06",
  },
  {
    userId: "qwe321",
    userPassword: "qwe321321",
    userEmail: "qwe321@qwe.com",
    userAddress: "부산시",
    userAddressDatail: "부산진구",
    userName: "junGook",
    userPhone: "010-3333-5555",
    userKidBirth: "2024-03-06",
  },
  {
    userId: "qweqwe1",
    userPassword: "qweqwe11",
    userEmail: "qweqwe123@qwe.com",
    userAddress: "부산시",
    userAddressDatail: "부산진구",
    userName: "DoKyung",
    userPhone: "010-6666-7777",
  },
];

export default mockUserData;