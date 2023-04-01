import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import React, { useState } from "react";
import swal from "sweetalert";
import Datatable from "../../components/datatable/Datatable"

const Single = () => {
  
  const mostrarAlerta=()=>{
    swal({
      title: "Ya tenemos un Ganador...!",
      /*buttons: ["No","Si"],*/
      content: {
        element: "img",
        attributes: {
          src: "https://media.tenor.com/2VNjRPThPecAAAAC/bingo-lignon.gif",                  
        }
      }
    }).then(respuesta => {
      if (respuesta) {
        swal({ text: "Iniciamos otro nuevo Juego...", icon: "success", timer: "2000", })
        
      }
    })
  }

  //_________________________________________________________________________________________________________________
  const [imagenb, setImagenb] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhzmMvHsS4A0oHAqrO3sj2SkBmA4A-BWIw1AjdxBnTwu7Aj9Tr977bRsiu2tbQvAG0WQsuE-7pXtH8PS-w2WvGS67I3iT6Ewcqcyq71iAPWC3oDKB4IlHNdyPPJAO3a_hGcYbkrTUvXMPJZLnSR37QfgYkQDTNO-GbuTHvvibS69cJHe2HLFyTSH18f");
  
  function prenderb() {
    if (imagenb === "https://blogger.googleusercontent.com/img/a/AVvXsEhzmMvHsS4A0oHAqrO3sj2SkBmA4A-BWIw1AjdxBnTwu7Aj9Tr977bRsiu2tbQvAG0WQsuE-7pXtH8PS-w2WvGS67I3iT6Ewcqcyq71iAPWC3oDKB4IlHNdyPPJAO3a_hGcYbkrTUvXMPJZLnSR37QfgYkQDTNO-GbuTHvvibS69cJHe2HLFyTSH18f") {
      setImagenb("https://blogger.googleusercontent.com/img/a/AVvXsEhzmMvHsS4A0oHAqrO3sj2SkBmA4A-BWIw1AjdxBnTwu7Aj9Tr977bRsiu2tbQvAG0WQsuE-7pXtH8PS-w2WvGS67I3iT6Ewcqcyq71iAPWC3oDKB4IlHNdyPPJAO3a_hGcYbkrTUvXMPJZLnSR37QfgYkQDTNO-GbuTHvvibS69cJHe2HLFyTSH18f");//prendido
    } else {
      setImagenb("https://blogger.googleusercontent.com/img/a/AVvXsEhzmMvHsS4A0oHAqrO3sj2SkBmA4A-BWIw1AjdxBnTwu7Aj9Tr977bRsiu2tbQvAG0WQsuE-7pXtH8PS-w2WvGS67I3iT6Ewcqcyq71iAPWC3oDKB4IlHNdyPPJAO3a_hGcYbkrTUvXMPJZLnSR37QfgYkQDTNO-GbuTHvvibS69cJHe2HLFyTSH18f");
    }
  }

  //_________________________________________________________________________________________________________________
  const [imageni, setImageni] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEg7cGvC9nFjGs_MOSWn4PcHwkO8k5cRsK99MS3AKRyx2QtytCmebeeCVHmmkfev_nL-RpO_m3z8oNy06AB-Gd8Cmbe2JY-zc3s2A1TOb_NOyv0QeMTziYRTC0qaout2qAYkYb6mSJCG1FjDfdJqhzrb-4FFKztTm6SB5JroK7TIO-39MbwDseRLG78F");
  
  function prenderi() {
    if (imageni === "https://blogger.googleusercontent.com/img/a/AVvXsEg7cGvC9nFjGs_MOSWn4PcHwkO8k5cRsK99MS3AKRyx2QtytCmebeeCVHmmkfev_nL-RpO_m3z8oNy06AB-Gd8Cmbe2JY-zc3s2A1TOb_NOyv0QeMTziYRTC0qaout2qAYkYb6mSJCG1FjDfdJqhzrb-4FFKztTm6SB5JroK7TIO-39MbwDseRLG78F") {
      setImageni("https://blogger.googleusercontent.com/img/a/AVvXsEg7cGvC9nFjGs_MOSWn4PcHwkO8k5cRsK99MS3AKRyx2QtytCmebeeCVHmmkfev_nL-RpO_m3z8oNy06AB-Gd8Cmbe2JY-zc3s2A1TOb_NOyv0QeMTziYRTC0qaout2qAYkYb6mSJCG1FjDfdJqhzrb-4FFKztTm6SB5JroK7TIO-39MbwDseRLG78F");//prendido
    } else {
      setImageni("https://blogger.googleusercontent.com/img/a/AVvXsEg7cGvC9nFjGs_MOSWn4PcHwkO8k5cRsK99MS3AKRyx2QtytCmebeeCVHmmkfev_nL-RpO_m3z8oNy06AB-Gd8Cmbe2JY-zc3s2A1TOb_NOyv0QeMTziYRTC0qaout2qAYkYb6mSJCG1FjDfdJqhzrb-4FFKztTm6SB5JroK7TIO-39MbwDseRLG78F");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagenn, setImagenn] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEh5my9AT5GXY5jssafT_BILZRFOgXy4fouL2JVrImGfzjmSTn2X6LRVSjP6-q-4Jlk_gs6lTiqIDlG9s_FvvDihmrsDXJHkwodppGh3USkPq6KY7GFZ10KcbwLDvjGSz68bPrlc5a1cMtfA9j-7NIiHA2VGacErZyG096aJYDQn2c7mg1wMZjDErBSn");
  
  function prendern() {
    if (imagenn === "https://blogger.googleusercontent.com/img/a/AVvXsEh5my9AT5GXY5jssafT_BILZRFOgXy4fouL2JVrImGfzjmSTn2X6LRVSjP6-q-4Jlk_gs6lTiqIDlG9s_FvvDihmrsDXJHkwodppGh3USkPq6KY7GFZ10KcbwLDvjGSz68bPrlc5a1cMtfA9j-7NIiHA2VGacErZyG096aJYDQn2c7mg1wMZjDErBSn") {
      setImagenn("https://blogger.googleusercontent.com/img/a/AVvXsEh5my9AT5GXY5jssafT_BILZRFOgXy4fouL2JVrImGfzjmSTn2X6LRVSjP6-q-4Jlk_gs6lTiqIDlG9s_FvvDihmrsDXJHkwodppGh3USkPq6KY7GFZ10KcbwLDvjGSz68bPrlc5a1cMtfA9j-7NIiHA2VGacErZyG096aJYDQn2c7mg1wMZjDErBSn");//prendido
    } else {
      setImagenn("https://blogger.googleusercontent.com/img/a/AVvXsEh5my9AT5GXY5jssafT_BILZRFOgXy4fouL2JVrImGfzjmSTn2X6LRVSjP6-q-4Jlk_gs6lTiqIDlG9s_FvvDihmrsDXJHkwodppGh3USkPq6KY7GFZ10KcbwLDvjGSz68bPrlc5a1cMtfA9j-7NIiHA2VGacErZyG096aJYDQn2c7mg1wMZjDErBSn");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imageng, setImageng] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgD9OhfJpFXxnlOip0YmJYREYnAi162qsha3ptbTJq1Q1oE_Hh1axFpw_gpPpyIFcp8_JPxuYpn5c4pOcklZhb2KB7IwUws9EviSkmw6dY-SU3-KGgn2IrnO5_u8lIhNvLKB6ahnUwxqdfk9x_pI4zXWl01oQ2F8-eH5lGXlDZCc10n_z5rwhGLWJzW");
  
  function prenderg() {
    if (imageng === "https://blogger.googleusercontent.com/img/a/AVvXsEgD9OhfJpFXxnlOip0YmJYREYnAi162qsha3ptbTJq1Q1oE_Hh1axFpw_gpPpyIFcp8_JPxuYpn5c4pOcklZhb2KB7IwUws9EviSkmw6dY-SU3-KGgn2IrnO5_u8lIhNvLKB6ahnUwxqdfk9x_pI4zXWl01oQ2F8-eH5lGXlDZCc10n_z5rwhGLWJzW") {
      setImageng("https://blogger.googleusercontent.com/img/a/AVvXsEgD9OhfJpFXxnlOip0YmJYREYnAi162qsha3ptbTJq1Q1oE_Hh1axFpw_gpPpyIFcp8_JPxuYpn5c4pOcklZhb2KB7IwUws9EviSkmw6dY-SU3-KGgn2IrnO5_u8lIhNvLKB6ahnUwxqdfk9x_pI4zXWl01oQ2F8-eH5lGXlDZCc10n_z5rwhGLWJzW");//prendido
    } else {
      setImageng("https://blogger.googleusercontent.com/img/a/AVvXsEgD9OhfJpFXxnlOip0YmJYREYnAi162qsha3ptbTJq1Q1oE_Hh1axFpw_gpPpyIFcp8_JPxuYpn5c4pOcklZhb2KB7IwUws9EviSkmw6dY-SU3-KGgn2IrnO5_u8lIhNvLKB6ahnUwxqdfk9x_pI4zXWl01oQ2F8-eH5lGXlDZCc10n_z5rwhGLWJzW");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imageno, setImageno] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhyru7LJ2mtFtex-NT-lys3CveoR7KqHKoodTG7RPw1NrNO_bqcKiT5-giSe4KsCPDQkiWcs8tvhc7XNz7KIcbn1aEKusyO4-7sL6wF820ich17pHyBZk0vy6HFrd3ObK81izb1Qix2ndTiYo8inC_GNUI7VPwQjQBXmypgB5Vy64oUCjU-CHDq3T2S");
  
  function prendero() {
    if (imageno === "https://blogger.googleusercontent.com/img/a/AVvXsEhyru7LJ2mtFtex-NT-lys3CveoR7KqHKoodTG7RPw1NrNO_bqcKiT5-giSe4KsCPDQkiWcs8tvhc7XNz7KIcbn1aEKusyO4-7sL6wF820ich17pHyBZk0vy6HFrd3ObK81izb1Qix2ndTiYo8inC_GNUI7VPwQjQBXmypgB5Vy64oUCjU-CHDq3T2S") {
      setImageno("https://blogger.googleusercontent.com/img/a/AVvXsEhyru7LJ2mtFtex-NT-lys3CveoR7KqHKoodTG7RPw1NrNO_bqcKiT5-giSe4KsCPDQkiWcs8tvhc7XNz7KIcbn1aEKusyO4-7sL6wF820ich17pHyBZk0vy6HFrd3ObK81izb1Qix2ndTiYo8inC_GNUI7VPwQjQBXmypgB5Vy64oUCjU-CHDq3T2S");//prendido
    } else {
      setImageno("https://blogger.googleusercontent.com/img/a/AVvXsEhyru7LJ2mtFtex-NT-lys3CveoR7KqHKoodTG7RPw1NrNO_bqcKiT5-giSe4KsCPDQkiWcs8tvhc7XNz7KIcbn1aEKusyO4-7sL6wF820ich17pHyBZk0vy6HFrd3ObK81izb1Qix2ndTiYo8inC_GNUI7VPwQjQBXmypgB5Vy64oUCjU-CHDq3T2S");
    }
  }
  //_________________________________________________________________________________________________________________

  const [imagen, setImagen] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhY1oeDAotk_TfP7CY2itDgVKXnutxd0tnBpGHqlDrMsr5oa60jxipiwW2E8h3ODAHXsCncKZnViwqVJJqzESb1PuEolrzAWqzlhgodWI7vrxfeyMdhGqMoD5TezG6VNalXwJcNmCrCYFHjDDpHeVydLDW3tj6ysYaN3mw9GE3vlBS2qklnXQPUnvSY");
  
  function prender() {
    if (imagen === "https://blogger.googleusercontent.com/img/a/AVvXsEhY1oeDAotk_TfP7CY2itDgVKXnutxd0tnBpGHqlDrMsr5oa60jxipiwW2E8h3ODAHXsCncKZnViwqVJJqzESb1PuEolrzAWqzlhgodWI7vrxfeyMdhGqMoD5TezG6VNalXwJcNmCrCYFHjDDpHeVydLDW3tj6ysYaN3mw9GE3vlBS2qklnXQPUnvSY") {
      setImagen("https://blogger.googleusercontent.com/img/a/AVvXsEjdCQIc3fxlO9ER6NRV_CnQK2IkXpz9fsUDA3PLjGs3RuIsaZOlgX-FlSqzirGWCzup-fNNMHuO697j2bp5OGPAmwrtfWiVWmJ3oL0v6hzhzqNChpD_uYuVL-go1qu_JHVaicXrnbNkwsYOxTr3iXKmgae7k8ktYJ08eeaVZI78SXJvAFmoAzqJTYtq");//prendido
    } else {
      setImagen("https://blogger.googleusercontent.com/img/a/AVvXsEhY1oeDAotk_TfP7CY2itDgVKXnutxd0tnBpGHqlDrMsr5oa60jxipiwW2E8h3ODAHXsCncKZnViwqVJJqzESb1PuEolrzAWqzlhgodWI7vrxfeyMdhGqMoD5TezG6VNalXwJcNmCrCYFHjDDpHeVydLDW3tj6ysYaN3mw9GE3vlBS2qklnXQPUnvSY");
    }
  }
//_________________________________________________________________________________________________________________
  const [imagen2, setImagen2] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhPFZsnE5WswDGIKjZpAb5PftmDDZ99vlfE-n4ishG4dC6vayzK3f_qMekRtdqpWB0u2NaiU4Fbk8mXugsykAwHUSjhVkOEvBFuEjqzYgRUkJwhcbSQRNbRieepm6234GVOtXqSbegL_tSf7dQWnebzjR8qRv93xVqgzZdPeSpk2hWGaLEWqdjblaTa");
  
  function prender2() {
    if (imagen2 === "https://blogger.googleusercontent.com/img/a/AVvXsEhPFZsnE5WswDGIKjZpAb5PftmDDZ99vlfE-n4ishG4dC6vayzK3f_qMekRtdqpWB0u2NaiU4Fbk8mXugsykAwHUSjhVkOEvBFuEjqzYgRUkJwhcbSQRNbRieepm6234GVOtXqSbegL_tSf7dQWnebzjR8qRv93xVqgzZdPeSpk2hWGaLEWqdjblaTa") {
      setImagen2("https://blogger.googleusercontent.com/img/a/AVvXsEisR6Dkkr1SP8jUGnNl4VSUXK748f2XveiEa-OVl9aZtQ51F0qUVETWW7OX5IcDJiAuaWWWr2TT7mErtD8qcEiiYGyLshPkuRfRRXEuroFt7ghMElyf2OPr8pft--FZzyBX7QxwDqqL04zKdkFYQ-oRq3uEeic8rmRpmg7Q6o8S5I9JCwMFY7oO_2CI");//prendido
    } else {
      setImagen2("https://blogger.googleusercontent.com/img/a/AVvXsEhPFZsnE5WswDGIKjZpAb5PftmDDZ99vlfE-n4ishG4dC6vayzK3f_qMekRtdqpWB0u2NaiU4Fbk8mXugsykAwHUSjhVkOEvBFuEjqzYgRUkJwhcbSQRNbRieepm6234GVOtXqSbegL_tSf7dQWnebzjR8qRv93xVqgzZdPeSpk2hWGaLEWqdjblaTa");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen3, setImagen3] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgilHU0gX0S7U5yu-eWwB0bhQyHSiLMHPCOkNRaqPuj3eVN0mBlH_fYD5WxF_jMi5U5r3HLIRCnWeeOitLjlOahpMTDvNzD7rYa5vmJUjMZDIjfoaxg4bwL7NhKTWNnWZhBB1wMPk_OFSblBn-YgmvsNHLqYdQjXj-VrqDoguA8GmYMOuMAGXU7TS8R");
  
  function prender3() {
    if (imagen3 === "https://blogger.googleusercontent.com/img/a/AVvXsEgilHU0gX0S7U5yu-eWwB0bhQyHSiLMHPCOkNRaqPuj3eVN0mBlH_fYD5WxF_jMi5U5r3HLIRCnWeeOitLjlOahpMTDvNzD7rYa5vmJUjMZDIjfoaxg4bwL7NhKTWNnWZhBB1wMPk_OFSblBn-YgmvsNHLqYdQjXj-VrqDoguA8GmYMOuMAGXU7TS8R") {
      setImagen3("https://blogger.googleusercontent.com/img/a/AVvXsEighW_up37FsLhBri3J3mZrDEUleBF8Tv0QKI3k38608USzIcwvhB66ny7sXo6Sn4XBAELnjmBo4L4CGFYGz9Y8Myq8g2Wz9cL0WMxMs7XCwF8fsysTGCBwpDQGPOn4gGVDdiBNDiqXNXvZU2pvjZ36NB4zZNRTSdVTj75Yv_kxLAPzi0J80TamOwMW");//prendido
    } else {
      setImagen3("https://blogger.googleusercontent.com/img/a/AVvXsEgilHU0gX0S7U5yu-eWwB0bhQyHSiLMHPCOkNRaqPuj3eVN0mBlH_fYD5WxF_jMi5U5r3HLIRCnWeeOitLjlOahpMTDvNzD7rYa5vmJUjMZDIjfoaxg4bwL7NhKTWNnWZhBB1wMPk_OFSblBn-YgmvsNHLqYdQjXj-VrqDoguA8GmYMOuMAGXU7TS8R");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen4, setImagen4] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgyHSlwieR4GgPO-8QJeZrtcGBINk2oL1rntfWIzJfForJor84Hzgr0uRwSxCK09sRPJOVCqGANuiiUk5ql_J2_Q9Poxx0qrOr_aJ15hZXZq-7oE9yTuAyrM9a8V9aMBEBGXEpaizr7XXy9Sq7gP5WPtgDUtxf4EaoF86XpXU1iYXfFbGYk72vw4ZLw");
  
  function prender4() {
    if (imagen4 === "https://blogger.googleusercontent.com/img/a/AVvXsEgyHSlwieR4GgPO-8QJeZrtcGBINk2oL1rntfWIzJfForJor84Hzgr0uRwSxCK09sRPJOVCqGANuiiUk5ql_J2_Q9Poxx0qrOr_aJ15hZXZq-7oE9yTuAyrM9a8V9aMBEBGXEpaizr7XXy9Sq7gP5WPtgDUtxf4EaoF86XpXU1iYXfFbGYk72vw4ZLw") {
      setImagen4("https://blogger.googleusercontent.com/img/a/AVvXsEiQHt3gi0xp17v_BrAz61oXn3ZYG7lsanV4L4F-2-DPQ58GI5TqBC8uh674gf19XuZi27IiPSQFq3Vn8lpVocJ0Z0XAJRKgilP-HCQMC-mVURJDFz3Orl_efQpzVp-XZ0tPFwgM7GRz2jvxRmUX2nRzAasxB_ZsXzG1qRtcfuVnBx5LHt_7x5MatHqR");//prendido
    } else {
      setImagen4("https://blogger.googleusercontent.com/img/a/AVvXsEgyHSlwieR4GgPO-8QJeZrtcGBINk2oL1rntfWIzJfForJor84Hzgr0uRwSxCK09sRPJOVCqGANuiiUk5ql_J2_Q9Poxx0qrOr_aJ15hZXZq-7oE9yTuAyrM9a8V9aMBEBGXEpaizr7XXy9Sq7gP5WPtgDUtxf4EaoF86XpXU1iYXfFbGYk72vw4ZLw");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen5, setImagen5] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgK_TiVk7ZtOmE0yvBsEwJR5Wrshn1A-otFoZjLQP6t3XKc6G7fQm_4MiXd_GZ3610jVHEvSNdZQYsHc8rGMzKv1n1KggPLZIT20aX-f4PK068TwgoP_fkBGx_8zxG5zXZtjTEC0FXeEO1EVfg7uj2B6j0xBTGQ4iJMegZgFREeRbUNqgwcqVrITqTf");
  
  function prender5() {
    if (imagen5 === "https://blogger.googleusercontent.com/img/a/AVvXsEgK_TiVk7ZtOmE0yvBsEwJR5Wrshn1A-otFoZjLQP6t3XKc6G7fQm_4MiXd_GZ3610jVHEvSNdZQYsHc8rGMzKv1n1KggPLZIT20aX-f4PK068TwgoP_fkBGx_8zxG5zXZtjTEC0FXeEO1EVfg7uj2B6j0xBTGQ4iJMegZgFREeRbUNqgwcqVrITqTf") {
      setImagen5("https://blogger.googleusercontent.com/img/a/AVvXsEhdporM9zB60-s0m-cDYaL5py34-zEF1ExzB9eyR9m0XrDusmuA8B_XC8R9oIk-bGPscHErr3VldAGgbGtdHKVFIpwHxIJXMpb1xE0AtXdPQVAbS3yMxR70rsSd5L0QwWou39Mho3j8sR27N7rbUc8faBTEdL9VYO6GlIhyKzuk1Kf2kQk6jqhCQLc0");//prendido
    } else {
      setImagen5("https://blogger.googleusercontent.com/img/a/AVvXsEgK_TiVk7ZtOmE0yvBsEwJR5Wrshn1A-otFoZjLQP6t3XKc6G7fQm_4MiXd_GZ3610jVHEvSNdZQYsHc8rGMzKv1n1KggPLZIT20aX-f4PK068TwgoP_fkBGx_8zxG5zXZtjTEC0FXeEO1EVfg7uj2B6j0xBTGQ4iJMegZgFREeRbUNqgwcqVrITqTf");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen6, setImagen6] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgzXBSXPu0LtOLmHh6x9qdUyyRUdBS9q0xI8IBmVX_x0Us2Q_-cAKtOqDpoLJ1VguuNOLkcg4o-k3g2KgwNqKYp9foJiMqg2khsBwUUu7RSpeRSx4e5n-BpRWJmqRyC0evp4XnO-o4gA5AYovfix8w80i5QCjG9CEssGsCHyBdKmPj-nfIQ0Rtk-7g3");
  
  function prender6() {
    if (imagen6 === "https://blogger.googleusercontent.com/img/a/AVvXsEgzXBSXPu0LtOLmHh6x9qdUyyRUdBS9q0xI8IBmVX_x0Us2Q_-cAKtOqDpoLJ1VguuNOLkcg4o-k3g2KgwNqKYp9foJiMqg2khsBwUUu7RSpeRSx4e5n-BpRWJmqRyC0evp4XnO-o4gA5AYovfix8w80i5QCjG9CEssGsCHyBdKmPj-nfIQ0Rtk-7g3") {
      setImagen6("https://blogger.googleusercontent.com/img/a/AVvXsEhZm8WYO4goTLJybLiGhBVyEZxU53NdWA5nIMq-GdIiEA0ZbfS0RJupEY52sC8akd9gAJ5BoxsUuwLesxrx0g1ZFOkqzdWw9VsviEVLnZqmOYYo6fNvrCiDFsv44IO1BaPr78nxoH4wcQglfZj2ORAbpjV8AyVUhbdaE2yQGcKaBRwps9-te43SU5qF");//prendido
    } else {
      setImagen6("https://blogger.googleusercontent.com/img/a/AVvXsEgzXBSXPu0LtOLmHh6x9qdUyyRUdBS9q0xI8IBmVX_x0Us2Q_-cAKtOqDpoLJ1VguuNOLkcg4o-k3g2KgwNqKYp9foJiMqg2khsBwUUu7RSpeRSx4e5n-BpRWJmqRyC0evp4XnO-o4gA5AYovfix8w80i5QCjG9CEssGsCHyBdKmPj-nfIQ0Rtk-7g3");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen7, setImagen7] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgZYHww47EeD14EOQvfioys_mL6RKWzPMqK7DFBskUxhedj8rWbmHfSJ0pV13HifgBxQ3fHmzyj8-iA15vTvbKCQXzbGDIZ28xMFzd9_lGq3tHi1UOs984e3qIHxoSQ0LRH8aQhmRmNOLZooh1wlZ-zd9RgM6YIbqujA0IJZX05MFEgj_L2G29sIFb7");
  
  function prender7() {
    if (imagen7 === "https://blogger.googleusercontent.com/img/a/AVvXsEgZYHww47EeD14EOQvfioys_mL6RKWzPMqK7DFBskUxhedj8rWbmHfSJ0pV13HifgBxQ3fHmzyj8-iA15vTvbKCQXzbGDIZ28xMFzd9_lGq3tHi1UOs984e3qIHxoSQ0LRH8aQhmRmNOLZooh1wlZ-zd9RgM6YIbqujA0IJZX05MFEgj_L2G29sIFb7") {
      setImagen7("https://blogger.googleusercontent.com/img/a/AVvXsEg0JK-kFbPkCnVnw6pMKWnwZc6ykrB1rFQhJ2UJXeSizv7PlrQkS8kfeI5j0tOXZc5mlc-vIIW0SNNCV3SnR-e-B-KTYXiWsXDMLa9L7TkjHWEwROMr2x88cnG0uHizqF7Z8FLaxQmC21rNt69NrCb-2qfRd06nqDMcBykkX-c8Dsg051CoDrUZzCFE");//prendido
    } else {
      setImagen7("https://blogger.googleusercontent.com/img/a/AVvXsEgZYHww47EeD14EOQvfioys_mL6RKWzPMqK7DFBskUxhedj8rWbmHfSJ0pV13HifgBxQ3fHmzyj8-iA15vTvbKCQXzbGDIZ28xMFzd9_lGq3tHi1UOs984e3qIHxoSQ0LRH8aQhmRmNOLZooh1wlZ-zd9RgM6YIbqujA0IJZX05MFEgj_L2G29sIFb7");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen8, setImagen8] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjcP3dpYbGac0Ll0EFsGXw6YQHneKVXUla8zTc8EEzRFqu-xxhhH5EHojNK_V9lFBcEwbAZvVye60gsufA6Vqt155OIiokV7xIYKVSGeTS1_WborBvYHnSJks7tfw8B6AgqKqCn9KOwBefeyg9b-BLhAR_GexA5_39skOeLRcpJWSBrz9UJSRTcdylw");
  
  function prender8() {
    if (imagen8 === "https://blogger.googleusercontent.com/img/a/AVvXsEjcP3dpYbGac0Ll0EFsGXw6YQHneKVXUla8zTc8EEzRFqu-xxhhH5EHojNK_V9lFBcEwbAZvVye60gsufA6Vqt155OIiokV7xIYKVSGeTS1_WborBvYHnSJks7tfw8B6AgqKqCn9KOwBefeyg9b-BLhAR_GexA5_39skOeLRcpJWSBrz9UJSRTcdylw") {
      setImagen8("https://blogger.googleusercontent.com/img/a/AVvXsEi4vu57QUtRTQK0JKnS0VJsiUyTf0Qoc4DBAXdXorAwbFVUSVFTTShZeYr-r_m2a3C_6aJrY8iupGwfCOHIJwoyKlbweB-eBsb8Mkq1Vo7JTAfm_GvkmprMCbMawmJI4J_KQH5f-Rs0VtTCHsH1R5MP6nmOFF4DmPL6tCQAWI7T8kcwrYq04DOPOc-q");//prendido
    } else {
      setImagen8("https://blogger.googleusercontent.com/img/a/AVvXsEjcP3dpYbGac0Ll0EFsGXw6YQHneKVXUla8zTc8EEzRFqu-xxhhH5EHojNK_V9lFBcEwbAZvVye60gsufA6Vqt155OIiokV7xIYKVSGeTS1_WborBvYHnSJks7tfw8B6AgqKqCn9KOwBefeyg9b-BLhAR_GexA5_39skOeLRcpJWSBrz9UJSRTcdylw");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen9, setImagen9] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhnqwMJ3Xty2YCWKaa_L7VVRnslfmxMSC5o664U_AhsEvNawcWONyePPjoGg6QYQccrfKue3OmcglGRKrfcgkIDsxH3oQouprJVVPlPvqj2ofxYnA0TT8tfTrqjQaRnNTdHpD-ljlw7Dlw-aElmM3JKnK1yVB_OIh3ADvtkz1DRk5NedsMieIstK_VX");
  
  function prender9() {
    if (imagen9 === "https://blogger.googleusercontent.com/img/a/AVvXsEhnqwMJ3Xty2YCWKaa_L7VVRnslfmxMSC5o664U_AhsEvNawcWONyePPjoGg6QYQccrfKue3OmcglGRKrfcgkIDsxH3oQouprJVVPlPvqj2ofxYnA0TT8tfTrqjQaRnNTdHpD-ljlw7Dlw-aElmM3JKnK1yVB_OIh3ADvtkz1DRk5NedsMieIstK_VX") {
      setImagen9("https://blogger.googleusercontent.com/img/a/AVvXsEgSHAt5OCC0B7cJWLkA0D0InVKIX7ExEkexxk3d9Jo7G_Te-j7LaJ8t0LHDW48XP-H2DLA1nt9XULEVtZhEsTgV1LK4fSnFAeNBpRW7BHEawuA73RG-dpqiKBAyP9zVn-cOBKTVKofVTvhk2WcBxTork5joSKFGSfsl24avg-WCKPFTYYQrS85MktV3");//prendido
    } else {
      setImagen9("https://blogger.googleusercontent.com/img/a/AVvXsEhnqwMJ3Xty2YCWKaa_L7VVRnslfmxMSC5o664U_AhsEvNawcWONyePPjoGg6QYQccrfKue3OmcglGRKrfcgkIDsxH3oQouprJVVPlPvqj2ofxYnA0TT8tfTrqjQaRnNTdHpD-ljlw7Dlw-aElmM3JKnK1yVB_OIh3ADvtkz1DRk5NedsMieIstK_VX");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen10, setImagen10] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEj7RQn57pNk9cz6sXKUXDPhALvbrBsIMLy_AMk7r7mOGuLaB_jZTimhcsLEgNNIw-XggKswwVmTvpVv3T9HuFPZf1ZpENjlbKOhf0RigKUk0--hbljfofaAQejIlur7UZl5bvHd2zPMi4zPM3GxKEC0w0A5dXd1O6Sj_JhSw69c1vh4TijI47D2GOIU");
  
  function prender10() {
    if (imagen10 === "https://blogger.googleusercontent.com/img/a/AVvXsEj7RQn57pNk9cz6sXKUXDPhALvbrBsIMLy_AMk7r7mOGuLaB_jZTimhcsLEgNNIw-XggKswwVmTvpVv3T9HuFPZf1ZpENjlbKOhf0RigKUk0--hbljfofaAQejIlur7UZl5bvHd2zPMi4zPM3GxKEC0w0A5dXd1O6Sj_JhSw69c1vh4TijI47D2GOIU") {
      setImagen10("https://blogger.googleusercontent.com/img/a/AVvXsEgP3t2A9k_UVCQNvViO0fRXX6v2r1UlF-fHMHK1nnR1eD9C-bDSJTr0X25zIvG-djkwlsOsBsZnwG-YNSL5Akt_UIs0dgAnie9md0dv_TQy4NyptT6WzRNAq2td1PVkOtYOGptuwUJH3tWqKVVaPSk_Or-CV37I7lXzDZbHqQBljhRmvC0yAEDQHBh0");//prendido
    } else {
      setImagen10("https://blogger.googleusercontent.com/img/a/AVvXsEj7RQn57pNk9cz6sXKUXDPhALvbrBsIMLy_AMk7r7mOGuLaB_jZTimhcsLEgNNIw-XggKswwVmTvpVv3T9HuFPZf1ZpENjlbKOhf0RigKUk0--hbljfofaAQejIlur7UZl5bvHd2zPMi4zPM3GxKEC0w0A5dXd1O6Sj_JhSw69c1vh4TijI47D2GOIU");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen11, setImagen11] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEi1qkIr7XvKz5twSNLNpZuPDUzapU6JTpautNoR-cuaLCSlHkPLCVFzQSwwZNs2MxiZ4A1dEO0JLfhAErIemhkfx-d-NjQt3KCP4xxGJgnrBA-oEqZ5pSz6bdCU-LkV6mOecw277R_qbluByX5iN0ybfhD7fdO3nsI07wPJlTZxOMBI-t34UYJofeJC");
  
  function prender11() {
    if (imagen11 === "https://blogger.googleusercontent.com/img/a/AVvXsEi1qkIr7XvKz5twSNLNpZuPDUzapU6JTpautNoR-cuaLCSlHkPLCVFzQSwwZNs2MxiZ4A1dEO0JLfhAErIemhkfx-d-NjQt3KCP4xxGJgnrBA-oEqZ5pSz6bdCU-LkV6mOecw277R_qbluByX5iN0ybfhD7fdO3nsI07wPJlTZxOMBI-t34UYJofeJC") {
      setImagen11("https://blogger.googleusercontent.com/img/a/AVvXsEjHAp9WKQr_2kMcx_kE3EClU69TlW5uwa_kl3qLTtxSy_4Z8VWo-Io7iapZD8YdSya1auybAN0I3OfJIgT1PDZhG3vt1Nd1osndWV02IUgKxUe9E-stWESs8rqrBMNuStCANtPuc5RMbwpE2g83Ayktfp3VXRTfDHNMIFHCfPhVtUjhA2KqzFLvuYSB");//prendido
    } else {
      setImagen11("https://blogger.googleusercontent.com/img/a/AVvXsEi1qkIr7XvKz5twSNLNpZuPDUzapU6JTpautNoR-cuaLCSlHkPLCVFzQSwwZNs2MxiZ4A1dEO0JLfhAErIemhkfx-d-NjQt3KCP4xxGJgnrBA-oEqZ5pSz6bdCU-LkV6mOecw277R_qbluByX5iN0ybfhD7fdO3nsI07wPJlTZxOMBI-t34UYJofeJC");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen12, setImagen12] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgfft3aVdr7ZqwmRT_l298E7e-7in2nQ_-ynDCXCL9TsS4XCnM1cVM9_c6AanaBQ6t_MIvyUZIvEcYb5mfpeTOW2NzxZhYaazCmG21cS-t7r2zIxD2_vn8_wuzE-4khTmZpCC7sFMGi_VjBUhQLW1-98ESZH_BI79rn5scCQAuuFXlbsyDOjPnAiF4R");
  
  function prender12() {
    if (imagen12 === "https://blogger.googleusercontent.com/img/a/AVvXsEgfft3aVdr7ZqwmRT_l298E7e-7in2nQ_-ynDCXCL9TsS4XCnM1cVM9_c6AanaBQ6t_MIvyUZIvEcYb5mfpeTOW2NzxZhYaazCmG21cS-t7r2zIxD2_vn8_wuzE-4khTmZpCC7sFMGi_VjBUhQLW1-98ESZH_BI79rn5scCQAuuFXlbsyDOjPnAiF4R") {
      setImagen12("https://blogger.googleusercontent.com/img/a/AVvXsEjGufgVDQzkO68KnD-i8piv_n85xuJxizHm41lA64kno0DHEcJ869FshYJ2nAAjHOrboMTQpIdHXNp-mehXy-yl0ui0sZ-T67Dl0LSyuzE_SXIE_dE0YY6yYRPpjTdewLMS0ZqHM2PoVs2_Q_7IL3i8vPocJuPXqsWUVfBzkBbatdrEohcoVhesxnOL");//prendido
    } else {
      setImagen12("https://blogger.googleusercontent.com/img/a/AVvXsEgfft3aVdr7ZqwmRT_l298E7e-7in2nQ_-ynDCXCL9TsS4XCnM1cVM9_c6AanaBQ6t_MIvyUZIvEcYb5mfpeTOW2NzxZhYaazCmG21cS-t7r2zIxD2_vn8_wuzE-4khTmZpCC7sFMGi_VjBUhQLW1-98ESZH_BI79rn5scCQAuuFXlbsyDOjPnAiF4R");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen13, setImagen13] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiIy9-U1ZUYQdJa4v-zeve7LELD0t7CaD7-5RFHF20h-TBOJqbAcHqII0-5y03dr2F0FdgdrR-qxyHzzY6sWcLMxJpjHRER0SyeePtKYuXF-MAkt7sJ0plaZZTUU6tTaPwGoUVzueq1O18YiFPTALCBFA_LreQ_uzSOSMeggHg5cnhAuoFbL7gaHX59");
  
  function prender13() {
    if (imagen13 === "https://blogger.googleusercontent.com/img/a/AVvXsEiIy9-U1ZUYQdJa4v-zeve7LELD0t7CaD7-5RFHF20h-TBOJqbAcHqII0-5y03dr2F0FdgdrR-qxyHzzY6sWcLMxJpjHRER0SyeePtKYuXF-MAkt7sJ0plaZZTUU6tTaPwGoUVzueq1O18YiFPTALCBFA_LreQ_uzSOSMeggHg5cnhAuoFbL7gaHX59") {
      setImagen13("https://blogger.googleusercontent.com/img/a/AVvXsEg42gxuw8rOjl4gTEeZpAnuqmUeGQ4LdztLJpf7KJ0N22J8awEndTmX6d5cWGh-PqzhMrKT3V8qR1UiIXBCz1IgLGnntlbWGM4yHOfmMCvl6MbQynhov1kN8owCG_7cr56AnH3krftgywlfzOfOPc59toSY3_w6-kjJx6jwP6armpMgp6bJqLMrB20f");//prendido
    } else {
      setImagen13("https://blogger.googleusercontent.com/img/a/AVvXsEiIy9-U1ZUYQdJa4v-zeve7LELD0t7CaD7-5RFHF20h-TBOJqbAcHqII0-5y03dr2F0FdgdrR-qxyHzzY6sWcLMxJpjHRER0SyeePtKYuXF-MAkt7sJ0plaZZTUU6tTaPwGoUVzueq1O18YiFPTALCBFA_LreQ_uzSOSMeggHg5cnhAuoFbL7gaHX59");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen14, setImagen14] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgGnAyEBiJSkcRHI-yCdkMnHE14ETiGP50hybDIPpjP1M4nfUx7NQMGT7DB4NRE4MJcNQXf_BbtYmK8MgunmUsrRbZnQ_rpm4AHkw8mBwFAVwsE624U1wFxJfQwAcb-kKIpNus0A9GQTbOPg0pk4jTaIGXixuwSZA77TlUg79KDjyxz9ivZfOtATFnq");
  
  function prender14() {
    if (imagen14 === "https://blogger.googleusercontent.com/img/a/AVvXsEgGnAyEBiJSkcRHI-yCdkMnHE14ETiGP50hybDIPpjP1M4nfUx7NQMGT7DB4NRE4MJcNQXf_BbtYmK8MgunmUsrRbZnQ_rpm4AHkw8mBwFAVwsE624U1wFxJfQwAcb-kKIpNus0A9GQTbOPg0pk4jTaIGXixuwSZA77TlUg79KDjyxz9ivZfOtATFnq") {
      setImagen14("https://blogger.googleusercontent.com/img/a/AVvXsEi2dx2rCkKXFsxcYfhE8KB4SIKzSIl3II9ZkczXV70FA3-hvDrqyPF1iotF3HHvRRCX-8997gRGxoKT5VPGRzTUdgUQznI-JvFDA3p7RzM9hbWK-FzYdEX-dA7FtKhs6k_ab-MpEmnyv22BKGcarTLzZn0ZIkkC5pIFOWd2QtDGNvk5kVTlknX1x7RC");//prendido
    } else {
      setImagen14("https://blogger.googleusercontent.com/img/a/AVvXsEgGnAyEBiJSkcRHI-yCdkMnHE14ETiGP50hybDIPpjP1M4nfUx7NQMGT7DB4NRE4MJcNQXf_BbtYmK8MgunmUsrRbZnQ_rpm4AHkw8mBwFAVwsE624U1wFxJfQwAcb-kKIpNus0A9GQTbOPg0pk4jTaIGXixuwSZA77TlUg79KDjyxz9ivZfOtATFnq");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen15, setImagen15] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgs4KNuqYmwfc8YT6akYDyz_vVIdYYa9cIgCclqg9bRTCcWo9yaQjjDR2bXaIfz-shw1Tc8dmhxSQd0-3Q2QD6gJokwBzQP4nGFCI15rwc4v44scEHi9q8JDttTioe-Qa3I9DdWEin5c0xXoQ5XIMdr30aELJLE9YRKPiGmia5ljCgHodoJrzQsSoOd");
  
  function prender15() {
    if (imagen15 === "https://blogger.googleusercontent.com/img/a/AVvXsEgs4KNuqYmwfc8YT6akYDyz_vVIdYYa9cIgCclqg9bRTCcWo9yaQjjDR2bXaIfz-shw1Tc8dmhxSQd0-3Q2QD6gJokwBzQP4nGFCI15rwc4v44scEHi9q8JDttTioe-Qa3I9DdWEin5c0xXoQ5XIMdr30aELJLE9YRKPiGmia5ljCgHodoJrzQsSoOd") {
      setImagen15("https://blogger.googleusercontent.com/img/a/AVvXsEjIBlOeaWHBmyN5_zzA8JsuUUQqyM76Dlv5PMl2hJ_yduf5jBOE4nrl3nuBYIY31N2sr6wnlXFyA9AyoVFYlAhi21byAGcPboMG2c5aB6Vazv6JnqayHlkd8zNmO1tvWyReSiFMah5t-5HXDZGFZ69UmXBplir-g2ijtTU64f5fmhFD0HYWkMOUG4uj");//prendido
    } else {
      setImagen15("https://blogger.googleusercontent.com/img/a/AVvXsEgs4KNuqYmwfc8YT6akYDyz_vVIdYYa9cIgCclqg9bRTCcWo9yaQjjDR2bXaIfz-shw1Tc8dmhxSQd0-3Q2QD6gJokwBzQP4nGFCI15rwc4v44scEHi9q8JDttTioe-Qa3I9DdWEin5c0xXoQ5XIMdr30aELJLE9YRKPiGmia5ljCgHodoJrzQsSoOd");
    }
  }

  //_________________________________________________________________________________________________________________
  const [imagen16, setImagen16] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEg6CxXFnfH44PZYNqSztbEQDfFOUURV2trg_hs5rEeXqpLo_Vib0Cyu4trzTawDl-rvsFU5UdpD0ENCFtJUPhNKzFoNIgblP9MzT0YjIi4ZZlx2WgRMlKd6NHG5UFCnrslLZ9XTuBr7sIL6RJRZaHwA6yXOZJotSqF-0XMDiP9uwon5tAkyow80A77p");
  
  function prender16() {
    if (imagen16 === "https://blogger.googleusercontent.com/img/a/AVvXsEg6CxXFnfH44PZYNqSztbEQDfFOUURV2trg_hs5rEeXqpLo_Vib0Cyu4trzTawDl-rvsFU5UdpD0ENCFtJUPhNKzFoNIgblP9MzT0YjIi4ZZlx2WgRMlKd6NHG5UFCnrslLZ9XTuBr7sIL6RJRZaHwA6yXOZJotSqF-0XMDiP9uwon5tAkyow80A77p") {
      setImagen16("https://blogger.googleusercontent.com/img/a/AVvXsEgf9kHSTPa6WJehP-haW4vYb3gdro_Q8MUqslV9IQRlMF81q8JSPQgfj8LfR4H4Ti8nZIq3ZvFc58WYBK5QqBqU5CIOL0HGwIuRQXWUeFsYSxtmndZVLCu6KmOhs6bsnsGrcKY_rlyzKulXMvwpMHlfNgJG90DPMUREMaYthLlIocZQvg9-3eWqpFTK");//prendido
    } else {
      setImagen16("https://blogger.googleusercontent.com/img/a/AVvXsEg6CxXFnfH44PZYNqSztbEQDfFOUURV2trg_hs5rEeXqpLo_Vib0Cyu4trzTawDl-rvsFU5UdpD0ENCFtJUPhNKzFoNIgblP9MzT0YjIi4ZZlx2WgRMlKd6NHG5UFCnrslLZ9XTuBr7sIL6RJRZaHwA6yXOZJotSqF-0XMDiP9uwon5tAkyow80A77p");
    }
  }

  //_________________________________________________________________________________________________________________
  const [imagen166, setImagen166] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEg6CxXFnfH44PZYNqSztbEQDfFOUURV2trg_hs5rEeXqpLo_Vib0Cyu4trzTawDl-rvsFU5UdpD0ENCFtJUPhNKzFoNIgblP9MzT0YjIi4ZZlx2WgRMlKd6NHG5UFCnrslLZ9XTuBr7sIL6RJRZaHwA6yXOZJotSqF-0XMDiP9uwon5tAkyow80A77p");
  
  function prender166() {
    if (imagen166 === "https://blogger.googleusercontent.com/img/a/AVvXsEg6CxXFnfH44PZYNqSztbEQDfFOUURV2trg_hs5rEeXqpLo_Vib0Cyu4trzTawDl-rvsFU5UdpD0ENCFtJUPhNKzFoNIgblP9MzT0YjIi4ZZlx2WgRMlKd6NHG5UFCnrslLZ9XTuBr7sIL6RJRZaHwA6yXOZJotSqF-0XMDiP9uwon5tAkyow80A77p") {
      setImagen166("https://blogger.googleusercontent.com/img/a/AVvXsEgf9kHSTPa6WJehP-haW4vYb3gdro_Q8MUqslV9IQRlMF81q8JSPQgfj8LfR4H4Ti8nZIq3ZvFc58WYBK5QqBqU5CIOL0HGwIuRQXWUeFsYSxtmndZVLCu6KmOhs6bsnsGrcKY_rlyzKulXMvwpMHlfNgJG90DPMUREMaYthLlIocZQvg9-3eWqpFTK");//prendido
    } else {
      setImagen166("https://blogger.googleusercontent.com/img/a/AVvXsEg6CxXFnfH44PZYNqSztbEQDfFOUURV2trg_hs5rEeXqpLo_Vib0Cyu4trzTawDl-rvsFU5UdpD0ENCFtJUPhNKzFoNIgblP9MzT0YjIi4ZZlx2WgRMlKd6NHG5UFCnrslLZ9XTuBr7sIL6RJRZaHwA6yXOZJotSqF-0XMDiP9uwon5tAkyow80A77p");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen17, setImagen17] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhRUgWmsA5FxdEB7AMb56l5XaubvolJoRi-ViYbjKlh-LVDWJbemiXPv31XObNprNZ0avW954sZy2MrO-XIeRgDYcGSQh8mQrvb_jUu9Oe5PPOWNl2m1SXDMwwwnosSA6581lg-fUD_mLuMrT1r-CKZnmd4OCsgaEcHyKgwpkefqgfh0nS4p6coSt7H");
  
  function prender17() {
    if (imagen17 === "https://blogger.googleusercontent.com/img/a/AVvXsEhRUgWmsA5FxdEB7AMb56l5XaubvolJoRi-ViYbjKlh-LVDWJbemiXPv31XObNprNZ0avW954sZy2MrO-XIeRgDYcGSQh8mQrvb_jUu9Oe5PPOWNl2m1SXDMwwwnosSA6581lg-fUD_mLuMrT1r-CKZnmd4OCsgaEcHyKgwpkefqgfh0nS4p6coSt7H") {
      setImagen17("https://blogger.googleusercontent.com/img/a/AVvXsEjE66Dyu8i1WhDU8ROR325jpPGkf8wYbf3iydmfcDzUrVmYE229qAKeKMxheWZXXb2uyEA389XUUEKbqy4skrjI85budAn548iEacAZP5oUXipI9ca507u8v5EGNICpWGKMoueh9bdvAxOlLPBccSjJ_pml_GnfOfSih52-MpQ22wGT19g033Z8A8G0");//prendido
    } else {
      setImagen17("https://blogger.googleusercontent.com/img/a/AVvXsEhRUgWmsA5FxdEB7AMb56l5XaubvolJoRi-ViYbjKlh-LVDWJbemiXPv31XObNprNZ0avW954sZy2MrO-XIeRgDYcGSQh8mQrvb_jUu9Oe5PPOWNl2m1SXDMwwwnosSA6581lg-fUD_mLuMrT1r-CKZnmd4OCsgaEcHyKgwpkefqgfh0nS4p6coSt7H");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen177, setImagen177] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhRUgWmsA5FxdEB7AMb56l5XaubvolJoRi-ViYbjKlh-LVDWJbemiXPv31XObNprNZ0avW954sZy2MrO-XIeRgDYcGSQh8mQrvb_jUu9Oe5PPOWNl2m1SXDMwwwnosSA6581lg-fUD_mLuMrT1r-CKZnmd4OCsgaEcHyKgwpkefqgfh0nS4p6coSt7H");
  
  function prender177() {
    if (imagen177 === "https://blogger.googleusercontent.com/img/a/AVvXsEhRUgWmsA5FxdEB7AMb56l5XaubvolJoRi-ViYbjKlh-LVDWJbemiXPv31XObNprNZ0avW954sZy2MrO-XIeRgDYcGSQh8mQrvb_jUu9Oe5PPOWNl2m1SXDMwwwnosSA6581lg-fUD_mLuMrT1r-CKZnmd4OCsgaEcHyKgwpkefqgfh0nS4p6coSt7H") {
      setImagen177("https://blogger.googleusercontent.com/img/a/AVvXsEjE66Dyu8i1WhDU8ROR325jpPGkf8wYbf3iydmfcDzUrVmYE229qAKeKMxheWZXXb2uyEA389XUUEKbqy4skrjI85budAn548iEacAZP5oUXipI9ca507u8v5EGNICpWGKMoueh9bdvAxOlLPBccSjJ_pml_GnfOfSih52-MpQ22wGT19g033Z8A8G0");//prendido
    } else {
      setImagen177("https://blogger.googleusercontent.com/img/a/AVvXsEhRUgWmsA5FxdEB7AMb56l5XaubvolJoRi-ViYbjKlh-LVDWJbemiXPv31XObNprNZ0avW954sZy2MrO-XIeRgDYcGSQh8mQrvb_jUu9Oe5PPOWNl2m1SXDMwwwnosSA6581lg-fUD_mLuMrT1r-CKZnmd4OCsgaEcHyKgwpkefqgfh0nS4p6coSt7H");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen18, setImagen18] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiNDCEWETTIM6w4RUE_10Nh0CX8RmMSv0qbHOZgXX4E02V0Rp7uEJzy6l9fksyDeso7YiuAsL-Yr0UBzWc-o6rq_9DBbxEjA7f-nh_V7bSry76viwiiHN1cY1LE7Vuq88_HGMlG7Kh4tn2ksLnAYUakbWLZGBG4Xr1rUy02ETxxxti50rB_Tkof1K6P");
  
  function prender18() {
    if (imagen18 === "https://blogger.googleusercontent.com/img/a/AVvXsEiNDCEWETTIM6w4RUE_10Nh0CX8RmMSv0qbHOZgXX4E02V0Rp7uEJzy6l9fksyDeso7YiuAsL-Yr0UBzWc-o6rq_9DBbxEjA7f-nh_V7bSry76viwiiHN1cY1LE7Vuq88_HGMlG7Kh4tn2ksLnAYUakbWLZGBG4Xr1rUy02ETxxxti50rB_Tkof1K6P") {
      setImagen18("https://blogger.googleusercontent.com/img/a/AVvXsEh-Cvf1t7HVgJp1oiqHq4DUKPfdQrAzMgL6_20-Y3mHcM-SxnjpKeqjHwB1yE5c8DiwhOe2zLQ_d7YzLIySfPedx_vt9IHSZ9X4su06WJoPr0b0r6OV7NyKk8zYMAFNuIETuEX8EGT2VZJkoIpgrAm07ZDy-CVRvjD3Z-Yf1AI2vR55f6qjbXBmeXW_");//prendido
    } else {
      setImagen18("https://blogger.googleusercontent.com/img/a/AVvXsEiNDCEWETTIM6w4RUE_10Nh0CX8RmMSv0qbHOZgXX4E02V0Rp7uEJzy6l9fksyDeso7YiuAsL-Yr0UBzWc-o6rq_9DBbxEjA7f-nh_V7bSry76viwiiHN1cY1LE7Vuq88_HGMlG7Kh4tn2ksLnAYUakbWLZGBG4Xr1rUy02ETxxxti50rB_Tkof1K6P");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen188, setImagen188] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiNDCEWETTIM6w4RUE_10Nh0CX8RmMSv0qbHOZgXX4E02V0Rp7uEJzy6l9fksyDeso7YiuAsL-Yr0UBzWc-o6rq_9DBbxEjA7f-nh_V7bSry76viwiiHN1cY1LE7Vuq88_HGMlG7Kh4tn2ksLnAYUakbWLZGBG4Xr1rUy02ETxxxti50rB_Tkof1K6P");
  
  function prender188() {
    if (imagen188 === "https://blogger.googleusercontent.com/img/a/AVvXsEiNDCEWETTIM6w4RUE_10Nh0CX8RmMSv0qbHOZgXX4E02V0Rp7uEJzy6l9fksyDeso7YiuAsL-Yr0UBzWc-o6rq_9DBbxEjA7f-nh_V7bSry76viwiiHN1cY1LE7Vuq88_HGMlG7Kh4tn2ksLnAYUakbWLZGBG4Xr1rUy02ETxxxti50rB_Tkof1K6P") {
      setImagen188("https://blogger.googleusercontent.com/img/a/AVvXsEh-Cvf1t7HVgJp1oiqHq4DUKPfdQrAzMgL6_20-Y3mHcM-SxnjpKeqjHwB1yE5c8DiwhOe2zLQ_d7YzLIySfPedx_vt9IHSZ9X4su06WJoPr0b0r6OV7NyKk8zYMAFNuIETuEX8EGT2VZJkoIpgrAm07ZDy-CVRvjD3Z-Yf1AI2vR55f6qjbXBmeXW_");//prendido
    } else {
      setImagen188("https://blogger.googleusercontent.com/img/a/AVvXsEiNDCEWETTIM6w4RUE_10Nh0CX8RmMSv0qbHOZgXX4E02V0Rp7uEJzy6l9fksyDeso7YiuAsL-Yr0UBzWc-o6rq_9DBbxEjA7f-nh_V7bSry76viwiiHN1cY1LE7Vuq88_HGMlG7Kh4tn2ksLnAYUakbWLZGBG4Xr1rUy02ETxxxti50rB_Tkof1K6P");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen19, setImagen19] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjcoS3v5xep1Hu0Y7tIgu7Vcn3uPeZVHP6exKiTDwvojMZ7QMBN0soAx6O9EvrOiao8WxO40XXbtjt0XxORA5A55WOsNHZz7-dbaxNzEaySklWpzbry42FZVHTSuT6xzhaFKBxAxREYRp8THx8ukh-8FpFSmCJOMdx72mQznGBfICRzWATWFXTONc65");
  
  function prender19() {
    if (imagen19 === "https://blogger.googleusercontent.com/img/a/AVvXsEjcoS3v5xep1Hu0Y7tIgu7Vcn3uPeZVHP6exKiTDwvojMZ7QMBN0soAx6O9EvrOiao8WxO40XXbtjt0XxORA5A55WOsNHZz7-dbaxNzEaySklWpzbry42FZVHTSuT6xzhaFKBxAxREYRp8THx8ukh-8FpFSmCJOMdx72mQznGBfICRzWATWFXTONc65") {
      setImagen19("https://blogger.googleusercontent.com/img/a/AVvXsEhyPJ5hZtoVSbOIEW7AnItokm2obXoXpSLxfFgQZemm1ULlbIED_5nK3ouPnJ1fuciH5mmVc7GZ_2m183PIJE6YLwPrebntfwQSBRB8NvDC-QowiarGKLcl0McNjzVRNDEfrOB8TWA1jzt2QLLBplQT5aen2cJwiSuIjH-JgfGt_dklGszMzED5P-y8");//prendido
    } else {
      setImagen19("https://blogger.googleusercontent.com/img/a/AVvXsEjcoS3v5xep1Hu0Y7tIgu7Vcn3uPeZVHP6exKiTDwvojMZ7QMBN0soAx6O9EvrOiao8WxO40XXbtjt0XxORA5A55WOsNHZz7-dbaxNzEaySklWpzbry42FZVHTSuT6xzhaFKBxAxREYRp8THx8ukh-8FpFSmCJOMdx72mQznGBfICRzWATWFXTONc65");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen199, setImagen199] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjcoS3v5xep1Hu0Y7tIgu7Vcn3uPeZVHP6exKiTDwvojMZ7QMBN0soAx6O9EvrOiao8WxO40XXbtjt0XxORA5A55WOsNHZz7-dbaxNzEaySklWpzbry42FZVHTSuT6xzhaFKBxAxREYRp8THx8ukh-8FpFSmCJOMdx72mQznGBfICRzWATWFXTONc65");
  
  function prender199() {
    if (imagen199 === "https://blogger.googleusercontent.com/img/a/AVvXsEjcoS3v5xep1Hu0Y7tIgu7Vcn3uPeZVHP6exKiTDwvojMZ7QMBN0soAx6O9EvrOiao8WxO40XXbtjt0XxORA5A55WOsNHZz7-dbaxNzEaySklWpzbry42FZVHTSuT6xzhaFKBxAxREYRp8THx8ukh-8FpFSmCJOMdx72mQznGBfICRzWATWFXTONc65") {
      setImagen199("https://blogger.googleusercontent.com/img/a/AVvXsEhyPJ5hZtoVSbOIEW7AnItokm2obXoXpSLxfFgQZemm1ULlbIED_5nK3ouPnJ1fuciH5mmVc7GZ_2m183PIJE6YLwPrebntfwQSBRB8NvDC-QowiarGKLcl0McNjzVRNDEfrOB8TWA1jzt2QLLBplQT5aen2cJwiSuIjH-JgfGt_dklGszMzED5P-y8");//prendido
    } else {
      setImagen199("https://blogger.googleusercontent.com/img/a/AVvXsEjcoS3v5xep1Hu0Y7tIgu7Vcn3uPeZVHP6exKiTDwvojMZ7QMBN0soAx6O9EvrOiao8WxO40XXbtjt0XxORA5A55WOsNHZz7-dbaxNzEaySklWpzbry42FZVHTSuT6xzhaFKBxAxREYRp8THx8ukh-8FpFSmCJOMdx72mQznGBfICRzWATWFXTONc65");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen20, setImagen20] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhhPt1xdH0Ur1ads4u4ud17Jg2Dq8pnZifg_mloxHHYr7hYJajLqxv65oYChmg21Ort8y2XMlzX7KB_hDJ08AKthpwkbNn3QIXh2Ek-1MqAyOx8ns5erwgSV5SzHOvr2YIbS0BSmIe6AeHtjHEI5NRyfflunvf1LP1RuOXlcq0sJAC-O1ZNxr_TPJ_8");
  
  function prender20() {
    if (imagen20 === "https://blogger.googleusercontent.com/img/a/AVvXsEhhPt1xdH0Ur1ads4u4ud17Jg2Dq8pnZifg_mloxHHYr7hYJajLqxv65oYChmg21Ort8y2XMlzX7KB_hDJ08AKthpwkbNn3QIXh2Ek-1MqAyOx8ns5erwgSV5SzHOvr2YIbS0BSmIe6AeHtjHEI5NRyfflunvf1LP1RuOXlcq0sJAC-O1ZNxr_TPJ_8") {
      setImagen20("https://blogger.googleusercontent.com/img/a/AVvXsEjZFhRNh99WTsHUybizGUkVUoFzxI6p1d78PJw2ndByMn4nLP--vXPZXtxS7l2kRkgIZmbxZVu6pFqdth_tQ3KVXUrhnD0JJTfsRJc4IKE76UKUfHTu2sz4gPgV9knGY_eyd9QgIzcAQmrEHi5ezXbqBCEHv5LTWHy4F4Luqr_oBtWHqgyasDFC3SGd");//prendido
    } else {
      setImagen20("https://blogger.googleusercontent.com/img/a/AVvXsEhhPt1xdH0Ur1ads4u4ud17Jg2Dq8pnZifg_mloxHHYr7hYJajLqxv65oYChmg21Ort8y2XMlzX7KB_hDJ08AKthpwkbNn3QIXh2Ek-1MqAyOx8ns5erwgSV5SzHOvr2YIbS0BSmIe6AeHtjHEI5NRyfflunvf1LP1RuOXlcq0sJAC-O1ZNxr_TPJ_8");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen200, setImagen200] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhhPt1xdH0Ur1ads4u4ud17Jg2Dq8pnZifg_mloxHHYr7hYJajLqxv65oYChmg21Ort8y2XMlzX7KB_hDJ08AKthpwkbNn3QIXh2Ek-1MqAyOx8ns5erwgSV5SzHOvr2YIbS0BSmIe6AeHtjHEI5NRyfflunvf1LP1RuOXlcq0sJAC-O1ZNxr_TPJ_8");
  
  function prender200() {
    if (imagen200 === "https://blogger.googleusercontent.com/img/a/AVvXsEhhPt1xdH0Ur1ads4u4ud17Jg2Dq8pnZifg_mloxHHYr7hYJajLqxv65oYChmg21Ort8y2XMlzX7KB_hDJ08AKthpwkbNn3QIXh2Ek-1MqAyOx8ns5erwgSV5SzHOvr2YIbS0BSmIe6AeHtjHEI5NRyfflunvf1LP1RuOXlcq0sJAC-O1ZNxr_TPJ_8") {
      setImagen200("https://blogger.googleusercontent.com/img/a/AVvXsEjZFhRNh99WTsHUybizGUkVUoFzxI6p1d78PJw2ndByMn4nLP--vXPZXtxS7l2kRkgIZmbxZVu6pFqdth_tQ3KVXUrhnD0JJTfsRJc4IKE76UKUfHTu2sz4gPgV9knGY_eyd9QgIzcAQmrEHi5ezXbqBCEHv5LTWHy4F4Luqr_oBtWHqgyasDFC3SGd");//prendido
    } else {
      setImagen200("https://blogger.googleusercontent.com/img/a/AVvXsEhhPt1xdH0Ur1ads4u4ud17Jg2Dq8pnZifg_mloxHHYr7hYJajLqxv65oYChmg21Ort8y2XMlzX7KB_hDJ08AKthpwkbNn3QIXh2Ek-1MqAyOx8ns5erwgSV5SzHOvr2YIbS0BSmIe6AeHtjHEI5NRyfflunvf1LP1RuOXlcq0sJAC-O1ZNxr_TPJ_8");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen21, setImagen21] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiY3T1NC2bK9I7ieqJIRpa-0ZJX4nQzEGOYNvFdhI6VgbaWSGgh4bkFrtbeyXRENwad3c_OZTAmxzjIedD7MGc_oQ60mZMBncZ9mk4XWfGzeZw5n4CPZOw5NL7fAcr4ZgQSTDxY5ySx-d612IztywMWX6nTtlWp0JFbcg8JWevIqx0zse2OkkE3hS8g");
  
  function prender21() {
    if (imagen21 === "https://blogger.googleusercontent.com/img/a/AVvXsEiY3T1NC2bK9I7ieqJIRpa-0ZJX4nQzEGOYNvFdhI6VgbaWSGgh4bkFrtbeyXRENwad3c_OZTAmxzjIedD7MGc_oQ60mZMBncZ9mk4XWfGzeZw5n4CPZOw5NL7fAcr4ZgQSTDxY5ySx-d612IztywMWX6nTtlWp0JFbcg8JWevIqx0zse2OkkE3hS8g") {
      setImagen21("https://blogger.googleusercontent.com/img/a/AVvXsEj16FpoBYr8cgSVsxvhdR0A_d4Ao4ZZVMkuK2woUO90vLZ4S1HOSYNPsSBbYvy5WvAtuMUczmJfYQhQ7HKJtSXs6_Ddni24cNrbtEMxOMqqgsSyb1YX03ndGvv3HYl0-gq-YoNAFKkLvUhaYWqTiZ7t2yu6mYf2CteuQ35kVWHGLY_ncixWr72CdnpV");//prendido
    } else {
      setImagen21("https://blogger.googleusercontent.com/img/a/AVvXsEiY3T1NC2bK9I7ieqJIRpa-0ZJX4nQzEGOYNvFdhI6VgbaWSGgh4bkFrtbeyXRENwad3c_OZTAmxzjIedD7MGc_oQ60mZMBncZ9mk4XWfGzeZw5n4CPZOw5NL7fAcr4ZgQSTDxY5ySx-d612IztywMWX6nTtlWp0JFbcg8JWevIqx0zse2OkkE3hS8g");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen22, setImagen22] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgrL5eZ9AOnvasxz-7udGbLh_89n4eWgGM2Qu5PuMYQ4DIFIFnu1KlxoA_X7LAPB0lr3sUdTMLw98CNOxoywjq0wAUEapO2kOeaGxdVxy1PQZ_SYeaQc45yiuXhssTwdy0WDNNbolo7ZA-S7IKbKl6phKUfCsrQGTOJPLyafiitKY-fYEKsx0NTqInF");
  
  function prender22() {
    if (imagen22 === "https://blogger.googleusercontent.com/img/a/AVvXsEgrL5eZ9AOnvasxz-7udGbLh_89n4eWgGM2Qu5PuMYQ4DIFIFnu1KlxoA_X7LAPB0lr3sUdTMLw98CNOxoywjq0wAUEapO2kOeaGxdVxy1PQZ_SYeaQc45yiuXhssTwdy0WDNNbolo7ZA-S7IKbKl6phKUfCsrQGTOJPLyafiitKY-fYEKsx0NTqInF") {
      setImagen22("https://blogger.googleusercontent.com/img/a/AVvXsEh01xQ6fJtRkx62Ob4JoYIi7JYOAJAaf-2IZFQqtcVJsH96FBxNDp25B35yyTjrdKddexLlItvRYAtWQbVVcZE1L6j_d7RxsojcVnuyJ18JmEZ4esjY-ClGRLFrgtprvjFzm0HZsvmcK_hjHDVUJOY8bbdybqoQ__Qu_K_nX_GSb-q2SrgXjDzLYVAe");//prendido
    } else {
      setImagen22("https://blogger.googleusercontent.com/img/a/AVvXsEgrL5eZ9AOnvasxz-7udGbLh_89n4eWgGM2Qu5PuMYQ4DIFIFnu1KlxoA_X7LAPB0lr3sUdTMLw98CNOxoywjq0wAUEapO2kOeaGxdVxy1PQZ_SYeaQc45yiuXhssTwdy0WDNNbolo7ZA-S7IKbKl6phKUfCsrQGTOJPLyafiitKY-fYEKsx0NTqInF");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen23, setImagen23] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiWF2a6QFAkXDZjvARPFRMxXKq7gPzqvQZGLJ1gVYoZ3eXZqpS64LVNSFc9A16iToFmMmqQvdP-6X_y0SJCMc-aLs7ogVXKF-S-WFj8bXiu6DQVEbCY7Bk5DLX96KsP2xDnbNUp0599SDYbpnzSUHRll9QwCoICFI_BiksATV04nBy-7RTMnSyzFzla");
  
  function prender23() {
    if (imagen23 === "https://blogger.googleusercontent.com/img/a/AVvXsEiWF2a6QFAkXDZjvARPFRMxXKq7gPzqvQZGLJ1gVYoZ3eXZqpS64LVNSFc9A16iToFmMmqQvdP-6X_y0SJCMc-aLs7ogVXKF-S-WFj8bXiu6DQVEbCY7Bk5DLX96KsP2xDnbNUp0599SDYbpnzSUHRll9QwCoICFI_BiksATV04nBy-7RTMnSyzFzla") {
      setImagen23("https://blogger.googleusercontent.com/img/a/AVvXsEhZwlPxASxy7hUC-nK7mwLKyoAbZYc7n0kxN2mQonRabQ_SHkIoyrhZNwOksMhFAQg8T5IK8v3J9ggEBygdjpDXYqvmp8IsLYVwaAZSZidvfA3wlJ6HG57y_dxoCLaO5UXqeneySJ84347_acJNbhbj_Sm4bp3_EzcbsrhhY5Z1ouMTcFVFoQxoXxSj");//prendido
    } else {
      setImagen23("https://blogger.googleusercontent.com/img/a/AVvXsEiWF2a6QFAkXDZjvARPFRMxXKq7gPzqvQZGLJ1gVYoZ3eXZqpS64LVNSFc9A16iToFmMmqQvdP-6X_y0SJCMc-aLs7ogVXKF-S-WFj8bXiu6DQVEbCY7Bk5DLX96KsP2xDnbNUp0599SDYbpnzSUHRll9QwCoICFI_BiksATV04nBy-7RTMnSyzFzla");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen24, setImagen24] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiUKWM4qyzFOmuCPQ3ANpKzR9dqxwKh8ZuoQCg-EilFFiW23UwcDyAtS0PHVOtF34OQTV36wFigz1DWBYISnwjAcLeArrZblGTDcWRW-ajGMfVeqg4Ce3S9VccvlKngEOBuqP1HyZYHXwWrDYrjVQVK4cAUNDutOAcM6qqCxmdGPHNwf07eh8gM94eK");
  
  function prender24() {
    if (imagen24 === "https://blogger.googleusercontent.com/img/a/AVvXsEiUKWM4qyzFOmuCPQ3ANpKzR9dqxwKh8ZuoQCg-EilFFiW23UwcDyAtS0PHVOtF34OQTV36wFigz1DWBYISnwjAcLeArrZblGTDcWRW-ajGMfVeqg4Ce3S9VccvlKngEOBuqP1HyZYHXwWrDYrjVQVK4cAUNDutOAcM6qqCxmdGPHNwf07eh8gM94eK") {
      setImagen24("https://blogger.googleusercontent.com/img/a/AVvXsEgGOcgbH4FHjbNNvqX7HLuduWcELVBw64NPGzYFK-bFjvXq3p1dcavR3Z5lHUVIJc1OknX3rsXTsCqxBv5ONqSOeZ-KoRo3-GQe2OoweyO3bLctbjX2Pd2rkNbobMmj0TSf3jcTBxkd9BlN87aO1M4GdRdHOQRsNv2J4B98UMJuoa7nSNQD51_t4v73");//prendido
    } else {
      setImagen24("https://blogger.googleusercontent.com/img/a/AVvXsEiUKWM4qyzFOmuCPQ3ANpKzR9dqxwKh8ZuoQCg-EilFFiW23UwcDyAtS0PHVOtF34OQTV36wFigz1DWBYISnwjAcLeArrZblGTDcWRW-ajGMfVeqg4Ce3S9VccvlKngEOBuqP1HyZYHXwWrDYrjVQVK4cAUNDutOAcM6qqCxmdGPHNwf07eh8gM94eK");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen25, setImagen25] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEij1nrDupJ1mZBQhYWXi9Yxi-2fHtDrsb3QB1OW2LfqNlnNLKkv0t-oDqYzdypXJWqFMvf7hzPzjS6sbI7UQgjtvT2eiqAC-Vp89dbk6Pn8_Fw3QRPxu6CIKDt2cZ6qMjTxTtbOdmMigFdiTyEryZoT1yRKUB4udpnH76NW888svx11kzvoiJZbZVGO");
  
  function prender25() {
    if (imagen25 === "https://blogger.googleusercontent.com/img/a/AVvXsEij1nrDupJ1mZBQhYWXi9Yxi-2fHtDrsb3QB1OW2LfqNlnNLKkv0t-oDqYzdypXJWqFMvf7hzPzjS6sbI7UQgjtvT2eiqAC-Vp89dbk6Pn8_Fw3QRPxu6CIKDt2cZ6qMjTxTtbOdmMigFdiTyEryZoT1yRKUB4udpnH76NW888svx11kzvoiJZbZVGO") {
      setImagen25("https://blogger.googleusercontent.com/img/a/AVvXsEjWZcRqoIm7gnWAw6DvGtUtcVySDTcBZphVs7JTU2CajYpATORBFioCCE5Uudxh918Tlg9her1aI7KkG4qISjNOlQ5qQyG8qtKtbKu3rJ74EeJrDG1Fx5Q2_BV0xPwksRZcC4Zo6JTOWG5MZFnTc5Yd2ndvHR5CnHxhFBKkBNP1KIBH7iUCB_2OUyzz");//prendido
    } else {
      setImagen25("https://blogger.googleusercontent.com/img/a/AVvXsEij1nrDupJ1mZBQhYWXi9Yxi-2fHtDrsb3QB1OW2LfqNlnNLKkv0t-oDqYzdypXJWqFMvf7hzPzjS6sbI7UQgjtvT2eiqAC-Vp89dbk6Pn8_Fw3QRPxu6CIKDt2cZ6qMjTxTtbOdmMigFdiTyEryZoT1yRKUB4udpnH76NW888svx11kzvoiJZbZVGO");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen26, setImagen26] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjTHlcHmjIUC_bEPhZnfN5tDjXEZ4s6quH8SUE1QI7Dl2i3uutU0hYlkkCG1R4pEY1RrCSUGHtKvMR67D6El0rd1wt1DSoV5O7jOpx23SU9KQYvW_5IBNQwPDzIdIdC9YU7YLlR8e-26KByRt99PVePFLnw0m_52HKTmd33envBs7NoVkWFwGLGs7yt");
  
  function prender26() {
    if (imagen26 === "https://blogger.googleusercontent.com/img/a/AVvXsEjTHlcHmjIUC_bEPhZnfN5tDjXEZ4s6quH8SUE1QI7Dl2i3uutU0hYlkkCG1R4pEY1RrCSUGHtKvMR67D6El0rd1wt1DSoV5O7jOpx23SU9KQYvW_5IBNQwPDzIdIdC9YU7YLlR8e-26KByRt99PVePFLnw0m_52HKTmd33envBs7NoVkWFwGLGs7yt") {
      setImagen26("https://blogger.googleusercontent.com/img/a/AVvXsEjsMrpOR9DnBv3t9S_GeSxIfzDwE1HmIQYHw6dSjT0pmicNBrvuTAYvRGeRTw1HXyIQGRmsu5fa_lMeZZue3iRR0gkrmfUOuN2KPvXwHsm8qpmRXFigzmsHvRYxpfq3BS5Z2_LunfMycRHt8r3Ut0l00QDl5p3p22EX-VTGxKdBmmipdPloEWMPJvSu");//prendido
    } else {
      setImagen26("https://blogger.googleusercontent.com/img/a/AVvXsEjTHlcHmjIUC_bEPhZnfN5tDjXEZ4s6quH8SUE1QI7Dl2i3uutU0hYlkkCG1R4pEY1RrCSUGHtKvMR67D6El0rd1wt1DSoV5O7jOpx23SU9KQYvW_5IBNQwPDzIdIdC9YU7YLlR8e-26KByRt99PVePFLnw0m_52HKTmd33envBs7NoVkWFwGLGs7yt");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen27, setImagen27] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgmYvdX7LL1lcGeOyt5MGuxGVVZkIN2k9sHJW3l3_Mr9nUEqr9aLhZw7Aflyohvdydxsny_Ie-pDBZ_rZlMzJ4KAGILz5UTAwBBK4duH_0nDpsC1-USi6vpDP1lX6uWkjEHMSKv8qlGGHEE4zVxyrLVAoKx-KUlPnczNmYSpOrV8DGyDluEIP6KHDJN");
  
  function prender27() {
    if (imagen27 === "https://blogger.googleusercontent.com/img/a/AVvXsEgmYvdX7LL1lcGeOyt5MGuxGVVZkIN2k9sHJW3l3_Mr9nUEqr9aLhZw7Aflyohvdydxsny_Ie-pDBZ_rZlMzJ4KAGILz5UTAwBBK4duH_0nDpsC1-USi6vpDP1lX6uWkjEHMSKv8qlGGHEE4zVxyrLVAoKx-KUlPnczNmYSpOrV8DGyDluEIP6KHDJN") {
      setImagen27("https://blogger.googleusercontent.com/img/a/AVvXsEjXTSNPmdojdAmNXX6MpGaiswSqoChI_8roUBNX38xd5MhC1H1Br2YjhBv5sBfZW4frbj0HpaPemQ2wdRd8JV0ROF__HaGgP57Kb_lhhPYAFPn3eaxoVqguKO2EFxxgmRYbmRWO8GBvkkYFKJLCPD2UolLoojthRDn3YWOTWLxMGCZX7VNBEB8ecK9U");//prendido
    } else {
      setImagen27("https://blogger.googleusercontent.com/img/a/AVvXsEgmYvdX7LL1lcGeOyt5MGuxGVVZkIN2k9sHJW3l3_Mr9nUEqr9aLhZw7Aflyohvdydxsny_Ie-pDBZ_rZlMzJ4KAGILz5UTAwBBK4duH_0nDpsC1-USi6vpDP1lX6uWkjEHMSKv8qlGGHEE4zVxyrLVAoKx-KUlPnczNmYSpOrV8DGyDluEIP6KHDJN");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen28, setImagen28] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEijFpFOQChb8TYXdSftawUt1hOJIsFJYcSwyrADPyhlSPWOLokHcC7rlyNHPZBYsmHua0OFqRQcLhLP7PQkV-9WjjDz06qKXwdHm9Z5ybMCQU0gajYnUuRGExZQIGKae_MAb7j13pitQXJRTFmD4YOXpyK3OlU1-GIysR2E1y-s1BdkA9FMJBhqpWaK");
  
  function prender28() {
    if (imagen28 === "https://blogger.googleusercontent.com/img/a/AVvXsEijFpFOQChb8TYXdSftawUt1hOJIsFJYcSwyrADPyhlSPWOLokHcC7rlyNHPZBYsmHua0OFqRQcLhLP7PQkV-9WjjDz06qKXwdHm9Z5ybMCQU0gajYnUuRGExZQIGKae_MAb7j13pitQXJRTFmD4YOXpyK3OlU1-GIysR2E1y-s1BdkA9FMJBhqpWaK") {
      setImagen28("https://blogger.googleusercontent.com/img/a/AVvXsEghbIZdiKRiQozl3qOtHkHaFwB9GJTnF3DT1pywO-sdtU-3aBJhJ28XjJCQRQNDLDt-zguO2mwd659PB-f7icSFowiMWd2oYusLZ1jps1CK2GWRbwV21zAkyDAVvuEG0QT63KN_eM6s0TmbfwZ-PB_EmVF0NPpzvIKkYiQlcD3x3oqklkU3egVKbbxp");//prendido
    } else {
      setImagen28("https://blogger.googleusercontent.com/img/a/AVvXsEijFpFOQChb8TYXdSftawUt1hOJIsFJYcSwyrADPyhlSPWOLokHcC7rlyNHPZBYsmHua0OFqRQcLhLP7PQkV-9WjjDz06qKXwdHm9Z5ybMCQU0gajYnUuRGExZQIGKae_MAb7j13pitQXJRTFmD4YOXpyK3OlU1-GIysR2E1y-s1BdkA9FMJBhqpWaK");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen29, setImagen29] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEillPgDHwq7j3KJhF_BNsAUabINrFA-KbxIdjxABuztXDUy2TCrEG_ckWKYMVzTw1P35jWBiEtMu8CSrtSXECS4rR1ADLPymvC5SmkewZb4BWq_xPmkFFegLHdOPiFobJKNXfN3ZAhKGUewYk7MpWeBZ26RoYo-PCIeYfGzlnMTJMo1Bp9hi4V8JRHB");
  
  function prender29() {
    if (imagen29 === "https://blogger.googleusercontent.com/img/a/AVvXsEillPgDHwq7j3KJhF_BNsAUabINrFA-KbxIdjxABuztXDUy2TCrEG_ckWKYMVzTw1P35jWBiEtMu8CSrtSXECS4rR1ADLPymvC5SmkewZb4BWq_xPmkFFegLHdOPiFobJKNXfN3ZAhKGUewYk7MpWeBZ26RoYo-PCIeYfGzlnMTJMo1Bp9hi4V8JRHB") {
      setImagen29("https://blogger.googleusercontent.com/img/a/AVvXsEi_oHTy0MtpARvssRW081MO_k-WZO1j6CXhDf3QSrTwoHETODyvVJNQRJl9821ZiPDQ_BZzUZ0l0Dog8bMjdmk4RCi4vYau7qt6XuVpsx5mCMgy1HPUCuY5h3CoG0RPeck3X2qa6Rsr1hF2KxdL9HzNNnJ6SX6IzYbgKkUuu8_lvb33EOgbeDYnuD1p");//prendido
    } else {
      setImagen29("https://blogger.googleusercontent.com/img/a/AVvXsEillPgDHwq7j3KJhF_BNsAUabINrFA-KbxIdjxABuztXDUy2TCrEG_ckWKYMVzTw1P35jWBiEtMu8CSrtSXECS4rR1ADLPymvC5SmkewZb4BWq_xPmkFFegLHdOPiFobJKNXfN3ZAhKGUewYk7MpWeBZ26RoYo-PCIeYfGzlnMTJMo1Bp9hi4V8JRHB");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen30, setImagen30] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjEES4gRlPu-hR1TR5w-EP9fzEj-TsBSoKrY1BPzNJwKT0Oepzz1s7Uwke5BBrjG6LSRxUU3gaQU1CKrwAfAvIWQUITixV3Kx9PvuSTDJUImzbqE865Witw8G1jONhCF9HJGNBDlghhUkbT1nfD8oz7dSuUU58nouLbLMnQZLHYXT5bxCERQo04MTSN");
  
  function prender30() {
    if (imagen30 === "https://blogger.googleusercontent.com/img/a/AVvXsEjEES4gRlPu-hR1TR5w-EP9fzEj-TsBSoKrY1BPzNJwKT0Oepzz1s7Uwke5BBrjG6LSRxUU3gaQU1CKrwAfAvIWQUITixV3Kx9PvuSTDJUImzbqE865Witw8G1jONhCF9HJGNBDlghhUkbT1nfD8oz7dSuUU58nouLbLMnQZLHYXT5bxCERQo04MTSN") {
      setImagen30("https://blogger.googleusercontent.com/img/a/AVvXsEjyLidoCCQhzZpagz_nekR19qn0XRC8rmayGGMDFfK2L-1Wcv3dUatMw1ybPpKR0632XxAkex0v90Xi1YUPc909QaXBW-2EXmWx5KcllV7E8QfPh6EqT9_4MZx4N18s_fhMaEQ2J0u1vsxHfgIkzhs3Y1VDlwA8LCjGFIzVYjkVLIzcIZTrPhChbk0q");//prendido
    } else {
      setImagen30("https://blogger.googleusercontent.com/img/a/AVvXsEjEES4gRlPu-hR1TR5w-EP9fzEj-TsBSoKrY1BPzNJwKT0Oepzz1s7Uwke5BBrjG6LSRxUU3gaQU1CKrwAfAvIWQUITixV3Kx9PvuSTDJUImzbqE865Witw8G1jONhCF9HJGNBDlghhUkbT1nfD8oz7dSuUU58nouLbLMnQZLHYXT5bxCERQo04MTSN");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen31, setImagen31] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjBv_oFyFEsWC7XJB4UsOPs41_IIEqnhUwztMHE_s12WXTVCmGWwD0GgGDYR4zEnjS_tCyXvuYPyFi97fe9qXxa13Jo6edD0_7n9DrB4iWCstC3ONpzu0pxFoIYpF5cDi7qQ-GgZ85W5o7TaRAd6ACk_tTGozzopYLcxT8-LRwbhWANxEN40ih7zpOU");
  
  function prender31() {
    if (imagen31 === "https://blogger.googleusercontent.com/img/a/AVvXsEjBv_oFyFEsWC7XJB4UsOPs41_IIEqnhUwztMHE_s12WXTVCmGWwD0GgGDYR4zEnjS_tCyXvuYPyFi97fe9qXxa13Jo6edD0_7n9DrB4iWCstC3ONpzu0pxFoIYpF5cDi7qQ-GgZ85W5o7TaRAd6ACk_tTGozzopYLcxT8-LRwbhWANxEN40ih7zpOU") {
      setImagen31("https://blogger.googleusercontent.com/img/a/AVvXsEgUjGmlls-iOi1d_yLBxUs4eooaKfqrORBe10-P3yRs1H8f-KwGPrGRvT9i8F3Ja5ro7oNl8zUyM2Y1M4HFVXPA59W05Wz8KJPqmKjm4MRT8f0xaZxt-h3T6mueca_GCKsvU1vL8l_SgH9ogaOg3zgPCAFBdaPExOJV-vTkGwiJ5wD_7ZgO4LMYJyJ6");//prendido
    } else {
      setImagen31("https://blogger.googleusercontent.com/img/a/AVvXsEjBv_oFyFEsWC7XJB4UsOPs41_IIEqnhUwztMHE_s12WXTVCmGWwD0GgGDYR4zEnjS_tCyXvuYPyFi97fe9qXxa13Jo6edD0_7n9DrB4iWCstC3ONpzu0pxFoIYpF5cDi7qQ-GgZ85W5o7TaRAd6ACk_tTGozzopYLcxT8-LRwbhWANxEN40ih7zpOU");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen32, setImagen32] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiOMIPnaG7lILbrCxhsDX2FeoCgbk4Exw5ECcpDMSMguvJsDWKuDsJbcrsh9Zpx93FsP4kS0ZOL5No-6Q9gVjwRZuvQ2FebWZkMN1NULP1PI2ybKCPoVrJgq9VWIBnfVvFCWmvGahXNzWvaCcSExL_0LhVDkQCxWrUphTu2MIZvtS6Bg-mYAD0KGM-a");
  
  function prender32() {
    if (imagen32 === "https://blogger.googleusercontent.com/img/a/AVvXsEiOMIPnaG7lILbrCxhsDX2FeoCgbk4Exw5ECcpDMSMguvJsDWKuDsJbcrsh9Zpx93FsP4kS0ZOL5No-6Q9gVjwRZuvQ2FebWZkMN1NULP1PI2ybKCPoVrJgq9VWIBnfVvFCWmvGahXNzWvaCcSExL_0LhVDkQCxWrUphTu2MIZvtS6Bg-mYAD0KGM-a") {
      setImagen32("https://blogger.googleusercontent.com/img/a/AVvXsEj7g23tJYjZewBIcVxfROykOkLVdxZs4EgQIEb-6QTNCMSt88KtK3co6efMPKuiWXRGCqU77Gu-fj3l-g2w0NbZebL2zqwJQhDNPDquZbty5Psa41ZlFiUwQZrhYxN-hq0sH12OPi2JIGnNLUpaZHq3t8pFd3VVrk-d66oIV3qtRjs3OMwxvTO3qset");//prendido
    } else {
      setImagen32("https://blogger.googleusercontent.com/img/a/AVvXsEiOMIPnaG7lILbrCxhsDX2FeoCgbk4Exw5ECcpDMSMguvJsDWKuDsJbcrsh9Zpx93FsP4kS0ZOL5No-6Q9gVjwRZuvQ2FebWZkMN1NULP1PI2ybKCPoVrJgq9VWIBnfVvFCWmvGahXNzWvaCcSExL_0LhVDkQCxWrUphTu2MIZvtS6Bg-mYAD0KGM-a");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen33, setImagen33] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgrx0RrCXXMASTIG81Jexzjs0ONqB68XMc2ZPyKPnaNzihcF7Pt0-fN4O-DdPO6TpkQsgp0cE4YJw1mUHZeMwzSP5oHsFBXKnbyGb9JDk-_dDba387mardEuqYGoVkBOoGloUnKjmNvGMjlwbqsezDVM6VqnD4jRGGYpasjV5ef8u7LwDb8qHLGNUDw");
  
  function prender33() {
    if (imagen33 === "https://blogger.googleusercontent.com/img/a/AVvXsEgrx0RrCXXMASTIG81Jexzjs0ONqB68XMc2ZPyKPnaNzihcF7Pt0-fN4O-DdPO6TpkQsgp0cE4YJw1mUHZeMwzSP5oHsFBXKnbyGb9JDk-_dDba387mardEuqYGoVkBOoGloUnKjmNvGMjlwbqsezDVM6VqnD4jRGGYpasjV5ef8u7LwDb8qHLGNUDw") {
      setImagen33("https://blogger.googleusercontent.com/img/a/AVvXsEjXQqy7yYiHFtY4ZhBiSmnn6xeDA7yV35m8gRMXr1JUH1QFxnncCDyXp0iCnoxHPexrxhd9kCo7lWX2KPabFowBqL6FD-RWwIUW3bI-C2EG3W5mXrGCIA7Kqiv-eNnK4zvHdUc8tcVOnui17-OVt5vIGJcj_vQEJ2vRaMdX5ppnM85F4HZc-KURqMc0");//prendido
    } else {
      setImagen33("https://blogger.googleusercontent.com/img/a/AVvXsEgrx0RrCXXMASTIG81Jexzjs0ONqB68XMc2ZPyKPnaNzihcF7Pt0-fN4O-DdPO6TpkQsgp0cE4YJw1mUHZeMwzSP5oHsFBXKnbyGb9JDk-_dDba387mardEuqYGoVkBOoGloUnKjmNvGMjlwbqsezDVM6VqnD4jRGGYpasjV5ef8u7LwDb8qHLGNUDw");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen34, setImagen34] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjhQkMaedMmyF2u657yEc2cdD9Qz9iwOwaZ628hiyQlpDP4XrBAVjsoT_UneP9M_YDCaS8289REQPM_A4orYhMlH9DZRGw_2ED_D75zqZeNK2I_jypvBCraWOOr0hmMTKqi0iI9bIEt88f9rvdwvRuRd7EIdP1dY4ZSWRynkVrXyA_YSROQMgvDzA9a");
  
  function prender34() {
    if (imagen34 === "https://blogger.googleusercontent.com/img/a/AVvXsEjhQkMaedMmyF2u657yEc2cdD9Qz9iwOwaZ628hiyQlpDP4XrBAVjsoT_UneP9M_YDCaS8289REQPM_A4orYhMlH9DZRGw_2ED_D75zqZeNK2I_jypvBCraWOOr0hmMTKqi0iI9bIEt88f9rvdwvRuRd7EIdP1dY4ZSWRynkVrXyA_YSROQMgvDzA9a") {
      setImagen34("https://blogger.googleusercontent.com/img/a/AVvXsEisImcU7pPy3MLnyuS3Imavu3CNlhVYRH4ZIx_MEeEzOsN0AWh4niwNaozmn77SY7Lx41XPFnCFWkdKIZfZabsRgEqYSRj7OSomXyvLHDNanJDetjKrbaIRjzBrM_Fcgnaj8BwqtFu9H-Y5y3slp4nbMvTQ-4zNquZOAcaWad5j7qQlkhEfJ9hd11l4");//prendido
    } else {
      setImagen34("https://blogger.googleusercontent.com/img/a/AVvXsEjhQkMaedMmyF2u657yEc2cdD9Qz9iwOwaZ628hiyQlpDP4XrBAVjsoT_UneP9M_YDCaS8289REQPM_A4orYhMlH9DZRGw_2ED_D75zqZeNK2I_jypvBCraWOOr0hmMTKqi0iI9bIEt88f9rvdwvRuRd7EIdP1dY4ZSWRynkVrXyA_YSROQMgvDzA9a");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen35, setImagen35] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEj8XayKmEIMnN1nbgmovjJzxUgJqm9-42cThdxrP05Lhs928nEpJA5wCj2UK7XRZ8biy8yXRpm6cKrtXLPlRSEuqPvbU4vp3f-p9mPyFd5vmu8-wc4fhkA6JlD2Mcsa-CSbraqZ-Od5RVOJJITp2-mmUzw-bALOcxqFa7anCUXXyhmg0fGlqLUu8Fzq");
  
  function prender35() {
    if (imagen35 === "https://blogger.googleusercontent.com/img/a/AVvXsEj8XayKmEIMnN1nbgmovjJzxUgJqm9-42cThdxrP05Lhs928nEpJA5wCj2UK7XRZ8biy8yXRpm6cKrtXLPlRSEuqPvbU4vp3f-p9mPyFd5vmu8-wc4fhkA6JlD2Mcsa-CSbraqZ-Od5RVOJJITp2-mmUzw-bALOcxqFa7anCUXXyhmg0fGlqLUu8Fzq") {
      setImagen35("https://blogger.googleusercontent.com/img/a/AVvXsEi2uWCS7sSuic7u1XeaCcKZ04WJVibM4USkJEQaIQuCP5FK8tHsSbp1XSxIQfl7zGRkFqMKcW-S29BW1swPMwsZQdQGfNCY6JrnhvLJub29_l11esyDgtDQYwTIuLApOWP8edu7ZrtTMkkvLEf2RYVK-8o71YIAKLIGMxaNWB8h-WCH3UMShsM7OzCP");//prendido
    } else {
      setImagen35("https://blogger.googleusercontent.com/img/a/AVvXsEj8XayKmEIMnN1nbgmovjJzxUgJqm9-42cThdxrP05Lhs928nEpJA5wCj2UK7XRZ8biy8yXRpm6cKrtXLPlRSEuqPvbU4vp3f-p9mPyFd5vmu8-wc4fhkA6JlD2Mcsa-CSbraqZ-Od5RVOJJITp2-mmUzw-bALOcxqFa7anCUXXyhmg0fGlqLUu8Fzq");
    }
  }
  //____________________________________________________________________________________________
  const [imagen36, setImagen36] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjK7mctXuaL4Jf38QPIAZkiZeQ07rp0urfatyKaoMdUsEsSwOGMcqZcNq_uDIZP21Hg2jaiOtjs-yBxnmLBUXMPLBOyvW_r6LvcaTgrr4iNjvmbNqhYQGtOkOJwwDJpFzTxpXR25uWLGl_EbF2L2nYuFlk6EPoSsIH9yv5GV8FWnDzc3f7jwFvA0D1D");
  
  function prender36() {
    if (imagen36 === "https://blogger.googleusercontent.com/img/a/AVvXsEjK7mctXuaL4Jf38QPIAZkiZeQ07rp0urfatyKaoMdUsEsSwOGMcqZcNq_uDIZP21Hg2jaiOtjs-yBxnmLBUXMPLBOyvW_r6LvcaTgrr4iNjvmbNqhYQGtOkOJwwDJpFzTxpXR25uWLGl_EbF2L2nYuFlk6EPoSsIH9yv5GV8FWnDzc3f7jwFvA0D1D") {
      setImagen36("https://blogger.googleusercontent.com/img/a/AVvXsEjlsNu6fsVePrPlxkyMrujHl5wEMtmqvr7vfznyBMn8m0gCab8-upEl0c1vUXnxwwt0QswZsxa_m8DlhY_h65HfJdjEU62dklcjIggpbS9lHQodMMVmNzT4-2NxzIgsUEMQCA2ygWybC7l_gxS2iXYY_TSKPxoZ1eaCUyF8bG3Se7muBuLWv2U6JBtb");//prendido
    } else {
      setImagen36("https://blogger.googleusercontent.com/img/a/AVvXsEjK7mctXuaL4Jf38QPIAZkiZeQ07rp0urfatyKaoMdUsEsSwOGMcqZcNq_uDIZP21Hg2jaiOtjs-yBxnmLBUXMPLBOyvW_r6LvcaTgrr4iNjvmbNqhYQGtOkOJwwDJpFzTxpXR25uWLGl_EbF2L2nYuFlk6EPoSsIH9yv5GV8FWnDzc3f7jwFvA0D1D");
    }
  }

  //________________ivcia lo del modo como jugar_________________________________________________________________________________
  const [imagen311, setImagen311] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjBv_oFyFEsWC7XJB4UsOPs41_IIEqnhUwztMHE_s12WXTVCmGWwD0GgGDYR4zEnjS_tCyXvuYPyFi97fe9qXxa13Jo6edD0_7n9DrB4iWCstC3ONpzu0pxFoIYpF5cDi7qQ-GgZ85W5o7TaRAd6ACk_tTGozzopYLcxT8-LRwbhWANxEN40ih7zpOU");
  
  function prender311() {
    if (imagen311 === "https://blogger.googleusercontent.com/img/a/AVvXsEjBv_oFyFEsWC7XJB4UsOPs41_IIEqnhUwztMHE_s12WXTVCmGWwD0GgGDYR4zEnjS_tCyXvuYPyFi97fe9qXxa13Jo6edD0_7n9DrB4iWCstC3ONpzu0pxFoIYpF5cDi7qQ-GgZ85W5o7TaRAd6ACk_tTGozzopYLcxT8-LRwbhWANxEN40ih7zpOU") {
      setImagen311("https://blogger.googleusercontent.com/img/a/AVvXsEgUjGmlls-iOi1d_yLBxUs4eooaKfqrORBe10-P3yRs1H8f-KwGPrGRvT9i8F3Ja5ro7oNl8zUyM2Y1M4HFVXPA59W05Wz8KJPqmKjm4MRT8f0xaZxt-h3T6mueca_GCKsvU1vL8l_SgH9ogaOg3zgPCAFBdaPExOJV-vTkGwiJ5wD_7ZgO4LMYJyJ6");//prendido
    } else {
      setImagen311("https://blogger.googleusercontent.com/img/a/AVvXsEjBv_oFyFEsWC7XJB4UsOPs41_IIEqnhUwztMHE_s12WXTVCmGWwD0GgGDYR4zEnjS_tCyXvuYPyFi97fe9qXxa13Jo6edD0_7n9DrB4iWCstC3ONpzu0pxFoIYpF5cDi7qQ-GgZ85W5o7TaRAd6ACk_tTGozzopYLcxT8-LRwbhWANxEN40ih7zpOU");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen322, setImagen322] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiOMIPnaG7lILbrCxhsDX2FeoCgbk4Exw5ECcpDMSMguvJsDWKuDsJbcrsh9Zpx93FsP4kS0ZOL5No-6Q9gVjwRZuvQ2FebWZkMN1NULP1PI2ybKCPoVrJgq9VWIBnfVvFCWmvGahXNzWvaCcSExL_0LhVDkQCxWrUphTu2MIZvtS6Bg-mYAD0KGM-a");
  
  function prender322() {
    if (imagen322 === "https://blogger.googleusercontent.com/img/a/AVvXsEiOMIPnaG7lILbrCxhsDX2FeoCgbk4Exw5ECcpDMSMguvJsDWKuDsJbcrsh9Zpx93FsP4kS0ZOL5No-6Q9gVjwRZuvQ2FebWZkMN1NULP1PI2ybKCPoVrJgq9VWIBnfVvFCWmvGahXNzWvaCcSExL_0LhVDkQCxWrUphTu2MIZvtS6Bg-mYAD0KGM-a") {
      setImagen322("https://blogger.googleusercontent.com/img/a/AVvXsEj7g23tJYjZewBIcVxfROykOkLVdxZs4EgQIEb-6QTNCMSt88KtK3co6efMPKuiWXRGCqU77Gu-fj3l-g2w0NbZebL2zqwJQhDNPDquZbty5Psa41ZlFiUwQZrhYxN-hq0sH12OPi2JIGnNLUpaZHq3t8pFd3VVrk-d66oIV3qtRjs3OMwxvTO3qset");//prendido
    } else {
      setImagen322("https://blogger.googleusercontent.com/img/a/AVvXsEiOMIPnaG7lILbrCxhsDX2FeoCgbk4Exw5ECcpDMSMguvJsDWKuDsJbcrsh9Zpx93FsP4kS0ZOL5No-6Q9gVjwRZuvQ2FebWZkMN1NULP1PI2ybKCPoVrJgq9VWIBnfVvFCWmvGahXNzWvaCcSExL_0LhVDkQCxWrUphTu2MIZvtS6Bg-mYAD0KGM-a");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen333, setImagen333] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgrx0RrCXXMASTIG81Jexzjs0ONqB68XMc2ZPyKPnaNzihcF7Pt0-fN4O-DdPO6TpkQsgp0cE4YJw1mUHZeMwzSP5oHsFBXKnbyGb9JDk-_dDba387mardEuqYGoVkBOoGloUnKjmNvGMjlwbqsezDVM6VqnD4jRGGYpasjV5ef8u7LwDb8qHLGNUDw");
  
  function prender333() {
    if (imagen333 === "https://blogger.googleusercontent.com/img/a/AVvXsEgrx0RrCXXMASTIG81Jexzjs0ONqB68XMc2ZPyKPnaNzihcF7Pt0-fN4O-DdPO6TpkQsgp0cE4YJw1mUHZeMwzSP5oHsFBXKnbyGb9JDk-_dDba387mardEuqYGoVkBOoGloUnKjmNvGMjlwbqsezDVM6VqnD4jRGGYpasjV5ef8u7LwDb8qHLGNUDw") {
      setImagen333("https://blogger.googleusercontent.com/img/a/AVvXsEjXQqy7yYiHFtY4ZhBiSmnn6xeDA7yV35m8gRMXr1JUH1QFxnncCDyXp0iCnoxHPexrxhd9kCo7lWX2KPabFowBqL6FD-RWwIUW3bI-C2EG3W5mXrGCIA7Kqiv-eNnK4zvHdUc8tcVOnui17-OVt5vIGJcj_vQEJ2vRaMdX5ppnM85F4HZc-KURqMc0");//prendido
    } else {
      setImagen333("https://blogger.googleusercontent.com/img/a/AVvXsEgrx0RrCXXMASTIG81Jexzjs0ONqB68XMc2ZPyKPnaNzihcF7Pt0-fN4O-DdPO6TpkQsgp0cE4YJw1mUHZeMwzSP5oHsFBXKnbyGb9JDk-_dDba387mardEuqYGoVkBOoGloUnKjmNvGMjlwbqsezDVM6VqnD4jRGGYpasjV5ef8u7LwDb8qHLGNUDw");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen344, setImagen344] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjhQkMaedMmyF2u657yEc2cdD9Qz9iwOwaZ628hiyQlpDP4XrBAVjsoT_UneP9M_YDCaS8289REQPM_A4orYhMlH9DZRGw_2ED_D75zqZeNK2I_jypvBCraWOOr0hmMTKqi0iI9bIEt88f9rvdwvRuRd7EIdP1dY4ZSWRynkVrXyA_YSROQMgvDzA9a");
  
  function prender344() {
    if (imagen344 === "https://blogger.googleusercontent.com/img/a/AVvXsEjhQkMaedMmyF2u657yEc2cdD9Qz9iwOwaZ628hiyQlpDP4XrBAVjsoT_UneP9M_YDCaS8289REQPM_A4orYhMlH9DZRGw_2ED_D75zqZeNK2I_jypvBCraWOOr0hmMTKqi0iI9bIEt88f9rvdwvRuRd7EIdP1dY4ZSWRynkVrXyA_YSROQMgvDzA9a") {
      setImagen344("https://blogger.googleusercontent.com/img/a/AVvXsEisImcU7pPy3MLnyuS3Imavu3CNlhVYRH4ZIx_MEeEzOsN0AWh4niwNaozmn77SY7Lx41XPFnCFWkdKIZfZabsRgEqYSRj7OSomXyvLHDNanJDetjKrbaIRjzBrM_Fcgnaj8BwqtFu9H-Y5y3slp4nbMvTQ-4zNquZOAcaWad5j7qQlkhEfJ9hd11l4");//prendido
    } else {
      setImagen344("https://blogger.googleusercontent.com/img/a/AVvXsEjhQkMaedMmyF2u657yEc2cdD9Qz9iwOwaZ628hiyQlpDP4XrBAVjsoT_UneP9M_YDCaS8289REQPM_A4orYhMlH9DZRGw_2ED_D75zqZeNK2I_jypvBCraWOOr0hmMTKqi0iI9bIEt88f9rvdwvRuRd7EIdP1dY4ZSWRynkVrXyA_YSROQMgvDzA9a");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen355, setImagen355] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEj8XayKmEIMnN1nbgmovjJzxUgJqm9-42cThdxrP05Lhs928nEpJA5wCj2UK7XRZ8biy8yXRpm6cKrtXLPlRSEuqPvbU4vp3f-p9mPyFd5vmu8-wc4fhkA6JlD2Mcsa-CSbraqZ-Od5RVOJJITp2-mmUzw-bALOcxqFa7anCUXXyhmg0fGlqLUu8Fzq");
  
  function prender355() {
    if (imagen355 === "https://blogger.googleusercontent.com/img/a/AVvXsEj8XayKmEIMnN1nbgmovjJzxUgJqm9-42cThdxrP05Lhs928nEpJA5wCj2UK7XRZ8biy8yXRpm6cKrtXLPlRSEuqPvbU4vp3f-p9mPyFd5vmu8-wc4fhkA6JlD2Mcsa-CSbraqZ-Od5RVOJJITp2-mmUzw-bALOcxqFa7anCUXXyhmg0fGlqLUu8Fzq") {
      setImagen355("https://blogger.googleusercontent.com/img/a/AVvXsEi2uWCS7sSuic7u1XeaCcKZ04WJVibM4USkJEQaIQuCP5FK8tHsSbp1XSxIQfl7zGRkFqMKcW-S29BW1swPMwsZQdQGfNCY6JrnhvLJub29_l11esyDgtDQYwTIuLApOWP8edu7ZrtTMkkvLEf2RYVK-8o71YIAKLIGMxaNWB8h-WCH3UMShsM7OzCP");//prendido
    } else {
      setImagen355("https://blogger.googleusercontent.com/img/a/AVvXsEj8XayKmEIMnN1nbgmovjJzxUgJqm9-42cThdxrP05Lhs928nEpJA5wCj2UK7XRZ8biy8yXRpm6cKrtXLPlRSEuqPvbU4vp3f-p9mPyFd5vmu8-wc4fhkA6JlD2Mcsa-CSbraqZ-Od5RVOJJITp2-mmUzw-bALOcxqFa7anCUXXyhmg0fGlqLUu8Fzq");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen366, setImagen366] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjK7mctXuaL4Jf38QPIAZkiZeQ07rp0urfatyKaoMdUsEsSwOGMcqZcNq_uDIZP21Hg2jaiOtjs-yBxnmLBUXMPLBOyvW_r6LvcaTgrr4iNjvmbNqhYQGtOkOJwwDJpFzTxpXR25uWLGl_EbF2L2nYuFlk6EPoSsIH9yv5GV8FWnDzc3f7jwFvA0D1D");
  
  function prender366() {
    if (imagen366 === "https://blogger.googleusercontent.com/img/a/AVvXsEjK7mctXuaL4Jf38QPIAZkiZeQ07rp0urfatyKaoMdUsEsSwOGMcqZcNq_uDIZP21Hg2jaiOtjs-yBxnmLBUXMPLBOyvW_r6LvcaTgrr4iNjvmbNqhYQGtOkOJwwDJpFzTxpXR25uWLGl_EbF2L2nYuFlk6EPoSsIH9yv5GV8FWnDzc3f7jwFvA0D1D") {
      setImagen366("https://blogger.googleusercontent.com/img/a/AVvXsEjlsNu6fsVePrPlxkyMrujHl5wEMtmqvr7vfznyBMn8m0gCab8-upEl0c1vUXnxwwt0QswZsxa_m8DlhY_h65HfJdjEU62dklcjIggpbS9lHQodMMVmNzT4-2NxzIgsUEMQCA2ygWybC7l_gxS2iXYY_TSKPxoZ1eaCUyF8bG3Se7muBuLWv2U6JBtb");//prendido
    } else {
      setImagen366("https://blogger.googleusercontent.com/img/a/AVvXsEjK7mctXuaL4Jf38QPIAZkiZeQ07rp0urfatyKaoMdUsEsSwOGMcqZcNq_uDIZP21Hg2jaiOtjs-yBxnmLBUXMPLBOyvW_r6LvcaTgrr4iNjvmbNqhYQGtOkOJwwDJpFzTxpXR25uWLGl_EbF2L2nYuFlk6EPoSsIH9yv5GV8FWnDzc3f7jwFvA0D1D");
    }
  }//finallllll juego
  
  //_________________________________________________________________________________________________________________
  const [imagen37, setImagen37] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEihh0eOjPwm4YR_t00UdyS5lyEEit-fewZ5tTqj2AiLrwu8cyeu9DZ3ik2AB0nM-6ixZ5PNrbeprhMdMWzNtic61GiP4Ju4OU2s3NkuckwiVXu4m-d63xD8BGpGkZn_NMz7TLCp_sODIalhHTP6PCSKLDJOg1hsc0o4hA4k3hNImW6cxAGKvXPO9zqN");
  
  function prender37() {
    if (imagen37 === "https://blogger.googleusercontent.com/img/a/AVvXsEihh0eOjPwm4YR_t00UdyS5lyEEit-fewZ5tTqj2AiLrwu8cyeu9DZ3ik2AB0nM-6ixZ5PNrbeprhMdMWzNtic61GiP4Ju4OU2s3NkuckwiVXu4m-d63xD8BGpGkZn_NMz7TLCp_sODIalhHTP6PCSKLDJOg1hsc0o4hA4k3hNImW6cxAGKvXPO9zqN") {
      setImagen37("https://blogger.googleusercontent.com/img/a/AVvXsEg230Qg2X2mAaGyWJC7Tzlroce_HagEaDOxUlHLyKr8_08hlRYF0F44XERmkS9WV7KM54xyMceUJs9AeCvFIlLQUtmAczMc9nQj_9l_WjMugjwiXsiFDSqOMify0V9IjRV4ToFo5ZjtBQgqk0l6Ym9Ia1tPDPmofVHMmZ_KMMOBnMvXqkyg0iMb1wtE");//prendido
    } else {
      setImagen37("https://blogger.googleusercontent.com/img/a/AVvXsEihh0eOjPwm4YR_t00UdyS5lyEEit-fewZ5tTqj2AiLrwu8cyeu9DZ3ik2AB0nM-6ixZ5PNrbeprhMdMWzNtic61GiP4Ju4OU2s3NkuckwiVXu4m-d63xD8BGpGkZn_NMz7TLCp_sODIalhHTP6PCSKLDJOg1hsc0o4hA4k3hNImW6cxAGKvXPO9zqN");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen377, setImagen377] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEihh0eOjPwm4YR_t00UdyS5lyEEit-fewZ5tTqj2AiLrwu8cyeu9DZ3ik2AB0nM-6ixZ5PNrbeprhMdMWzNtic61GiP4Ju4OU2s3NkuckwiVXu4m-d63xD8BGpGkZn_NMz7TLCp_sODIalhHTP6PCSKLDJOg1hsc0o4hA4k3hNImW6cxAGKvXPO9zqN");
  
  function prender377() {
    if (imagen377 === "https://blogger.googleusercontent.com/img/a/AVvXsEihh0eOjPwm4YR_t00UdyS5lyEEit-fewZ5tTqj2AiLrwu8cyeu9DZ3ik2AB0nM-6ixZ5PNrbeprhMdMWzNtic61GiP4Ju4OU2s3NkuckwiVXu4m-d63xD8BGpGkZn_NMz7TLCp_sODIalhHTP6PCSKLDJOg1hsc0o4hA4k3hNImW6cxAGKvXPO9zqN") {
      setImagen377("https://blogger.googleusercontent.com/img/a/AVvXsEg230Qg2X2mAaGyWJC7Tzlroce_HagEaDOxUlHLyKr8_08hlRYF0F44XERmkS9WV7KM54xyMceUJs9AeCvFIlLQUtmAczMc9nQj_9l_WjMugjwiXsiFDSqOMify0V9IjRV4ToFo5ZjtBQgqk0l6Ym9Ia1tPDPmofVHMmZ_KMMOBnMvXqkyg0iMb1wtE");//prendido
    } else {
      setImagen377("https://blogger.googleusercontent.com/img/a/AVvXsEihh0eOjPwm4YR_t00UdyS5lyEEit-fewZ5tTqj2AiLrwu8cyeu9DZ3ik2AB0nM-6ixZ5PNrbeprhMdMWzNtic61GiP4Ju4OU2s3NkuckwiVXu4m-d63xD8BGpGkZn_NMz7TLCp_sODIalhHTP6PCSKLDJOg1hsc0o4hA4k3hNImW6cxAGKvXPO9zqN");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen38, setImagen38] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgpsQJ4zwfoQre_xDtMVMid8K8AZ3Pw2zRCx7WHIvySPgmeP067OkQQAQKGcfICjG-FfKLCHv9et55huvxx3O1ZqTvoc3S5a2G_HRkc5oA3Gwe6FxwVxFmOD6gKqATguOCPQ0Vf7Rkplsfh5NG3bWhk262HZKTPikln99lcWWTuhv7rkqQ9qYiGvDX4");
  
  function prender38() {
    if (imagen38 === "https://blogger.googleusercontent.com/img/a/AVvXsEgpsQJ4zwfoQre_xDtMVMid8K8AZ3Pw2zRCx7WHIvySPgmeP067OkQQAQKGcfICjG-FfKLCHv9et55huvxx3O1ZqTvoc3S5a2G_HRkc5oA3Gwe6FxwVxFmOD6gKqATguOCPQ0Vf7Rkplsfh5NG3bWhk262HZKTPikln99lcWWTuhv7rkqQ9qYiGvDX4") {
      setImagen38("https://blogger.googleusercontent.com/img/a/AVvXsEiNXkOWspNeULvXVhSTGg5oD-PaycMynDztS384hgzqLmETP4wJGHcs8MvGmthbFo2sdNkaIjaR-5yPVMPIU3gO3bu9dpg_8O537uM6xVdSrqDntkuPD8lFh70p3Yj6XfcJb6b-FXdMxwe-JzGfbeuOvKrFBUW-V1zv_6LqGiqPmH6gLMEfAqoqNmAv");//prendido
    } else {
      setImagen38("https://blogger.googleusercontent.com/img/a/AVvXsEgpsQJ4zwfoQre_xDtMVMid8K8AZ3Pw2zRCx7WHIvySPgmeP067OkQQAQKGcfICjG-FfKLCHv9et55huvxx3O1ZqTvoc3S5a2G_HRkc5oA3Gwe6FxwVxFmOD6gKqATguOCPQ0Vf7Rkplsfh5NG3bWhk262HZKTPikln99lcWWTuhv7rkqQ9qYiGvDX4");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen39, setImagen39] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEim_LUaQIcT_SV3NEqZ4I5mdKTLQ-ZuWLgSUlNW2dyPeMTGiN8oOv7pODrzMBtzJWK8fm_OxATximqf3S-Be8P8b2RXBK85VCLVwHemgsKuzavnNWuWvd5AsFhOkEMfdWVb19xN2JqxNPYiiFIX1RzO_ayW6_6ashj1PIPcyEG93Wu6pvsm4Ikp5LY7");
  
  function prender39() {
    if (imagen39 === "https://blogger.googleusercontent.com/img/a/AVvXsEim_LUaQIcT_SV3NEqZ4I5mdKTLQ-ZuWLgSUlNW2dyPeMTGiN8oOv7pODrzMBtzJWK8fm_OxATximqf3S-Be8P8b2RXBK85VCLVwHemgsKuzavnNWuWvd5AsFhOkEMfdWVb19xN2JqxNPYiiFIX1RzO_ayW6_6ashj1PIPcyEG93Wu6pvsm4Ikp5LY7") {
      setImagen39("https://blogger.googleusercontent.com/img/a/AVvXsEj_LrDoh3ClDH3u2LuO2ZZps2o43HP7C1DINjBVhr5vftCB5dveaAQ4HTCHlp3-9on2Yu7oqaPKR-_Tayk3XanzDK6tMimrJM9cluoETL9kei_xwwlgb_vjD1oR7ir2G9n09vjt-nUxvWaICCHN-rI89RynmMkY4JIDC2R5snOYti2Ue8eTk3Vp_1OX");//prendido
    } else {
      setImagen39("https://blogger.googleusercontent.com/img/a/AVvXsEim_LUaQIcT_SV3NEqZ4I5mdKTLQ-ZuWLgSUlNW2dyPeMTGiN8oOv7pODrzMBtzJWK8fm_OxATximqf3S-Be8P8b2RXBK85VCLVwHemgsKuzavnNWuWvd5AsFhOkEMfdWVb19xN2JqxNPYiiFIX1RzO_ayW6_6ashj1PIPcyEG93Wu6pvsm4Ikp5LY7");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen399, setImagen399] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEim_LUaQIcT_SV3NEqZ4I5mdKTLQ-ZuWLgSUlNW2dyPeMTGiN8oOv7pODrzMBtzJWK8fm_OxATximqf3S-Be8P8b2RXBK85VCLVwHemgsKuzavnNWuWvd5AsFhOkEMfdWVb19xN2JqxNPYiiFIX1RzO_ayW6_6ashj1PIPcyEG93Wu6pvsm4Ikp5LY7");
  
  function prender399() {
    if (imagen399 === "https://blogger.googleusercontent.com/img/a/AVvXsEim_LUaQIcT_SV3NEqZ4I5mdKTLQ-ZuWLgSUlNW2dyPeMTGiN8oOv7pODrzMBtzJWK8fm_OxATximqf3S-Be8P8b2RXBK85VCLVwHemgsKuzavnNWuWvd5AsFhOkEMfdWVb19xN2JqxNPYiiFIX1RzO_ayW6_6ashj1PIPcyEG93Wu6pvsm4Ikp5LY7") {
      setImagen399("https://blogger.googleusercontent.com/img/a/AVvXsEj_LrDoh3ClDH3u2LuO2ZZps2o43HP7C1DINjBVhr5vftCB5dveaAQ4HTCHlp3-9on2Yu7oqaPKR-_Tayk3XanzDK6tMimrJM9cluoETL9kei_xwwlgb_vjD1oR7ir2G9n09vjt-nUxvWaICCHN-rI89RynmMkY4JIDC2R5snOYti2Ue8eTk3Vp_1OX");//prendido
    } else {
      setImagen399("https://blogger.googleusercontent.com/img/a/AVvXsEim_LUaQIcT_SV3NEqZ4I5mdKTLQ-ZuWLgSUlNW2dyPeMTGiN8oOv7pODrzMBtzJWK8fm_OxATximqf3S-Be8P8b2RXBK85VCLVwHemgsKuzavnNWuWvd5AsFhOkEMfdWVb19xN2JqxNPYiiFIX1RzO_ayW6_6ashj1PIPcyEG93Wu6pvsm4Ikp5LY7");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen40, setImagen40] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjc3FsdV4csnXx_U7JMJlXf2MmAVEVL5_zH99uWMXM9oDk_VGawgqrZPQ2Yy5TrOmLt71l3ryGUQHBgcDjand7ynNLH1nDfj_arnPE8Zz_69KEnlLqxbFL3MFguWq30StYHPQjoVHVEUdnkDREJ6OLJFCnzzEusZJ4dLGkOTiQ9RMPuM5APm-r1dnbV");
  
  function prender40() {
    if (imagen40 === "https://blogger.googleusercontent.com/img/a/AVvXsEjc3FsdV4csnXx_U7JMJlXf2MmAVEVL5_zH99uWMXM9oDk_VGawgqrZPQ2Yy5TrOmLt71l3ryGUQHBgcDjand7ynNLH1nDfj_arnPE8Zz_69KEnlLqxbFL3MFguWq30StYHPQjoVHVEUdnkDREJ6OLJFCnzzEusZJ4dLGkOTiQ9RMPuM5APm-r1dnbV") {
      setImagen40("https://blogger.googleusercontent.com/img/a/AVvXsEi8NR9VsnxDeSnBR_QWAGZL8M-SRyoeX2MSw9tyhnKXqPLkBY_8tOLgc7h6BrE-OHgqOF8YomHsh8vFVfzDBZhLzeSgUASwtG1reSIsFQc_ZlWmiB1uMCSiw-qjS9R4AVv9HNc8Q3GmSFI4ul_yZMSBH0oOqBBhY23DQyahLo2vciDH3Gv2NaBEhdNi");//prendido
    } else {
      setImagen40("https://blogger.googleusercontent.com/img/a/AVvXsEjc3FsdV4csnXx_U7JMJlXf2MmAVEVL5_zH99uWMXM9oDk_VGawgqrZPQ2Yy5TrOmLt71l3ryGUQHBgcDjand7ynNLH1nDfj_arnPE8Zz_69KEnlLqxbFL3MFguWq30StYHPQjoVHVEUdnkDREJ6OLJFCnzzEusZJ4dLGkOTiQ9RMPuM5APm-r1dnbV");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen400, setImagen400] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjc3FsdV4csnXx_U7JMJlXf2MmAVEVL5_zH99uWMXM9oDk_VGawgqrZPQ2Yy5TrOmLt71l3ryGUQHBgcDjand7ynNLH1nDfj_arnPE8Zz_69KEnlLqxbFL3MFguWq30StYHPQjoVHVEUdnkDREJ6OLJFCnzzEusZJ4dLGkOTiQ9RMPuM5APm-r1dnbV");
  
  function prender400() {
    if (imagen400 === "https://blogger.googleusercontent.com/img/a/AVvXsEjc3FsdV4csnXx_U7JMJlXf2MmAVEVL5_zH99uWMXM9oDk_VGawgqrZPQ2Yy5TrOmLt71l3ryGUQHBgcDjand7ynNLH1nDfj_arnPE8Zz_69KEnlLqxbFL3MFguWq30StYHPQjoVHVEUdnkDREJ6OLJFCnzzEusZJ4dLGkOTiQ9RMPuM5APm-r1dnbV") {
      setImagen400("https://blogger.googleusercontent.com/img/a/AVvXsEi8NR9VsnxDeSnBR_QWAGZL8M-SRyoeX2MSw9tyhnKXqPLkBY_8tOLgc7h6BrE-OHgqOF8YomHsh8vFVfzDBZhLzeSgUASwtG1reSIsFQc_ZlWmiB1uMCSiw-qjS9R4AVv9HNc8Q3GmSFI4ul_yZMSBH0oOqBBhY23DQyahLo2vciDH3Gv2NaBEhdNi");//prendido
    } else {
      setImagen400("https://blogger.googleusercontent.com/img/a/AVvXsEjc3FsdV4csnXx_U7JMJlXf2MmAVEVL5_zH99uWMXM9oDk_VGawgqrZPQ2Yy5TrOmLt71l3ryGUQHBgcDjand7ynNLH1nDfj_arnPE8Zz_69KEnlLqxbFL3MFguWq30StYHPQjoVHVEUdnkDREJ6OLJFCnzzEusZJ4dLGkOTiQ9RMPuM5APm-r1dnbV");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen41, setImagen41] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjnpxzV7BYWXPNgrs-owpQJxLtIeP6xOIffS3dO7K46UvuNeMbrxSdL43oH1p0KrUe_zZ3TYHIV5_BCOKOtOLT8AoO_NyxDA1tdsa5cIfYLe-HJD4lBP5c_fLnYNbThM2xM52kzA6ki8h0Gv0BiZgwdvK_LLb-GTiEY3rwv8xN1P-j5kVqxUx3VWChW");
  
  function prender41() {
    if (imagen41 === "https://blogger.googleusercontent.com/img/a/AVvXsEjnpxzV7BYWXPNgrs-owpQJxLtIeP6xOIffS3dO7K46UvuNeMbrxSdL43oH1p0KrUe_zZ3TYHIV5_BCOKOtOLT8AoO_NyxDA1tdsa5cIfYLe-HJD4lBP5c_fLnYNbThM2xM52kzA6ki8h0Gv0BiZgwdvK_LLb-GTiEY3rwv8xN1P-j5kVqxUx3VWChW") {
      setImagen41("https://blogger.googleusercontent.com/img/a/AVvXsEhl_ibWBnllT9ZbZfGEfu-Nb458h99kkvdSQby1mzMqEvEwW3TKEaz-257qAx1JZ97TER_5IcVm3hPhcX0cJo_klUAD-tRzICAEaOpKhbFoOT7nSrBwftd0UGSuJMzCDwaZ4dlQ4lvHSjmIjXVNRDUurC1mR5XLHxruEDUPTHS0GOBIVBYZcJT7zfu3");//prendido
    } else {
      setImagen41("https://blogger.googleusercontent.com/img/a/AVvXsEjnpxzV7BYWXPNgrs-owpQJxLtIeP6xOIffS3dO7K46UvuNeMbrxSdL43oH1p0KrUe_zZ3TYHIV5_BCOKOtOLT8AoO_NyxDA1tdsa5cIfYLe-HJD4lBP5c_fLnYNbThM2xM52kzA6ki8h0Gv0BiZgwdvK_LLb-GTiEY3rwv8xN1P-j5kVqxUx3VWChW");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen42, setImagen42] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjAj18psfnzz3WSCIPAwkLC50mxbr2-meR2PtdB9a8JQefIT0IPvnMbnYKieWwlRWx_lSLfcx6Bv9JydLgqxzAvwUgf28okm8N4pAneJZ8g9znaTs_58iICkEwrRcwqAMcYaHlCsYwGDXmQkuddBzN0Osp-TqxXLhZlx8QgtpSXT5E_UbF5FzLVrAFR");
  
  function prender42() {
    if (imagen42 === "https://blogger.googleusercontent.com/img/a/AVvXsEjAj18psfnzz3WSCIPAwkLC50mxbr2-meR2PtdB9a8JQefIT0IPvnMbnYKieWwlRWx_lSLfcx6Bv9JydLgqxzAvwUgf28okm8N4pAneJZ8g9znaTs_58iICkEwrRcwqAMcYaHlCsYwGDXmQkuddBzN0Osp-TqxXLhZlx8QgtpSXT5E_UbF5FzLVrAFR") {
      setImagen42("https://blogger.googleusercontent.com/img/a/AVvXsEh7mjFEBmrryopj7R_9XkOsluJcPy2R-bIH0EdWMdGx8ESa-JA7sEuEaESvjKsCGRXAwDQyNQ032MihX4rXHV_4uWGgPpfoBl5oizeAJXH6jE1aRnAn4zCqa6KuWpM_nwedlMYU1lTGnQkvnTj9V4aOwpoYzPyXmiJVeXBKtEXiqE51Q7hNh6cmDMoI");//prendido
    } else {
      setImagen42("https://blogger.googleusercontent.com/img/a/AVvXsEjAj18psfnzz3WSCIPAwkLC50mxbr2-meR2PtdB9a8JQefIT0IPvnMbnYKieWwlRWx_lSLfcx6Bv9JydLgqxzAvwUgf28okm8N4pAneJZ8g9znaTs_58iICkEwrRcwqAMcYaHlCsYwGDXmQkuddBzN0Osp-TqxXLhZlx8QgtpSXT5E_UbF5FzLVrAFR");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen43, setImagen43] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEibSf1rW2ZgpYbNl3qDx9uHVgW9nb5RPBG-IDABrdFWJAX67aYTJKKWhtkBZEl9xGhdMHYqd1MAaFIzSfVkjJpEPtHmPFTxNBKW0i02BkOiFHWP2YtCZgWkkXFzUGJLWzspl7OGgCdXqtAWc9QNmhelnTk6wtSp-WeiuwLV0xq9hxhGQzM2F8lNUuyq");
  
  function prender43() {
    if (imagen43 === "https://blogger.googleusercontent.com/img/a/AVvXsEibSf1rW2ZgpYbNl3qDx9uHVgW9nb5RPBG-IDABrdFWJAX67aYTJKKWhtkBZEl9xGhdMHYqd1MAaFIzSfVkjJpEPtHmPFTxNBKW0i02BkOiFHWP2YtCZgWkkXFzUGJLWzspl7OGgCdXqtAWc9QNmhelnTk6wtSp-WeiuwLV0xq9hxhGQzM2F8lNUuyq") {
      setImagen43("https://blogger.googleusercontent.com/img/a/AVvXsEhH0-N6AbgwR6cTP3EUxRNspPpzjrViLMbsHlcem3lT-GTb34hFb5UmyzuigBfBfVpiPbqIcTvov580UGJPIyq3JEzEx2HvMRnUaIDlELh2qwlF98JkNRnO7_j31vmISK2MzHpjQWoYDuM_cnGpwIDha1IPpUtPA7Qiqa06EhaVn9ZuxCioLk_n69D9");//prendido
    } else {
      setImagen43("https://blogger.googleusercontent.com/img/a/AVvXsEibSf1rW2ZgpYbNl3qDx9uHVgW9nb5RPBG-IDABrdFWJAX67aYTJKKWhtkBZEl9xGhdMHYqd1MAaFIzSfVkjJpEPtHmPFTxNBKW0i02BkOiFHWP2YtCZgWkkXFzUGJLWzspl7OGgCdXqtAWc9QNmhelnTk6wtSp-WeiuwLV0xq9hxhGQzM2F8lNUuyq");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen44, setImagen44] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEifLASMniguaNEXFUYbVNPOgXvnQs5vNiqR0LCipDFaaAPXJaTDQCqOdVkfyJfeejF0gHufJPczBcP2OjVAygCKv1JOOEnKJokOcyfxQXAb3M3n4svPf95MAkkMtqT8L3Cb4GIeDLWBAFYzHM-QGjDPPNWdSFzPRsGokFR5fcsF4TehEw3E-WbstpWO");
  
  function prender44() {
    if (imagen44 === "https://blogger.googleusercontent.com/img/a/AVvXsEifLASMniguaNEXFUYbVNPOgXvnQs5vNiqR0LCipDFaaAPXJaTDQCqOdVkfyJfeejF0gHufJPczBcP2OjVAygCKv1JOOEnKJokOcyfxQXAb3M3n4svPf95MAkkMtqT8L3Cb4GIeDLWBAFYzHM-QGjDPPNWdSFzPRsGokFR5fcsF4TehEw3E-WbstpWO") {
      setImagen44("https://blogger.googleusercontent.com/img/a/AVvXsEi1ka6C2sz-JOEfsfZtvuZYnd3LDVX1nXx78Yk4pW4K34Uz8UmOajIQjFbf_duIVrvWDsCdzvrJUFoAX-NcQuypGbEsZExdsHNYhlplGrwD90mS-eOzRWiwr0LyUAGuxZUhDRaKU49dn2Q0H039-NqPy-FJmi8S6GyxnHeKnKLJcXf_Pn_jA6sNxzXs");//prendido
    } else {
      setImagen44("https://blogger.googleusercontent.com/img/a/AVvXsEifLASMniguaNEXFUYbVNPOgXvnQs5vNiqR0LCipDFaaAPXJaTDQCqOdVkfyJfeejF0gHufJPczBcP2OjVAygCKv1JOOEnKJokOcyfxQXAb3M3n4svPf95MAkkMtqT8L3Cb4GIeDLWBAFYzHM-QGjDPPNWdSFzPRsGokFR5fcsF4TehEw3E-WbstpWO");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen45, setImagen45] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEggy-sOlDYeVDSJ0V1cTmS5uMb1OwlszeEu8DROph5hL9zmGUi5GKA27ZVS4C5toJMiK7CZF2piDvwJPpZW0vteyIEUeCI6NZEQTZPbSfZtcUIe91wNptiOmSF2untqTtrcKFz2kK5r0zSNKH-82cjHC7IMg1xRGQaO8GRZyOEU1lcFxtHRTYlncp3i");
  
  function prender45() {
    if (imagen45 === "https://blogger.googleusercontent.com/img/a/AVvXsEggy-sOlDYeVDSJ0V1cTmS5uMb1OwlszeEu8DROph5hL9zmGUi5GKA27ZVS4C5toJMiK7CZF2piDvwJPpZW0vteyIEUeCI6NZEQTZPbSfZtcUIe91wNptiOmSF2untqTtrcKFz2kK5r0zSNKH-82cjHC7IMg1xRGQaO8GRZyOEU1lcFxtHRTYlncp3i") {
      setImagen45("https://blogger.googleusercontent.com/img/a/AVvXsEiilLoK0IWVLRKonf-EgOKZtvYCK0bccm54eq8cl5CNuC5TilkqSy_3nVLPOEF6PaLE2V1XB2W1_a2EtuSMdWPdTORLuRa67W4BHrnpEE89Q76DUUWs1ogHs13QWoJYu0wa5T3CF4RlOFVgsvQysPBucNhutBWJjt_KFCKV-Lp3tQrkR7p2owk2K_Iw");//prendido
    } else {
      setImagen45("https://blogger.googleusercontent.com/img/a/AVvXsEggy-sOlDYeVDSJ0V1cTmS5uMb1OwlszeEu8DROph5hL9zmGUi5GKA27ZVS4C5toJMiK7CZF2piDvwJPpZW0vteyIEUeCI6NZEQTZPbSfZtcUIe91wNptiOmSF2untqTtrcKFz2kK5r0zSNKH-82cjHC7IMg1xRGQaO8GRZyOEU1lcFxtHRTYlncp3i");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen46, setImagen46] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgzlDGACyAxGR0iVRFJGxdzPEemWISJB-YB3aZAdBTojmtrAYB9Es-MUlbKVjvouokSgDuQeHUErXqrmmCUbL5DoVR9iEzJBFrqRZ8PMgKY_Df0QmCyN5j67k8kRas7YQLmmhO8KJxYMB2jUzD9yt7Mqcy0UmfyyahC82p10aSVPVUKN53QQk7H_lG4");
  
  function prender46() {
    if (imagen46 === "https://blogger.googleusercontent.com/img/a/AVvXsEgzlDGACyAxGR0iVRFJGxdzPEemWISJB-YB3aZAdBTojmtrAYB9Es-MUlbKVjvouokSgDuQeHUErXqrmmCUbL5DoVR9iEzJBFrqRZ8PMgKY_Df0QmCyN5j67k8kRas7YQLmmhO8KJxYMB2jUzD9yt7Mqcy0UmfyyahC82p10aSVPVUKN53QQk7H_lG4") {
      setImagen46("https://blogger.googleusercontent.com/img/a/AVvXsEiSBT6zJM5U8o2C2IP-EArLyb_1RxJwBJsVwNMRCKpHb_akHQHIwWvm_bmuSXtmG8a_5nrd2iG5R2IjNIx7_uTdOPo1qRjQAgtKit5fVPAxH_lvUaNGesLTvp1ZchH0OY12kmPoFMksLckvAE4zPy6XmfziDDSg6M5IpkbbHsJHJ9XdXU9cZZqT66wC");//prendido
    } else {
      setImagen46("https://blogger.googleusercontent.com/img/a/AVvXsEgzlDGACyAxGR0iVRFJGxdzPEemWISJB-YB3aZAdBTojmtrAYB9Es-MUlbKVjvouokSgDuQeHUErXqrmmCUbL5DoVR9iEzJBFrqRZ8PMgKY_Df0QmCyN5j67k8kRas7YQLmmhO8KJxYMB2jUzD9yt7Mqcy0UmfyyahC82p10aSVPVUKN53QQk7H_lG4");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen47, setImagen47] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhN_uvqLSi5nbYW7QxktZQgbBw5x2Nr67Rzsu7i8B6gm4eEMcssGC_m7veE3xy-Q-gOR8BMItSrxdsuTEbPR8H0bo5LXDAMM0DBoDBVbMxRqmWPd18RQf3mSwWDnxHqfz_cZBEwlZLUjfsJndLVoUNBjSH4XYXFayJKTZmP32VmZJdJlSIqqBKQAZZg");
  
  function prender47() {
    if (imagen47 === "https://blogger.googleusercontent.com/img/a/AVvXsEhN_uvqLSi5nbYW7QxktZQgbBw5x2Nr67Rzsu7i8B6gm4eEMcssGC_m7veE3xy-Q-gOR8BMItSrxdsuTEbPR8H0bo5LXDAMM0DBoDBVbMxRqmWPd18RQf3mSwWDnxHqfz_cZBEwlZLUjfsJndLVoUNBjSH4XYXFayJKTZmP32VmZJdJlSIqqBKQAZZg") {
      setImagen47("https://blogger.googleusercontent.com/img/a/AVvXsEg2K0YQchotlM7atfuiI3-QSCuOnIaJ-iP5exdD7r0LIZm7QxzeS3UiIZ5zWKk2IBnbs5OW5GnDvf_nh3JAGDrKw0gCqd9GP96WOm70Kish61mGBOKOSrom7f77V1cqjgzJLhyvGwuWdZuL9x_4K6xZnghiBwmf9jPLp3kKhS7h98UywwxQGjX_Taq-");//prendido
    } else {
      setImagen47("https://blogger.googleusercontent.com/img/a/AVvXsEhN_uvqLSi5nbYW7QxktZQgbBw5x2Nr67Rzsu7i8B6gm4eEMcssGC_m7veE3xy-Q-gOR8BMItSrxdsuTEbPR8H0bo5LXDAMM0DBoDBVbMxRqmWPd18RQf3mSwWDnxHqfz_cZBEwlZLUjfsJndLVoUNBjSH4XYXFayJKTZmP32VmZJdJlSIqqBKQAZZg");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen48, setImagen48] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgcu2JT9wGKWnTKNicQxx1ZRfyLdUH8XXAPaIda0_cRKzv6eIY9B6sP21zaRQOnF5DFKkE6sZZ3mq1KUv7d3i3MB4FpLU-npgmW5r7dQjS_GT3dgqG5AqLjqR4rM7EuPrw6IM2reuWwTCoo1W18a4xHJXHmMCZMzX97UDH547A2lUShlqdbu5E9xm9x");
  
  function prender48() {
    if (imagen48 === "https://blogger.googleusercontent.com/img/a/AVvXsEgcu2JT9wGKWnTKNicQxx1ZRfyLdUH8XXAPaIda0_cRKzv6eIY9B6sP21zaRQOnF5DFKkE6sZZ3mq1KUv7d3i3MB4FpLU-npgmW5r7dQjS_GT3dgqG5AqLjqR4rM7EuPrw6IM2reuWwTCoo1W18a4xHJXHmMCZMzX97UDH547A2lUShlqdbu5E9xm9x") {
      setImagen48("https://blogger.googleusercontent.com/img/a/AVvXsEiDv4y-uAd7u1AMGmi_My0mroL6UupKWZWDqd49oHxChBDprga3HwKpZZ0zBCDEWiM88fpz-UGR9aNOtFT-vYDYiOpiLrE5g69bE5An9wxbI08dS6ixYpAxVH-eFLsM1ETaHQ28Oav8WA-zqaTK6xFrdgLfg9I0O6Evh-Kp7bKYYeHSIvCOwAGV7krm");//prendido
    } else {
      setImagen48("https://blogger.googleusercontent.com/img/a/AVvXsEgcu2JT9wGKWnTKNicQxx1ZRfyLdUH8XXAPaIda0_cRKzv6eIY9B6sP21zaRQOnF5DFKkE6sZZ3mq1KUv7d3i3MB4FpLU-npgmW5r7dQjS_GT3dgqG5AqLjqR4rM7EuPrw6IM2reuWwTCoo1W18a4xHJXHmMCZMzX97UDH547A2lUShlqdbu5E9xm9x");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen49, setImagen49] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjOYBmTavSZBMPRzKRBxCbVNagQ23XA7YSemCamVBQBEauyBiO0xQ5qDGUwha0UdeWTJKnkBhM3L2WeTYhYEBxFT9Kr9cVPbsv0wgzAJFVdB4_g2dVDHLZB46ZTRD6M-cnoKMABIq95DE43TzmBhI_9VQhte_XR8NUrlfD_ZpkAzSUXAYkyA2_1Z9L5");
  
  function prender49() {
    if (imagen49 === "https://blogger.googleusercontent.com/img/a/AVvXsEjOYBmTavSZBMPRzKRBxCbVNagQ23XA7YSemCamVBQBEauyBiO0xQ5qDGUwha0UdeWTJKnkBhM3L2WeTYhYEBxFT9Kr9cVPbsv0wgzAJFVdB4_g2dVDHLZB46ZTRD6M-cnoKMABIq95DE43TzmBhI_9VQhte_XR8NUrlfD_ZpkAzSUXAYkyA2_1Z9L5") {
      setImagen49("https://blogger.googleusercontent.com/img/a/AVvXsEjaqQkiJSKNH8SXUgBSiNtz2pcDWEy_7L6kvKr8xik7nHsO7q6EtDqrM_NPgI-u9ZriJY0vAVAMyMISscgJ2mif0GT_5mG4aW7OFY3vOHTiZ3wCZ9PozpSN3fYXCwtulkFRBiql2i9qJxIwiXFtE_pq0FqSHndpYbqXUe-79LJGlK15va2HA-KHG4Vm");//prendido
    } else {
      setImagen49("https://blogger.googleusercontent.com/img/a/AVvXsEjOYBmTavSZBMPRzKRBxCbVNagQ23XA7YSemCamVBQBEauyBiO0xQ5qDGUwha0UdeWTJKnkBhM3L2WeTYhYEBxFT9Kr9cVPbsv0wgzAJFVdB4_g2dVDHLZB46ZTRD6M-cnoKMABIq95DE43TzmBhI_9VQhte_XR8NUrlfD_ZpkAzSUXAYkyA2_1Z9L5");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen50, setImagen50] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEh0AD7vDqfpKyGm7WqBJTF_d1klMKEJ6HIkWQrtGaQ-PTUy_Aylz239c168_4dVk2D7PF466PK1CerbL_BIZezO3E8lBbJbHzroP-ZoKXJUhpBnJQBjjwQR8gy9m4vCVUQYdkNz2dZoAFC5UJcnAHz3_RSL56AqPA4EssU7hYVmmV5PilH4hIhKYixn");
  
  function prender50() {
    if (imagen50 === "https://blogger.googleusercontent.com/img/a/AVvXsEh0AD7vDqfpKyGm7WqBJTF_d1klMKEJ6HIkWQrtGaQ-PTUy_Aylz239c168_4dVk2D7PF466PK1CerbL_BIZezO3E8lBbJbHzroP-ZoKXJUhpBnJQBjjwQR8gy9m4vCVUQYdkNz2dZoAFC5UJcnAHz3_RSL56AqPA4EssU7hYVmmV5PilH4hIhKYixn") {
      setImagen50("https://blogger.googleusercontent.com/img/a/AVvXsEiIUJqs8300E5pFhgOu9JkIpXo9F4UIDXOF2JC59o_IU-3GjkZyvfoDlznKxyogeNW5ONoRBYqdPF3cClODttBPEll07hVzvNTO1fEzr6h6lHxC9CktiKt45KhYxhpPKQ4OmYRVLgdMz4LK7W3AUbVityG9foleVjYSG5tzbjzeMcVdbA6re4FhrKr4");//prendido
    } else {
      setImagen50("https://blogger.googleusercontent.com/img/a/AVvXsEh0AD7vDqfpKyGm7WqBJTF_d1klMKEJ6HIkWQrtGaQ-PTUy_Aylz239c168_4dVk2D7PF466PK1CerbL_BIZezO3E8lBbJbHzroP-ZoKXJUhpBnJQBjjwQR8gy9m4vCVUQYdkNz2dZoAFC5UJcnAHz3_RSL56AqPA4EssU7hYVmmV5PilH4hIhKYixn");
    }
  }
  //_____________inia juegooooo____________________________________________________________________________________________________
  const [imagen466, setImagen466] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgzlDGACyAxGR0iVRFJGxdzPEemWISJB-YB3aZAdBTojmtrAYB9Es-MUlbKVjvouokSgDuQeHUErXqrmmCUbL5DoVR9iEzJBFrqRZ8PMgKY_Df0QmCyN5j67k8kRas7YQLmmhO8KJxYMB2jUzD9yt7Mqcy0UmfyyahC82p10aSVPVUKN53QQk7H_lG4");
  
  function prender466() {
    if (imagen466 === "https://blogger.googleusercontent.com/img/a/AVvXsEgzlDGACyAxGR0iVRFJGxdzPEemWISJB-YB3aZAdBTojmtrAYB9Es-MUlbKVjvouokSgDuQeHUErXqrmmCUbL5DoVR9iEzJBFrqRZ8PMgKY_Df0QmCyN5j67k8kRas7YQLmmhO8KJxYMB2jUzD9yt7Mqcy0UmfyyahC82p10aSVPVUKN53QQk7H_lG4") {
      setImagen466("https://blogger.googleusercontent.com/img/a/AVvXsEiSBT6zJM5U8o2C2IP-EArLyb_1RxJwBJsVwNMRCKpHb_akHQHIwWvm_bmuSXtmG8a_5nrd2iG5R2IjNIx7_uTdOPo1qRjQAgtKit5fVPAxH_lvUaNGesLTvp1ZchH0OY12kmPoFMksLckvAE4zPy6XmfziDDSg6M5IpkbbHsJHJ9XdXU9cZZqT66wC");//prendido
    } else {
      setImagen466("https://blogger.googleusercontent.com/img/a/AVvXsEgzlDGACyAxGR0iVRFJGxdzPEemWISJB-YB3aZAdBTojmtrAYB9Es-MUlbKVjvouokSgDuQeHUErXqrmmCUbL5DoVR9iEzJBFrqRZ8PMgKY_Df0QmCyN5j67k8kRas7YQLmmhO8KJxYMB2jUzD9yt7Mqcy0UmfyyahC82p10aSVPVUKN53QQk7H_lG4");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen477, setImagen477] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhN_uvqLSi5nbYW7QxktZQgbBw5x2Nr67Rzsu7i8B6gm4eEMcssGC_m7veE3xy-Q-gOR8BMItSrxdsuTEbPR8H0bo5LXDAMM0DBoDBVbMxRqmWPd18RQf3mSwWDnxHqfz_cZBEwlZLUjfsJndLVoUNBjSH4XYXFayJKTZmP32VmZJdJlSIqqBKQAZZg");
  
  function prender477() {
    if (imagen477 === "https://blogger.googleusercontent.com/img/a/AVvXsEhN_uvqLSi5nbYW7QxktZQgbBw5x2Nr67Rzsu7i8B6gm4eEMcssGC_m7veE3xy-Q-gOR8BMItSrxdsuTEbPR8H0bo5LXDAMM0DBoDBVbMxRqmWPd18RQf3mSwWDnxHqfz_cZBEwlZLUjfsJndLVoUNBjSH4XYXFayJKTZmP32VmZJdJlSIqqBKQAZZg") {
      setImagen477("https://blogger.googleusercontent.com/img/a/AVvXsEg2K0YQchotlM7atfuiI3-QSCuOnIaJ-iP5exdD7r0LIZm7QxzeS3UiIZ5zWKk2IBnbs5OW5GnDvf_nh3JAGDrKw0gCqd9GP96WOm70Kish61mGBOKOSrom7f77V1cqjgzJLhyvGwuWdZuL9x_4K6xZnghiBwmf9jPLp3kKhS7h98UywwxQGjX_Taq-");//prendido
    } else {
      setImagen477("https://blogger.googleusercontent.com/img/a/AVvXsEhN_uvqLSi5nbYW7QxktZQgbBw5x2Nr67Rzsu7i8B6gm4eEMcssGC_m7veE3xy-Q-gOR8BMItSrxdsuTEbPR8H0bo5LXDAMM0DBoDBVbMxRqmWPd18RQf3mSwWDnxHqfz_cZBEwlZLUjfsJndLVoUNBjSH4XYXFayJKTZmP32VmZJdJlSIqqBKQAZZg");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen488, setImagen488] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgcu2JT9wGKWnTKNicQxx1ZRfyLdUH8XXAPaIda0_cRKzv6eIY9B6sP21zaRQOnF5DFKkE6sZZ3mq1KUv7d3i3MB4FpLU-npgmW5r7dQjS_GT3dgqG5AqLjqR4rM7EuPrw6IM2reuWwTCoo1W18a4xHJXHmMCZMzX97UDH547A2lUShlqdbu5E9xm9x");
  
  function prender488() {
    if (imagen488 === "https://blogger.googleusercontent.com/img/a/AVvXsEgcu2JT9wGKWnTKNicQxx1ZRfyLdUH8XXAPaIda0_cRKzv6eIY9B6sP21zaRQOnF5DFKkE6sZZ3mq1KUv7d3i3MB4FpLU-npgmW5r7dQjS_GT3dgqG5AqLjqR4rM7EuPrw6IM2reuWwTCoo1W18a4xHJXHmMCZMzX97UDH547A2lUShlqdbu5E9xm9x") {
      setImagen488("https://blogger.googleusercontent.com/img/a/AVvXsEiDv4y-uAd7u1AMGmi_My0mroL6UupKWZWDqd49oHxChBDprga3HwKpZZ0zBCDEWiM88fpz-UGR9aNOtFT-vYDYiOpiLrE5g69bE5An9wxbI08dS6ixYpAxVH-eFLsM1ETaHQ28Oav8WA-zqaTK6xFrdgLfg9I0O6Evh-Kp7bKYYeHSIvCOwAGV7krm");//prendido
    } else {
      setImagen488("https://blogger.googleusercontent.com/img/a/AVvXsEgcu2JT9wGKWnTKNicQxx1ZRfyLdUH8XXAPaIda0_cRKzv6eIY9B6sP21zaRQOnF5DFKkE6sZZ3mq1KUv7d3i3MB4FpLU-npgmW5r7dQjS_GT3dgqG5AqLjqR4rM7EuPrw6IM2reuWwTCoo1W18a4xHJXHmMCZMzX97UDH547A2lUShlqdbu5E9xm9x");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen499, setImagen499] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjOYBmTavSZBMPRzKRBxCbVNagQ23XA7YSemCamVBQBEauyBiO0xQ5qDGUwha0UdeWTJKnkBhM3L2WeTYhYEBxFT9Kr9cVPbsv0wgzAJFVdB4_g2dVDHLZB46ZTRD6M-cnoKMABIq95DE43TzmBhI_9VQhte_XR8NUrlfD_ZpkAzSUXAYkyA2_1Z9L5");
  
  function prender499() {
    if (imagen499 === "https://blogger.googleusercontent.com/img/a/AVvXsEjOYBmTavSZBMPRzKRBxCbVNagQ23XA7YSemCamVBQBEauyBiO0xQ5qDGUwha0UdeWTJKnkBhM3L2WeTYhYEBxFT9Kr9cVPbsv0wgzAJFVdB4_g2dVDHLZB46ZTRD6M-cnoKMABIq95DE43TzmBhI_9VQhte_XR8NUrlfD_ZpkAzSUXAYkyA2_1Z9L5") {
      setImagen499("https://blogger.googleusercontent.com/img/a/AVvXsEjaqQkiJSKNH8SXUgBSiNtz2pcDWEy_7L6kvKr8xik7nHsO7q6EtDqrM_NPgI-u9ZriJY0vAVAMyMISscgJ2mif0GT_5mG4aW7OFY3vOHTiZ3wCZ9PozpSN3fYXCwtulkFRBiql2i9qJxIwiXFtE_pq0FqSHndpYbqXUe-79LJGlK15va2HA-KHG4Vm");//prendido
    } else {
      setImagen499("https://blogger.googleusercontent.com/img/a/AVvXsEjOYBmTavSZBMPRzKRBxCbVNagQ23XA7YSemCamVBQBEauyBiO0xQ5qDGUwha0UdeWTJKnkBhM3L2WeTYhYEBxFT9Kr9cVPbsv0wgzAJFVdB4_g2dVDHLZB46ZTRD6M-cnoKMABIq95DE43TzmBhI_9VQhte_XR8NUrlfD_ZpkAzSUXAYkyA2_1Z9L5");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen500, setImagen500] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEh0AD7vDqfpKyGm7WqBJTF_d1klMKEJ6HIkWQrtGaQ-PTUy_Aylz239c168_4dVk2D7PF466PK1CerbL_BIZezO3E8lBbJbHzroP-ZoKXJUhpBnJQBjjwQR8gy9m4vCVUQYdkNz2dZoAFC5UJcnAHz3_RSL56AqPA4EssU7hYVmmV5PilH4hIhKYixn");
  
  function prender500() {
    if (imagen500 === "https://blogger.googleusercontent.com/img/a/AVvXsEh0AD7vDqfpKyGm7WqBJTF_d1klMKEJ6HIkWQrtGaQ-PTUy_Aylz239c168_4dVk2D7PF466PK1CerbL_BIZezO3E8lBbJbHzroP-ZoKXJUhpBnJQBjjwQR8gy9m4vCVUQYdkNz2dZoAFC5UJcnAHz3_RSL56AqPA4EssU7hYVmmV5PilH4hIhKYixn") {
      setImagen500("https://blogger.googleusercontent.com/img/a/AVvXsEiIUJqs8300E5pFhgOu9JkIpXo9F4UIDXOF2JC59o_IU-3GjkZyvfoDlznKxyogeNW5ONoRBYqdPF3cClODttBPEll07hVzvNTO1fEzr6h6lHxC9CktiKt45KhYxhpPKQ4OmYRVLgdMz4LK7W3AUbVityG9foleVjYSG5tzbjzeMcVdbA6re4FhrKr4");//prendido
    } else {
      setImagen500("https://blogger.googleusercontent.com/img/a/AVvXsEh0AD7vDqfpKyGm7WqBJTF_d1klMKEJ6HIkWQrtGaQ-PTUy_Aylz239c168_4dVk2D7PF466PK1CerbL_BIZezO3E8lBbJbHzroP-ZoKXJUhpBnJQBjjwQR8gy9m4vCVUQYdkNz2dZoAFC5UJcnAHz3_RSL56AqPA4EssU7hYVmmV5PilH4hIhKYixn");
    }
  }//final juego
  //_________________________________________________________________________________________________________________
  const [imagen51, setImagen51] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjEv5U1e9BjXxcIBcrvSWyc1wW6HXrlCoCbfvWjPFsISZo35-GYi29g8lrQdlqIXvjHPcfzeWltKXQPzOwzAA7EkMyQTNGJbp0AI148ZS_QHTG_2nVRXpTLxPGMfMdAdpJvwhG5AxdxuM3WPGIZDZ5JY4VHFAlsdgk-XdxTZ-BUIwP1pFhH4gbYCdOe");
  
  function prender51() {
    if (imagen51 === "https://blogger.googleusercontent.com/img/a/AVvXsEjEv5U1e9BjXxcIBcrvSWyc1wW6HXrlCoCbfvWjPFsISZo35-GYi29g8lrQdlqIXvjHPcfzeWltKXQPzOwzAA7EkMyQTNGJbp0AI148ZS_QHTG_2nVRXpTLxPGMfMdAdpJvwhG5AxdxuM3WPGIZDZ5JY4VHFAlsdgk-XdxTZ-BUIwP1pFhH4gbYCdOe") {
      setImagen51("https://blogger.googleusercontent.com/img/a/AVvXsEgg7sifXipBg4HS9XbxZxwRufTY7XI4AfehhWzTMYr8OznZGzwCqBc7LpKVZz3NNyMACHeuFTWjU_J1jAxE87Vez83dTOGsWU5dfz6__gSe-ruxxicjS3csTn2NBOFblI11QuYHy9l_iMJLzUqAhQI1vXaLEAtkLduqKAT3seRXyJhKEjDiAxGo_Q7w");//prendido
    } else {
      setImagen51("https://blogger.googleusercontent.com/img/a/AVvXsEjEv5U1e9BjXxcIBcrvSWyc1wW6HXrlCoCbfvWjPFsISZo35-GYi29g8lrQdlqIXvjHPcfzeWltKXQPzOwzAA7EkMyQTNGJbp0AI148ZS_QHTG_2nVRXpTLxPGMfMdAdpJvwhG5AxdxuM3WPGIZDZ5JY4VHFAlsdgk-XdxTZ-BUIwP1pFhH4gbYCdOe");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen52, setImagen52] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEh58JbAHhd_k46_t802RiKe-B7uVcR2nYn8ny17IM7Nv4UKjcfuYLhgft6N-Ko6VbDLe4g7ivzvs7pHA6fNodbBOarP4Oa5rnSySw-fy5gbP3gqFw_lNTORvRfCOK-v-tlPdW9_wfSlHMP8inNZvTiXc88qSNw_PJPvs819w5t7CJmQQKF2wnK0F_J1");
  
  function prender52() {
    if (imagen52 === "https://blogger.googleusercontent.com/img/a/AVvXsEh58JbAHhd_k46_t802RiKe-B7uVcR2nYn8ny17IM7Nv4UKjcfuYLhgft6N-Ko6VbDLe4g7ivzvs7pHA6fNodbBOarP4Oa5rnSySw-fy5gbP3gqFw_lNTORvRfCOK-v-tlPdW9_wfSlHMP8inNZvTiXc88qSNw_PJPvs819w5t7CJmQQKF2wnK0F_J1") {
      setImagen52("https://blogger.googleusercontent.com/img/a/AVvXsEhC085oS-j3kVJE3laSlQC_jb21ZuISDEpI85yFQ4ecXI4G4OzTDq_irDShBjPx0RAJzeajXkp_DwD5Tnk5Dtrk07Rs6Es_9107nEn7iKtngtDKwT_xvksXHiwwCX-7xbtC1tkfdaZRpLSOrXcgrVPejut8f5P7jRZA6bm8LYRPCYs-igdiofIXSnql");//prendido
    } else {
      setImagen52("https://blogger.googleusercontent.com/img/a/AVvXsEh58JbAHhd_k46_t802RiKe-B7uVcR2nYn8ny17IM7Nv4UKjcfuYLhgft6N-Ko6VbDLe4g7ivzvs7pHA6fNodbBOarP4Oa5rnSySw-fy5gbP3gqFw_lNTORvRfCOK-v-tlPdW9_wfSlHMP8inNZvTiXc88qSNw_PJPvs819w5t7CJmQQKF2wnK0F_J1");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen53, setImagen53] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEg_NkK47t1d5V_tiJGw59wLVJbGhqYXjqzolExorHogQ2bg8GiTK16tlnVsSN4BVCv7yQTpaWKcdzxfxoszOGveULjtXQScI2ku9T7a3HzRQqegCWTAuiD_cXwr8VkvJmuIidhPfNzKScW_871Y7n-mdTfqLDt3iuXBFUnmAVusoStRyNN84wxashPW");
  
  function prender53() {
    if (imagen53 === "https://blogger.googleusercontent.com/img/a/AVvXsEg_NkK47t1d5V_tiJGw59wLVJbGhqYXjqzolExorHogQ2bg8GiTK16tlnVsSN4BVCv7yQTpaWKcdzxfxoszOGveULjtXQScI2ku9T7a3HzRQqegCWTAuiD_cXwr8VkvJmuIidhPfNzKScW_871Y7n-mdTfqLDt3iuXBFUnmAVusoStRyNN84wxashPW") {
      setImagen53("https://blogger.googleusercontent.com/img/a/AVvXsEjSd8T659ynksHdIKKEcXd9eij0EgdOfw6JQQ0KSRr-I0nFZ0bkVta1_0GgpGhLVYWk4nFlcba8a92nteUn_A5sngl2aLBvsSlz4S0aLCCAbBqNtGAz5sB2YEtGeUp8Ll2QeX5fFiq7r7T-MhfLykw8foore8noO7xg-MdfXZ-hiti4OaJfUmd_axZN");//prendido
    } else {
      setImagen53("https://blogger.googleusercontent.com/img/a/AVvXsEg_NkK47t1d5V_tiJGw59wLVJbGhqYXjqzolExorHogQ2bg8GiTK16tlnVsSN4BVCv7yQTpaWKcdzxfxoszOGveULjtXQScI2ku9T7a3HzRQqegCWTAuiD_cXwr8VkvJmuIidhPfNzKScW_871Y7n-mdTfqLDt3iuXBFUnmAVusoStRyNN84wxashPW");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen54, setImagen54] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgFffszNuA1yLf8ZYUYO-IDUjHUBzlYhjf7FaT-Ar4diRHMLV4LLqODdvU9PqahmaUmbDtk9KDV0rbtn7O7cgqDYW86Q2bPxtPZ0q_PRITlE4M4KlDN-7JJTv6my4se0cuwBabE_bBoOVXeOa0LJQP5OHpvI6MliGdsjnDsDFopqPv8kYEq55q2awtR");
  
  function prender54() {
    if (imagen54 === "https://blogger.googleusercontent.com/img/a/AVvXsEgFffszNuA1yLf8ZYUYO-IDUjHUBzlYhjf7FaT-Ar4diRHMLV4LLqODdvU9PqahmaUmbDtk9KDV0rbtn7O7cgqDYW86Q2bPxtPZ0q_PRITlE4M4KlDN-7JJTv6my4se0cuwBabE_bBoOVXeOa0LJQP5OHpvI6MliGdsjnDsDFopqPv8kYEq55q2awtR") {
      setImagen54("https://blogger.googleusercontent.com/img/a/AVvXsEhU45uQgo2Mu4-HmSAutyNTjnyAR2AJ9swlBCWBndxzcQqV9K6edQR2eew8LPx9EsHbHMQAJ4mm9k0yrF_RhrmqTsngJ3E2-YMq5aYTal8ryw3JYpa_ywJj_KPVvFAs0UpPAPE4CnL3VG0rxErTPhTmip-vG1ZhM4p8InnC4i5sOH5xCto0NADntJnr");//prendido
    } else {
      setImagen54("https://blogger.googleusercontent.com/img/a/AVvXsEgFffszNuA1yLf8ZYUYO-IDUjHUBzlYhjf7FaT-Ar4diRHMLV4LLqODdvU9PqahmaUmbDtk9KDV0rbtn7O7cgqDYW86Q2bPxtPZ0q_PRITlE4M4KlDN-7JJTv6my4se0cuwBabE_bBoOVXeOa0LJQP5OHpvI6MliGdsjnDsDFopqPv8kYEq55q2awtR");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen55, setImagen55] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEhLcfOZ9kpdCX-CauvaO18VOj9T1I4iLAgHngkNlJ--FNGmEAKB4hvrYgzO54fkn6ZBHUrVK95kT1mcCPh3wiI9rE4sLjXdEt-y9kf17UDGZQRfjOqUCdWhXP6Z-fcm8s9AVPUxOktlB_Fu-ZwlMMgpZQXjuxVWsmALnvXHTZn988HGYVzPwV-EUxF3");
  
  function prender55() {
    if (imagen55 === "https://blogger.googleusercontent.com/img/a/AVvXsEhLcfOZ9kpdCX-CauvaO18VOj9T1I4iLAgHngkNlJ--FNGmEAKB4hvrYgzO54fkn6ZBHUrVK95kT1mcCPh3wiI9rE4sLjXdEt-y9kf17UDGZQRfjOqUCdWhXP6Z-fcm8s9AVPUxOktlB_Fu-ZwlMMgpZQXjuxVWsmALnvXHTZn988HGYVzPwV-EUxF3") {
      setImagen55("https://blogger.googleusercontent.com/img/a/AVvXsEhO4v8TA4wCcj1ULsUj1WmcNkoSLmcM9Gxf6Mb_VWHn5oA3Jn_UfeL8I75-C7wAxuq71LzztDLjmAgcO7CSxj1DE5acUn4VrwlNlcBJNHoAKcOg2VqgrxErPilpiSiiv9X-agLPXcY_Zp2u3CVxkBCm82MFj5gTr2WGcOQb-_5aX1yDsHH4pfvM-9q6");//prendido
    } else {
      setImagen55("https://blogger.googleusercontent.com/img/a/AVvXsEhLcfOZ9kpdCX-CauvaO18VOj9T1I4iLAgHngkNlJ--FNGmEAKB4hvrYgzO54fkn6ZBHUrVK95kT1mcCPh3wiI9rE4sLjXdEt-y9kf17UDGZQRfjOqUCdWhXP6Z-fcm8s9AVPUxOktlB_Fu-ZwlMMgpZQXjuxVWsmALnvXHTZn988HGYVzPwV-EUxF3");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen56, setImagen56] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEj9UgMuHIIYj4H7-FXxBVKVHT1rb7cueRl7XS5BOQ3IF4tSdR17Ws_jv5FK1K6SV4F7q8ps6qqdNBvYZRwFUjpm-JZUT7tltjtmoeOf42wLfs2W5WY-FaybdQ6uDnPBerB9EW1uwnJOkj7synCLHm_3LHe5hyhkA-fpoJTjUvHypFyciuvBgw-yM9Bi");
  
  function prender56() {
    if (imagen56 === "https://blogger.googleusercontent.com/img/a/AVvXsEj9UgMuHIIYj4H7-FXxBVKVHT1rb7cueRl7XS5BOQ3IF4tSdR17Ws_jv5FK1K6SV4F7q8ps6qqdNBvYZRwFUjpm-JZUT7tltjtmoeOf42wLfs2W5WY-FaybdQ6uDnPBerB9EW1uwnJOkj7synCLHm_3LHe5hyhkA-fpoJTjUvHypFyciuvBgw-yM9Bi") {
      setImagen56("https://blogger.googleusercontent.com/img/a/AVvXsEhQyCMVA15SYHwLbN-3Exw63x9Ib0_YvOHH7ttl3MKEKtc49LpOm9jzkAosaYCOWlYdgB3yPBpiMz-5Bn5-t1qlDLVDDPC9luM_UT0USf4D99zG2SX7wjKlCEPHrd2gs9XEBgEcz5ZtmOIQ_PjXROVFT51C6N8wFDJlwu10YZE2pBSX5ym038tn6fF_");//prendido
    } else {
      setImagen56("https://blogger.googleusercontent.com/img/a/AVvXsEj9UgMuHIIYj4H7-FXxBVKVHT1rb7cueRl7XS5BOQ3IF4tSdR17Ws_jv5FK1K6SV4F7q8ps6qqdNBvYZRwFUjpm-JZUT7tltjtmoeOf42wLfs2W5WY-FaybdQ6uDnPBerB9EW1uwnJOkj7synCLHm_3LHe5hyhkA-fpoJTjUvHypFyciuvBgw-yM9Bi");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen57, setImagen57] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEg-GTKNAhlSGcTZHf5zgbOuy4HoEzkpk2iYDBLu-ImJE5hh7aOW6rioeFPEZhLX_YPWs58ZuYzwfHL6XrxsCm9FPbU3aSV1NwNos069sb87afBrhpHz51sjTRVFFJt7SqgsWwx6zdY7m5F3o_E-3LzYHW1zkGQarUIjVSHsL5AfZ19XE-L2YzRVYOTC");
  
  function prender57() {
    if (imagen57 === "https://blogger.googleusercontent.com/img/a/AVvXsEg-GTKNAhlSGcTZHf5zgbOuy4HoEzkpk2iYDBLu-ImJE5hh7aOW6rioeFPEZhLX_YPWs58ZuYzwfHL6XrxsCm9FPbU3aSV1NwNos069sb87afBrhpHz51sjTRVFFJt7SqgsWwx6zdY7m5F3o_E-3LzYHW1zkGQarUIjVSHsL5AfZ19XE-L2YzRVYOTC") {
      setImagen57("https://blogger.googleusercontent.com/img/a/AVvXsEiz5YclGgWefvPTlwv47A0gMA5ZzIHOYcqa6g6tvBDDyn2YtyzTJpOlKOm40xWcgauXjzRR78Q6HbG-99hZ5y63LkBPQiIZB72_sABDaLOEsc1bjpNVxhUjTtoxKwhOz5gsX1kIDFh_AmiWk9MCw1ndvCT4e5GzpD5d20VGa2kM3EOFEf0zKjsCWquL");//prendido
    } else {
      setImagen57("https://blogger.googleusercontent.com/img/a/AVvXsEg-GTKNAhlSGcTZHf5zgbOuy4HoEzkpk2iYDBLu-ImJE5hh7aOW6rioeFPEZhLX_YPWs58ZuYzwfHL6XrxsCm9FPbU3aSV1NwNos069sb87afBrhpHz51sjTRVFFJt7SqgsWwx6zdY7m5F3o_E-3LzYHW1zkGQarUIjVSHsL5AfZ19XE-L2YzRVYOTC");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen58, setImagen58] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjgRmQ52kO2B1kqCiUqQIru_FVvrxO-ErHhPQapRtdKzsSLGirGPetmcZfhYZ79i8hVGWjrvRkGlpyFItlcS2YjYY4SnMoS8HX_5TJVEDrCjpiwFaACGIxtPieS6yiovVzgSARWs2pPq7HoPehFvRR4Qhx2VH8Hnj9i_Rm7A9QSQr2BfdtIz_Pyy0wX");
  
  function prender58() {
    if (imagen58 === "https://blogger.googleusercontent.com/img/a/AVvXsEjgRmQ52kO2B1kqCiUqQIru_FVvrxO-ErHhPQapRtdKzsSLGirGPetmcZfhYZ79i8hVGWjrvRkGlpyFItlcS2YjYY4SnMoS8HX_5TJVEDrCjpiwFaACGIxtPieS6yiovVzgSARWs2pPq7HoPehFvRR4Qhx2VH8Hnj9i_Rm7A9QSQr2BfdtIz_Pyy0wX") {
      setImagen58("https://blogger.googleusercontent.com/img/a/AVvXsEjLOyPZEG0tiRd7elb_GIduGspLIWfBi1JB0T6HS4JX9DZQG9OGzooZBRyRiFZ77uxFTxvGJUCLIG5OB499hYFgFpKBsGB3PU9_yeMIdzN_wfnBOWovhe5UZWCWJWO5XbrVAFT3v-tprBLm9cAYXqFKjYXwo_wTheAi94Tfe6eUQ7fvN3dKdecF6W75");//prendido
    } else {
      setImagen58("https://blogger.googleusercontent.com/img/a/AVvXsEjgRmQ52kO2B1kqCiUqQIru_FVvrxO-ErHhPQapRtdKzsSLGirGPetmcZfhYZ79i8hVGWjrvRkGlpyFItlcS2YjYY4SnMoS8HX_5TJVEDrCjpiwFaACGIxtPieS6yiovVzgSARWs2pPq7HoPehFvRR4Qhx2VH8Hnj9i_Rm7A9QSQr2BfdtIz_Pyy0wX");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen59, setImagen59] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjrkiMFZBwIo92x7oFgIgbPUDbrhBdbiTBYjqJ-mc3LArGH2DoK9dd2ixaerFhsYzV2jmK7IE0WWIXkYzHhndXn5pBFW4_bZ28DGuHAv1XlRw7idDHdQy61DWEJvzrG6mrs5bL_4dimAFq5yN3Av1cKroX36AoVPlgOWUlntfghTtpxn5Y7rEppqjSQ");
  
  function prender59() {
    if (imagen59 === "https://blogger.googleusercontent.com/img/a/AVvXsEjrkiMFZBwIo92x7oFgIgbPUDbrhBdbiTBYjqJ-mc3LArGH2DoK9dd2ixaerFhsYzV2jmK7IE0WWIXkYzHhndXn5pBFW4_bZ28DGuHAv1XlRw7idDHdQy61DWEJvzrG6mrs5bL_4dimAFq5yN3Av1cKroX36AoVPlgOWUlntfghTtpxn5Y7rEppqjSQ") {
      setImagen59("https://blogger.googleusercontent.com/img/a/AVvXsEh2zAcr0gq6fqQgOZ6cNhdczeFNb3Pt4yL40TMyH0IjLta1iBwiiaKgiXw9PhMDKPe4FJgRBWpGu74kyWAe136ljXuy_goEMUVgqEdKKmkoHAr3woENO3KApa-RKAcCkd6DsE9e0-MrKJrgSrogcPgMSslDH92B4auTmXHRbXlQgRDpyGHFqMja4HpB");//prendido
    } else {
      setImagen59("https://blogger.googleusercontent.com/img/a/AVvXsEjrkiMFZBwIo92x7oFgIgbPUDbrhBdbiTBYjqJ-mc3LArGH2DoK9dd2ixaerFhsYzV2jmK7IE0WWIXkYzHhndXn5pBFW4_bZ28DGuHAv1XlRw7idDHdQy61DWEJvzrG6mrs5bL_4dimAFq5yN3Av1cKroX36AoVPlgOWUlntfghTtpxn5Y7rEppqjSQ");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen60, setImagen60] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgF1lXAQRBFD21G23M67PJZ1rhQ04v4MOS6FUISXxhV06jAFSQNKyHW8sSYnC6_-Sf3YZtomHsIvFku0YQFFiiFY7LjXaqSI8M_idTJIwiw7QQVxubcxnN_hBpZ90b9zRFJuGrAnFdPjutDvmHHFANgs8zFngjDfMtH7A0PbAX4b2wovNZSAzH4OKNB");
  
  function prender60() {
    if (imagen60 === "https://blogger.googleusercontent.com/img/a/AVvXsEgF1lXAQRBFD21G23M67PJZ1rhQ04v4MOS6FUISXxhV06jAFSQNKyHW8sSYnC6_-Sf3YZtomHsIvFku0YQFFiiFY7LjXaqSI8M_idTJIwiw7QQVxubcxnN_hBpZ90b9zRFJuGrAnFdPjutDvmHHFANgs8zFngjDfMtH7A0PbAX4b2wovNZSAzH4OKNB") {
      setImagen60("https://blogger.googleusercontent.com/img/a/AVvXsEjSe_n3fjvzLvvYJznOsvo1hJ5FHW-zedr_nIF7r255RaaKPYBkxFl2LYwIUhorYSce6PswMoU9T7JWqIE0omJJ33WAFTgCbG_ZJiksaYuiNrB3u7CCIgSZZPAMBXwHYfIhmfeNR0LlXxnfuS4uXqfwijxEK2NNHREZr0NhMi1oTkW4-a6qLYzZL6YI");//prendido
    } else {
      setImagen60("https://blogger.googleusercontent.com/img/a/AVvXsEgF1lXAQRBFD21G23M67PJZ1rhQ04v4MOS6FUISXxhV06jAFSQNKyHW8sSYnC6_-Sf3YZtomHsIvFku0YQFFiiFY7LjXaqSI8M_idTJIwiw7QQVxubcxnN_hBpZ90b9zRFJuGrAnFdPjutDvmHHFANgs8zFngjDfMtH7A0PbAX4b2wovNZSAzH4OKNB");
    }
  }
  //___________inicia juego______________________________________________________________________________________________________
  const [imagen611, setImagen611] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEj4-uQuZmJ-5J0YBQcdJ2G-kXs3KAfk9Puh6wLfvrN8SJBsAJG_OJMRCObzCGxzliaPkoH_tSjcONLzJXNS-c-Wrpg6GIw0F2DTrtmB_aVFoNSOBt_rcjbS3MfdxixtxkeG4Q0nSLqFdXo95VggLIdSMt6hUbybGwtxzn7L2zMYFT-rLQKtuXJ5fr7P");
  
  function prender611() {
    if (imagen611 === "https://blogger.googleusercontent.com/img/a/AVvXsEj4-uQuZmJ-5J0YBQcdJ2G-kXs3KAfk9Puh6wLfvrN8SJBsAJG_OJMRCObzCGxzliaPkoH_tSjcONLzJXNS-c-Wrpg6GIw0F2DTrtmB_aVFoNSOBt_rcjbS3MfdxixtxkeG4Q0nSLqFdXo95VggLIdSMt6hUbybGwtxzn7L2zMYFT-rLQKtuXJ5fr7P") {
      setImagen611("https://blogger.googleusercontent.com/img/a/AVvXsEjzQJrQXoH7l9KpexvFnEZ2btM3Xh_eEU8Fk8ylIWyjBVq8ia_N20DN1XJajzgbFeLYO_18Cb-NScqqrDpybMhlfqWCuyEg_eQKx5cgvDuFN63plzBP12G0qvbfwdKX4hcklKZjX0UlzHVkCRx71EUKNeSgyQkyLh_gBpbSLNwGba3sCnNSxgHlAbP1");//prendido
    } else {
      setImagen611("https://blogger.googleusercontent.com/img/a/AVvXsEj4-uQuZmJ-5J0YBQcdJ2G-kXs3KAfk9Puh6wLfvrN8SJBsAJG_OJMRCObzCGxzliaPkoH_tSjcONLzJXNS-c-Wrpg6GIw0F2DTrtmB_aVFoNSOBt_rcjbS3MfdxixtxkeG4Q0nSLqFdXo95VggLIdSMt6hUbybGwtxzn7L2zMYFT-rLQKtuXJ5fr7P");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen622, setImagen622] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEi3qODZ__1USfUK9bj6KrniD4DsU0eXbs0NqKrOmvFYIp4gcKk8cMblu1TBaphQ3ljjDDxS329qP1uTGrqcmFhga20xeKm-OWacrBZbyx6Hu1cLoEwvsS2xbpp4OWLt6CEgyB8IMhzmlVm5Ux_T2-JBpxsDqfpThkHZBq6b7eR9mvRllY-NfCEmPT8N");
  
  function prender622() {
    if (imagen622 === "https://blogger.googleusercontent.com/img/a/AVvXsEi3qODZ__1USfUK9bj6KrniD4DsU0eXbs0NqKrOmvFYIp4gcKk8cMblu1TBaphQ3ljjDDxS329qP1uTGrqcmFhga20xeKm-OWacrBZbyx6Hu1cLoEwvsS2xbpp4OWLt6CEgyB8IMhzmlVm5Ux_T2-JBpxsDqfpThkHZBq6b7eR9mvRllY-NfCEmPT8N") {
      setImagen622("https://blogger.googleusercontent.com/img/a/AVvXsEisjchGtfv_87wqLZE0O5KKv1mXVzJ-RhWtagSU2qtS1aa316EMPKjYhKz_ocQ5O5JRnLIBBoeNE0H0143BLjoz1qGp99PLDhuHxG0JXTlieuSUwsTStcd7uCzqT4C4FaeQ3rZd-FNtShjwc3wnzc32PaAkDwCDRAhxUEscQKzgfeVv70z99Hegjphs");//prendido
    } else {
      setImagen622("https://blogger.googleusercontent.com/img/a/AVvXsEi3qODZ__1USfUK9bj6KrniD4DsU0eXbs0NqKrOmvFYIp4gcKk8cMblu1TBaphQ3ljjDDxS329qP1uTGrqcmFhga20xeKm-OWacrBZbyx6Hu1cLoEwvsS2xbpp4OWLt6CEgyB8IMhzmlVm5Ux_T2-JBpxsDqfpThkHZBq6b7eR9mvRllY-NfCEmPT8N");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen633, setImagen633] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEj4eOgspuih-lIW7mINGWBj6EwJjf473DLaTBWdWOxWDUvrqv9U5YiUhgbCI2qo-L9pVui92iGgd0pjtelcmDU2e4Zue-qcZWPu618OvLOIwmpdnmT4AJb4J12mbaO3RNSgfCvD54LObbC6Y83Mhy3JEJjCU3CklNS6Dhx4-q3XHh40xVy4rdZK3q1L");
  
  function prender633() {
    if (imagen633 === "https://blogger.googleusercontent.com/img/a/AVvXsEj4eOgspuih-lIW7mINGWBj6EwJjf473DLaTBWdWOxWDUvrqv9U5YiUhgbCI2qo-L9pVui92iGgd0pjtelcmDU2e4Zue-qcZWPu618OvLOIwmpdnmT4AJb4J12mbaO3RNSgfCvD54LObbC6Y83Mhy3JEJjCU3CklNS6Dhx4-q3XHh40xVy4rdZK3q1L") {
      setImagen633("https://blogger.googleusercontent.com/img/a/AVvXsEhs_QmGWfhuWhKysohNVM1I_lp8x61UN4Ax6g5dXlLYqDQLzXwZh07uvwY1djrosaj3KqPS9QmIE4duJiim1zdLjSCSbRWqySarlv_MjfFVb21WCO0_Dp6djw6x-o3IjlHiengZ-J7cUEdXd-RbH6s6T3Qc1TZ2QPICQREJo_grQ6tVs8Gggmv8IJYi");//prendido
    } else {
      setImagen633("https://blogger.googleusercontent.com/img/a/AVvXsEj4eOgspuih-lIW7mINGWBj6EwJjf473DLaTBWdWOxWDUvrqv9U5YiUhgbCI2qo-L9pVui92iGgd0pjtelcmDU2e4Zue-qcZWPu618OvLOIwmpdnmT4AJb4J12mbaO3RNSgfCvD54LObbC6Y83Mhy3JEJjCU3CklNS6Dhx4-q3XHh40xVy4rdZK3q1L");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen644, setImagen644] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiDq-Ss2D1iedK-yamk_2CLQhtwMoPzPt_RNN04Gn9rosJdrqpDRoYX8q4NuyoZN1HZAQeZeROEaidON9IbxraOo8vlsV-qZfOgylT8nL0_FbmK99R6qFti8ZQei3UsoCpwU-wQxexGAnW8vcrCgV-HnmzOcTHydrdBaIoME4Q7as-kB3xcHzKIb3z3");
  
  function prender644() {
    if (imagen644 === "https://blogger.googleusercontent.com/img/a/AVvXsEiDq-Ss2D1iedK-yamk_2CLQhtwMoPzPt_RNN04Gn9rosJdrqpDRoYX8q4NuyoZN1HZAQeZeROEaidON9IbxraOo8vlsV-qZfOgylT8nL0_FbmK99R6qFti8ZQei3UsoCpwU-wQxexGAnW8vcrCgV-HnmzOcTHydrdBaIoME4Q7as-kB3xcHzKIb3z3") {
      setImagen644("https://blogger.googleusercontent.com/img/a/AVvXsEiKor8aabVrohh-UvqumtCxKFUJ-eC2W3FhJZzgpstOvxwO9o6IxXC0GH-4vkzSp25ZHMjaosrnFTZmusPliwWWD6FqQ6k4Jh8HtrFHPWo7vZMwZILZtbNTXyIUE8YNB183hE2NL-DsOI1vcciHD_yDOZSdKIVmIifscqLy59a8hOB5kHtSKvr3K99x");//prendido
    } else {
      setImagen644("https://blogger.googleusercontent.com/img/a/AVvXsEiDq-Ss2D1iedK-yamk_2CLQhtwMoPzPt_RNN04Gn9rosJdrqpDRoYX8q4NuyoZN1HZAQeZeROEaidON9IbxraOo8vlsV-qZfOgylT8nL0_FbmK99R6qFti8ZQei3UsoCpwU-wQxexGAnW8vcrCgV-HnmzOcTHydrdBaIoME4Q7as-kB3xcHzKIb3z3");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen655, setImagen655] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjOJdawD6THi1RpTm8zIKsT2dFBysayZ4OHJm4dkYbw0s7NXpCK_yHKZ4KKwEVStH1nXDDxK4QVdpOfXlV07mvwJOe-dwHx52xGbQNPwTZueIbZANMCNn89yUq8uY6ow6kH7CHUm4nhH8SSKEpgQ4Qka6V-2Vzrn24bf2Mx3XeCGChC2N3U69HKJqIp");
  
  function prender655() {
    if (imagen655 === "https://blogger.googleusercontent.com/img/a/AVvXsEjOJdawD6THi1RpTm8zIKsT2dFBysayZ4OHJm4dkYbw0s7NXpCK_yHKZ4KKwEVStH1nXDDxK4QVdpOfXlV07mvwJOe-dwHx52xGbQNPwTZueIbZANMCNn89yUq8uY6ow6kH7CHUm4nhH8SSKEpgQ4Qka6V-2Vzrn24bf2Mx3XeCGChC2N3U69HKJqIp") {
      setImagen655("https://blogger.googleusercontent.com/img/a/AVvXsEgYviABNQ6sAUQ-4G-bM20V003CcRKrAsGT-TskHug1ZuLSF8gLN7ff240bbM5NcUTZh94WKI187aIWNelZWYNQtDDxSKP7cixVUZR6SBd0U64okFZ7mZ5uqRB-9DJeNIQR0-mooF1vSuNxc_Zopz3rrjNMvZFsOCSL9GdaJfSFwkOMIpXo8Vr9j5Aj");//prendido
    } else {
      setImagen655("https://blogger.googleusercontent.com/img/a/AVvXsEjOJdawD6THi1RpTm8zIKsT2dFBysayZ4OHJm4dkYbw0s7NXpCK_yHKZ4KKwEVStH1nXDDxK4QVdpOfXlV07mvwJOe-dwHx52xGbQNPwTZueIbZANMCNn89yUq8uY6ow6kH7CHUm4nhH8SSKEpgQ4Qka6V-2Vzrn24bf2Mx3XeCGChC2N3U69HKJqIp");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen61, setImagen61] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEj4-uQuZmJ-5J0YBQcdJ2G-kXs3KAfk9Puh6wLfvrN8SJBsAJG_OJMRCObzCGxzliaPkoH_tSjcONLzJXNS-c-Wrpg6GIw0F2DTrtmB_aVFoNSOBt_rcjbS3MfdxixtxkeG4Q0nSLqFdXo95VggLIdSMt6hUbybGwtxzn7L2zMYFT-rLQKtuXJ5fr7P");
  
  function prender61() {
    if (imagen61 === "https://blogger.googleusercontent.com/img/a/AVvXsEj4-uQuZmJ-5J0YBQcdJ2G-kXs3KAfk9Puh6wLfvrN8SJBsAJG_OJMRCObzCGxzliaPkoH_tSjcONLzJXNS-c-Wrpg6GIw0F2DTrtmB_aVFoNSOBt_rcjbS3MfdxixtxkeG4Q0nSLqFdXo95VggLIdSMt6hUbybGwtxzn7L2zMYFT-rLQKtuXJ5fr7P") {
      setImagen61("https://blogger.googleusercontent.com/img/a/AVvXsEjzQJrQXoH7l9KpexvFnEZ2btM3Xh_eEU8Fk8ylIWyjBVq8ia_N20DN1XJajzgbFeLYO_18Cb-NScqqrDpybMhlfqWCuyEg_eQKx5cgvDuFN63plzBP12G0qvbfwdKX4hcklKZjX0UlzHVkCRx71EUKNeSgyQkyLh_gBpbSLNwGba3sCnNSxgHlAbP1");//prendido
    } else {
      setImagen61("https://blogger.googleusercontent.com/img/a/AVvXsEj4-uQuZmJ-5J0YBQcdJ2G-kXs3KAfk9Puh6wLfvrN8SJBsAJG_OJMRCObzCGxzliaPkoH_tSjcONLzJXNS-c-Wrpg6GIw0F2DTrtmB_aVFoNSOBt_rcjbS3MfdxixtxkeG4Q0nSLqFdXo95VggLIdSMt6hUbybGwtxzn7L2zMYFT-rLQKtuXJ5fr7P");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen62, setImagen62] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEi3qODZ__1USfUK9bj6KrniD4DsU0eXbs0NqKrOmvFYIp4gcKk8cMblu1TBaphQ3ljjDDxS329qP1uTGrqcmFhga20xeKm-OWacrBZbyx6Hu1cLoEwvsS2xbpp4OWLt6CEgyB8IMhzmlVm5Ux_T2-JBpxsDqfpThkHZBq6b7eR9mvRllY-NfCEmPT8N");
  
  function prender62() {
    if (imagen62 === "https://blogger.googleusercontent.com/img/a/AVvXsEi3qODZ__1USfUK9bj6KrniD4DsU0eXbs0NqKrOmvFYIp4gcKk8cMblu1TBaphQ3ljjDDxS329qP1uTGrqcmFhga20xeKm-OWacrBZbyx6Hu1cLoEwvsS2xbpp4OWLt6CEgyB8IMhzmlVm5Ux_T2-JBpxsDqfpThkHZBq6b7eR9mvRllY-NfCEmPT8N") {
      setImagen62("https://blogger.googleusercontent.com/img/a/AVvXsEisjchGtfv_87wqLZE0O5KKv1mXVzJ-RhWtagSU2qtS1aa316EMPKjYhKz_ocQ5O5JRnLIBBoeNE0H0143BLjoz1qGp99PLDhuHxG0JXTlieuSUwsTStcd7uCzqT4C4FaeQ3rZd-FNtShjwc3wnzc32PaAkDwCDRAhxUEscQKzgfeVv70z99Hegjphs");//prendido
    } else {
      setImagen62("https://blogger.googleusercontent.com/img/a/AVvXsEi3qODZ__1USfUK9bj6KrniD4DsU0eXbs0NqKrOmvFYIp4gcKk8cMblu1TBaphQ3ljjDDxS329qP1uTGrqcmFhga20xeKm-OWacrBZbyx6Hu1cLoEwvsS2xbpp4OWLt6CEgyB8IMhzmlVm5Ux_T2-JBpxsDqfpThkHZBq6b7eR9mvRllY-NfCEmPT8N");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen63, setImagen63] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEj4eOgspuih-lIW7mINGWBj6EwJjf473DLaTBWdWOxWDUvrqv9U5YiUhgbCI2qo-L9pVui92iGgd0pjtelcmDU2e4Zue-qcZWPu618OvLOIwmpdnmT4AJb4J12mbaO3RNSgfCvD54LObbC6Y83Mhy3JEJjCU3CklNS6Dhx4-q3XHh40xVy4rdZK3q1L");
  
  function prender63() {
    if (imagen63 === "https://blogger.googleusercontent.com/img/a/AVvXsEj4eOgspuih-lIW7mINGWBj6EwJjf473DLaTBWdWOxWDUvrqv9U5YiUhgbCI2qo-L9pVui92iGgd0pjtelcmDU2e4Zue-qcZWPu618OvLOIwmpdnmT4AJb4J12mbaO3RNSgfCvD54LObbC6Y83Mhy3JEJjCU3CklNS6Dhx4-q3XHh40xVy4rdZK3q1L") {
      setImagen63("https://blogger.googleusercontent.com/img/a/AVvXsEhs_QmGWfhuWhKysohNVM1I_lp8x61UN4Ax6g5dXlLYqDQLzXwZh07uvwY1djrosaj3KqPS9QmIE4duJiim1zdLjSCSbRWqySarlv_MjfFVb21WCO0_Dp6djw6x-o3IjlHiengZ-J7cUEdXd-RbH6s6T3Qc1TZ2QPICQREJo_grQ6tVs8Gggmv8IJYi");//prendido
    } else {
      setImagen63("https://blogger.googleusercontent.com/img/a/AVvXsEj4eOgspuih-lIW7mINGWBj6EwJjf473DLaTBWdWOxWDUvrqv9U5YiUhgbCI2qo-L9pVui92iGgd0pjtelcmDU2e4Zue-qcZWPu618OvLOIwmpdnmT4AJb4J12mbaO3RNSgfCvD54LObbC6Y83Mhy3JEJjCU3CklNS6Dhx4-q3XHh40xVy4rdZK3q1L");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen64, setImagen64] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiDq-Ss2D1iedK-yamk_2CLQhtwMoPzPt_RNN04Gn9rosJdrqpDRoYX8q4NuyoZN1HZAQeZeROEaidON9IbxraOo8vlsV-qZfOgylT8nL0_FbmK99R6qFti8ZQei3UsoCpwU-wQxexGAnW8vcrCgV-HnmzOcTHydrdBaIoME4Q7as-kB3xcHzKIb3z3");
  
  function prender64() {
    if (imagen64 === "https://blogger.googleusercontent.com/img/a/AVvXsEiDq-Ss2D1iedK-yamk_2CLQhtwMoPzPt_RNN04Gn9rosJdrqpDRoYX8q4NuyoZN1HZAQeZeROEaidON9IbxraOo8vlsV-qZfOgylT8nL0_FbmK99R6qFti8ZQei3UsoCpwU-wQxexGAnW8vcrCgV-HnmzOcTHydrdBaIoME4Q7as-kB3xcHzKIb3z3") {
      setImagen64("https://blogger.googleusercontent.com/img/a/AVvXsEiKor8aabVrohh-UvqumtCxKFUJ-eC2W3FhJZzgpstOvxwO9o6IxXC0GH-4vkzSp25ZHMjaosrnFTZmusPliwWWD6FqQ6k4Jh8HtrFHPWo7vZMwZILZtbNTXyIUE8YNB183hE2NL-DsOI1vcciHD_yDOZSdKIVmIifscqLy59a8hOB5kHtSKvr3K99x");//prendido
    } else {
      setImagen64("https://blogger.googleusercontent.com/img/a/AVvXsEiDq-Ss2D1iedK-yamk_2CLQhtwMoPzPt_RNN04Gn9rosJdrqpDRoYX8q4NuyoZN1HZAQeZeROEaidON9IbxraOo8vlsV-qZfOgylT8nL0_FbmK99R6qFti8ZQei3UsoCpwU-wQxexGAnW8vcrCgV-HnmzOcTHydrdBaIoME4Q7as-kB3xcHzKIb3z3");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen65, setImagen65] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjOJdawD6THi1RpTm8zIKsT2dFBysayZ4OHJm4dkYbw0s7NXpCK_yHKZ4KKwEVStH1nXDDxK4QVdpOfXlV07mvwJOe-dwHx52xGbQNPwTZueIbZANMCNn89yUq8uY6ow6kH7CHUm4nhH8SSKEpgQ4Qka6V-2Vzrn24bf2Mx3XeCGChC2N3U69HKJqIp");
  
  function prender65() {
    if (imagen65 === "https://blogger.googleusercontent.com/img/a/AVvXsEjOJdawD6THi1RpTm8zIKsT2dFBysayZ4OHJm4dkYbw0s7NXpCK_yHKZ4KKwEVStH1nXDDxK4QVdpOfXlV07mvwJOe-dwHx52xGbQNPwTZueIbZANMCNn89yUq8uY6ow6kH7CHUm4nhH8SSKEpgQ4Qka6V-2Vzrn24bf2Mx3XeCGChC2N3U69HKJqIp") {
      setImagen65("https://blogger.googleusercontent.com/img/a/AVvXsEgYviABNQ6sAUQ-4G-bM20V003CcRKrAsGT-TskHug1ZuLSF8gLN7ff240bbM5NcUTZh94WKI187aIWNelZWYNQtDDxSKP7cixVUZR6SBd0U64okFZ7mZ5uqRB-9DJeNIQR0-mooF1vSuNxc_Zopz3rrjNMvZFsOCSL9GdaJfSFwkOMIpXo8Vr9j5Aj");//prendido
    } else {
      setImagen65("https://blogger.googleusercontent.com/img/a/AVvXsEjOJdawD6THi1RpTm8zIKsT2dFBysayZ4OHJm4dkYbw0s7NXpCK_yHKZ4KKwEVStH1nXDDxK4QVdpOfXlV07mvwJOe-dwHx52xGbQNPwTZueIbZANMCNn89yUq8uY6ow6kH7CHUm4nhH8SSKEpgQ4Qka6V-2Vzrn24bf2Mx3XeCGChC2N3U69HKJqIp");
    }
  }//fin juegooooooooo
  //_________________________________________________________________________________________________________________
  const [imagen66, setImagen66] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjScA-_UwgbTU0ylDA5K-ilbgZPYBg5rRUS9zfRZbuyXsMki1-6WuNCSHMV1lmJQafxaNp355icHWc5LdsiZlpWac0YFm6hht88Z43ZZYXbcjkdHpVUd_5ZxY8HSWr6ldrI6IJRV5ykAKDky-ttKoNRFtzVvQ6AVsYbT6rXim-YB7ti9Jvvyn35Ls7h");
  
  function prender66() {
    if (imagen66 === "https://blogger.googleusercontent.com/img/a/AVvXsEjScA-_UwgbTU0ylDA5K-ilbgZPYBg5rRUS9zfRZbuyXsMki1-6WuNCSHMV1lmJQafxaNp355icHWc5LdsiZlpWac0YFm6hht88Z43ZZYXbcjkdHpVUd_5ZxY8HSWr6ldrI6IJRV5ykAKDky-ttKoNRFtzVvQ6AVsYbT6rXim-YB7ti9Jvvyn35Ls7h") {
      setImagen66("https://blogger.googleusercontent.com/img/a/AVvXsEj0zCTr3D4e7k5cvf1_BTv4WoMLKCD28bUy9vINH5C4RThnwasxQHzRprFfkIiv5qNfO8CPpbRHpnliVSsEf0I8gp3yb3tJfm2Y6MhrWaaOs15V9qRoeXftf6DbdtRmTsNRtev3Bk8LQyug43WDiMugSACvuuA6GN3LJwut06WHzYbSrksO6WjgOOm-");//prendido
    } else {
      setImagen66("https://blogger.googleusercontent.com/img/a/AVvXsEjScA-_UwgbTU0ylDA5K-ilbgZPYBg5rRUS9zfRZbuyXsMki1-6WuNCSHMV1lmJQafxaNp355icHWc5LdsiZlpWac0YFm6hht88Z43ZZYXbcjkdHpVUd_5ZxY8HSWr6ldrI6IJRV5ykAKDky-ttKoNRFtzVvQ6AVsYbT6rXim-YB7ti9Jvvyn35Ls7h");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen67, setImagen67] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjvtbAyUQuTS45HEtLRytDS0NRwGyXpjiOjWjsr-Z96oN67ucR5ojtSkNlB9KLO5TD_9XvjsVj3d5QU-RB6izi2eF3sz_uZ3J8hjGCRAzhUdKWejPNMc7YvOtLmxwXTmuZu__ERkC0oADDxJGbmHW7xYsSrJleyyOpouDF1uRjxHsQtZgcAWMpwQt6-");
  
  function prender67() {
    if (imagen67 === "https://blogger.googleusercontent.com/img/a/AVvXsEjvtbAyUQuTS45HEtLRytDS0NRwGyXpjiOjWjsr-Z96oN67ucR5ojtSkNlB9KLO5TD_9XvjsVj3d5QU-RB6izi2eF3sz_uZ3J8hjGCRAzhUdKWejPNMc7YvOtLmxwXTmuZu__ERkC0oADDxJGbmHW7xYsSrJleyyOpouDF1uRjxHsQtZgcAWMpwQt6-") {
      setImagen67("https://blogger.googleusercontent.com/img/a/AVvXsEitFSiPabXpYK4ckQ4tl6brC1tNfWsJAY-HuUzAgVfcBZDLwC31FEo1LzLTQqnngtyvpYL5BAFh1JSEHqCFiAK1NlwO6_f7GtHO9O5H0BOa3wA7CdsFjpeNFbFf2Q_fhft4M1hIFVDsmlvAwfhYwjN3LEPB3cYmLTWM0OLI9sZM-YAjOumiS8BHc3Pp");//prendido
    } else {
      setImagen67("https://blogger.googleusercontent.com/img/a/AVvXsEjvtbAyUQuTS45HEtLRytDS0NRwGyXpjiOjWjsr-Z96oN67ucR5ojtSkNlB9KLO5TD_9XvjsVj3d5QU-RB6izi2eF3sz_uZ3J8hjGCRAzhUdKWejPNMc7YvOtLmxwXTmuZu__ERkC0oADDxJGbmHW7xYsSrJleyyOpouDF1uRjxHsQtZgcAWMpwQt6-");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen68, setImagen68] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEh87ARGPZgPem92WwR3QaCLMMRAzaAlfJsKjqvfeTP6Qu51z_B-xDs48wzQVUGQ7lf2y16MJeg8Gff-xhxNOFBm-mLesVmvu6PsEas8sF6veUKnDpauc8HTwj1Kzc11Crny-eYaD88SJfQtPzDx2RmE5DhguREVMf4gbTZrUJIBZPC2VftUbbazOsDG");
  
  function prender68() {
    if (imagen68 === "https://blogger.googleusercontent.com/img/a/AVvXsEh87ARGPZgPem92WwR3QaCLMMRAzaAlfJsKjqvfeTP6Qu51z_B-xDs48wzQVUGQ7lf2y16MJeg8Gff-xhxNOFBm-mLesVmvu6PsEas8sF6veUKnDpauc8HTwj1Kzc11Crny-eYaD88SJfQtPzDx2RmE5DhguREVMf4gbTZrUJIBZPC2VftUbbazOsDG") {
      setImagen68("https://blogger.googleusercontent.com/img/a/AVvXsEhVgMX9ZTIq1L7YkSxE-JwCzUKTbuPEqsgREw9C46hUjs6ssm1ihZfwLp5Dz3yzXyMpKxbgCG7xwB4L7sTG1SFOwLgRO3yDTG3lIwCZuVP7Fq_N7eKMr7MiySS_TyLkqAkIBJXTzZOTMBoiGQpLQq0Q70B9wQaIhcS5R1ApSshMoTPUGeOWjrpueuml");//prendido
    } else {
      setImagen68("https://blogger.googleusercontent.com/img/a/AVvXsEh87ARGPZgPem92WwR3QaCLMMRAzaAlfJsKjqvfeTP6Qu51z_B-xDs48wzQVUGQ7lf2y16MJeg8Gff-xhxNOFBm-mLesVmvu6PsEas8sF6veUKnDpauc8HTwj1Kzc11Crny-eYaD88SJfQtPzDx2RmE5DhguREVMf4gbTZrUJIBZPC2VftUbbazOsDG");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen69, setImagen69] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEj3kduavz1Jw0KzmJTMqnNbmzhJoirtodO82asy0sSj__KEYl-5L1EEZaJ6sfGoIBQBYJWZOz_Qko2Lyb8r1isBpc42-undW9fd1ZJyWW2JukZ_Uj9XHqXHJLFbLQlOEvyfYP8nWxQaYM7IYp02_Id4W6hYs9iTPvhJTfY1O3c1X9zlmLQyQsGMGrz6");
  
  function prender69() {
    if (imagen69 === "https://blogger.googleusercontent.com/img/a/AVvXsEj3kduavz1Jw0KzmJTMqnNbmzhJoirtodO82asy0sSj__KEYl-5L1EEZaJ6sfGoIBQBYJWZOz_Qko2Lyb8r1isBpc42-undW9fd1ZJyWW2JukZ_Uj9XHqXHJLFbLQlOEvyfYP8nWxQaYM7IYp02_Id4W6hYs9iTPvhJTfY1O3c1X9zlmLQyQsGMGrz6") {
      setImagen69("https://blogger.googleusercontent.com/img/a/AVvXsEjDtHs8MSzNqpAzg4Wp3gJVuV95LpwwUEeW0aLco75K89gL369clZ86lS9csxmTHeuwP-GHBPJ053lLEPP2co5E4Az3BGyHGSYUKxwQ3MjgFYqi7YEWxnrg5RvZz1orDLw8aZ_IaIYo8TqzqrOI1WyqaVy5Zl0_6TmmuppTq28gztBWomWd1LEPs9dn");//prendido
    } else {
      setImagen69("https://blogger.googleusercontent.com/img/a/AVvXsEj3kduavz1Jw0KzmJTMqnNbmzhJoirtodO82asy0sSj__KEYl-5L1EEZaJ6sfGoIBQBYJWZOz_Qko2Lyb8r1isBpc42-undW9fd1ZJyWW2JukZ_Uj9XHqXHJLFbLQlOEvyfYP8nWxQaYM7IYp02_Id4W6hYs9iTPvhJTfY1O3c1X9zlmLQyQsGMGrz6");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen70, setImagen70] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjfaOCGf9I5C9iykPgmoO_pmSaa1ZRpKyMfNnSQ9zCJLic4a6nwzbOAzYSA4Wxm4m9z7uFuKSKq8zR06MGVQ4l1Dqi-5Ppgi35rSj2-lPW5oJ5pnq18OTqoF1vp3nILjLiQBKZKDPFRu3H37rS5DaMFRDnZM6iZIMXb41VeUmRZ2rJjRc5l74pgQdvk");
  
  function prender70() {
    if (imagen70 === "https://blogger.googleusercontent.com/img/a/AVvXsEjfaOCGf9I5C9iykPgmoO_pmSaa1ZRpKyMfNnSQ9zCJLic4a6nwzbOAzYSA4Wxm4m9z7uFuKSKq8zR06MGVQ4l1Dqi-5Ppgi35rSj2-lPW5oJ5pnq18OTqoF1vp3nILjLiQBKZKDPFRu3H37rS5DaMFRDnZM6iZIMXb41VeUmRZ2rJjRc5l74pgQdvk") {
      setImagen70("https://blogger.googleusercontent.com/img/a/AVvXsEhKLs6pGRjd2yxsEVnuGmgzpdpT1HpgGKsCiTyfBQndEmZRat8Dtvgh1zeZfgVU7NcUbTSuFlOW0pLShrzn-snHe8Ddvy1UjEO7AisGubq6nGpD14IZNf1L4nRMl9KRoQ05e1642aF1eh4BcUrx_cbubANtzJ5AOMVzU75w2lpDQMGW29LxI2PeieIh");//prendido
    } else {
      setImagen70("https://blogger.googleusercontent.com/img/a/AVvXsEjfaOCGf9I5C9iykPgmoO_pmSaa1ZRpKyMfNnSQ9zCJLic4a6nwzbOAzYSA4Wxm4m9z7uFuKSKq8zR06MGVQ4l1Dqi-5Ppgi35rSj2-lPW5oJ5pnq18OTqoF1vp3nILjLiQBKZKDPFRu3H37rS5DaMFRDnZM6iZIMXb41VeUmRZ2rJjRc5l74pgQdvk");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen71, setImagen71] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEh3WcswI6N8aZHnzKhTkfAxgCkTB82FBoa1p4X-Ka-26BhW9Jyh55nzfr-qsrHUc-qXHUaqYq3gAFoeSVaVTjD8PDmD6pYs1jqDOs9efrpjBrnZBdOm3nHN0em-YSXa841zG2xYjg3MHVL6ubp4vF0x1Va3nLFeYNupJw8AJTAjsLZm7U12UUNC7qW0");
  
  function prender71() {
    if (imagen71 === "https://blogger.googleusercontent.com/img/a/AVvXsEh3WcswI6N8aZHnzKhTkfAxgCkTB82FBoa1p4X-Ka-26BhW9Jyh55nzfr-qsrHUc-qXHUaqYq3gAFoeSVaVTjD8PDmD6pYs1jqDOs9efrpjBrnZBdOm3nHN0em-YSXa841zG2xYjg3MHVL6ubp4vF0x1Va3nLFeYNupJw8AJTAjsLZm7U12UUNC7qW0") {
      setImagen71("https://blogger.googleusercontent.com/img/a/AVvXsEgsTK45_ILkJZUD2Fw6fKOEZsrUxCYe28YirUtB5dYeQmq-LJK4H0aMl-EnbQ_so-szYxyiU9ROlJNXIQJ-XRXgtzCFCECIpKjmenfJIf-3dLQm5qKbovzVYjudxaeiE_-q4sshObNWIhR9MLI1u3avWXchJ5XNEFCQWYS5tIl5KWPJHyITOjVDOIMT");//prendido
    } else {
      setImagen71("https://blogger.googleusercontent.com/img/a/AVvXsEh3WcswI6N8aZHnzKhTkfAxgCkTB82FBoa1p4X-Ka-26BhW9Jyh55nzfr-qsrHUc-qXHUaqYq3gAFoeSVaVTjD8PDmD6pYs1jqDOs9efrpjBrnZBdOm3nHN0em-YSXa841zG2xYjg3MHVL6ubp4vF0x1Va3nLFeYNupJw8AJTAjsLZm7U12UUNC7qW0");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen72, setImagen72] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiWZf9-FuqfVK-Ck0_4NMFSumwMmMlND7SK2uk0myfC4XM-4mhSM79G5feFpxNWeehVKdGDZlLXHgCkZr57jJ8HXB_NFNlcbGhjZ_avUTr9ZVJ6mgrIBAqbeptDf-1yF4VCXAZTHiOMiG72BJrSXE6HiMYCnnQC6oJg3HQq1G-Mk_wsD3hUc7yv6oEW");
  
  function prender72() {
    if (imagen72 === "https://blogger.googleusercontent.com/img/a/AVvXsEiWZf9-FuqfVK-Ck0_4NMFSumwMmMlND7SK2uk0myfC4XM-4mhSM79G5feFpxNWeehVKdGDZlLXHgCkZr57jJ8HXB_NFNlcbGhjZ_avUTr9ZVJ6mgrIBAqbeptDf-1yF4VCXAZTHiOMiG72BJrSXE6HiMYCnnQC6oJg3HQq1G-Mk_wsD3hUc7yv6oEW") {
      setImagen72("https://blogger.googleusercontent.com/img/a/AVvXsEgh9D_yO2RR7PoFpwMJA7sp0swnKcj3Kf3JNAOdjOP7Gbk6mebpMIjxuDnaYEPZW8qmZmL4XwPt2be4AcF2xNMNqtokkpCMOmVz5s6cRIVsFzPE5hkMxgWjm4ukJb7QgoWBwVY8WGpUWRF0B8o9DLk9wWXJDb_bTSvG4Ya5ALltbox5ueMczC13xG33");//prendido
    } else {
      setImagen72("https://blogger.googleusercontent.com/img/a/AVvXsEiWZf9-FuqfVK-Ck0_4NMFSumwMmMlND7SK2uk0myfC4XM-4mhSM79G5feFpxNWeehVKdGDZlLXHgCkZr57jJ8HXB_NFNlcbGhjZ_avUTr9ZVJ6mgrIBAqbeptDf-1yF4VCXAZTHiOMiG72BJrSXE6HiMYCnnQC6oJg3HQq1G-Mk_wsD3hUc7yv6oEW");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen73, setImagen73] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEjeF9GlXGhgSGfndNA9_9SRF8NnNuSVkbGs8Sa6fwobz-IRFipoAFjL12nH0E8VnfkAhAkocgAABmL4xrYk25nPsURFJZwnVsxCaUC1MUO9vqPkZjM1XP0Wr60rkaKm-zYCH1LBkCkSubZmtKHTab7ym3xOohjNbOY_Pc6B2JCF-pmOauIc_r-r1OnB");
  
  function prender73() {
    if (imagen73 === "https://blogger.googleusercontent.com/img/a/AVvXsEjeF9GlXGhgSGfndNA9_9SRF8NnNuSVkbGs8Sa6fwobz-IRFipoAFjL12nH0E8VnfkAhAkocgAABmL4xrYk25nPsURFJZwnVsxCaUC1MUO9vqPkZjM1XP0Wr60rkaKm-zYCH1LBkCkSubZmtKHTab7ym3xOohjNbOY_Pc6B2JCF-pmOauIc_r-r1OnB") {
      setImagen73("https://blogger.googleusercontent.com/img/a/AVvXsEieNv07tfZif-WF9eCJrL2ytrMWA3lo-KK-bMNq3vE6gQBhd5z4z-7cs1WjWMENqibavnPTeNAIfQjmRUdq-q2SWUOd3moBt3bZj4kDALrPuJUbv1bzF-v4Zcjlb_pIclaBQV5_qBTahYoynMxYMwiN1_I9BuAVGBcMcEtpX70eeyOj-hj_LYiTFX7_");//prendido
    } else {
      setImagen73("https://blogger.googleusercontent.com/img/a/AVvXsEjeF9GlXGhgSGfndNA9_9SRF8NnNuSVkbGs8Sa6fwobz-IRFipoAFjL12nH0E8VnfkAhAkocgAABmL4xrYk25nPsURFJZwnVsxCaUC1MUO9vqPkZjM1XP0Wr60rkaKm-zYCH1LBkCkSubZmtKHTab7ym3xOohjNbOY_Pc6B2JCF-pmOauIc_r-r1OnB");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen74, setImagen74] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEi8Z5KC9dydlT4EkdsZMWmSpRYHZH6JdjiXfGsLfS8JNucozEFqnaUMeo9JY175VIlqThLbyTrG5QXlLLkSHUCyavVDttrBfpVMHYWw9vDV6vpfdImp7jSCzHx7nz0D2pTx0fChbsgs7QJOywxLEsEoKBqRBN4NuHw8kpy6iWoWxnmYTGwpp77Os5pw");
  
  function prender74() {
    if (imagen74 === "https://blogger.googleusercontent.com/img/a/AVvXsEi8Z5KC9dydlT4EkdsZMWmSpRYHZH6JdjiXfGsLfS8JNucozEFqnaUMeo9JY175VIlqThLbyTrG5QXlLLkSHUCyavVDttrBfpVMHYWw9vDV6vpfdImp7jSCzHx7nz0D2pTx0fChbsgs7QJOywxLEsEoKBqRBN4NuHw8kpy6iWoWxnmYTGwpp77Os5pw") {
      setImagen74("https://blogger.googleusercontent.com/img/a/AVvXsEgfAiEztc1v3g_fQ8pcOj_-61_OXle1FzqjpngE362IB_71jJJCOjXzG1gt09O61EW_HVBIBjX6nbz06IXP-LBgZh88QCBaEvmqGYiJD8VBE3sSc9hGzFvOkk09RWVtmq9Eg6bC5tRTeCsSgJWAFWvOrCzLnJqbWoh0q0e2Y1BytPrOQby2wW8RzJ4E");//prendido
    } else {
      setImagen74("https://blogger.googleusercontent.com/img/a/AVvXsEi8Z5KC9dydlT4EkdsZMWmSpRYHZH6JdjiXfGsLfS8JNucozEFqnaUMeo9JY175VIlqThLbyTrG5QXlLLkSHUCyavVDttrBfpVMHYWw9vDV6vpfdImp7jSCzHx7nz0D2pTx0fChbsgs7QJOywxLEsEoKBqRBN4NuHw8kpy6iWoWxnmYTGwpp77Os5pw");
    }
  }
  //_________________________________________________________________________________________________________________
  const [imagen75, setImagen75] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEgRDYqjUqcmbosDPIXpyBJ6_IOB7Kjg2K0iA7wJRk6_yMV2nEg1IKHfYOcDOBFmhW6yZ5u6K2NwLTXGdTuzJ98qEwgYukDEE3ifDTK7gjpE05SiUss-eVqk7e7-5cUVrL32MT35zohU6hynfPxBWyzWp_kmBG1EBiRbgPa108tQ9SO2ahSB6QOvAC__");
  
  function prender75() {
    if (imagen75 === "https://blogger.googleusercontent.com/img/a/AVvXsEgRDYqjUqcmbosDPIXpyBJ6_IOB7Kjg2K0iA7wJRk6_yMV2nEg1IKHfYOcDOBFmhW6yZ5u6K2NwLTXGdTuzJ98qEwgYukDEE3ifDTK7gjpE05SiUss-eVqk7e7-5cUVrL32MT35zohU6hynfPxBWyzWp_kmBG1EBiRbgPa108tQ9SO2ahSB6QOvAC__") {
      setImagen75("https://blogger.googleusercontent.com/img/a/AVvXsEjjyqE1kF-mzeySJGu7M9RkS-GWRUi9YTZh3egTkMgcaXNUoBpVfZQtmVRdiFYADI5mw01RS0TzEd5ykQhoDAsJsNZjYSdGd-HSxg3kFBluGpGd2acjmLKZ8hbadHF6fCn_PWcVi0Jik8rUNZtuUfpVNAIm-mAhMfK-hYC2X7uA5s0xXXC23BTILkTx");//prendido
    } else {
      setImagen75("https://blogger.googleusercontent.com/img/a/AVvXsEgRDYqjUqcmbosDPIXpyBJ6_IOB7Kjg2K0iA7wJRk6_yMV2nEg1IKHfYOcDOBFmhW6yZ5u6K2NwLTXGdTuzJ98qEwgYukDEE3ifDTK7gjpE05SiUss-eVqk7e7-5cUVrL32MT35zohU6hynfPxBWyzWp_kmBG1EBiRbgPa108tQ9SO2ahSB6QOvAC__");
    }
  }

  return (
    <div className="single">
     {/*<Sidebar /> corresponde a los menus lateral */}
      <div className="singleContainer">
        <Navbar />{/* corresponde el header */}
        <div className="top">
          <div className="left">
            <h1 className="title">Información</h1>
            <div className="item">
              
              
            </div>
          </div>
          <div className="dario">
          <h1 style={{textAlign: 'center', color: 'black'}}>COMO JUGAR</h1>
          <table id="">
                  <td><img id="foco" width="99px" height="56px" src={imagenb} alt="foco funcional" onClick={prenderb} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imageni} alt="foco funcional" onClick={prenderi} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagenn} alt="foco funcional" onClick={prendern} /></td> 
                  <td><img id="foco" width="99px" height="56px" src={imageng} alt="foco funcional" onClick={prenderg} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imageno} alt="foco funcional" onClick={prendero} /></td>                 
                    </table>
                  
                  <table id="">                                     
                  <td><img id="foco" width="99px" height="56px" src={imagen166} alt="foco funcional" onClick={prender166} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen177} alt="foco funcional" onClick={prender177} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen188} alt="foco funcional" onClick={prender188} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen199} alt="foco funcional" onClick={prender199} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen200} alt="foco funcional" onClick={prender200} /></td>
                    </table>
                    <table id="">                                     
                    <td><img id="foco" width="99px" height="56px" src={imagen311} alt="foco funcional" onClick={prender311} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen322} alt="foco funcional" onClick={prender322} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen333} alt="foco funcional" onClick={prender333} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen344} alt="foco funcional" onClick={prender344} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen355} alt="foco funcional" onClick={prender355} /></td>
                    </table>

                    <table id="">                  
                  <td><img id="foco" width="99px" height="56px" src={imagen366} alt="foco funcional" onClick={prender366} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen377} alt="foco funcional" onClick={prender377} /></td>
                  <td><img id="foco" width="99px" height="56px" src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-digital-ball-art-word-bingo-png-image_4999975.jpg" alt=""/> </td>
                  <td><img id="foco" width="99px" height="56px" src={imagen399} alt="foco funcional" onClick={prender399} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen400} alt="foco funcional" onClick={prender400} /></td>
                    </table>

                    <table id="">
                  <td><img id="foco" width="99px" height="56px" src={imagen466} alt="foco funcional" onClick={prender466} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen477} alt="foco funcional" onClick={prender477} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen488} alt="foco funcional" onClick={prender488} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen499} alt="foco funcional" onClick={prender499} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen500} alt="foco funcional" onClick={prender500} /></td>
                    </table>

                    <table id="">
                  <td><img id="foco" width="99px" height="56px" src={imagen611} alt="foco funcional" onClick={prender611} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen622} alt="foco funcional" onClick={prender622} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen633} alt="foco funcional" onClick={prender633} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen644} alt="foco funcional" onClick={prender644} /></td>
                  <td><img id="foco" width="99px" height="56px" src={imagen655} alt="foco funcional" onClick={prender655} /></td>
                    </table> 
          </div>
        </div>

<button onClick={()=>mostrarAlerta()} >B</button>
        <div className="top">
          <div className="left" style={{ background: 'linear-gradient(rgb(209 204 204), rgb(52 54 56),rgb(72 67 67),rgb(98 93 93),rgb(69 69 70 / 84%))' }}>
             
          <h1 style={{textAlign: 'center', color: 'black'}}>CONTROL TABLERO</h1>
          

            
            <div className="item">
              <div className="details">
                <div className="center">
                <br></br>

                <div class="container">
                  <tr>
                  <table id="tblBingo">
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagenb} alt="foco funcional" onClick={prenderb} /></td>-                  
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen} alt="foco funcional" onClick={prender} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen2} alt="foco funcional" onClick={prender2} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen3} alt="foco funcional" onClick={prender3} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen4} alt="foco funcional" onClick={prender4} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen5} alt="foco funcional" onClick={prender5} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen6} alt="foco funcional" onClick={prender6} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen7} alt="foco funcional" onClick={prender7} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen8} alt="foco funcional" onClick={prender8} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen9} alt="foco funcional" onClick={prender9} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen10} alt="foco funcional" onClick={prender10} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen11} alt="foco funcional" onClick={prender11} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen12} alt="foco funcional" onClick={prender12} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen13} alt="foco funcional" onClick={prender13} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen14} alt="foco funcional" onClick={prender14} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen15} alt="foco funcional" onClick={prender15} /></td>                  
                    </table>

                    <table id="tblBingo">
                    <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imageni} alt="foco funcional" onClick={prenderi} /></td>-                  
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen16} alt="foco funcional" onClick={prender16} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen17} alt="foco funcional" onClick={prender17} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen18} alt="foco funcional" onClick={prender18} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen19} alt="foco funcional" onClick={prender19} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen20} alt="foco funcional" onClick={prender20} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen21} alt="foco funcional" onClick={prender21} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen22} alt="foco funcional" onClick={prender22} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen23} alt="foco funcional" onClick={prender23} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen24} alt="foco funcional" onClick={prender24} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen25} alt="foco funcional" onClick={prender25} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen26} alt="foco funcional" onClick={prender26} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen27} alt="foco funcional" onClick={prender27} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen28} alt="foco funcional" onClick={prender28} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen29} alt="foco funcional" onClick={prender29} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen30} alt="foco funcional" onClick={prender30} /></td>
                    </table>

                    <table id="tblBingo">
                    <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagenn} alt="foco funcional" onClick={prendern} /></td>-                  
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen31} alt="foco funcional" onClick={prender31} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen32} alt="foco funcional" onClick={prender32} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen33} alt="foco funcional" onClick={prender33} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen34} alt="foco funcional" onClick={prender34} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen35} alt="foco funcional" onClick={prender35} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen36} alt="foco funcional" onClick={prender36} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen37} alt="foco funcional" onClick={prender37} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen38} alt="foco funcional" onClick={prender38} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen39} alt="foco funcional" onClick={prender39} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen40} alt="foco funcional" onClick={prender40} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen41} alt="foco funcional" onClick={prender41} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen42} alt="foco funcional" onClick={prender42} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen43} alt="foco funcional" onClick={prender43} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen44} alt="foco funcional" onClick={prender44} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen45} alt="foco funcional" onClick={prender45} /></td>
                    </table>

                    <table id="tblBingo">
                    <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imageng} alt="foco funcional" onClick={prenderg} /></td>-                  
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen46} alt="foco funcional" onClick={prender46} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen47} alt="foco funcional" onClick={prender47} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen48} alt="foco funcional" onClick={prender48} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen49} alt="foco funcional" onClick={prender49} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen50} alt="foco funcional" onClick={prender50} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen51} alt="foco funcional" onClick={prender51} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen52} alt="foco funcional" onClick={prender52} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen53} alt="foco funcional" onClick={prender53} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen54} alt="foco funcional" onClick={prender54} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen55} alt="foco funcional" onClick={prender55} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen56} alt="foco funcional" onClick={prender56} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen57} alt="foco funcional" onClick={prender57} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen58} alt="foco funcional" onClick={prender58} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen59} alt="foco funcional" onClick={prender59} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen60} alt="foco funcional" onClick={prender60} /></td>
                    </table>

                    <table id="tblBingo">
                    <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imageno} alt="foco funcional" onClick={prendero} /></td>-                  
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen61} alt="foco funcional" onClick={prender61} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen62} alt="foco funcional" onClick={prender62} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen63} alt="foco funcional" onClick={prender63} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen64} alt="foco funcional" onClick={prender64} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen65} alt="foco funcional" onClick={prender65} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen66} alt="foco funcional" onClick={prender66} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen67} alt="foco funcional" onClick={prender67} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen68} alt="foco funcional" onClick={prender68} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen69} alt="foco funcional" onClick={prender69} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen70} alt="foco funcional" onClick={prender70} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen71} alt="foco funcional" onClick={prender71} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen72} alt="foco funcional" onClick={prender72} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen73} alt="foco funcional" onClick={prender73} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen74} alt="foco funcional" onClick={prender74} /></td>
                  <td class="letters-bingo"><img id="foco" width="76px" height="76px" src={imagen75} alt="foco funcional" onClick={prender75} /></td>
                    </table>
                  </tr>
                  </div>
                  
              </div>
                
                
                
              </div>
            </div>
          </div>
          
        </div>
        <div className="bottom">
        <h1 className="title">Buscar datos De los Usuarios</h1>
        <Datatable/>      
        </div>
      </div>
    </div>
  );
};


export default Single;
