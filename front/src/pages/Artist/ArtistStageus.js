import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistStageus.css'
import StageCard from '../../components/StageCard/StageCard';
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';



function ArtistStageus() {
  return (
    <>

      <div className='ArtistStageus'>
        <div className='ArtistStageus_Wrapper'>
          <ArtistInfoCard />


          <div className='ArtistStageus_Rh'>
            <div className='ArtistStageus_Rh_Memu'>
              <ul className='ArtistStageus_Rh_MemuBox'>

                <Link to="/artisthome" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxText'>아티스트 홈</li>
                </Link>
                <div className='ArtistStageus_Rh_MemuBox_Line'></div>
                <Link to="/artistnotice" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxText'>공지사항</li>
                </Link>
                <div className='ArtistStageus_Rh_MemuBox_Line'></div>
                <Link to="/artiststage" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxTextStage'>스테이지</li>
                </Link>
                <div className='ArtistStageus_Rh_MemuBox_Line'></div>
                <Link to="/artistschedule" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxText'>일정</li>
                </Link>
                <div className='ArtistStageus_Rh_MemuBox_Line'></div>
                <Link to="/artiststore" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxText'>스토어</li>
                </Link>
                <div className='ArtistStageus_Rh_MemuBox_Line'></div>
                <Link to="/artistpost" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxText'>팬 포스트</li>
                </Link>

              </ul>
            </div>


            <div className='ArtistStageus_Rh_btm'>
              <div className="ArtistStageus_Rh_btm_Top">

                <ul className='ArtistStageus_Rh_btm_Top_lf'>

                  <Link to="/artiststage" className="link">
                    <li className="ArtistStageus_Rh_btm_Stage"><span className="ArtistStageus_Rh_btm_Stage_live">라이브</span> 스테이지</li>
                  </Link>

                  <Link to="/artiststageus" className="link">
                    <li className="ArtistStageus_Rh_btm_LiveStage_us">다가오는 스테이지</li>
                  </Link>
                  <Link to="/artiststageps" className="link">
                    <li className="ArtistStageus_Rh_btm_LiveStage_ps">지난 스테이지</li>
                  </Link>



                </ul>

              </div>



              <div className='ArtistStageus_Rh_btm_btm'>
                <StageCard />

                <StageCard />

                <StageCard />



              </div>

            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default ArtistStageus