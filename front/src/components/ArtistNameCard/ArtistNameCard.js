import React from 'react'
import "./ArtistNameCard.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ArtistNameCard() {

  const { t } = useTranslation();

  return (

    <>
      <Link to="/artisthome" className="link artistNameCard">
        <div className="newArtistItemContainer">
          <div className="newArtistItemContainerBox">


            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="Aritist_img" />



            <div className="newArtistItemContainerRight">

              <div className="newArtistItemContainerNameBox">

                <span className="newArtistItemContainerArtistName">러블레스</span>

              </div>
              <div className="newArtistItemContainerMusicGenreBox">

                <span className="newArtistItemContainerMusicGenre">{t("home_Genre")}</span>
              </div>
            </div>
          </div>

        </div>
      </Link>

    </>
  )
}

export default ArtistNameCard