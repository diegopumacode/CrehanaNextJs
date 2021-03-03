import React from 'react'
import styled from 'styled-components';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
  } from 'next-share'
export default function Actions({course}) {
    return (
        <ContentActions className="courseHero__actions">
            <div className="actions">
            <FacebookShareButton
                url={'https://github.com/next-share'}
                quote={course.name}
                hashtag={'#crehana'}
                >
                <FacebookIcon size={25} round/>
                <p>Facebook</p>
            </FacebookShareButton>
            </div>
            <div className="actions">
                <TwitterShareButton
                    url={'https://github.com/next-share'}
                    title={course.name}>
                    <TwitterIcon size={25} round />
                    <p>Twiter</p>
                </TwitterShareButton>
            </div>
            <div className="actions">
                
                <WhatsappShareButton
                url={'https://github.com/next-share'}
                title={'next-share is a social share buttons plugin for React apps.'}
                separator=":: "
                >
                 <WhatsappIcon size={25} round />
                 <p>Whatsapp</p>
                </WhatsappShareButton>
            </div>
        </ContentActions>
    )
}


const ContentActions = styled.div`
    display: flex;
    gap: 52px;
    margin-top: 10px;

    .actions{
        width: 80px;
        height: 54px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        justify-content: center;
        color: #8D8D9D;
        font-weight: bold;
        font-size: 16px;

        @media only screen and (max-width: 969px) {  
            font-size: 14px;
        }
    }

`