// sample data for the app
const colors = {
  red: { accent: "#da2735", dark: "#7f1d1d" },
  orange: { accent: "#cc5400", dark: "#7c2d12" },
  yellow: { accent: "#ffae00", dark: "#78350f" },
  green: { accent: "#21c872", dark: "#14532d" },
  teal: { accent: "#2ee9d7", dark: "#134e4a" },
  blue: { accent: "#1e3a8a", dark: "#1e3a8a" },
  indigo: { accent: "#394bd5", dark: "#312e81" },
  purple: { accent: "#df24ff", dark: "#581c87" },
  pink: { accent: "#f33b73", dark: "#831843" },
  emerald: { accent: "#0c6e54", dark: "#064e3b" },
  rose: { accent: "#ed2377", dark: "#871b48" },
  gray: { accent: "#555555", dark: "#27272a" },
};

const playlists = [
  {
    id: "1",
    title: "Punjabi Mix",
    color: colors.teal,
    cover:
//      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg",
        "https://res.cloudinary.com/dfjzsffey/image/upload/v1709893440/punjabi_wpgst4.jpg",
    artists: ["Avicii", "Alok"],
  },
  {
    id: "2",
    title: "Party",
    color: colors.green,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_2_f9ymlx.jpg",
    artists: ["Tiesto", "Armin Van Buuren"],
  },
  {
    id: "3",
    title: "Shubh",
    color: colors.rose,
    cover:
      "https://res.cloudinary.com/dfjzsffey/image/upload/v1709895339/shubh_e9xgpu.png",
    artists: ["Post Malone", "Travis Scott", "21 savage"],
  },
  {
    id: "4",
    title: "Taylor Swift",
    color: colors.red,
    cover:
      "https://res.cloudinary.com/dfjzsffey/image/upload/v1709894168/original_kyig20.png",
    artists: ["The Beatles"],
  },
  {
    id: "5",
    title: "Charlie Puth",
    color: colors.pink,
    cover:
      "https://res.cloudinary.com/dfjzsffey/image/upload/v1709894724/charlie_sxditu.jpg",
    artists: ["Deadmau5"],
  },
  {
    id: "6",
    title: "Arijit Singh",
    color: colors.gray,
    cover:
      "https://res.cloudinary.com/dfjzsffey/image/upload/v1709894821/Arijit_etfy5b.jpg",
    artists: ["Saint Hilda", "Canada Buffalo"],
  },
];
const songScale = "w_500,h_500,c_scale";

let songs = {
  "1": [
    { id: "1", title: "Love Ya", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709814873/Love_Ya_w0pxwf.jpg`, artists : ["Diljit Dosanjh"], duration : "3:22"  },
    { id: "2", title: "Lehanga", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709811688/Lehanga_u4tcsh.jpg`, artists : ["Jass Manak"], duration : "3:31"  },
    { id: "3", title: "Pasoori", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709814995/Pasoori_ztyjrm.jpg`, artists : ["Ali Sethi"], duration : "3:45"  },
    { id: "4", title: "Arrogant", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709887452/Arrogant_kynhwn.jpg`, artists : ["AP Dhillon, Shinda Kahlon"], duration : "1:43"  },
    { id: "5", title: "Na Ja", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709887734/Na_Ja_mt6tee.jpg`, artists : ["Pav Dharia"], duration : "3:28"  },
    { id: "6", title: "Do You Know", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709887857/DoYouKnow_ikuvav.jpg`, artists : ["Diljit Dosanjh"], duration : "3:33"  },
    { id: "7", title: "Brown Munde", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709892284/tlo83gwjafif7pdq6tvn.jpg`, artists : ["AP Dhillon"], duration : "4:15"  },
    { id: "8", title: "Gangland", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709892675/Gangland_e6pmwz.jpg`, artists : ["Mankirat Aulakh"], duration : "2:48"  },
    { id: "9", title: "Schedule", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709892885/Schedule_fnrrhk.jpg`, artists : ["Tegi Pannu"], duration : "2:29"  },
    { id: "10", title: "Arjan Vaily", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709893007/ArjanVailly_l3hqhw.jpg`, artists : ["Bhupinder Babbal"], duration : "3:03"  },

  ],
  "2": [
    { id: "1", title: "Dhat Teri Ki", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709895587/DhatTeriKi_otxhhe.jpg`, artists : ["Vishal and Shekhar"], duration : "4:07"  },
    { id: "2", title: "Sher Khul Gaye", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709895987/Sher_fe906h.jpg`, artists : ["Vishal, Shekhar, Mellow D"], duration : "3:01"  },
    { id: "3", title: "Akhiyan Gulaab", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709896202/Akhiyan_qbdeos.jpg`, artists : ["Mitraz"], duration : "2:52"  },
    { id: "4", title: "Laal Peeli Akhiyan", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709896431/Laal_dd2vka.jpg`, artists : ["Romy and Tanishk Bagchi"], duration : "3:09"  },
    { id: "5", title: "Pyaar Hota Kayi Baar Hai", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709896568/PHKBA_txgqlg.jpg`, artists : ["Arijit Singh and Charan"], duration : "3:37"  },
    { id: "6", title: "Kar Gayi Chull", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709896791/kgc_xswhzq.jpg`, artists : ["Badshah, Sukriti Kakkar"], duration : "3:08 "  },
    { id: "7", title: "Vele", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709897026/vele_cni0nc.jpg`, artists : ["Vishal and Shekhar"], duration : "3:51"  },
    { id: "8", title: "I Hate Love Stories", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709897165/ihls_fq1eeo.jpg`, artists : ["Vishal and Shekhar"], duration : "4:46"  },
    { id: "9", title: "Dhindora Baje Re", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709897465/dhindora_frbpya.jpg`, artists : ["Pritam, Darshan Raval, Bhoomi Trivedi"], duration : "4:14 "  },
    { id: "10", title: "Not Ramaiya Vastavaiya", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709897579/nrv_cxycws.jpg`, artists : ["Anirudh Ravichander, Vishal Dadlani"], duration : "3:23"  }

  ],
  "3": [
    { id: "1", title: "King Shit", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709898502/KingShit_j17jab.jpg`, artists : ["Shubh"], duration : "3:47"  },
    { id: "2", title: "Cheques", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709897817/Cheques_ytmprp.jpg`, artists : ["Shubh"], duration : "3:04 "  },
    { id: "3", title: "We Rollin", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709897964/StillRollin_z8ce6x.jpg`, artists : ["Shubh"], duration : "3:20 "  },
    { id: "4", title: "Still Rollin", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709898070/StillRollin_a22fjd.jpg`, artists : ["Shubh"], duration : "2:55"  },
    { id: "5", title: "Elevated", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709898173/Elevated_sz5ztw.jpg`, artists : ["Shubh"], duration : "3:21"  },
    { id: "6", title: "One Love", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709898269/OneLove_t02zwm.jpg`, artists : ["Shubh"], duration : "2:40"  },
    { id: "7", title: "Ice", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709898377/ice_utgnlw.jpg`, artists : ["Shubh"], duration : "2:55"  },
    { id: "8", title: "Baller", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709898711/Baller_h2kgdx.jpg`, artists : ["Shubh"], duration : "2:29"  },
    { id: "9", title: "OG", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709898811/OG_ziyxmt.jpg`, artists : ["Shubh"], duration : "3:18"  },
    { id: "10", title: "Dior", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709898930/Dior_tzsxju.jpg`, artists : ["Shubh"], duration : "2:20"  }

  ],
  "4": [
    { id: "1", title: "Anti Hero", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709899226/AntiHero_eaxj7x.jpg`, artists : ["Taylor Swift"], duration : "3:21"  },
    { id: "2", title: "Love Story", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709899348/LoveStory_mhqsua.png`, artists : ["Taylor Swift"], duration : "3:56 "  },
    { id: "3", title: "Blank Space", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709899468/BlankSpace_pdl07l.png`, artists : ["Taylor Swift"], duration : "3:52"  },
    { id: "4", title: "Style", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709899724/Style_eh6akj.png`, artists : ["Taylor Swift"], duration : "3:51"  },
    { id: "5", title: "Cruel Summer", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709899820/CruelSummer_tddx3z.jpg`, artists : ["Taylor Swift"], duration : "2:59 "  },
    { id: "6", title: "You Belong With Me", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709899992/YBWM_afkp9y.jpg`, artists : ["Taylor Swift"], duration : "3:52 "  },
    { id: "7", title: "Back to December", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709900165/btd_dpdk8l.jpg`, artists : ["Taylor Swift"], duration : "4:55"  },
    { id: "8", title: "Karma", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709900290/karma_kcickw.jpg`, artists : ["Taylor Swift"], duration : "3:26"  },
    { id: "9", title: "Lavender Haze", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709900454/LavenderHaze_kkdg2w.jpg`, artists : ["Taylor Swift"], duration : "3:30"  },
    { id: "10", title: "Lover", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709900577/lover_pipefp.jpg`, artists : ["Taylor Swift"], duration : "3:58"  }

  ],
  "5": [
    { id: "1", title: "We Don't Talk Anymore", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709901314/WDTA_wrya8y.jpg`, artists : ["Charlie Puth"], duration : "3:38"  },
    { id: "2", title: "Attention", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709901478/Attention_m8hwem.jpg`, artists : ["Charlie Puth"], duration : "3:32 "  },
    { id: "3", title: "Patient", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709901617/Patient_njemad.jpg`, artists : ["Charlie Puth"], duration : "3:11 "  },
    { id: "4", title: "Light Switch", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709901731/lightswitch_uzyouc.jpg`, artists : ["Charlie Puth"], duration : "3:06"  },
    { id: "5", title: "Lipstick", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709901870/lipstick_pajwdm.jpg`, artists : ["Charlie Puth"], duration : "3:29"  },
    { id: "6", title: "Cheating on You", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709901985/Cheating_xbbzkz.jpg`, artists : ["Charlie Puth"], duration : "3:17"  },
    { id: "7", title: "LA Girls", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709902152/LA_qvidvy.jpg`, artists : ["Charlie Puth"], duration : "3:18"  },
    { id: "8", title: "Somebody Told Me", image : `https://res.cloudinary.com/dfjzsffey/image/upload/v1709902305/SomebodyToldme_ds6t6r.jpg`, artists : ["Charlie Puth"], duration : "3:37"  },
    { id: "9", title: "Slow it Down", image : `https://res.cloudinary.com/dfjzsffey/image/upload/v1709902430/SlowitDown_gz3mgw.jpg`, artists : ["Charlie Puth"], duration : "3:11"  },
    { id: "10", title: "Done For Me", image : `https://res.cloudinary.com/dfjzsffey/image/upload/v1709902550/DoneForMe_blkamn.png`, artists : ["Charlie Puth"], duration : "3:01"  }

  ],
  "6": [
    { id: "1", title: "Chaleya", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709902802/chaleya_vjgqmv.jpg`, artists : ["Arijit Singh"], duration : "3:21"  },
    { id: "2", title: "Heeriye", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709903094/Heeriye_u6odi1.jpg`, artists : ["Arijit Singh"], duration : "3:15"  },
    { id: "3", title: "Apna Bana Le", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709902974/ApnaBanaLe_hmxxil.jpg`, artists : ["Arijit Singh"], duration : "4:22"  },
    { id: "4", title: "Saware", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709903245/Sawaare_jc151c.jpg`, artists : ["Arijit Singh"], duration : "5:22"  },
    { id: "5", title: "Bulleya", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709903532/bulleya_c2wzvd.jpg`, artists : ["Arijit Singh"], duration : "5:50"  },
    { id: "6", title: "Samjhawan", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709903662/samjhavan_id8zbq.jpg`, artists : ["Arijit Singh"], duration : "4:30"  },
    { id: "7", title: "Tere Pyaar Mai", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709903807/tpm_draon3.jpg`, artists : ["Arijit Singh"], duration : "4:27"  },
    { id: "8", title: "Jhoome Jo Pathaan", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709903914/JhoomejoPathaan_tz2jqr.jpg`, artists : ["Arijit Singh"], duration : "3:29"  },
    { id: "9", title: "Hawayein", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709904002/Hawayein_x1kzyg.jpg`, artists : ["Arijit Singh"], duration : "4:50"  },
    { id: "10", title: "Ae Dil Hai Mushkil Title Track", image : `https://res.cloudinary.com/dfjzsffey/image/upload/${songScale}/v1709904105/aedilhaimushkil_xm4nty.jpg`, artists : ["Arijit Singh"], duration : "4:30"  }

  ],
 
  
  
};

let playlistSongsArray = Array.from(songs);

for (let s of playlistSongsArray) {
  s['like'] = 0;
}

// const allSongs = {}

// for (let p of playlists) {
//   allSongs[p.id] = songs.map((s)=>{
//       return {...s, id: `${p.id}_${s.id}`}
//   })
// }

const allSongs = {};

for (let p of playlists) {
  allSongs[p.id] =songs[p.id].map((s) => {
    return { ...s, id: `${p.id}_${s.id}` };
  });
}



export {songs, playlists, allSongs}