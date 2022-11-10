import React from 'react'
import './Signup5.css'
import { Link } from "react-router-dom";
import cursor from '../../assets/icon/signup/cursorW.svg'
import user from '../../assets/icon/signup/userP.svg'
import creditcard from '../../assets/icon/signup/credit-cardW.svg'
import shield from '../../assets/icon/signup/shield 1.svg'




function Signup5() {


    return (
        <>
            <div className='Signup5'>
                <div className='Signup5_Wrapper'>
                    <div className='Signup5_Container'>
                        <div className='Signup5_ItemLeft'>
                            <div className='Signup5_ItemLeft_imgbox'>
                                <img src="https://i.imgur.com/Ab8BFxf.png" className="Signup5_ItemLeft_img" alt="" />
                            </div>


                        </div>


                        <div className="Signup5_ItemRight">
                            <div className="Signup5_ItemRight_top">

                                <span className="Signup5_ItemRight_top_title_text">가입완료</span>



                            </div>

                            <div className="Signup5_ItemRight_middle">

                                <div className="Signup5_ItemRight_middle_signpro">

                                    <div className="Signup5_ItemRight_middle_signpro_hrbox">
                                        <div className="Signup5_ItemRight_middle_signpro_IconContainer_hr"></div>
                                        <div className="Signup5_ItemRight_middle_signpro_IconContainer_hr2"></div>
                                    </div>

                                    <div className="Signup5_ItemRight_middle_signpro_IconContainer">
                                        <div className="Signup5_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup5_ItemRight_middle_signpro_IconContainer_Icon" src={cursor} alt="cursor" />
                                        </div>

                                        <div className="Signup5_ItemRight_middle_signpro_IconContainer_box">
                                            <img className="Signup5_ItemRight_middle_signpro_IconContainer_Icon" src={user} alt="user" />
                                        </div>

                                        <div className="Signup5_ItemRight_middle_signpro_IconContainer_box3">
                                            <img className="Signup5_ItemRight_middle_signpro_IconContainer_Icon" src={creditcard} alt="creditcard" />
                                        </div>

                                        <div className="Signup5_ItemRight_middle_signpro_IconContainer_box3">
                                            <img className="Signup5_ItemRight_middle_signpro_IconContainer_Icon" src={shield} alt="shield" />
                                        </div>


                                    </div>
                                    <div className="Signup5_ItemRight_middle_signpro_IconContainer_textBox">
                                        <div className="Signup5_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup5_ItemRight_middle_signpro_IconContainer_textBox_textinline">약관동의</span>
                                        </div>

                                        <div className="Signup5_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup5_ItemRight_middle_signpro_IconContainer_textBox_textinline">개인정보입력</span>
                                        </div>

                                        <div className="Signup5_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup5_ItemRight_middle_signpro_IconContainer_textBox_textinline">결제정보입력</span>
                                        </div>

                                        <div className="Signup5_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup5_ItemRight_middle_signpro_IconContainer_textBox_textinline">가입완료</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="Signup5_ItemRight_middle_TextBox">
                                    <span className="Signup5_ItemRight_middle_TextBox_Favoritetext">Favorite Music Genre</span>
                                    <span className="Signup5_ItemRight_middle_TextBox_text">Lorem ipsum dolor sit amet</span>

                                </div>

                                <div className="Signup5_ItemRight_middle_">

                                </div>




                            </div>

                            <div className="Signu2p_ItemRight_btm_BtnBox">
                                <Link to="/signup4" className="link">
                                    <div className="Signup2_ItemRight_btm_BackBtn">

                                        <span className="Signup2_ItemRight_btm_Btn_text">Back</span>

                                    </div>
                                </Link>
                                <Link to="/signup6" className="link">
                                    <div className="Signup2_ItemRight_btm_NextBtn">

                                        <span className="Signup2_ItemRight_btm_Btn_text">Next</span>

                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Signup5