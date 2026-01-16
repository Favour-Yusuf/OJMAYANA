export type ProjectMedia =
  | {
      type: "image";
      src: string;
      layout: "portrait" | "landscape";
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      layout:"portrait" | "landscape"
    };

export type Project = {
  slug: string;
  title: string;
  category: string;
  coverImage: string;
  description: string;
  media: ProjectMedia[];
};

export const projects: Project[] = [
  {
    slug: "headies-17th-edition",
    title: "Headies 17th Edition",
    category: "Event/Portrait",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768290446/DSC03695_avwu0o.jpg",
    description:
      "Coverage of the 17th Headies Awards, documenting performances, atmosphere, and behind-the-scenes moments. The focus was on capturing scale, emotion, and cultural energy without disrupting the event experience.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290457/DSC03123_mswgo6.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290456/DSC03223_dazg5n.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290455/DSC03236_s5tsmd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290454/DSC03279_pnmspe.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290453/DSC03325_1_t1tdui.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290451/DSC03392_humqx6.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290450/DSC03438_rrrcfs.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290449/DSC03453_dmu2pl.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290446/DSC03695_avwu0o.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290446/DSC04041_msbxjx.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290446/DSC03751_tiekbb.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290445/DSC03965_qdfqwg.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290444/DSC04085_m0ywrt.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290443/DSC04075_n3ordi.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290439/DSC04133_iffyd2.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290438/DSC04110_n3t4fc.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290438/DSC04108_ydwkti.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290438/DSC04139_ogvvbc.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290437/DSC04151_hfayci.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290437/DSC03107_x2h52p.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290437/DSC04129_gf4fjh.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767422467/DSC03325_hwovfs.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767422127/DSC04086_uunvue.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "ayra-starr-listening-party",
    title: "Ayra Starr — Listening Party",
    category: "Event / Portrait",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768326930/AYRA-STAR_LISTENING_PARTY-15_1_pcrgdo.jpg",
    description:
      "An intimate visual record of Ayra Starr’s listening party, capturing the mood, crowd energy, and personal moments that defined the night. Designed to feel candid, immersive, and culturally relevant.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298316/AYRA-STAR_LISTENING_PARTY-40_vdqhx6.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298325/AYRA-STAR_LISTENING_PARTY-18_i2cwy9.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298320/AYRA-STAR_LISTENING_PARTY-32_zm4bb4.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298313/AYRA-STAR_LISTENING_PARTY-27_jg3bxq.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298310/AYRA-STAR_LISTENING_PARTY-25_j7wif2.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298306/AYRA-STAR_LISTENING_PARTY-14_n3x9iw.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298303/AYRA-STAR_LISTENING_PARTY-17_kvdthy.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298300/AYRA-STAR_LISTENING_PARTY-3_iyjebd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298297/AYRA-STAR_LISTENING_PARTY-69_ctt8mk.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295548/AYRA-STAR_LISTENING_PARTY-16_nulduw.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295547/AYRA-STAR_LISTENING_PARTY-45_syd4yg.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295540/AYRA-STAR_LISTENING_PARTY-145_hmuvc2.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295536/AYRA-STAR_LISTENING_PARTY-366_oos0cl.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295461/AYRA-STAR_LISTENING_PARTY-156_d59wkw.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295460/AYRA-STAR_LISTENING_PARTY-366_1_lyk3fk.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295460/AYRA-STAR_LISTENING_PARTY-276_ronjq3.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295459/AYRA-STAR_LISTENING_PARTY-275_vqbirb.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295447/AYRA-STAR_LISTENING_PARTY-285_lakqvu.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295446/AYRA-STAR_LISTENING_PARTY-203_q7l9iq.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295436/AYRA-STAR_LISTENING_PARTY-96_kyjodo.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295434/AYRA-STAR_LISTENING_PARTY-358_iju2sv.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295432/AYRA-STAR_LISTENING_PARTY-102_atg77x.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295431/AYRA-STAR_LISTENING_PARTY-322_khriqv.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295362/AYRA-STAR_LISTENING_PARTY-75_btomup.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295360/AYRA-STAR_LISTENING_PARTY-158_fyicy6.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295358/AYRA-STAR_LISTENING_PARTY-153_nn9w41.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295355/AYRA-STAR_LISTENING_PARTY-357_hls1ji.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295352/AYRA-STAR_LISTENING_PARTY-166_vlef0v.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295345/AYRA-STAR_LISTENING_PARTY-30_kshecy.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295342/AYRA-STAR_LISTENING_PARTY-310_wqjqsd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295331/AYRA-STAR_LISTENING_PARTY-120_rdcnbf.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295338/AYRA-STAR_LISTENING_PARTY-62_tuajco.jpg",
        layout: "landscape",
      },

      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295297/AYRA-STAR_LISTENING_PARTY-146_pami0m.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295296/AYRA-STAR_LISTENING_PARTY-263_kigsbu.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295293/AYRA-STAR_LISTENING_PARTY-251_sk9ecs.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295290/AYRA-STAR_LISTENING_PARTY-8_abguaf.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295287/AYRA-STAR_LISTENING_PARTY-52_qaewt6.jpg",
        layout: "landscape",
      },
    ],
  },
  {
    slug: "woora-woman-campaign",
    title: "Woora Woman Campaign",
    category: "Fashion Campaign",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768297887/OJM04528_gixiyb.jpg",

    description:
      "A fashion campaign focused on identity, confidence, and modern femininity. The visuals were crafted to support brand positioning while remaining expressive and editorial.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298069/OJM03993_z5ys1b.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298066/OJM04004_xzeudh.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298063/OJM04398_bubyf6.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298060/OJM03940_cdolf3.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298056/OJM04057_hdqke5.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298051/OJM04112_jgk06g.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298049/OJM04142_rjgivh.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298047/OJM04452_t9ouzo.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297906/OJM04513_xetwtd.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297905/OJM04535_stbnrd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297903/OJM04549_u7v3gj.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297897/OJM04469_zci0dc.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297893/OJM04036_blz7og.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297891/OJM04743_odriwd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297887/OJM04528_gixiyb.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297882/OJM04454_awtdug.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297880/OJM04462_rinq6n.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297880/OJM04487_fnencq.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297877/OJM04495_nsp6yq.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297777/OJM04496_dnzlm7.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297750/OJM05007_zubxlw.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297744/OJM04817_fpvwav.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297741/OJM04551_ih46el.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297738/OJM04553_aeg5ac.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297738/OJM04640_hqrzf7.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297736/OJM04715_lfgwki.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297507/OJM05039_a6glo7.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297505/OJM05050_emzq7u.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297501/OJM04825_nwk5vd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297500/OJM04962_m4n3yr.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297499/OJM04980_eb8a6h.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297498/OJM04630_h9xqzr.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "vanskere-fashion",
    title: "Vanskere Fashion",
    category: "Fashion / Brand",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768293464/DSC01721_qhdapy.jpg",
    description:
      "Brand visuals created to strengthen Vanskere’s fashion identity across campaigns and digital platforms. The work balances clean composition with a strong sense of attitude and style.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293468/VANSKERE_MALE0608_gepqfz.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293467/VANSKERE_MALE0143_z9sfa2.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293464/DSC01721_qhdapy.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293460/VANSKERE_CAMPAIGN0038_swf72k.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293459/VANSKERE_CAMPAIGN0086_dkkakc.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293457/VANSKERE_CAMPAIGN0046_rl9t2q.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293454/VANSKERE_CAMPAIGN0068_1_kfp9oz.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293448/VANSKERE_CAMPAIGN0353_tgrufu.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293447/VANSKERE_CAMPAIGN0449_w2du0y.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293445/VANSKERE_CAMPAIGN0175_olvnfe.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293439/VANSKERE_CAMPAIGN0210_1_mxljuc.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293438/DSC01719_gq0zvi.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293436/VANSKERE_CAMPAIGN0410_w2evmh.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293433/DSC01638_1_n9call.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293427/VANSKERE_CAMPAIGN0242_p91lb1.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293427/VANSKERE_MALE0777_kurznz.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293425/VANSKERE_MALE0363_tyw1c4.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293425/VK0669_oqxbur.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293419/VK0130_dzntfh.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293417/VANSKERE_MALE0517_gtbjdj.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293412/VANSKERE_MALE0039_coxiux.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293411/VK0438_srxuel.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293408/VK0338_igoyac.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293405/VK0816_ivxc7d.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293400/VK0965_1_t7jvh5.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293395/VANSKERE0024_el1bwp.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293393/VANSKERE0026_xddgwg.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293391/VANSKERE0047_hpzmxz.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293347/VANSKERE0098_kn5alj.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293338/VANSKERE0169_vbaax5.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293337/VANSKERE0203_zawrcx.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293330/VANSKERE0232_r0i7rr.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293326/VANSKERE0286_x6r56e.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "final-set-product-campaign",
    title: "Final Set — Product Campaign",
    category: "Product / E-commerce",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1767425715/DSC05855_kbtibb.jpg",
    description:
      "Product-focused imagery designed to support e-commerce and marketing efforts. The shoot prioritized clarity, detail, and consistency to build trust and drive conversion.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290769/DSC05772_feyolx.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290764/DSC05755_mpg5jj.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290763/DSC05765_nh0f5o.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290763/DSC05785_hbwrnz.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290760/DSC05810_qxddrx.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290759/DSC05805_yetzlq.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290758/DSC05847_kmsmag.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290757/DSC05732_h3iesq.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290757/DSC05871_dbfcmd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768290757/DSC05890_pg2zjj.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767425725/DSC05817_hezhvi.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767425725/DSC05742_agtb8i.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767425719/DSC05841_nhfofv.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767425716/DSC05898_vcdoyw.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767425715/DSC05855_kbtibb.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "lady-flora-event",
    title: "Lady Flora Event",
    category: "Event / Lifestyle",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768291150/DSC00470_ixufby.jpg",
    description:
      "Product-focused imagery designed to support e-commerce and marketing efforts. The shoot prioritized clarity, detail, and consistency to build trust and drive conversion.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291153/DSC00468_yvewts.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291152/DSC00480_ollq0n.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291152/DSC00462_1_orkuea.jpg",
        layout: "portrait",
      },

      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291130/DSC01014_kkp7jc.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291147/DSC00543_ikhljz.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291144/DSC00490_1_phwm1q.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291138/DSC00482_rcuxpj.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291147/DSC00497_extmwe.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291137/DSC00637_sbqras.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291135/DSC00610_w0965c.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291134/DSC00533_yafcld.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291141/DSC00844_w6maj0.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291131/DSC00771_eji5xo.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291126/DSC00783_fvnfal.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291122/DSC00879_ytbqkd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291121/DSC00885_1_hdoheh.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291126/DSC00799_orvnv4.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291123/DSC01022_nvx2cp.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291118/DSC01091_cndqqy.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291122/DSC00879_ytbqkd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768291117/DSC00458_bhxlap.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767426109/DSC00462_omibok.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767426100/DSC01059_tesdiq.jpg",
        layout: "portrait",
      },
      {
        type: "image",

        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767426097/DSC00743_ltgsrc.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767426105/DSC01006_lyzdnp.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1767426103/DSC00477_gts1ga.jpg",
        layout: "landscape",
      },
    ],
  },
  {
    slug: "onlyderah-portraits",
    title: "OnlyDerah Portraits",
    category: "Portrait",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768295563/DSC06737_imygmd.jpg",
    description:
      "A portrait series focused on personality and presence. The goal was to create honest, expressive media that feel personal while remaining visually controlled.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295565/DSC06722_nsc8y4.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295563/DSC06737_imygmd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294543/DSC06801-Edit_xq2az4.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295561/DSC06728_zmh7za.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294541/DSC06812-Edit-2_y7szik.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768295559/DSC06753_o9ytxc.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294540/DSC06812-Edit_a6kkrb.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294539/DSC06861-Edit_ndsrcw.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294536/DSC06898-Edit_obuddh.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294536/DSC06787-Edit_ph7c4n.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "wizkid-live-performance",
    title: "Wizkid — Live Performance",
    category: "Event / Culture",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768298965/OJMAYANA-5_sjbkje.jpg",
    description:
      "Live performance coverage capturing Wizkid on stage in real time. The focus was on energy, movement, and atmosphere—documenting the moment as it unfolded without interruption or staging.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298972/OJMAYANA-11_aivrvq.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298965/OJMAYANA-5_sjbkje.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298962/OJMAYANA-1_c5xynl.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298961/OJMAYANA-10_kbcrek.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298952/OJMAYANA-13_rhojhk.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298944/OJMAYANA-4_d3vjop.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298939/OJMAYANA-3_xe8d4f.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298937/OJMAYANA-9_vpjjpw.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298800/OJMAYANA-14_wly3na.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298815/OJMAYANA-8_p9ouof.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298812/OJMAYANA-12_o39f4x.jpg",
        layout: "portrait",
      },
    ],
  },

  {
    slug: "food",
    title: "Food",
    category: "Food",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768302647/OJM01021_xy6bq5.jpg",
    description:
      "Food imagery focused on texture, color, and presentation. The visuals are designed to make dishes feel fresh, inviting, and appetizing while supporting brand and menu storytelling.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302912/OJM00503_gyftpp.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302912/OJM00952_t3hram.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302903/OJM00218_ttxfmp.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302901/OJM01021_ulp3ks.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302908/OJM01640_qd0oxx.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299960/OJM09695_mlbz6e.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299965/OJM00102_eijcf3.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302901/OJM01070_zhybsx.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302896/OJM01054_cyrr4c.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302898/OJM01468_qxdvqk.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302901/OJM01737_je36tf.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302895/OJM01918_oud1p5.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302658/OJM00503_emqszr.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768302651/OJM00849_aujfyo.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299971/OJM09720_aa6uje.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299968/OJM00126_bezpnj.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299960/OJM09695_mlbz6e.jpg",
        layout: "portrait",
      },
    ],
  },

  {
    slug: "Interior-Design",
    title: "Interior Design",
    category: "Interior Design",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768303355/DSC00161_p8thhk.jpg",
    description:
      "Interior photography capturing space, light, and detail. The focus is on documenting design intent and atmosphere in a way that feels natural, balanced, and visually refined.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768303373/DSC09919_bvbibu.png",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768303355/DSC00161_p8thhk.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768303192/DSC09988_jxlrav.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768303188/DSC00004_qrx3ml.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768303185/DSC00012_jmqjep.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768303182/DSC00136_ocuznv.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768303182/DSC00097_nq2zah.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768303176/DSC09984_rfovjo.jpg",
        layout: "landscape",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768303170/DSC09990_brjguv.jpg",
        layout: "landscape",
      },
    ],
  },

  {
    slug: "lrp-fashion-ecommerce",
    title: "LRP Fashion — E-commerce Visuals",
    category: "LRP Fashion — E-commerce Visuals",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768293316/LEEZ_FASHION09698-2_gwcwgu.jpg",
    description:
      "Clean, high-quality fashion imagery designed for online retail and brand platforms. The work prioritizes fit, texture, and consistency to support customer confidence and sales.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293318/LEEZ_FASHION00053_o6rcrd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293319/LEEZ_FASHION09551_etpohn.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293316/LEEZ_FASHION09698-2_gwcwgu.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293314/LEEZ_FASHION09558_vn8aix.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293314/LEEZ_FASHION09627_wjedmt.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293311/LEEZ_FASHION09738_d7uvdk.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293301/LEEZ_FASHION00085_vqxljm.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293301/LEEZ_FASHION09627_1_xvnswr.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293294/LEEZ_FASHION09771-2_hlpowq.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293289/LEEZ_FASHION09861_iwuqrn.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293288/LEEZ_FASHION00109_ag4vj2.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293282/LEEZ_FASHION00003_bhtjwg.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293282/LEEZ_FASHION00083_zhupji.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768293277/LEEZ_FASHION00107_d8gzd7.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768292469/LEEZ_FASHION09829_mg7ebl.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "oyinkansola-birthday-portraits",
    title: "oyinkansola-birthday-portraits",
    category: "Portrait / Lifestyle",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768298571/DSC00850_nezphc.jpg",
    description:
      "A lifestyle portrait session documenting a personal milestone. The focus was on relaxed moments, personality, and natural interaction rather than posed formality.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298588/DSC01497_zv1xaz.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298583/DSC01255_sclxra.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298578/DSC01253_hizu0x.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298578/DSC00824_nuanbf.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298571/DSC00850_nezphc.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298567/DSC01115_povqd5.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298563/DSC01081_pno4ai.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298561/DSC01714_d0xdx4.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298560/DSC01563_awfcag.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298558/DSC01525_ngywx9.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298548/DSC01513_oz4z5y.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298543/DSC01122_horw5s.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298539/DSC00920_jyksek.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298527/DSC01456_pqgkts.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298524/DSC00880_z7ycef.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298521/DSC01018_nlvwk5.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298507/DSC00956_tjrpka.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298504/DSC01505_jlaew3.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "final-fashion-street-style",
    title: "Final — Street Style Series",
    category: "Fashion / E-commerce",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768298712/DSC01937-Edit_csliyq.jpg",
    description:
      "Street-style fashion imagery capturing movement, attitude, and everyday style. The visuals blend spontaneity with strong composition to reflect modern fashion culture.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298727/DSC01868-Edit_vluhqj.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298724/DSC01839-Edit_kzm87w.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298714/DSC01973-Edit_eumded.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298712/DSC01937-Edit_csliyq.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298710/DSC01897-Edit_cgq1lt.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298706/DSC01885-Edit_dd7p0x.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "aretha-portraits",
    title: "Aretha Portrait Series",
    category: "Portrait",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768294064/20240409-BIRTHDAY_SHOOT_SESSION_100476-Edit_tl3wfr.jpg",
    description:
      "A controlled portrait series focused on mood and character. The media explore subtle expression and presence through simple, intentional composition.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294065/20240409-BIRTHDAY_SHOOT_SESSION_100182-Edit_w4yuxk.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294064/20240409-BIRTHDAY_SHOOT_SESSION_100476-Edit_tl3wfr.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294063/20240409-BIRTHDAY_SHOOT_SESSION_100199-Edit_vifpx9.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294057/20240409-BIRTHDAY_SHOOT_SESSION_100232-Edit_nwchhf.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294057/20240409-BIRTHDAY_SHOOT_SESSION_100201-Edit_yhxdny.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294057/20240409-BIRTHDAY_SHOOT_SESSION_100434-Edit_haxhmn.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294055/20240409-BIRTHDAY_SHOOT_SESSION_100526-Edit_xiugb5.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294049/20240409-BIRTHDAY_SHOOT_SESSION_100202-Edit_acookg.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294048/20240409-BIRTHDAY_SHOOT_SESSION_100549-Edit_sx8jba.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294040/20240409-BIRTHDAY_SHOOT_SESSION_100656_ra9ftk.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294034/20240409-BIRTHDAY_SHOOT_SESSION_100651_hitwq5.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294040/20240409-BIRTHDAY_SHOOT_SESSION_100598_qwmqqi.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294045/20240409-BIRTHDAY_SHOOT_SESSION_100538-Edit_ujsrhk.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768294029/20240409-BIRTHDAY_SHOOT_SESSION_100657_yhrj9u.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "art",
    title: "Art",
    category: "Art",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1765903460/DSC02092_xudljt.jpg",
    description:
      "Street-style fashion imagery capturing movement, attitude, and everyday style. The visuals blend spontaneity with strong composition to reflect modern fashion culture.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903462/DSC02161_b0dy0f.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903462/DSC02135_xbh4ku.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903462/DSC02139_uth18y.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903460/DSC02092_xudljt.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903458/DSC02090_bvgxxf.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903458/DSC02096_vbpbd1.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903456/DSC02087_r1w9ge.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903454/DSC02084_egn0bk.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903454/DSC02081_bgnbah.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903452/DSC02079_jhs5hk.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903785/DSC02115_p4uvud.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903784/DSC02123_anoptm.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903490/DSC02101_a77cge.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903490/DSC02100_t7qhjs.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903486/DSC02059_xc0uro.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903462/DSC02018_pqd6iy.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "banke-kuku-fashion-event",
    title: "Banke Kuku — Fashion Event",
    category: "Fashion / Event",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768297426/DSC01376_g8qt6s.jpg",
    description:
      "Event coverage documenting the intersection of fashion, culture, and audience engagement. The imagery highlights both the collection and the experience surrounding it.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297429/DSC01393_evmziq.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297426/DSC01376_g8qt6s.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297425/DSC01516_rzwk1b.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297373/DSC01529_tyimfs.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297368/DSC01368_jlhn6q.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297358/DSC01599_wwvqgx.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297356/DSC01527_gzb5nu.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297350/DSC01508_xm7n1q.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297348/DSC01407_j89lpc.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297343/DSC01580_mhghsa.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297340/DSC01418_bnyiz7.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297339/DSC01587_jxozrl.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297334/DSC01695_nfynxm.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297331/DSC01605_lyohi6.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297327/DSC01513_swjxr8.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297323/DSC01706_mrrh1d.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297322/DSC01374_os0wjj.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297245/DSC01515_njsjyg.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768297238/DSC01575_ujrdfl.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "portrait-session",
    title: "Portrait Session",
    category: "Portrait",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768299181/DSC08022_xyw8np.jpg",
    description:
      "A simple portrait session focused on natural expression and clean visual storytelling. The media prioritize authenticity over heavy styling.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299178/DSC08021_byohmp.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299175/DSC08033_mqgdtf.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299171/DSC08039_wwmpqy.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299168/DSC08041_bna97w.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299165/DSC08038_vhnnev.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299163/DSC08042_rqy5id.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299160/DSC08053_h5yxke.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299154/DSC08056_t2md7g.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299146/DSC08066_ck84vk.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299142/DSC08060_yfvu3b.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299140/DSC08069_k95ctb.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299136/DSC08072_xltxcd.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298987/DSC08079_qxycn9.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298983/DSC08084_eonohs.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768298981/DSC08082_xkcvou.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "for-kanga-portraits",
    title: "For Kanga Portrait Series",
    category: "Portrait / Fashion",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768299241/Copy_of_OJMAYANA-06995_lypvff.jpg",
    description:
      "A portrait series blending fashion elements with personal expression. The work focuses on form, styling, and controlled composition.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299246/DSC00854_ltkftf.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299251/DSC00856_gymxyo.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299241/Copy_of_OJMAYANA-06995_lypvff.jpg",
        layout: "portrait",
      },
    ],
  },
  {
    slug: "hamra-indoor-portraits",
    title: "Hamra — Indoor Portraits",
    category: "Portrait / Lifestyle",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768299187/DSC06892_httcy8.jpg",
    description:
      "Indoor portraits created in a controlled environment to highlight personality, mood, and subtle interaction with space.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299234/DSC06925_qxdfu0.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299231/DSC06933_varjgi.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299228/DSC06931_gvvcwq.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299225/DSC06930_dqgbtu.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299224/DSC06940_nvzejr.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299217/DSC06939_zotkuo.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299213/DSC06960_e9nfhj.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299205/DSC06963_uzbo9w.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299201/DSC06969_g5fn4b.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299193/DSC06959_dek65u.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299191/DSC06888_srsqb4.jpg",
        layout: "portrait",
      },
    ],
  },
  {
  slug: "odio-mimonet-fashion-video",
  title: "Odio Mimonet — Fashion Video",
  category: "Video",
  coverImage: "https://res.cloudinary.com/defbalxci/video/upload/v1768387675/Video_Trimmer_-_Free_Online_Video_Cutter_2_a8cek6.mp4",
  description:
    "A fashion video focused on silhouette, motion, and brand attitude. The film supports visual identity through controlled pacing and composition.",
  media: [
    {
      type: "video",
      src: "https://res.cloudinary.com/defbalxci/video/upload/v1768387675/Video_Trimmer_-_Free_Online_Video_Cutter_2_a8cek6.mp4",
      layout:"portrait"
    },
  ],
},
{
  slug: "zig-interviews",
  title: "ZIG — Interviews",
  category: "Video",
  coverImage: "https://res.cloudinary.com/defbalxci/video/upload/v1768387955/Video_Trimmer_-_Free_Online_Video_Cutter_ty0ooe.mp4",
  description:
    "Interview-based video content capturing conversation, personality, and context with a clean, documentary approach.",
  media: [
    {
      type: "video",
      src: "https://res.cloudinary.com/defbalxci/video/upload/v1768387955/Video_Trimmer_-_Free_Online_Video_Cutter_ty0ooe.mp4",
      layout:"portrait"
    },
  ],
},
{
  slug: "lavish-fashion-videos",
  title: "Lavish — Fashion Videos",
  category: "Video",
  coverImage: "https://res.cloudinary.com/defbalxci/video/upload/v1768387119/Video_Compressor___Reduce_Video_File_Size_Online_1_lwpyw8.mp4",
  description:
    "Fashion-led video content created to highlight detail, flow, and styling. The visuals emphasize elegance and brand perception.",
  media: [
    {
      type: "video",
      src: "https://res.cloudinary.com/defbalxci/video/upload/v1768387119/Video_Compressor___Reduce_Video_File_Size_Online_1_lwpyw8.mp4",
      layout:"portrait"
    },
  ],
},


{
    slug: "ryno-autos-headshots",
    title: "Ryno Autos — Corporate Headshots",
    category: "Ryno Autos — Corporate Headshots",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768425163/DSC02485-Edit_tro1om.jpg",
    description:
      "Professional headshots created to support Ryno Autos’ brand credibility and public-facing communications. The focus was on clarity, confidence, and consistency across all team visuals.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768425711/DSC02403-Edit_arsgqi.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768425710/DSC02349-Edit-2_egqkl0.jpg",
        layout: "portrait",
      },
      
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768425710/DSC02370-Edit-2_hyd44t.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768425569/DSC02284-Edit-3_xjaved.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768425568/DSC02335-Edit-2_jbbady.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768425567/DSC02310-Edit-2_uol5ig.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768425163/DSC02485-Edit_tro1om.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768425126/DSC02265-Edit-3_x3weat.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "",
        layout: "portrait",
      },
    ],
  },

   {
    slug: "corporate-leadership-portraits",
    title: "Corporate Leadership Portraits",
    category: "Corporate / Portrait",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768424821/OJM08858_copy_ylvrt5.jpg",
    description:
      "A series of executive portraits created for founders and leadership teams. The work emphasizes authority, approachability, and visual consistency across press, websites, and internal materials.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903454/DSC00878_sc2gxf.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903454/DSC00904_wln92p.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903959/DSC07540_q4dn82.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903447/WhatsApp_Image_2024-12-23_at_06.14.45_fd6bf2b1_xx713u.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903441/Artboard_8_pykwhp.jpg",
        layout: "landscape",
      },
      
    ],
  },

   {
    slug: "cosmetics-product-campaign",
    title: "Cosmetics Product Campaign",
    category: "Product / Cosmetics",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1765903934/DSC06334-12_j97ds4.jpg",
    description:
      "A product-focused campaign created to highlight texture, detail, and form. The visuals were designed to support brand storytelling while maintaining clarity and consistency for digital and commercial use.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903473/DSC02039_kcas8c.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903472/DSC02036_ok8yxk.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903469/DSC02028_mmaobu.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903471/DSC02033_r827pj.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903468/DSC02030_mtbloy.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903837/DSC06340-14_jblqby.jpg",
        layout: "portrait",
      },
    
    ],
  },
  {
    slug: "lagos-fashion-week",
    title: "Lagos Fashion Week",
    category: "Fashion / Event / Culture",
    coverImage:
      "https://res.cloudinary.com/defbalxci/image/upload/v1768493913/DSC07886_t2borf.jpg",
    description:
      "Visual coverage of Lagos Fashion Week, documenting runway presentations, backstage moments, and the cultural atmosphere surrounding the event. The focus was on capturing movement, craftsmanship, and the energy of contemporary African fashion as it unfolded in real time.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768493924/DSC07037_xfpio0.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768493926/DSC07038_lm1r0g.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768493947/DSC07312_nfp8jp.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/defbalxci/image/upload/v1768493910/DSC08896_ymbdwf.jpg",
        layout: "portrait",
      },
      {
        type: "image",
        src: "",
        layout: "portrait",
      },
      {
        type: "image",
        src: "",
        layout: "portrait",
      },
      {
        type: "image",
        src: "",
        layout: "portrait",
      },
      {
        type: "image",
        src: "",
        layout: "portrait",
      },
      {
        type: "image",
        src: "",
        layout: "portrait",
      },
      {
        type: "image",
        src: "",
        layout: "portrait",
      },
      {
        type: "image",
        src: "",
        layout: "portrait",
      },
      {
        type: "image",
        src: "",
        layout: "portrait",
      },
     
    ],
  },


  // more projects…
];
