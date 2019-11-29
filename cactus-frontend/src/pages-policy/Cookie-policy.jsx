import React from 'react';
import styled from 'styled-components';
import Image from './terms-bg.jpg';

function CookiePolicy() {
    return (
        <MainContainer className='main-terms' style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="main-div">
                <h1 id="title">Cookie Policy</h1>

                <div classname="content">
                    <h3 className="subtitle"> 1. What are cookies?</h3>
                    <p>
                        Cookies are small files containing letters and numbers that are stored on your device when you visit a website or application. We use cookies to improve your user experience within our Website by remembering your preferences. Without the use of cookies, your user experience on the Website will be significantly non-personalized.
                </p>
                    <p>For more information about cookies, visit www.allaboutcookies.org.</p>
                </div>
                <div classname="content">
                    <h3 className="subtitle" >Why do we use cookies?</h3>
                    <p>
                        Cookies perform multiple features, including making navigation easier and storing your preferences in order to provide more personalized content and enhance overall user experience.
                </p>
                    <p>We use cookies:</p>
                    <p>
                        <li>To manage your preferences and improve certain features of the Website. This includes collecting information about the date and time of your visit, your search history, and your language preferences.</li>
                        <li>To support our security measures and detect abuses.</li>
                        <li> To analyze the ways in which our Website is accessed, and how it is used. We use this information to support, manage and improve our services.</li>
                        <li>     To provide you with customized ads. Cookies help us manage ads and measure their performance.</li>
                    </p>
                </div>
                <div classname="content">
                    <h3 className="subtitle">3. What types of cookies and other technologies do we use?</h3>
                    <p>
                        Our Website uses the following categories of cookies and technologies:
                </p>
                    <p>
                        <li>
                            Persistent cookies - stored on the user's device between browser sessions, which allow User preferences or actions throughout the Website (and in some cases on different sites) to be saved. Permanent cookies can be used for various purposes, including the preferences and choices of users when using a website or targeting an ad.
                    </li>
                        <li>
                            Session Cookies - allow the Website to link user actions during the browser session. They can be used for various purposes, such as storing user preferences while browsing the Website. They could also be used for security when the user has access to internet banking or to facilitate the use of web-based mail. Session cookies expire after the browser session and are not stored in the longer term.
                    </li>
                        <li>
                            First & Third Party cookies - first party cookies are those placed on the Website that are selected to be visited by the User. Part of the content on the Website may be a third-party vendor (e.g., a video or an ad). These third parties may also set cookies through the Website. These are third-party cookies. Suppliers, third parties, are responsible for complying with the applicable laws and their own cookie policy.
                    </li>
                    </p>
                </div>
                <div classname="content">
                    <h3 className="subtitle">4. How can you delete, disable, or block cookies?</h3>
                    <p>
                        Your browser typically provides you with information on how to delete, block, or opt out of cookies. More information about commonly used browsers can be found.
                </p>
                    <p>For more information about cookies, visit www.allaboutcookies.org.</p>
                    <p>In addition, you can change the settings of your mobile device when it is about seeing an ad content based on your interests.</p>
                    <p>
                        Warning: In case you block the cookies used by our Website, you may not have access to all or part of our services
                </p>
                </div>
                <div classname="content">
                    <h3 className="subtitle">5. Contacts</h3>
                    <p>
                        For further information or to exercise your rights, you can contact us at any time at the following email: info@cactusjaks.bg.
                </p>

                </div>
                <div classname="content">
                    <p>These Terms are adopted by resolution of "CACTUS JAK'S Ltd from 05.05.2015, and take effect from 05.05.2015.</p>
                </div>
            </div>

        </MainContainer>

    )
}
export default CookiePolicy;

const MainContainer = styled.main`
.main-div{
    padding-top:100px;
    padding-left:3em;
    padding-right:3em;
    font-size: 1.5rem;
    color:white

}
#title {
    font-size: 5rem; 
    padding-bottom:3em; 
    font-family:"Times New Roman", Times, serif; 
    font-weight:900;
    color:white

}

.subtitle{
    font-size:2rem;
    padding-top:3em;
    font-family:"Times New Roman", Times, serif; 
    font-weight:900;
    color:white


}
.content{
    margin-top: 7rem;
    color:white
   
}
`