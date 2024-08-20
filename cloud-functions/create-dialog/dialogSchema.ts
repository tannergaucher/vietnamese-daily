export interface CreateDialogResponse {
  conversation: {
    title: string;
    dialog: {
      index: number;
      speaker: string;
      gender: "male" | "female";
      scene: string | null;
      vietnamese: string;
      audioSrc: null;
    }[];
  };
}

// example of a generated post on the subject of ordering beef pho from a street seller in Hanoi.
export const example: CreateDialogResponse = {
  conversation: {
    title: "Gọi phở bò ở Hà Nội",
    dialog: [
      {
        index: 1,
        speaker: "Anh",
        gender: "male",
        scene:
          "Đứng trước cửa quán phở nhỏ trên phố cổ Hà Nội, nhìn vào thực đơn",
        vietnamese: "Xin chào chị, cho em một bát phở bò tái chín.",
        audioSrc: null,
      },
      {
        index: 2,
        speaker: "Chị",
        gender: "female",
        scene: "Mỉm cười chào bạn từ trong quán",
        vietnamese: "Chào anh! Phở tái chín hay tái thôi ạ?",
        audioSrc: null,
      },
      {
        index: 3,
        speaker: "Anh",
        gender: "male",
        scene: "Ngồi vào bàn, nhìn quanh quán",
        vietnamese: "Em xin phở tái chín ạ. Phở có rau kèm không ạ?",
        audioSrc: null,
      },
      {
        index: 4,
        speaker: "Chị",
        gender: "female",
        scene: "Đi đến bàn của bạn, tay cầm giấy và bút để ghi chú",
        vietnamese:
          "Có rau sống, ngò gai, giá đi kèm ạ. Anh có muốn thêm bánh phở không?",
        audioSrc: null,
      },
      {
        index: 5,
        speaker: "Anh",
        gender: "male",
        scene: "Cười nhẹ",
        vietnamese:
          "Vâng, em xin thêm bánh phở ạ. Cho em thêm nước mắm và tương đen nữa ạ.",
        audioSrc: null,
      },
      {
        index: 6,
        speaker: "Chị",
        gender: "female",
        scene: "Xác nhận lại với bạn",
        vietnamese:
          "Được rồi! Một phở tái chín, bánh phở, rau và gia vị. Anh ngồi đây chờ phở nhé!",
        audioSrc: null,
      },
      {
        index: 7,
        speaker: "Anh",
        gender: "male",
        scene: "Mỉm cười cảm ơn",
        vietnamese: "Cảm ơn ạ!",
        audioSrc: null,
      },
    ],
  },
};
