// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import '../../assets/css/Main/Home.css'
import HomeBanner from "../../components/Carousel/HomeBanner"
import chevron from '../../assets/icon/ping//chevron-down.svg'
import ArtistNameCard from '../../components/ArtistNameCard/ArtistNameCard'
// import StageCard from '../../components/StageCard/StageCard';
import { Link } from "react-router-dom";
import StageCardData from "../../Data/StageCardData"
import Topbar from '../../components/topbar/Topbar'
import { useTranslation } from "react-i18next";

function Home() {

  // 다국어처리
  const { t } = useTranslation();

  // eslint-disable-next-line
  const [noOfElement, setnoOfElement] = useState(4)
  const [noOfElement2, setnoOfElement2] = useState(4)
  // const [moreBtn, setMoreBtn] = useState()

  // const [btnActive, setBtnActive] = useState("");

  // const toggleActive = (e) => {
  //   setBtnActive((prev) => {
  //     return e.target.value;
  //   });
  // };

  const more = StageCardData.cardData.slice(0, noOfElement)
  const more2 = StageCardData.cardData.slice(0, noOfElement2)

  function loadmore() {
    setnoOfElement(noOfElement + noOfElement)

  }

  function loadmore2() {
    setnoOfElement2(noOfElement2 + noOfElement2)

  }

  function Btnchevron() {


    if (noOfElement > 4) {

      return <div className="hr-sects"> </div>




    } else {
      return <div className="show-more">


        <div className="hr-left"></div>

        <div className="hr-middle">
          <button
            className="more_btn"
            onClick={() => loadmore()}

          >

            <spen className="hr-sect_more">{t("home_more")}</spen>
            <img className="chevron" src={chevron} alt="chevron" />
          </button>
        </div>



        <div className="hr-right"></div>




      </div>

    }
  }

  function Btnchevron2() {


    if (noOfElement2 > 4) {

      return <div className="hr-sects2"> </div>




    } else {
      return <div className="show-more">


        <div className="hr-left"></div>

        <div className="hr-middle">
          <button
            className="more_btn"
            onClick={() => loadmore2()}

          >

            <spen className="hr-sect_more">{t("home_more")}</spen>
            <img className="chevron" src={chevron} alt="chevron" />
          </button>
        </div>



        <div className="hr-right"></div>




      </div>

    }
  }
  return (

    <>
      <Topbar />
      <div className="home">


        <div className='homeWrapper'>
          {/* ====================  Carousel  ======================== */}

          < HomeBanner />

          {/* ====================  New Artist  ======================== */}

          <div className="home_newArtist">
            <span className="home_newArtistTitle">{t("home_newartist")}</span>

            <div className="home_newArtistItem">
              <ArtistNameCard />

              <ArtistNameCard />

              <ArtistNameCard />

              <ArtistNameCard />

              <ArtistNameCard />

              <ArtistNameCard />

            </div>
          </div>

          {/* ====================  Live Stage  ======================== */}

          <div className="home_LiveStage">
            <div className="home_LiveStage_Title">
              <p className='home_Stage'><span className="home_Live">{t("home_live")}</span> {t("home_stage")}</p>
            </div>

            <div className="home_LiveStage_Container">

              {more.map((item, index) => {
                return (
                  <Link to="/StreamLive" className="link home_stageCard">
                    <div className="home_Stage_Top">

                      <img src={item.youtubethumbnail} className="home_Stage_Top_thumbnailImg" alt="" />
                    </div>

                    <div className="home_Stage_btm">
                      <div className="home_Stage_btm_Left">

                        <img src={item.img} className="home_Stage_Artist_img" alt="" />


                      </div>
                      <div className="home_Stage_btm_Right">

                        <div className="home_Stage_NameBox">

                          <span className="home_Stage_NameBox_ArtistTitle">{item.title}</span>

                        </div>
                        <div className="home_Stage_NameBox_ArtistName_Box">

                          <span className="home_Stage_NameBox_ArtistName">{item.artistName}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}




            </div>
          </div>



          {Btnchevron()}



          {/* ====================  Upcoming Stage  ======================== */}

          <div className="home_UpComing_Stage">
            <div className="home_UpComing_Stage_title">
              {t("home_upcoming")}
            </div>

            <div className="home_UpComingStage_Container">
              {more2.map((item, index) => {
                return (
                  <Link to="/StreamLive" className="link home_stageCard">
                    <div className="home_Stage_Top">

                      <img src={item.youtubethumbnail} className="home_Stage_Top_thumbnailImg" alt="" />
                    </div>

                    <div className="home_Stage_btm">
                      <div className="home_Stage_btm_Left">

                        <img src={item.img} className="home_Stage_Artist_img" alt="" />


                      </div>
                      <div className="home_Stage_btm_Right">

                        <div className="home_Stage_NameBox">

                          <span className="home_Stage_NameBox_ArtistTitle">{item.title}</span>

                        </div>
                        <div className="home_Stage_NameBox_ArtistName_Box">

                          <span className="home_Stage_NameBox_ArtistName">{item.artistName}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}



            </div>
          </div>


          {Btnchevron2()}

        </div>
      </div>

    </>
  )
}

export default Home