// Global gallery variable
let gallery;

class Gallery {
    constructor() {
        this.items = [];
        this.currentFilter = 'all';
        this.currentIndex = 0;
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.mediaFiles = [
  {
    id: 1,
    type: "image",
    src: "https://drive.usercontent.google.com/download?id=1TOs7A0HEtT6VbQmGZBNi2jIIptBUkUkg",
    title: "Image 1",
    category: "images"
  },
  {
    id: 2,
    type: "image",
    src: "https://drive.google.com/uc?id=1EexsPQ5KMx4ra9crEfroisj2NbVas7oX",
    title: "Image 2",
    category: "images"
  },
  {
    id: 3,
    type: "image",
    src: "https://drive.google.com/uc?id=108vKr3LLaH1EUxcuAN9KAx__QdYPB4-G",
    title: "Image 3",
    category: "images"
  },
  {
    id: 4,
    type: "image",
    src: "https://drive.google.com/uc?id=1cNzwNpGgiJLiVCiqBQstyNpalDgnICzd",
    title: "Image 4",
    category: "images"
  },
  {
    id: 5,
    type: "image",
    src: "https://drive.google.com/uc?id=1KA7WCIwWHnTpnK38YEdQVGfggyCeWxgO",
    title: "Image 5",
    category: "images"
  },
  {
    id: 6,
    type: "image",
    src: "https://drive.google.com/uc?id=1ek59Fn3kKyfjW-sGDAOhQATVL7Py3lTs",
    title: "Image 6",
    category: "images"
  },
  {
    id: 7,
    type: "image",
    src: "https://drive.google.com/uc?id=1QdUgQNS8o4JtH_8fXbYukhHann1ZugGF",
    title: "Image 7",
    category: "images"
  },
  {
    id: 8,
    type: "image",
    src: "https://drive.google.com/uc?id=1944UuxpolWeBVfPZJrSjQZoHYGcv0J8J",
    title: "Image 8",
    category: "images"
  },
  {
    id: 9,
    type: "image",
    src: "https://drive.google.com/uc?id=1fB1B5ey2_CC79SzCOHXbEu0OwrY-6hK1",
    title: "Image 9",
    category: "images"
  },
  {
    id: 10,
    type: "image",
    src: "https://drive.google.com/uc?id=1123fPoIKhCmAgRisMkgfpczR7d4rFGYh",
    title: "Image 10",
    category: "images"
  },
  {
    id: 11,
    type: "image",
    src: "https://drive.google.com/uc?id=1lfCNIucxccsA-Zv5dgTAPVw3G3cKB58x",
    title: "Image 11",
    category: "images"
  },
  {
    id: 12,
    type: "image",
    src: "https://drive.google.com/uc?id=1a6mZVQXWH3xwe-JRnwg-NOWuONa3fJQh",
    title: "Image 12",
    category: "images"
  },
  {
    id: 13,
    type: "image",
    src: "https://drive.google.com/uc?id=1w2pP21AJ_308wS-HjU0EN4O_3eSNyjB9",
    title: "Image 13",
    category: "images"
  },
  {
    id: 14,
    type: "image",
    src: "https://drive.google.com/uc?id=1tNUpeqBB0q7i4tia1YyAXsdIGpSI5CuR",
    title: "Image 14",
    category: "images"
  },
  {
    id: 15,
    type: "image",
    src: "https://drive.google.com/uc?id=1J90HS3x08tvt-me4eIZ2vXlP4taxpBPK",
    title: "Image 15",
    category: "images"
  },
  {
    id: 16,
    type: "image",
    src: "https://drive.google.com/uc?id=16nYNPzNf2Ly6RnwDZE5H8K2gr2H8ulI8",
    title: "Image 16",
    category: "images"
  },
  {
    id: 17,
    type: "image",
    src: "https://drive.google.com/uc?id=1E4k9eCGRAbqiDWi1CD2jC57Jm5Cell64",
    title: "Image 17",
    category: "images"
  },
  {
    id: 18,
    type: "image",
    src: "https://drive.google.com/uc?id=14xjFo5gC4aYXm6MAUG01nEfZTeso3gHg",
    title: "Image 18",
    category: "images"
  },
  {
    id: 19,
    type: "image",
    src: "https://drive.google.com/uc?id=1w2c4HlHv-VjezpSxmS4mupwbE0mr2MkS",
    title: "Image 19",
    category: "images"
  },
  {
    id: 20,
    type: "image",
    src: "https://drive.google.com/uc?id=1YSu_yaziRMgL9-oUvy23N8oytO6hkfq7",
    title: "Image 20",
    category: "images"
  },
  {
    id: 21,
    type: "image",
    src: "https://drive.google.com/uc?id=1keu2h7pOpHAh9by5ggJFjVFo_NXGRmXq",
    title: "Image 21",
    category: "images"
  },
  {
    id: 22,
    type: "image",
    src: "https://drive.google.com/uc?id=1HkwoMi0cybv3GohAgLHxJ7FDNY5BymGm",
    title: "Image 22",
    category: "images"
  },
  {
    id: 23,
    type: "image",
    src: "https://drive.google.com/uc?id=1DHEw34s7qN3fgk2tx-Od8I7vzvGzjB2G",
    title: "Image 23",
    category: "images"
  },
  {
    id: 24,
    type: "image",
    src: "https://drive.google.com/uc?id=1aBvxweV5AUH-nnJ8ac-eJf6OYOL9Xgwj",
    title: "Image 24",
    category: "images"
  },
  {
    id: 25,
    type: "image",
    src: "https://drive.google.com/uc?id=1zXOIG6xij1Ox4IVhPl3bkHAlzUYZhXw9",
    title: "Image 25",
    category: "images"
  },
  {
    id: 26,
    type: "image",
    src: "https://drive.google.com/uc?id=1eeLdiwosVzPFm2usPaiI4wkGrRSos0Ze",
    title: "Image 26",
    category: "images"
  },
  {
    id: 27,
    type: "image",
    src: "https://drive.google.com/uc?id=1_QALFT8DJVcW4xQm2g3B94SWzagS7GoY",
    title: "Image 27",
    category: "images"
  },
  {
    id: 28,
    type: "image",
    src: "https://drive.google.com/uc?id=1KcVg3QBddlM0zlAk7xWLK5NQTkqhQA0P",
    title: "Image 28",
    category: "images"
  },
  {
    id: 29,
    type: "image",
    src: "https://drive.google.com/uc?id=16fFD0IRSPDfNHBwljLRjt1a5ZT0ELWsO",
    title: "Image 29",
    category: "images"
  },
  {
    id: 30,
    type: "image",
    src: "https://drive.google.com/uc?id=1wWkLK3LmRRzuM8IMnXYSnqdfM_0Vle6J",
    title: "Image 30",
    category: "images"
  },
  {
    id: 31,
    type: "image",
    src: "https://drive.google.com/uc?id=1l4ePDesBmTQRncy-7J3ZNVb7OSU_wuPs",
    title: "Image 31",
    category: "images"
  },
  {
    id: 32,
    type: "image",
    src: "https://drive.google.com/uc?id=11QKObBu60fZc5L06CrZUERzyaDpLh8BD",
    title: "Image 32",
    category: "images"
  },
  {
    id: 33,
    type: "image",
    src: "https://drive.google.com/uc?id=1Q-Q_7riqXL-Umax4UTYf3-ptD9FgjK_7",
    title: "Image 33",
    category: "images"
  },
  {
    id: 34,
    type: "image",
    src: "https://drive.google.com/uc?id=1acuMopSQzJB9stiWUirUPdYMcjgRah2F",
    title: "Image 34",
    category: "images"
  },
  {
    id: 35,
    type: "image",
    src: "https://drive.google.com/uc?id=1tQejiLouLL8E7adKJM1CFUBNatZXk6dU",
    title: "Image 35",
    category: "images"
  },
  {
    id: 36,
    type: "image",
    src: "https://drive.google.com/uc?id=17w8Y2mc4429je3PSZHNlJ4LYYnXzOOVd",
    title: "Image 36",
    category: "images"
  },
  {
    id: 37,
    type: "image",
    src: "https://drive.google.com/uc?id=1EjI62TZHHSs_WFOu75HZQc3TTuSgKege",
    title: "Image 37",
    category: "images"
  },
  {
    id: 38,
    type: "image",
    src: "https://drive.google.com/uc?id=1Ntb6tGyKvUO6VcXTvAKYSEFuLpVICkcb",
    title: "Image 38",
    category: "images"
  },
  {
    id: 39,
    type: "image",
    src: "https://drive.google.com/uc?id=1mtNbU-UQyTDxS_WiL6WoOc0o-E6bcTQP",
    title: "Image 39",
    category: "images"
  },
  {
    id: 40,
    type: "image",
    src: "https://drive.google.com/uc?id=1f7JsPfD4J_29IDrZcoaGuf1bEnFiYWbw",
    title: "Image 40",
    category: "images"
  },
  {
    id: 41,
    type: "image",
    src: "https://drive.google.com/uc?id=1TpXwQavzgRoDs-5lWk4gt92LNDB5-aIl",
    title: "Image 41",
    category: "images"
  },
  {
    id: 42,
    type: "image",
    src: "https://drive.google.com/uc?id=1Cnb8p8DFrlXt7GX5_GGNlSvOZYtDtPsG",
    title: "Image 42",
    category: "images"
  },
  {
    id: 43,
    type: "image",
    src: "https://drive.google.com/uc?id=1fLG3NSMgMqtdayCEadOQxc0r5f1VGOJs",
    title: "Image 43",
    category: "images"
  },
  {
    id: 44,
    type: "image",
    src: "https://drive.google.com/uc?id=1o_HmLFe9WKk_fquMv7S6EORi3yyYYEf5",
    title: "Image 44",
    category: "images"
  },
  {
    id: 45,
    type: "image",
    src: "https://drive.google.com/uc?id=1c5HpssWmsh7cg38CpkK9LhHsaEETjCIn",
    title: "Image 45",
    category: "images"
  },
  {
    id: 46,
    type: "image",
    src: "https://drive.google.com/uc?id=1nPf0ZxSGFSW2j1ridEmC1gMLrK7ap0cG",
    title: "Image 46",
    category: "images"
  },
  {
    id: 47,
    type: "image",
    src: "https://drive.google.com/uc?id=1y9Kjc2rTbTuuIcySAcT75-3y-rg7J8Qd",
    title: "Image 47",
    category: "images"
  },
  {
    id: 48,
    type: "image",
    src: "https://drive.google.com/uc?id=1Ib84pIDHJsfRPte9GcaeqsFilvt9EcHl",
    title: "Image 48",
    category: "images"
  },
  {
    id: 49,
    type: "image",
    src: "https://drive.google.com/uc?id=1nkcVLoK0dsMooJjwdFCXmoBpNAdX6fSo",
    title: "Image 49",
    category: "images"
  },
  {
    id: 50,
    type: "image",
    src: "https://drive.google.com/uc?id=1eJEYaq3CGCijh3D67PHDJXXM-fvnRaAd",
    title: "Image 50",
    category: "images"
  },
  {
    id: 51,
    type: "image",
    src: "https://drive.google.com/uc?id=1Xl4Kfsuc9pUVTqXOHRxdR3tbltULsZLT",
    title: "Image 51",
    category: "images"
  },
  {
    id: 52,
    type: "image",
    src: "https://drive.google.com/uc?id=1FV8It8HQFj0rwnMg803iDeqgD1n_NuBW",
    title: "Image 52",
    category: "images"
  },
  {
    id: 53,
    type: "image",
    src: "https://drive.google.com/uc?id=1bDLUwyU90RFxiBHYk9XSwntDqtPWQ_D6",
    title: "Image 53",
    category: "images"
  },
  {
    id: 54,
    type: "image",
    src: "https://drive.google.com/uc?id=1nDmj6y1hP-p-TKakOgqy2FHD2MprQyaG",
    title: "Image 54",
    category: "images"
  },
  {
    id: 55,
    type: "image",
    src: "https://drive.google.com/uc?id=1v58tf62w1xAl1izWG2dC9KUdKfWaCvfj",
    title: "Image 55",
    category: "images"
  },
  {
    id: 56,
    type: "image",
    src: "https://drive.google.com/uc?id=13Mky1ODZfm_3Kho_qfJMrAcoJ3pHPL7G",
    title: "Image 56",
    category: "images"
  },
  {
    id: 57,
    type: "image",
    src: "https://drive.google.com/uc?id=1tzlhMsye5CuNfsj6c_UUSatIgcgcuhFK",
    title: "Image 57",
    category: "images"
  },
  {
    id: 58,
    type: "image",
    src: "https://drive.google.com/uc?id=1hy846V5IqF0Jmt67WPVgLrX_B_jEY3mr",
    title: "Image 58",
    category: "images"
  },
  {
    id: 59,
    type: "image",
    src: "https://drive.google.com/uc?id=1TBuM6jYypNW9Ldv5Y6l54IetGfWnVyJS",
    title: "Image 59",
    category: "images"
  },
  {
    id: 60,
    type: "image",
    src: "https://drive.google.com/uc?id=1NN7eLjGJWKvOeuDZ2dK8bZS822tOuZgK",
    title: "Image 60",
    category: "images"
  },
  {
    id: 61,
    type: "image",
    src: "https://drive.google.com/uc?id=1LaAddNybo4ZvwmtSx7MDePvA1_dLJf53",
    title: "Image 61",
    category: "images"
  },
  {
    id: 62,
    type: "image",
    src: "https://drive.google.com/uc?id=1Tbz-b6dRaftCo0vbdvIAxoQSap2w0Cuq",
    title: "Image 62",
    category: "images"
  },
  {
    id: 63,
    type: "image",
    src: "https://drive.google.com/uc?id=1qiZ6F8SiQ2N4TlAcf7kc25_M0ee1KfGY",
    title: "Image 63",
    category: "images"
  },
  {
    id: 64,
    type: "image",
    src: "https://drive.google.com/uc?id=1I7i2CjEbbl70rcuybAA6NW25r45Ul742",
    title: "Image 64",
    category: "images"
  },
  {
    id: 65,
    type: "image",
    src: "https://drive.google.com/uc?id=1ZUOPykgPjOMBZN5u6_RKyIOOHEdba9m8",
    title: "Image 65",
    category: "images"
  },
  {
    id: 66,
    type: "image",
    src: "https://drive.google.com/uc?id=1JXsRdit8KIm52nUf9DK0yd_d_j22pjj-",
    title: "Image 66",
    category: "images"
  },
  {
    id: 67,
    type: "image",
    src: "https://drive.google.com/uc?id=1gVMVU8a6gcveN-c4UGVHNaDaAtAfaoHx",
    title: "Image 67",
    category: "images"
  },
  {
    id: 68,
    type: "image",
    src: "https://drive.google.com/uc?id=1vziTq55MPIqYFFMXfW_Y2mvVR755LJa_",
    title: "Image 68",
    category: "images"
  },
  {
    id: 69,
    type: "image",
    src: "https://drive.google.com/uc?id=1EOheN2-3P7OnRfrcgFpNRMRy_P5N2nOt",
    title: "Image 69",
    category: "images"
  },
  {
    id: 70,
    type: "image",
    src: "https://drive.google.com/uc?id=1osvwvepH8QDEKYX3mEPPz7Ppjr_vWXLC",
    title: "Image 70",
    category: "images"
  },
  {
    id: 71,
    type: "image",
    src: "https://drive.google.com/uc?id=1rapGQ496qEWTWHZN1h4aHaBwvHR4AoGQ",
    title: "Image 71",
    category: "images"
  },
  {
    id: 72,
    type: "image",
    src: "https://drive.google.com/uc?id=19puDT8RiDQ3GYXkl3-fxuIvhtgTKCfmg",
    title: "Image 72",
    category: "images"
  },
  {
    id: 73,
    type: "image",
    src: "https://drive.google.com/uc?id=1mSPrHMgrKzTnTnSdofmO3sqXNi00rj4T",
    title: "Image 73",
    category: "images"
  },
  {
    id: 74,
    type: "image",
    src: "https://drive.google.com/uc?id=1JdzuZwEbmyqWLh3oUgzgJaXMff0O_9iO",
    title: "Image 74",
    category: "images"
  },
  {
    id: 75,
    type: "image",
    src: "https://drive.google.com/uc?id=1He46VJyxIJ2N4D3jJ8cAtzNoOsjImgIu",
    title: "Image 75",
    category: "images"
  },
  {
    id: 76,
    type: "image",
    src: "https://drive.google.com/uc?id=1L8C5aIzoXsSZ9YYn6RqvMjpHPjDFjUuY",
    title: "Image 76",
    category: "images"
  },
  {
    id: 77,
    type: "image",
    src: "https://drive.google.com/uc?id=1G608-csjqbSIPdM2HH2rfYDDtpqj6v1Z",
    title: "Image 77",
    category: "images"
  },
  {
    id: 78,
    type: "image",
    src: "https://drive.google.com/uc?id=13LSmsDJd4y7NJGdiN1pevmmZTBb3fMow",
    title: "Image 78",
    category: "images"
  },
  {
    id: 79,
    type: "image",
    src: "https://drive.google.com/uc?id=1i2KSpEKWXH0elIwH1bfCz1zuBnTl7mQ6",
    title: "Image 79",
    category: "images"
  },
  {
    id: 80,
    type: "image",
    src: "https://drive.google.com/uc?id=1cUEH9Ktnr757wEalsvXA-Zc3I4dZxzSh",
    title: "Image 80",
    category: "images"
  },
  {
    id: 81,
    type: "image",
    src: "https://drive.google.com/uc?id=1CXyqnIHs0chJudLoCqpMUMvSi86PCA_W",
    title: "Image 81",
    category: "images"
  },
  {
    id: 82,
    type: "image",
    src: "https://drive.google.com/uc?id=1JhVsbU0VrYi8YgAaq-Gl50xwl3uPVztj",
    title: "Image 82",
    category: "images"
  },
  {
    id: 83,
    type: "image",
    src: "https://drive.google.com/uc?id=1YK2XQPOhrnOnkoJqQrdiBAFs9_pfdM-t",
    title: "Image 83",
    category: "images"
  },
  {
    id: 84,
    type: "image",
    src: "https://drive.google.com/uc?id=10mzHB61VEVNvyEh3BDSloFOCPRkcBwJY",
    title: "Image 84",
    category: "images"
  },
  {
    id: 85,
    type: "image",
    src: "https://drive.google.com/uc?id=1pLB2Cgbwa5KLXN0R7D3BlyMMJbIWEyds",
    title: "Image 85",
    category: "images"
  },
  {
    id: 86,
    type: "image",
    src: "https://drive.google.com/uc?id=1C_9jpDuW7rgzXgXXpuhhjLntB8F-kttV",
    title: "Image 86",
    category: "images"
  },
  {
    id: 87,
    type: "image",
    src: "https://drive.google.com/uc?id=1iTQ6p7nLFelLNqJPX370HbEwUUjPBYk9",
    title: "Image 87",
    category: "images"
  },
  {
    id: 88,
    type: "image",
    src: "https://drive.google.com/uc?id=1v971rbuTsQDrirP21bzBa-ZeEA_-ZGog",
    title: "Image 88",
    category: "images"
  },
  {
    id: 89,
    type: "image",
    src: "https://drive.google.com/uc?id=14Htd9IG9ZvlZ4KXfRceQLSZLt8GOsb3n",
    title: "Image 89",
    category: "images"
  },
  {
    id: 90,
    type: "image",
    src: "https://drive.google.com/uc?id=1N2uGdN3HEsoiFgkHLdF2vqNP4b1XPICu",
    title: "Image 90",
    category: "images"
  },
  {
    id: 91,
    type: "image",
    src: "https://drive.google.com/uc?id=1osAo_D9L8f70dVYr8H6M-3j6sC2K2EaX",
    title: "Image 91",
    category: "images"
  },
  {
    id: 92,
    type: "image",
    src: "https://drive.google.com/uc?id=132BQTZx5KrEnMXyHFY8F9vRMoheLoMN2",
    title: "Image 92",
    category: "images"
  },
  {
    id: 93,
    type: "image",
    src: "https://drive.google.com/uc?id=1jAFOBkyOKZqS25eyYalqVg0xtQYkIlWl",
    title: "Image 93",
    category: "images"
  },
  {
    id: 94,
    type: "image",
    src: "https://drive.google.com/uc?id=1wvbccFUN-mna_xVZropap4117v0tG5ar",
    title: "Image 94",
    category: "images"
  },
  {
    id: 95,
    type: "image",
    src: "https://drive.google.com/uc?id=1DFCfP_HKkJWDL-3RKnYudcQpdw9VWqYn",
    title: "Image 95",
    category: "images"
  },
  {
    id: 96,
    type: "image",
    src: "https://drive.google.com/uc?id=1jbcpPSUiED7IZ4B_rAgF_LB11qrIM9kf",
    title: "Image 96",
    category: "images"
  },
  {
    id: 97,
    type: "image",
    src: "https://drive.google.com/uc?id=1Ah2ixIDc5SVCwg7fWMF6XBS2InoSjZbP",
    title: "Image 97",
    category: "images"
  },
  {
    id: 98,
    type: "image",
    src: "https://drive.google.com/uc?id=18MnP6RfG3dTVRs0dv5-iqyxrkGBb5rP_",
    title: "Image 98",
    category: "images"
  },
  {
    id: 99,
    type: "image",
    src: "https://drive.google.com/uc?id=1eou7Neejmj1FN6d88N_DHL34wgv5k7Jk",
    title: "Image 99",
    category: "images"
  },
  {
    id: 100,
    type: "image",
    src: "https://drive.google.com/uc?id=1q52xhHOWsmUNy6_0GotZArQn7ovVnnOJ",
    title: "Image 100",
    category: "images"
  },
  {
    id: 101,
    type: "image",
    src: "https://drive.google.com/uc?id=1CO4Zb-GQ98bZN9q4UkvWTTWuLqkhzsJ9",
    title: "Image 101",
    category: "images"
  },
  {
    id: 102,
    type: "image",
    src: "https://drive.google.com/uc?id=1UeOpJQ7wwoIr2hyrtzG0lrRJXl031Dm4",
    title: "Image 102",
    category: "images"
  },
  {
    id: 103,
    type: "image",
    src: "https://drive.google.com/uc?id=1jsya2H5XwEoiR4n_JJVy0860uP_8PrcQ",
    title: "Image 103",
    category: "images"
  },
  {
    id: 104,
    type: "image",
    src: "https://drive.google.com/uc?id=1BG32HbSZmDL0UBIeRo6pEIJ7IaG4IJeN",
    title: "Image 104",
    category: "images"
  },
  {
    id: 105,
    type: "image",
    src: "https://drive.google.com/uc?id=10Pug_J_H6Qb0sJmByCOM6RvjOGsCQU5g",
    title: "Image 105",
    category: "images"
  },
  {
    id: 106,
    type: "image",
    src: "https://drive.google.com/uc?id=1y_quL28SxS_jGCW9BjSS_20DWMtVB8gM",
    title: "Image 106",
    category: "images"
  },
  {
    id: 107,
    type: "image",
    src: "https://drive.google.com/uc?id=1VqSt_5TpAwHKhtk4Fb11TFR7Dti7yjHu",
    title: "Image 107",
    category: "images"
  },
  {
    id: 108,
    type: "image",
    src: "https://drive.google.com/uc?id=1mhwc9R6yI-f_01TAVY9zizi4tHO-doPH",
    title: "Image 108",
    category: "images"
  },
  {
    id: 109,
    type: "image",
    src: "https://drive.google.com/uc?id=1uVvNNyoSMYvqJT41O8H0EPzgF1rx0aB8",
    title: "Image 109",
    category: "images"
  },
  {
    id: 110,
    type: "image",
    src: "https://drive.google.com/uc?id=1R2U-GDyVSv5dfo0dNDPu3hhmxmQRN3In",
    title: "Image 110",
    category: "images"
  },
  {
    id: 111,
    type: "image",
    src: "https://drive.google.com/uc?id=1Jy5w4jHEEeWF99xAItiCsVBeme5SGOAh",
    title: "Image 111",
    category: "images"
  },
  {
    id: 112,
    type: "image",
    src: "https://drive.google.com/uc?id=1Ir8i0c5srgWNbyILbCndpHd2hwNf4Mbf",
    title: "Image 112",
    category: "images"
  },
  {
    id: 113,
    type: "image",
    src: "https://drive.google.com/uc?id=1uBeldxzl5feVzxl7ynrT0KXhDPFofT2P",
    title: "Image 113",
    category: "images"
  },
  {
    id: 114,
    type: "image",
    src: "https://drive.google.com/uc?id=1NUudEv6q-B0lRlew9jYwQ1m8DNOdLAYt",
    title: "Image 114",
    category: "images"
  },
  {
    id: 115,
    type: "image",
    src: "https://drive.google.com/uc?id=1aiNQdSb3TFwTlKawwMDIaglxRFo-Nxig",
    title: "Image 115",
    category: "images"
  },
  {
    id: 116,
    type: "image",
    src: "https://drive.google.com/uc?id=1KMV5cqSPaa2CfrsWsBtxqCD_cNmPJsrG",
    title: "Image 116",
    category: "images"
  },
  {
    id: 117,
    type: "image",
    src: "https://drive.google.com/uc?id=1kDq9HRg1nYejmwHsS-znjFGKeFq0q6JO",
    title: "Image 117",
    category: "images"
  },
  {
    id: 118,
    type: "image",
    src: "https://drive.google.com/uc?id=1NZEjlTVzgt1v8cInELlfEYP507v5rwGL",
    title: "Image 118",
    category: "images"
  },
  {
    id: 119,
    type: "image",
    src: "https://drive.google.com/uc?id=1cTA6Gt8Av14vhSWVNVTFjumiMieGnHBv",
    title: "Image 119",
    category: "images"
  },
  {
    id: 120,
    type: "image",
    src: "https://drive.google.com/uc?id=1aHMV7WPfDgSIpwl1l5hZiCcmcn8Vr0ZK",
    title: "Image 120",
    category: "images"
  },
  {
    id: 121,
    type: "image",
    src: "https://drive.google.com/uc?id=110yH7VOpdx3hj1Xx3BY8JVXHmAhGx4cU",
    title: "Image 121",
    category: "images"
  },
  {
    id: 122,
    type: "image",
    src: "https://drive.google.com/uc?id=1lEVvUvZU8053AOHt8vbFDqpxzeQzvFnj",
    title: "Image 122",
    category: "images"
  },
  {
    id: 123,
    type: "image",
    src: "https://drive.google.com/uc?id=1Z4lCHsmTQ4ZJQhrZpfBbMm2LJlrJne2v",
    title: "Image 123",
    category: "images"
  },
  {
    id: 124,
    type: "image",
    src: "https://drive.google.com/uc?id=1LaTrgmUPBBEBW73bP6ySTZTiJczETc7e",
    title: "Image 124",
    category: "images"
  },
  {
    id: 125,
    type: "image",
    src: "https://drive.google.com/uc?id=1UB6nlVf6zwxH1aWjy4-amEiZKC4HtoQp",
    title: "Image 125",
    category: "images"
  },
  {
    id: 126,
    type: "image",
    src: "https://drive.google.com/uc?id=1K7iXL0ggxp9is6jEQo5ozqRPJphpkNnu",
    title: "Image 126",
    category: "images"
  },
  {
    id: 127,
    type: "image",
    src: "https://drive.google.com/uc?id=18XQn_eiuIw7nwIUPEEangrvbWk7lLcta",
    title: "Image 127",
    category: "images"
  },
  {
    id: 128,
    type: "image",
    src: "https://drive.google.com/uc?id=1hqBC_jzvN7uwja8eUa53GRKtnGCdtbU4",
    title: "Image 128",
    category: "images"
  },
  {
    id: 129,
    type: "image",
    src: "https://drive.google.com/uc?id=1nZO5vFkCKTCiRMklhjDTmdJtarUVc_08",
    title: "Image 129",
    category: "images"
  },
  {
    id: 130,
    type: "image",
    src: "https://drive.google.com/uc?id=1qfDdTg5snmrCKterF4ISW7YZPhAA-XLI",
    title: "Image 130",
    category: "images"
  },
  {
    id: 131,
    type: "image",
    src: "https://drive.google.com/uc?id=1sOA6zC5PTgVwPwFm2G953BwUAcKxymjw",
    title: "Image 131",
    category: "images"
  },
  {
    id: 132,
    type: "image",
    src: "https://drive.google.com/uc?id=1pwuGQwAkMplfBk3jtuH2RnBGCxGMjbYs",
    title: "Image 132",
    category: "images"
  },
  {
    id: 133,
    type: "image",
    src: "https://drive.google.com/uc?id=1KKznt_Wkw_FEMpBigExxH403YVdrMktA",
    title: "Image 133",
    category: "images"
  },
  {
    id: 134,
    type: "image",
    src: "https://drive.google.com/uc?id=1npS0sPdqF29Uw0_TfqdHZYzyKVtYZawz",
    title: "Image 134",
    category: "images"
  },
  {
    id: 135,
    type: "image",
    src: "https://drive.google.com/uc?id=1Tpbd77P1TerTvV56vdsh9jHZbzbhe_pa",
    title: "Image 135",
    category: "images"
  },
  {
    id: 136,
    type: "image",
    src: "https://drive.google.com/uc?id=1ENOiyazU95Qsd-ex2nTWzuc-RC92qmUz",
    title: "Image 136",
    category: "images"
  },
  {
    id: 137,
    type: "image",
    src: "https://drive.google.com/uc?id=1QcoEKPfSWQPIQ4_-dci6MHd-XJ2gsr5J",
    title: "Image 137",
    category: "images"
  },
  {
    id: 138,
    type: "image",
    src: "https://drive.google.com/uc?id=1c5heq2Ukca7znrjOvByO6J2B7yR7uJQ5",
    title: "Image 138",
    category: "images"
  },
  {
    id: 139,
    type: "image",
    src: "https://drive.google.com/uc?id=129ZXFdK6rjVNtWRtbQPItwYyV-4S2Nn4",
    title: "Image 139",
    category: "images"
  },
  {
    id: 140,
    type: "image",
    src: "https://drive.google.com/uc?id=1rYxVfI72lRGga8SM4wQ1KmyQEHfr31Pw",
    title: "Image 140",
    category: "images"
  },
  {
    id: 141,
    type: "image",
    src: "https://drive.google.com/uc?id=1_XatuKo8EtxcHJiNddeSgIxKk7nm9KR5",
    title: "Image 141",
    category: "images"
  },
  {
    id: 142,
    type: "image",
    src: "https://drive.google.com/uc?id=1tg8FiXA6VMplayGv6IqYA5KTILUR9j0G",
    title: "Image 142",
    category: "images"
  },
        ];
        this.init();
    }

    init() {
        this.generateItems();
        this.renderGallery();
        this.bindEvents();
    }

    generateItems() {
        // Generate 100 placeholder images
        for (let i = 1; i <= 100; i++) {
            this.items.push({
                id: i,
                type: 'image',
                src: `https://picsum.photos/300/200?random=${i}`,
                title: `Image ${i}`,
                category: 'images'
            });
        }

        // Generate 2 placeholder reels
        for (let i = 1; i <= 2; i++) {
            this.items.push({
                id: 100 + i,
                type: 'video',
                src: `https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4`,
                title: `Reel ${i}`,
                category: 'reels'
            });
        }
    }

    convertToEmbedUrl(url) {
        const fileIdMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
        return fileIdMatch ? `https://drive.google.com/file/d/${fileIdMatch[1]}/preview` : url;
    }

    renderGallery() {
        this.items = this.mediaFiles
        const gallery = document.getElementById('gallery');
        const filteredItems = this.currentFilter === 'all' 
            ? this.items 
            : this.items.filter(item => item.category === this.currentFilter);

        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageItems = filteredItems.slice(startIndex, endIndex);

        gallery.innerHTML = pageItems.map((item, index) => `
            <div class="gallery-item loading" data-index="${this.items.indexOf(item)}" data-category="${item.category}">
                <div class="loading-spinner"></div>
                ${item.type === 'image' 
                    ? `<iframe src="${this.convertToEmbedUrl(item.src)}" frameborder="0" allowfullscreen></iframe>`
                    : `<video src="${item.src}" muted>
                         <source src="${item.src}" type="video/mp4">
                       </video>`
                }
                ${item.category === 'reels' ? '<div class="reel-indicator">REEL</div>' : ''}
                <div class="item-overlay">
                    <div class="item-type">${item.category.toUpperCase()}</div>
                    <div class="item-title">${item.title}</div>
                </div>
            </div>
        `).join('');

        this.setupLoadingHandlers();

        this.renderPagination(filteredItems.length);
    }

    renderPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / this.itemsPerPage);
        const pagination = document.getElementById('pagination');
        
        pagination.innerHTML = `
            <button ${this.currentPage === 1 ? 'disabled' : ''} onclick="gallery.changePage(${this.currentPage - 1})">Previous</button>
            <span>Page ${this.currentPage} of ${totalPages}</span>
            <button ${this.currentPage === totalPages ? 'disabled' : ''} onclick="gallery.changePage(${this.currentPage + 1})">Next</button>
        `;
    }

    changePage(page) {
        this.currentPage = page;
        this.renderGallery();
        this.bindGalleryItems();
        // Scroll to beginning of gallery grid with offset
        const main = document.querySelector('main');
        if (main) {
            main.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    bindEvents() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.currentPage = 1;
                this.renderGallery();
                this.bindGalleryItems();
            });
        });

        this.bindGalleryItems();
        this.bindModal();
    }

    setupLoadingHandlers() {
        document.querySelectorAll('.gallery-item iframe').forEach(iframe => {
            iframe.addEventListener('load', () => {
                const galleryItem = iframe.closest('.gallery-item');
                galleryItem.classList.remove('loading');
                galleryItem.classList.add('loaded');
            });

            iframe.addEventListener('error', () => {
                const galleryItem = iframe.closest('.gallery-item');
                galleryItem.classList.remove('loading');
                galleryItem.classList.add('loaded');
                // Optionally show an error state
                console.warn('Failed to load image:', iframe.src);
            });
        });

        document.querySelectorAll('.gallery-item video').forEach(video => {
            video.addEventListener('loadeddata', () => {
                const galleryItem = video.closest('.gallery-item');
                galleryItem.classList.remove('loading');
                galleryItem.classList.add('loaded');
            });
        });
    }

    bindGalleryItems() {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                this.openModal(index);
            });
        });
    }

    bindModal() {
        const modal = document.getElementById('modal');
        const closeBtn = document.querySelector('.close');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        closeBtn.addEventListener('click', () => this.closeModal());
        prevBtn.addEventListener('click', () => this.navigateModal(-1));
        nextBtn.addEventListener('click', () => this.navigateModal(1));

        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'block') {
                if (e.key === 'Escape') this.closeModal();
                if (e.key === 'ArrowLeft') this.navigateModal(-1);
                if (e.key === 'ArrowRight') this.navigateModal(1);
            }
        });
    }

    openModal(index) {
        this.currentIndex = index;
        const item = this.items[index];
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const modalVideo = document.getElementById('modal-video');

        if (item.type === 'image') {
            modalImg.src = this.convertToEmbedUrl(item.src);
            modalImg.style.display = 'block';
            modalVideo.style.display = 'none';
        } else {
            modalVideo.src = item.src;
            modalVideo.style.display = 'block';
            modalImg.style.display = 'none';
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Pause video if playing
        const modalVideo = document.getElementById('modal-video');
        modalVideo.pause();
    }

    navigateModal(direction) {
        this.currentIndex += direction;
        if (this.currentIndex < 0) this.currentIndex = this.items.length - 1;
        if (this.currentIndex >= this.items.length) this.currentIndex = 0;
        this.openModal(this.currentIndex);
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    gallery = new Gallery();
});
