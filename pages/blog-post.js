import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const BlogPost = (props) => {
  return (
    <>
      <div className="blog-post-container">
        <Head>
          <title>BlogPost - O primo júnior</title>
          <meta name="description" content="o cara da tecnologia" />
          <meta property="og:title" content="BlogPost - O primo júnior" />
          <meta property="og:description" content="o cara da tecnologia" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b8a12104-24c3-4629-b2c9-d45b8f7a26e7/d3d7bb16-66a6-4aa4-a606-4141583a8c59?org_if_sml=1"
          />
        </Head>
        <div className="blog-post-hero">
          <div className="blog-post-fixed-header">
            <Header rootClassName="header-root-class-name"></Header>
          </div>
          <div className="blog-post-bg"></div>
        </div>
        <div className="blog-post-post-details">
          <div className="blog-post-container1">
            <svg
              viewBox="0 0 1170.2857142857142 1024"
              className="blog-post-icon"
            >
              <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
            </svg>
          </div>
          <span className="blog-post-text">Nosso blog</span>
          <span className="blog-post-text1">
            <span>
              Vou compartilhar alguns conselhos e aprendizados como pessoa
            </span>
            <br></br>
          </span>
          <a
            href="https://blog.primojunior.com/"
            className="blog-post-link button"
          >
            Visitar blog
          </a>
        </div>
        <div className="blog-post-container2"></div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .blog-post-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-hero {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            min-height: 75vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/group-diverse-people-having-business-meeting-1500h.webp');
          }
          .blog-post-fixed-header {
            width: 100%;
            display: flex;
            z-index: 200;
            position: fixed;
            box-shadow: 0px 0px 20px 0px rgba(17, 18, 38, 0.15);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-secondary-300);
          }
          .blog-post-bg {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 474px;
            display: flex;
            opacity: 0.4;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-black);
          }
          .blog-post-post-details {
            width: 95%;
            height: 287px;
            display: flex;
            position: relative;
            max-width: 1320px;
            box-shadow: 0px 10px 15px -10px #626262;
            margin-top: -100px;
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius75);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-secondary-300);
          }
          .blog-post-container1 {
            top: -2rem;
            flex: 0 0 auto;
            left: auto;
            right: auto;
            width: 4rem;
            bottom: auto;
            height: 4rem;
            display: flex;
            position: absolute;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-500);
          }
          .blog-post-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .blog-post-text {
            color: var(--dl-color-gray-white);
            align-self: center;
            margin-top: var(--dl-space-space-tripleunit);
          }
          .blog-post-text1 {
            color: rgb(148, 163, 184);
            align-self: center;
          }
          .blog-post-link {
            color: rgb(0, 0, 0);
            width: 291px;
            height: 90px;
            font-size: 2rem;
            align-self: center;
            font-style: normal;
            margin-top: 34px;
            font-weight: 700;
            margin-left: 54px;
            margin-right: 68px;
            padding-left: 53px;
            margin-bottom: 65px;
            text-decoration: none;
          }
          .blog-post-container2 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: grid;
            grid-template-columns: repeat(12, 1fr);
          }
          @media (max-width: 991px) {
            .blog-post-text1 {
              color: rgb(148, 163, 184);
            }
          }
          @media (max-width: 767px) {
            .blog-post-text {
              color: var(--dl-color-gray-white);
            }
            .blog-post-text1 {
              color: rgb(148, 163, 184);
              text-align: center;
            }
            .blog-post-link {
              color: rgb(0, 0, 0);
              font-size: 2rem;
              font-style: normal;
              font-weight: 700;
              text-decoration: none;
            }
          }
          @media (max-width: 479px) {
            .blog-post-bg {
              height: 510px;
              background-color: transparent;
            }
            .blog-post-text1 {
              text-align: center;
            }
            .blog-post-container2 {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  )
}

export default BlogPost
