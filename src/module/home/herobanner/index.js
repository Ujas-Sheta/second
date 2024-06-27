import React from 'react'
import Header from '../../../shared/components/header'
import './herobanner.scss'
import HerobannerLogo from '../../../assests/logo/Logo.svg'
import DashboardLogo from '../../../assests/icons/dashboard.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import User_image from '../../../assests/image/profile.jpeg'


export default function Herobanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='herobanner-main'>
            <div className='container'>
                <div className='herobanner-grid'>
                    <div className='herobanner-bar'>

                        <div className='bar-logo'>
                            <img src={HerobannerLogo} alt='HerobannerLogo'></img>
                        </div>

                        <div className='bar-menu'>
                            <div className='menu-details'>
                                <img src={DashboardLogo} alt='DashboardLogo'></img>
                                <a>Dashboard</a>
                            </div>

                            <div className='menu-details'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 22L2 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path><path d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path><path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 22V9.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path><path d="M20 9.5V13.5M20 22V17.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path><path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="#fff" stroke-width="1.5"></path></svg>
                                <a>Home</a>
                            </div>

                            <div className='menu-details'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 22L2 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path><path d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path><path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 22V9.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path><path d="M20 9.5V13.5M20 22V17.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path><path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="#fff" stroke-width="1.5"></path></svg>
                                <a>User Profile</a>
                            </div>



                        </div>
                    </div>
                    <div className='herobanner-all'>
                        <Header />

                        <div className='herobanner-slider'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className='slider-content'>
                                        <div className='slider-grid'>
                                            <div className='slider-card'>
                                                <h3>69</h3>
                                                <p>Active Projects</p>
                                                <div className='slider-card-flex'>
                                                    <p>43 Pending</p>
                                                    <span>72%</span>
                                                </div>
                                                <div className='slider-card-line-back'>
                                                    <div className='slider-card-line-in'></div>
                                                </div>
                                            </div>
                                            <div className='slider-details'>
                                                <div className='slider-box'>
                                                    <div className='slider-box-flex'>
                                                        <p>$<span>69,700</span></p>
                                                        <span>^2.2%</span>
                                                    </div>
                                                    <h5>Projects Earnings in April</h5>

                                                    <div className='slider-box-grid'>
                                                        <div className='slider-box-one'>
                                                            <p>$74,765</p>
                                                        </div>
                                                        <div className='slider-box-two'>
                                                            <p>$74,765</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='slider-content'>
                                        <div className='slider-grid'>
                                            <div className='slider-card'>
                                                <h3>70</h3>
                                                <p>Active Projects</p>
                                                <div className='slider-card-flex'>
                                                    <p>43 Pending</p>
                                                    <span>72%</span>
                                                </div>
                                                <div className='slider-card-line-back'>
                                                    <div className='slider-card-line-in'></div>
                                                </div>
                                            </div>
                                            <div className='slider-details'>
                                                <div className='slider-box'>
                                                    <div className='slider-box-flex'>
                                                        <p>$<span>70,700</span></p>
                                                        <span>^2.2%</span>
                                                    </div>
                                                    <h5>Projects Earnings in April</h5>

                                                    <div className='slider-box-grid'>
                                                        <div className='slider-box-one'>
                                                            <p>$74,765</p>
                                                        </div>
                                                        <div className='slider-box-two'>
                                                            <p>$74,765</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='slider-content'>
                                        <div className='slider-grid'>
                                            <div className='slider-card'>
                                                <h3>71</h3>
                                                <p>Active Projects</p>
                                                <div className='slider-card-flex'>
                                                    <p>43 Pending</p>
                                                    <span>72%</span>
                                                </div>
                                                <div className='slider-card-line-back'>
                                                    <div className='slider-card-line-in'></div>
                                                </div>
                                            </div>
                                            <div className='slider-details'>
                                                <div className='slider-box'>
                                                    <div className='slider-box-flex'>
                                                        <p>$<span>71,700</span></p>
                                                        <span>^2.2%</span>
                                                    </div>
                                                    <h5>Projects Earnings in April</h5>

                                                    <div className='slider-box-grid'>
                                                        <div className='slider-box-one'>
                                                            <p>$74,765</p>
                                                        </div>
                                                        <div className='slider-box-two'>
                                                            <p>$74,765</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='slider-content'>
                                        <div className='slider-grid'>
                                            <div className='slider-card'>
                                                <h3>72</h3>
                                                <p>Active Projects</p>
                                                <div className='slider-card-flex'>
                                                    <p>43 Pending</p>
                                                    <span>72%</span>
                                                </div>
                                                <div className='slider-card-line-back'>
                                                    <div className='slider-card-line-in'></div>
                                                </div>
                                            </div>
                                            <div className='slider-details'>
                                                <div className='slider-box'>
                                                    <div className='slider-box-flex'>
                                                        <p>$<span>72,700</span></p>
                                                        <span>^2.2%</span>
                                                    </div>
                                                    <h5>Projects Earnings in April</h5>

                                                    <div className='slider-box-grid'>
                                                        <div className='slider-box-one'>
                                                            <p>$74,765</p>
                                                        </div>
                                                        <div className='slider-box-two'>
                                                            <p>$74,765</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='slider-content'>
                                        <div className='slider-grid'>
                                            <div className='slider-card'>
                                                <h3>73</h3>
                                                <p>Active Projects</p>
                                                <div className='slider-card-flex'>
                                                    <p>43 Pending</p>
                                                    <span>72%</span>
                                                </div>
                                                <div className='slider-card-line-back'>
                                                    <div className='slider-card-line-in'></div>
                                                </div>
                                            </div>
                                            <div className='slider-details'>
                                                <div className='slider-box'>
                                                    <div className='slider-box-flex'>
                                                        <p>$<span>73,700</span></p>
                                                        <span>^2.2%</span>
                                                    </div>
                                                    <h5>Projects Earnings in April</h5>

                                                    <div className='slider-box-grid'>
                                                        <div className='slider-box-one'>
                                                            <p>$74,765</p>
                                                        </div>
                                                        <div className='slider-box-two'>
                                                            <p>$74,765</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='slider-content'>
                                        <div className='slider-grid'>
                                            <div className='slider-card'>
                                                <h3>74</h3>
                                                <p>Active Projects</p>
                                                <div className='slider-card-flex'>
                                                    <p>43 Pending</p>
                                                    <span>72%</span>
                                                </div>
                                                <div className='slider-card-line-back'>
                                                    <div className='slider-card-line-in'></div>
                                                </div>
                                            </div>
                                            <div className='slider-details'>
                                                <div className='slider-box'>
                                                    <div className='slider-box-flex'>
                                                        <p>$<span>74,700</span></p>
                                                        <span>^2.2%</span>
                                                    </div>
                                                    <h5>Projects Earnings in April</h5>

                                                    <div className='slider-box-grid'>
                                                        <div className='slider-box-one'>
                                                            <p>$74,765</p>
                                                        </div>
                                                        <div className='slider-box-two'>
                                                            <p>$74,765</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>

                        <div className='herobanner-table'>
                            <div className='herobanner-table-top'>
                                <h2>Users</h2>
                                <div class="search-bar">
                                    <input type="text" placeholder="Search users" />
                                    <select>
                                        <option>All</option>
                                        <option>Successful</option>
                                        <option>Pending</option>
                                        <option>Overdue</option>
                                    </select>
                                    <select>
                                        <option>All</option>
                                        <option>1 year ago</option>
                                        <option>6 months ago</option>
                                    </select>
                                </div>
                            </div>
                            <table width="100%" cellPadding="0" cellSpacing="0">
                                <thead>
                                    <tr align="left">
                                        <th>User Id</th>
                                        <th>User Name</th>
                                        <th>Status</th>
                                        <th>Projects</th>
                                        <th>E-mail</th>
                                        <th>skill</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className='User-flex'>
                                            <img src={User_image} alt='User_image'></img>
                                            <span>Ujas</span>
                                        </td>
                                        <td className='status status-successful'>
                                            <div className="status-indicator"></div>
                                            <span>Successful</span>
                                        </td>
                                        <td>E-commerce</td>
                                        <td>Ujas@site.com</td>
                                        <td>multitasking</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td className='User-flex'>
                                            <img src={User_image} alt='User_image'></img>
                                            <span>Meet</span>
                                        </td>
                                        <td className='status status-pending'>
                                            <div className="status-indicator"></div>
                                            <span>Pending</span>
                                        </td>
                                        <td>Ticket Booking</td>
                                        <td>Meet@site.com</td>
                                        <td>Adaptability</td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td className='User-flex'>
                                            <img src={User_image} alt='User_image'></img>
                                            <span>Heet</span>
                                        </td>
                                        <td className='status status-overdue'>
                                            <div className="status-indicator"></div>
                                            <span>Overdue</span>
                                        </td>
                                        <td>Game</td>
                                        <td>Heet@site.com</td>
                                        <td>Problem solving</td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td className='User-flex'>
                                            <img src={User_image} alt='User_image'></img>
                                            <span>Rohit</span>
                                        </td>
                                        <td className='status status-pending'>
                                            <div className="status-indicator"></div>
                                            <span>Pending</span>
                                        </td>
                                        <td>Cake shop</td>
                                        <td>Rohit@site.com</td>
                                        <td>Adaptability</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className='Setting'>
                            <form>
                                <h2>Form</h2>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
