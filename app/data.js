const posts = [
  {
    id: 1,
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/352462572_186942627672597_3919407635797816196_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHkVhGcIgjYEojNyI7Mp7NOi21IZZxK-FKLbUhlnEr4UiUcv0kMeJ6DbqerxJBvZa27khFf0CFz_9mJh2YXlQuc&_nc_ohc=cMr3iQAtu2EAX9JQF6C&_nc_ht=scontent.fdac155-1.fna&oh=00_AfBHQrhrOGOkzD2wCN1lBpdrto81proeP6c8RbFY_nQuAw&oe=64AD98C3",
    content: `জীবন যেমন'ই হোক....
    কাউকে বুঝতে দেওয়া যাবে না..!`,
    like: "120 Like",
    comment: "30 Comment",
    timeAgo: "2hr Ago",
    author: {
      name: "Mahedi Hasan",
      photo:
        "https://scontent.fdac155-1.fna.fbcdn.net/v/t1.6435-9/148434669_2791042911137487_2052293519857723970_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEqyH3-_7qB5MnRymyol3NEDlz4n2LgG70OXPifYuAbvaJ-woErmd858ra1_WZIRv9wqkmfBOkKRIOy9_SdwxxH&_nc_ohc=UO7O2AiZKo4AX_NUrBb&_nc_ht=scontent.fdac155-1.fna&oh=00_AfDiu4Te3y9W4f7mN7BC2YZdjRn-Fx7PLd6ZXltfRnztIA&oe=64D0CC3B",
    },
  },
  {
    id: 2,
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/355239430_825418195606890_672582481017059522_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFPO8aI7RLz9tLL6rsHnL1UzfeH-OWhfArN94f45aF8Cp-HRCYa9BVaZ_s7ln3rFqb12VmvVxJ79C3FGDgUFASs&_nc_ohc=BOhO7tfNc58AX836oiE&_nc_ht=scontent.fdac155-1.fna&oh=00_AfCtleuCHHE4MWtQ_CUnE7zkhEHKkmuy40Yj9Ip3J-4q6g&oe=64B01199",
    content: `At a very controversial content creator's wedding!
<br>
    I look like a school er Master Moshai haha!`,
    like: "1225 Like",
    comment: "220 Comment",
    timeAgo: "1hr 30min Ago",
    author: {
      name: "Khalid Farhan",
      photo:
        "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/326953390_3455474134724322_1131676172155857932_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHM_5EYO2gLi0E05Z0PLnmfcRnmhSUQAGRxGeaFJRAAZIVJUxkGipU4aX5GioxvvwYh1Z5fTyfmTFxl8BBIYX3-&_nc_ohc=n69yGnoI8CkAX9DKR0B&_nc_ht=scontent.fdac155-1.fna&oh=00_AfCa2xkTf0TAAxIz7Ly8kDvZ4Ohevcfeh3bHBzn2YCMu6Q&oe=64AF9C41",
    },
  },
  {
    id: 3,
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/321761604_2422174037933111_1159514871794534408_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH7NKV3ziK35uN2DDEFVziKzm4EQZsRzxzObgRBmxHPHJ0tK4QjSzx4xPftOW02dMzIJMAkIo-00TA9lmEm7sht&_nc_ohc=TjsIydOLh9AAX_8n2ft&_nc_ht=scontent.fdac155-1.fna&oh=00_AfALRYgkXDIzFVJdIw_YG2gypVt_IUdvesFaTEWDHjs9kA&oe=64AFC662",
    content: ``,
    like: "1600 Like",
    comment: "2600 Comment",
    timeAgo: "1hr 20min Ago",
    author: {
      name: "Tahsan",
      photo:
        "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/286817712_570315701127702_3396810304156769425_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH1sYYZlTU-XM8roH92lGGvE8YXvPFwBFATxhe88XAEUPyJznkL4RjIY66PFBD4peJv74hG7Id-rWB6Qf_szNi9&_nc_ohc=oufNZVexQKgAX98XyuA&_nc_ht=scontent.fdac155-1.fna&oh=00_AfAoNT4dy258VDKk38xJU28gHJMFBsGDDiKusB9WUreZHw&oe=64AF739F",
    },
  },
  {
    id: 4,
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/357552306_296814326251118_8371074116428486341_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH0nJmA1ZAMij1ILpA9u-F5hFimxPUb-NqEWKbE9Rv42rzgjfb4mrAykvquk2JkdRDj7n7do1ktEvcZPmIAjL3-&_nc_ohc=BCdrA6pLvkUAX98ZoDc&_nc_ht=scontent.fdac155-1.fna&oh=00_AfAYMobD69ulOxwitkOED1TqITwEL8hK9kSjXJx5vXc-lw&oe=64AFD0E1",
    content: `রোগ শোকে মানুষ বুড়ো বয়সে ঘুরতে পারে না তাই এখন ঘুরছি। 
    <br>
    পারলে আপনিও ঘোরেন।`,
    like: "122 Like",
    comment: "30 Comment",
    timeAgo: "1hr 10min Ago",
    author: {
      name: "Samim Hasan",
      photo:
        "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/354183749_283607390905145_1531860340793726127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEXIssho1wFwAubkrzuTnt6OgbWlydF_zs6BtaXJ0X_O2nizbAmxgOGLe6wncSUyKcwMe5JkrFBdQUBG6Qs-jIt&_nc_ohc=WIxFWxjDbGEAX_kaZ3J&_nc_ht=scontent.fdac155-1.fna&oh=00_AfAAMHf1gIGsXjIr3jWhDzyMdhQJbhyeWF3E2MB0wkduHQ&oe=64AE941D",
    },
  },
  {
    id: 5,
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/357735999_579731747662028_1691807544792790387_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFb9vIX4SDfCl0izqBgbbevBmmkT8C9AbgGaaRPwL0BuGoEKUz_4iHT3Qt8E70tL2HkRqYMA0wpg-fjaQEsiAok&_nc_ohc=cR0-XlVCzPkAX9tUumJ&_nc_ht=scontent.fdac155-1.fna&oh=00_AfDf-zbZ4NYAr5FHhaXeREEGaoaNVDXvH6FL6nuWX9yY-A&oe=64AE6340",
    content: `ক্যাপশন: ১২ তারিখ থেকে শুরু হচ্ছে জব ও <br> 
    সেকেন্ড টাইম অ্যাডমিশন ব্যাচ।💪`,
    like: "600 Like",
    comment: "152 Comment",
    timeAgo: "60 min Ago",
    author: {
      name: "তানভীর স্যার",
      photo:
        "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/277800099_517341770040827_1004047823359428760_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGewsoE06IiG6iaVBFE7HefVDT5xF5l8MpUNPnEXmXwyq2VXL_CIAdW6QAA3FCeXto8dgycvmSI4Ma5FPLi3qJQ&_nc_ohc=UgraEulZVQwAX9Jm7bJ&_nc_ht=scontent.fdac155-1.fna&oh=00_AfCG5JtWO4WYW0NEtWMJdRS6XQpdi_TcyU4ExoSBrxKXCA&oe=64AE483F",
    },
  },
  {
    id: 6,
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/356388828_827019888777272_376331518901859242_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE_OjZDc9mV8rk8zV6wlZ1mQnPHgoyDWjxCc8eCjINaPAcTs3bqNWLLK1aCq9FZnB6NS_aMDJZVIesoAKTC6cW3&_nc_ohc=NSlL7Q8GQVMAX8vyw-s&_nc_ht=scontent.fdac155-1.fna&oh=00_AfDVTOYLpb1VXPMOQAH2jiKdwBHMqjWMnXSQanlbqadRjw&oe=64AF187A",
    content: `বিমান বাংলাদেশ এয়ারলাইন্সের ড্রিমলাইনের চড়ে কানাডা থেকে ঢাকা আসলাম।`,
    like: "10000 Like",
    comment: "5000 Comment",
    timeAgo: "50 min Ago",
    author: {
      name: "Shakib Al Hasan",
      photo:
        "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/345650734_1938987979801695_5251002386057623293_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFlIyHpEsakXGjoLPurN82cFzqRUb0idbYXOpFRvSJ1tk_S8uwhhiOFuvO8GG98DsHpRPD_zs5JrgpPGNfJoq6h&_nc_ohc=rohbUs1AARwAX_Hfurm&_nc_ht=scontent.fdac155-1.fna&oh=00_AfCB90RFeoY_tJxUzQSjtSxxSy7cOWqepXIQ26sT63DClQ&oe=64AFF56E",
    },
  },
  {
    id: 7,
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/356410176_843690297108112_1410572305187332858_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHagC3zaTmmjDsAky7tVFa0IE5O7z5qN4IgTk7vPmo3goJrs-8pGOdacJb202BHmO0OR5seaWhF-WKxIUAxvKR1&_nc_ohc=rzX2vvj1Je8AX-M6UIg&_nc_ht=scontent.fdac155-1.fna&oh=00_AfDqthe30T0bfLiBPytg-mFd9TvpjetXN0VWkEoT8s9few&oe=64AFFCF2",
    content: `বৃষ্টি বিলাস ২.০ <br>
    বৃষ্টিতে ফুটবল চলুক 🔥`,
    like: "12000 Like",
    comment: "3000 Comment",
    timeAgo: "40 min Ago",
    author: {
      name: "Ayman Sadiq",
      photo:
        "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/233664726_383223989821414_7740906307789654109_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGi4VwVjS6bNXKNh8SzHAmUbmpGUJbS9-puakZQltL36sel4Rm1x1-K-kU8jvxb5qSrTTLEG0siBebD_850ccpf&_nc_ohc=ZluDNXgXKbIAX83iepq&_nc_ht=scontent.fdac155-1.fna&oh=00_AfCVwH2NDYSlZ2f7Xn_AKR5yuaavDPvKlXqmyHf-TazXYQ&oe=64AE4AC6",
    },
  },
  {
    id: 8,
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/328632807_555840636488601_7570545458770597537_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF2aGtf5PQhVKf-6ByoujvxQD2wLTUjAfdAPbAtNSMB96K8iiwp-e8qwKla0xo7FAI-7_c2GxD5OQmBj6JnA07o&_nc_ohc=6IJCuhsr7hIAX_DDbzb&_nc_ht=scontent.fdac155-1.fna&oh=00_AfA0RGFzYbhTfTDgqeN3keCHvy5hiRZOtfE-ynugQDG_Gw&oe=64B0054D",
    content: `২০২২ সালে আমি যে ২২ টি বই পড়েছি।`,
    like: "1200 Like",
    comment: "400 Comment",
    timeAgo: "30 min Ago",
    author: {
      name: "Jhankar Mahbub",
      photo:
        "https://scontent.fdac155-1.fna.fbcdn.net/v/t1.6435-9/120894323_197059875119957_6342630029659575816_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEalNJuWm_zjj6NxFvhtgilKV-wUZZMoFspX7BRlkygW6ZgWbXKQP3ne-oAiPb1HOQ5ae8TZWtz_baWHomXQghs&_nc_ohc=MWLFP18Gm90AX8Acz_q&_nc_ht=scontent.fdac155-1.fna&oh=00_AfDsSjo5QvLRRrRRIhiQNrVfVgShj1i2fdFukHzFzqKchw&oe=64D1B040",
    },
  },
  {
    id: 9,
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/350320141_1294311048170075_4798580925845368658_n.jpg?stp=cp6_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGDV0XcTzcw5ffNnYvm1P89aNmIuTJ7zdBo2Yi5MnvN0KkOdaSKyoO7uFZKx0BX64UTH4DEio_5cXgYsVskNTLb&_nc_ohc=TuTt-sgzp3MAX88Y4pr&_nc_ht=scontent.fdac155-1.fna&oh=00_AfD_cmS61phCjQGki6jttKYOeNWRxflfk9e2qsU0UkFBSw&oe=64ADA465",
    content: `শুভ জন্মদিন প্রাণপ্রিয় স্যার 😊🥳
    আর একটা জন্মদিন ঠিকিই গেলো স্যার, কিন্তু এখনো JS এর ভিডিও এলো না 😀 <br>
    @আশরাফুল হক`,
    like: "5000 Like",
    comment: "3000 Comment",
    timeAgo: "20 min Ago",
    author: {
      name: "Jillur Rahman",
      photo:
        "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/272630632_487252002908466_5894533374717730217_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHGDTaD9KQJ-NfDrFc_eIfvDimt4UwJMykOKa3hTAkzKRg2oXOyLw_v9Q3uB1CFHcdR2F7d4NRVchbz5Ecf4thI&_nc_ohc=6RZkZ8p4VrMAX_sBodq&_nc_oc=AQnY4T_9fV_ANQipxy-y1NvTNY-8ObFIBes4rm7bVPUMGP5zyPq-hsJ7bZ_XMzrczjE&_nc_ht=scontent.fdac155-1.fna&oh=00_AfAKEi_pU1ouOKC_8o3I3Kwahdj7u1MtxdrCH1Y3vALKgA&oe=64AF5516",
    },
  },
  {
    id: 10,
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/358124732_10224593205357364_3723954789401690685_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGZz9ZFyeFQr3EIs2zfK9lZ9v0tb8XrBQP2_S1vxesFA_CY7ApGJ3xb_lzN2Ddg14F2DffLF9IaD5fuQoDUKBSA&_nc_ohc=X-sP3QFuvGAAX9SAccu&_nc_ht=scontent.fdac155-1.fna&oh=00_AfCbMqlNKonJAehde8CKVbaB6uU6CSPgoNlrHIcYKdtIZw&oe=64ADDF89",
    content: `হুট করে❤️💙💚`,
    like: "1200 Like",
    comment: "300 Comment",
    timeAgo: "10 min Ago",
    author: {
      name: "আশরাফুল হক",
      photo:
        "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/333936078_1361956414655948_834213367116914942_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG8azsKzzQhGQjIQLzKgHk6kYHgC5X85UeRgeALlfzlRxHquwcXtqkBR1BsJ98ArsD0UZ6fDIVqaST2bBW8a7zd&_nc_ohc=DZLdnJbX6aIAX_wPCyG&_nc_ht=scontent.fdac155-1.fna&oh=00_AfBtT80NUHbWS4gQ-5QpH6aeG4vFZPsXPQyLUiOLehYwGQ&oe=64AF0C91",
    },
  },
];
