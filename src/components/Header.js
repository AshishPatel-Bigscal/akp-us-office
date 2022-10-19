import React from 'react'
import "./Header.css";
import { MdSearch, MdNotifications, MdList } from "react-icons/md";
import { FaUserCircle, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ReactComponent as VisualSearchIcon } from "../images/SearchLogo.svg"
import logo from "../images/unsplashLogo.png";
import { imageCategory } from "./imageCategory"

const Header = () => {
    return (
        <div className='headerContainer'>
            <section className='headerRow1'>
                <div className='companyLogo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='searchContainer'>
                    <MdSearch className='headerSearchIcon' size={"28px"} color={"grey"} />
                    <input className='searchTxt' placeholder='Search photos' />
                    <VisualSearchIcon fill='grey' width="28px" className='headerVisualSearchIcon' />
                </div>
                <div className='headerMenuContainer'>
                    <ul className='menuList row'>
                        <li className='menuItem'>Advertise</li>
                        <li className='menuItem'>Blog</li>
                        <li className='menuItem unSplashPlus'>Unsplash+</li>
                        <li className='menuItem'><button className='submitPhotoBtn'>Submit a photo</button></li>
                        <li><MdNotifications className='notifyIcon' size={"30px"} color={"grey"} /></li>
                    </ul>
                    <FaUserCircle className='userCircle' size={"30px"} color={"grey"} />
                    <MdList className='hamMenu' size={"40px"} color={"grey"} />
                </div>
            </section>

            <section className='headerRow2'>
                <FaAngleLeft className='arrowLeft' />
                <div className='shadowLeft'></div>
                <div className='imageCategoryList'>

                    {
                        imageCategory.map((item, index) => {
                            return (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a href="#" key={index} className='imageCategory'>{item}</a>

                            )
                        })
                    }

                </div>
                <div className='shadowRight'></div>
                <FaAngleRight className='arrowRight' />
            </section>


        </div>
    )
}

export default Header