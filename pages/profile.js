import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import PrimaryButton from '../components/primary-button'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'

const Profile = (props) => {
  return (
    <>
      <div className="profile-container">
        <Head>
          <title>Profile - O primo júnior</title>
          <meta name="description" content="o cara da tecnologia" />
          <meta property="og:title" content="Profile - O primo júnior" />
          <meta property="og:description" content="o cara da tecnologia" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b8a12104-24c3-4629-b2c9-d45b8f7a26e7/d3d7bb16-66a6-4aa4-a606-4141583a8c59?org_if_sml=1"
          />
        </Head>
        <div className="profile-image">
          <Header></Header>
          <img alt="image" src="/gray-vector.svg" className="profile-image1" />
          <div className="profile-bg"></div>
        </div>
        <div className="profile-container01">
          <div className="profile-container02">
            <div className="profile-container03"></div>
            <img
              alt="image"
              src="/img_20220824_110123-200h.jpg"
              className="profile-image2"
            />
            <div className="profile-container04">
              <div className="profile-container05">
                <a
                  href="https://www.instagram.com/oprimojunior/"
                  className="profile-link"
                >
                  <PrimaryButton
                    button="conectar"
                    className="profile-component1"
                  ></PrimaryButton>
                </a>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=5511967272695"
                target="_blank"
                rel="noreferrer noopener"
                className="profile-link1"
              >
                <SecondaryButton
                  button="Mensagem"
                  className="profile-component2"
                ></SecondaryButton>
              </a>
            </div>
          </div>
          <div className="profile-container06">
            <h3 className="profile-text Text2XL">O primo júnior</h3>
            <div className="profile-container07">
              <svg viewBox="0 0 1024 1024" className="profile-icon">
                <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
              </svg>
              <span className="profile-text01 TextSM">São Paulo - SP</span>
            </div>
            <div className="profile-container08">
              <svg viewBox="0 0 1024 1024" className="profile-icon2">
                <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="profile-text02">empreendedor</span>
            </div>
            <div className="profile-container09"></div>
            <span className="profile-text03">
              <span className="profile-text04">Sou natural de Jaru-ro</span>
              <br></br>
              <span>cheguei em são Paulo em 2017</span>
              <br></br>
              <span>de lá pra cá venho buscando  me aperfeiçoar</span>
              <br></br>
            </span>
            <span className="profile-text10">Ler mais</span>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .profile-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f2f5f9ff;
          }
          .profile-image {
            flex: 0 0 auto;
            width: 100%;
            height: 500px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/img-empreender-em-sao-paulo-o-que-voce-precisa-saber-sobre-o-assunto1-1500w.jpg');
          }
          .profile-image1 {
            left: auto;
            right: auto;
            width: 100%;
            bottom: -1px;
            z-index: 100;
            position: absolute;
            object-fit: cover;
          }
          .profile-bg {
            top: auto;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            display: flex;
            opacity: 0.5;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-container01 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            z-index: 100;
            max-width: 1320px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            margin-top: -12rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .profile-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-around;
          }
          .profile-container03 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .profile-image2 {
            top: -60%;
            left: 0px;
            right: 0px;
            width: 150px;
            bottom: auto;
            margin: auto;
            position: absolute;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .profile-container04 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-container05 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .profile-link {
            display: contents;
          }
          .profile-component1 {
            text-decoration: none;
          }
          .profile-link1 {
            display: contents;
          }
          .profile-component2 {
            text-decoration: none;
          }
          .profile-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .profile-text {
            color: var(--dl-color-secondary-300);
          }
          .profile-container07 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-icon {
            fill: var(--dl-color-secondary-500);
            width: 18px;
            height: 18px;
          }
          .profile-text01 {
            color: var(--dl-color-secondary-500);
            font-weight: 600;
            margin-left: var(--dl-space-space-halfunit);
          }
          .profile-container08 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-icon2 {
            fill: var(--dl-color-secondary-500);
            width: 18px;
            height: 18px;
          }
          .profile-text02 {
            color: var(--dl-color-secondary-500);
            margin-left: var(--dl-space-space-halfunit);
          }
          .profile-container09 {
            flex: 0 0 auto;
            width: 90%;
            height: 0.5px;
            display: flex;
            opacity: 0.5;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .profile-text03 {
            width: 75%;
            font-size: 1.125rem;
            text-align: center;
            font-weight: 300;
            line-height: 1.625;
            margin-bottom: var(--dl-space-space-unit);
          }
          .profile-text04 {
            width: 75%;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .profile-text10 {
            color: var(--dl-color-pimary-500);
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
          }
          .profile-text10:hover {
            color: var(--dl-color-pimary-300);
          }
          @media (max-width: 991px) {
            .profile-container02 {
              flex-direction: column;
            }
            .profile-container03 {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 479px) {
            .profile-container06 {
              margin-left: 6px;
              margin-right: 6px;
            }
            .profile-text02 {
              color: var(--dl-color-secondary-500);
            }
            .profile-text03 {
              color: var(--dl-color-secondary-300);
              font-size: 1.125rem;
              margin-top: 6px;
              font-weight: 300;
              line-height: 1.625;
              margin-left: 6px;
              margin-right: 6px;
            }
            .profile-text10 {
              color: var(--dl-color-pimary-500);
              font-style: normal;
              font-weight: 500;
            }
          }
        `}
      </style>
    </>
  )
}

export default Profile
