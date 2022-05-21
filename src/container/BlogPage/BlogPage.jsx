import React from "react";

import "./BlogPage.css";
import images from "../../constants/images";
import HashTag from "../../constants/HashTag/HashTag";
import ScrollContainer from "react-indiana-drag-scroll";
import SmallPlatesBlogPage from "./SmallPlatesBlogPage/SmallPlatesBlogPage";

class BlogPage extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="BlogPage_main">
        <div className="BlogPage-date">
          <div className="date_label">6 Травня 2022</div>
          <svg
            className="arrow1"
            width="74"
            height="25"
            viewBox="0 0 74 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.5659 21.4112L65.5426 20.9117L65.5659 21.4112ZM72.8937 20.715C73.0979 20.901 73.1126 21.2172 72.9267 21.4213L69.8966 24.7483C69.7107 24.9525 69.3944 24.9672 69.1903 24.7813C68.9861 24.5954 68.9714 24.2791 69.1573 24.075L71.8507 21.1177L68.8934 18.4243C68.6892 18.2383 68.6744 17.9221 68.8604 17.7179C69.0463 17.5138 69.3626 17.499 69.5667 17.6849L72.8937 20.715ZM65.5426 20.9117L72.5337 20.5852L72.5803 21.5841L65.5892 21.9106L65.5426 20.9117ZM0.95314 0.603773C19.402 14.802 42.2881 21.9978 65.5426 20.9117L65.5892 21.9106C42.0984 23.0078 18.9796 15.7388 0.343244 1.39625L0.95314 0.603773Z"
              fill="url(#paint0_linear_1077_567)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1077_567"
                x1="-23.5564"
                y1="120.964"
                x2="49.8026"
                y2="135.803"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7AE8FC" />
                <stop offset="0.494792" stop-color="#9394F2" />
                <stop offset="1" stop-color="#E5BCF8" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            className="arrow2"
            width="71"
            height="30"
            viewBox="0 0 71 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64.7558 5.55416L64.4304 5.1745L64.7558 5.55416ZM70.1085 0.501465C70.3838 0.522673 70.5898 0.763061 70.5686 1.03839L70.223 5.5251C70.2018 5.80042 69.9614 6.00643 69.6861 5.98522C69.4108 5.96401 69.2048 5.72363 69.226 5.4483L69.5332 1.46011L65.545 1.15292C65.2697 1.13171 65.0637 0.891326 65.0849 0.615998C65.1061 0.340673 65.3465 0.134666 65.6218 0.155874L70.1085 0.501465ZM64.4304 5.1745L69.7447 0.620327L70.3954 1.37965L65.0811 5.93383L64.4304 5.1745ZM0.997928 28.8499C24.2773 28.712 46.7535 20.323 64.4304 5.1745L65.0811 5.93383C47.2246 21.2363 24.5199 29.7106 1.00385 29.8499L0.997928 28.8499Z"
              fill="url(#paint0_linear_1077_569)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1077_569"
                x1="55.6346"
                y1="138.86"
                x2="122.624"
                y2="105.481"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7AE8FC" />
                <stop offset="0.494792" stop-color="#9394F2" />
                <stop offset="1" stop-color="#E5BCF8" />
              </linearGradient>
            </defs>
          </svg>

          <div className="date_read">10 хв читання</div>
        </div>
        <div className="BlogPage-text">
          <div className="BlogPage_NavBar"></div>

          <div className="BlogPage-content">
            <div className="blog_picture">
              <img
                src={this.props.mainImage}
                alt={this.props.header}
              />
            </div>
            <div className="blog_name">
              <p>
                {this.props.header}
              </p>
            </div>

            <div className="blog_describe">
              <p>
               {this.props.description}
              </p>
            </div>
            <div className="blog_describe_label">
              <p>-Короткий опис теми</p>
            </div>
            <div className="blog_describe_line"><svg width="1039" height="2" viewBox="0 0 1039 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1.25H1039V0.75H0V1.25Z" fill="black" fill-opacity="0.3"/>
</svg>
</div>
          </div>
        </div>

        <div className="BlogPage-other">
          <div className="other2">
            <div className="other-goBack" onClick={() => window.open("/")}>
              <p>Повернутися назад</p>
              <svg
                className="goBack-Line"
                width="53"
                height="8"
                viewBox="0 0 53 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.646225 3.64645C0.450962 3.84171 0.450962 4.15829 0.646225 4.35355L3.82821 7.53553C4.02347 7.7308 4.34005 7.7308 4.53531 7.53553C4.73058 7.34027 4.73058 7.02369 4.53531 6.82843L1.70689 4L4.53531 1.17157C4.73058 0.976311 4.73058 0.659728 4.53531 0.464466C4.34005 0.269204 4.02347 0.269204 3.82821 0.464466L0.646225 3.64645ZM52.0059 3.5L0.999779 3.5V4.5L52.0059 4.5V3.5Z"
                  fill="url(#paint0_linear_1078_669)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1078_669"
                    x1="45.8851"
                    y1="12"
                    x2="10.6796"
                    y2="-11.7795"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7AE8FC" />
                    <stop offset="0.494792" stop-color="#9394F2" />
                    <stop offset="1" stop-color="#E5BCF8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="BlogPage-search">
              <input
                type="text"
                className="BlogPage-search_input"
                placeholder="PPC, #GoogleAnalitics і т.д"
              />
              <svg
                className="search_but"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="7.32699"
                  cy="7.32699"
                  r="6.82699"
                  stroke="url(#paint0_linear_0_1)"
                />
                <rect
                  x="12.2734"
                  y="11.8164"
                  width="5.30007"
                  height="1.83662"
                  transform="rotate(44.6507 12.2734 11.8164)"
                  fill="url(#paint1_linear_0_1)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_1"
                    x1="2.5"
                    y1="2"
                    x2="12"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A9C9FF" />
                    <stop offset="1" stop-color="#FFBBEC" />
                    <stop offset="1" stop-color="#FFBBEC" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_1"
                    x1="12.2029"
                    y1="12.847"
                    x2="17.8597"
                    y2="12.8814"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFBBEC" />
                    <stop offset="1" stop-color="#FFBBEC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="other_tag_links">
              <ScrollContainer className="BlogPage-Hashtags">
                <HashTag HashTag="Мужская" />
                <HashTag HashTag="Эстетика" />
                <HashTag HashTag="Position" />
              </ScrollContainer>

              <div className="link">
                <ul>
                  <li>
                    <svg
                      className="facebook_linksvg"
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                    >
                      <path
                        className="facebook_link"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.5H5V3.5C5 3.23478 5.10536 2.98043 5.29289 2.79289C5.48043 2.60536 5.73478 2.5 6 2.5H7V0H5C4.20435 0 3.44129 0.31607 2.87868 0.87868C2.31607 1.44129 2 2.20435 2 3V5.5H0V8H2V16H5V8H7L8 5.5Z"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1041_299"
                          x1="7.5"
                          y1="7"
                          x2="-9.49949e-08"
                          y2="13.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#343434" />
                          <stop offset="1" stop-color="#343434" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </li>
                  <li>
                    <svg
                      className="twitter_linksvg"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="twitter_link"
                        d="M16 1.55749C15.3987 1.81786 14.7627 1.98999 14.112 2.06851C14.7985 1.65915 15.313 1.01516 15.56 0.255988C14.9148 0.639302 14.2086 0.90937 13.472 1.05445C12.9796 0.521536 12.324 0.166797 11.6078 0.0458732C10.8917 -0.0750503 10.1556 0.0446811 9.51503 0.386289C8.87443 0.727898 8.36555 1.27206 8.06819 1.93343C7.77084 2.59481 7.70183 3.33598 7.872 4.04072C6.56754 3.97486 5.29155 3.63586 4.12692 3.04572C2.96229 2.45558 1.93508 1.62751 1.112 0.615298C0.82331 1.11847 0.671615 1.68829 0.672 2.26812C0.670976 2.80659 0.803374 3.33696 1.0574 3.81201C1.31143 4.28705 1.67921 4.69203 2.128 4.99089C1.60638 4.97673 1.09591 4.83702 0.64 4.58367V4.6236C0.64391 5.37806 0.908795 6.10802 1.38985 6.69C1.87091 7.27198 2.5386 7.67026 3.28 7.81746C2.9946 7.90415 2.6983 7.94985 2.4 7.9532C2.19351 7.95079 1.98754 7.9321 1.784 7.89731C1.99513 8.54631 2.4037 9.11349 2.95286 9.51992C3.50202 9.92635 4.16446 10.1518 4.848 10.1649C3.69376 11.0714 2.26871 11.5661 0.8 11.5702C0.532588 11.5711 0.265388 11.5551 0 11.5223C1.49954 12.4887 3.24705 13.0017 5.032 12.9995C6.26375 13.0123 7.48571 12.7799 8.62649 12.3161C9.76728 11.8522 10.804 11.1661 11.6762 10.2979C12.5483 9.42965 13.2384 8.39666 13.706 7.25926C14.1737 6.12185 14.4096 4.90284 14.4 3.67342C14.4 3.53768 14.4 3.39396 14.4 3.25023C15.0278 2.78298 15.5692 2.21017 16 1.55749Z"
                        fill="url(#paint0_linear_947_130)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_921_130"
                          x1="15"
                          y1="5.75414e-07"
                          x2="3.27826e-07"
                          y2="13"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#343434" />
                          <stop offset="1" stop-color="#343434" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </li>
                  <li>
                    <svg
                      className="instagram_linksvg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="instagram_link"
                        d="M10.5602 2.64C10.4019 2.64 10.2473 2.68691 10.1157 2.77482C9.98415 2.86272 9.88161 2.98767 9.82106 3.13385C9.76051 3.28003 9.74467 3.44088 9.77553 3.59607C9.8064 3.75125 9.8826 3.8938 9.99448 4.00568C10.1064 4.11756 10.2489 4.19375 10.4041 4.22462C10.5593 4.25549 10.7201 4.23965 10.8663 4.1791C11.0125 4.11855 11.1374 4.01601 11.2253 3.88445C11.3132 3.75289 11.3602 3.59822 11.3602 3.43999C11.3602 3.22782 11.2759 3.02434 11.1258 2.87431C10.9758 2.72428 10.7723 2.64 10.5602 2.64ZM13.6268 4.25333C13.6139 3.70019 13.5103 3.15293 13.3202 2.63333C13.1507 2.18875 12.8868 1.78618 12.5468 1.45333C12.2167 1.11161 11.8132 0.849446 11.3668 0.686662C10.8486 0.490769 10.3007 0.384802 9.74683 0.373328C9.04016 0.333328 8.8135 0.333328 7.00016 0.333328C5.18683 0.333328 4.96016 0.333328 4.2535 0.373328C3.6996 0.384802 3.15172 0.490769 2.6335 0.686662C2.18795 0.851094 1.78479 1.11304 1.4535 1.45333C1.11178 1.78345 0.849614 2.18695 0.686829 2.63333C0.490937 3.15156 0.384969 3.69943 0.373496 4.25333C0.333496 4.95999 0.333496 5.18666 0.333496 7C0.333496 8.81333 0.333496 9.04 0.373496 9.74666C0.384969 10.3006 0.490937 10.8484 0.686829 11.3667C0.849614 11.813 1.11178 12.2165 1.4535 12.5467C1.78479 12.887 2.18795 13.1489 2.6335 13.3133C3.15172 13.5092 3.6996 13.6152 4.2535 13.6267C4.96016 13.6667 5.18683 13.6667 7.00016 13.6667C8.8135 13.6667 9.04016 13.6667 9.74683 13.6267C10.3007 
            13.6152 10.8486 13.5092 11.3668 13.3133C11.8132 13.1505 12.2167 12.8884 12.5468 12.5467C12.8883 12.215 13.1524 11.8121 13.3202 11.3667C13.5103 10.8471 13.6139 10.2998 13.6268 9.74666C13.6268 9.04 13.6668 8.81333 13.6668 7C13.6668 5.18666 13.6668 4.95999 13.6268 4.25333ZM12.4268 9.66666C12.422 10.0898 12.3453 10.5091 12.2002 10.9067C12.0937 11.1968 11.9227 11.4589 11.7002 11.6733C11.4839 11.8937 11.2223 12.0643 10.9335 12.1733C10.536 12.3185 10.1167 12.3951 9.6935 12.4C9.02683 12.4333 8.78016 12.44 7.02683 12.44C5.2735 12.44 5.02683 12.44 4.36016 12.4C3.92076 12.4082 3.48323 12.3406 3.06683 12.2C2.79068 12.0854 2.54107 11.9152 2.3335 11.7C2.11222 11.4858 1.94339 11.2235 1.84016 10.9333C1.6774 10.5301 1.58713 10.1013 1.5735 9.66666C1.5735 9 1.5335 8.75333 1.5335 7C1.5335 5.24666 1.5335 4.99999 1.5735 4.33333C1.57648 3.9007 1.65546 3.47196 1.80683 3.06666C1.92419 2.78527 2.10434 2.53443 2.3335 2.33333C2.53604 2.10411 2.78635 1.92206 3.06683 1.79999C3.4732 1.65336 3.90149 1.57671 4.3335 1.57333C5.00016 1.57333 5.24683 1.53333 7.00016 1.53333C8.7535 1.53333 9.00016 1.53333 9.66683 1.57333C10.09 1.57818 10.5093 1.65483 10.9068 1.79999C11.2098 1.91243 11.4817 2.09523 11.7002 2.33333C11.9186 2.53811 12.0893 2.78848 12.2002 3.06666C12.3483 3.47262 12.425 3.90118 12.4268 4.33333C12.4602 4.99999 12.4668 5.24666 12.4668 7C12.4668 8.75333 12.4602 9 12.4268 9.66666ZM7.00016 
            3.57999C6.32404 3.58131 5.66347 3.78301 5.10193 4.15961C4.54039 4.5362 4.10308 5.07079 3.84525 5.69583C3.58742 6.32087 3.52065 7.00831 3.65336 7.67128C3.78607 8.33426 4.11232 8.94302 4.59088 9.42065C5.06944 9.89828 5.67884 10.2233 6.34207 10.3548C7.0053 10.4862 7.69261 10.4181 8.31714 10.159C8.94168 9.89997 9.47542 9.46162 9.85092 8.89935C10.2264 8.33708 10.4268 7.67612 10.4268 7C10.4277 6.55007 10.3396 6.1044 10.1677 5.68863C9.99568 5.27287 9.7432 4.8952 9.42474 4.57736C9.10628 4.25952 8.72813 4.00778 8.31203 3.83661C7.89593 3.66545 7.45009 3.57824 7.00016 3.57999ZM7.00016 9.22C6.56109 9.22 6.13187 9.08979 5.7668 8.84586C5.40172 8.60192 5.11718 8.2552 4.94915 7.84955C4.78112 7.4439 4.73716 6.99753 4.82282 6.56689C4.90848 6.13626 5.11991 5.74069 5.43039 5.43022C5.74086 5.11975 6.13642 4.90831 6.56706 4.82265C6.9977 4.73699 7.44407 4.78096 7.84972 4.94898C8.25537 5.11701 8.60209 5.40155 8.84603 5.76663C9.08996 6.13171 9.22016 6.56092 9.22016 7C9.22016 7.29153 9.16274 7.58021 9.05118 7.84955C8.93961 8.1189 8.77609 8.36363 8.56994 8.56977C8.36379 8.77592 8.11906 8.93944 7.84972 9.05101C7.58038 9.16257 7.2917 9.22 7.00016 9.22Z"
                        fill="url(#paint0_linear_947_132)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_933_132"
                          x1="13.5005"
                          y1="1"
                          x2="0.000488639"
                          y2="13.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#343434" />
                          <stop offset="0.520833" stop-color="#343434" />
                          <stop offset="1" stop-color="#343434" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile">
              <div className="logo_name">
                <img className="profile_logo" />
                <div className="profile_name"><p>{this.props.profileName}</p></div>
              </div>
              <div className="subscriber_count">
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.10822 0.507659L4.10817 0.507678C4.03401 0.534195 3.90913 0.621319 3.77103 0.830181C3.63715 1.03265 3.51475 1.31495 3.43051 1.66028M4.10822 0.507659L4.00448 2.85696C3.8592 2.82626 3.7606 2.77694 3.6127 2.63048L3.6127 2.63048C3.47953 2.49861 3.4173 2.38117 3.39007 2.25679C3.36081 2.12315 3.3627 1.93826 3.43051 1.66028M4.10822 0.507659C4.10822 0.50766 4.1348 0.500178 4.18398 0.503533C4.23132 0.506764 4.26969 0.51812 4.2896 0.527511L4.50269 0.0757466M4.10822 0.507659L4.50269 0.0757466M3.43051 1.66028L2.94475 1.54178L3.43051 1.66028ZM4.50269 0.0757466L4.2896 0.527512M4.50269 0.0757466L4.2896 0.527512M8.04619 2.85129L8.04623 2.85128C8.3166 2.76107 8.51954 2.55092 8.59348 2.3167L8.04619 2.85129ZM8.04619 2.85129C8.04629 2.85126 8.04065 2.85309 8.02806 2.85564M8.04619 2.85129L8.02806 2.85564M6.59787 1.5756L7.08373 1.69365C7.02533 1.93402 7.03458 2.20692 7.06919 2.31667C7.14401 2.55374 7.35644 2.76603 7.59553 2.84106L6.59787 1.5756ZM6.59787 1.5756L7.08373 1.69365C7.21537 1.15184 7.42483 0.780928 7.6036 0.618023L6.59787 1.5756ZM8.04664 0.603908L8.04663 0.603899C7.99982 0.56028 7.93942 0.527336 7.8803 0.510946C7.85168 0.503011 7.82762 0.500153 7.80978 0.500006C7.79247 0.499864 7.78458 0.502263 7.78458 0.502257L7.78461 0.502245M8.04664 0.603908L7.70521 0.535583C7.71746 0.528087 7.73537 0.518521 7.78461 0.502245M8.04664 0.603908C8.21778 0.763379 8.40016 1.08097 8.51532 1.45691M8.04664 0.603908L8.51532 1.45691M7.78461 0.502245C7.78464 0.502237 7.78467 0.502228 7.78469 0.502219L7.62782 0.0275242L7.78461 0.502245ZM1.23611 3.61916L1.23606 3.61918C1.16191 3.6457 1.03702 3.73282 0.898921 3.94169C0.765046 4.14416 0.642643 4.42646 0.558397 4.77179M1.23611 3.61916L0.558397 4.77179M1.23611 3.61916C1.23611 3.61916 1.2627 3.61168 1.31187 3.61504C1.35921 3.61827 1.39758 3.62962 1.41749 3.63901L1.41749 3.63902C1.48932 3.6729 1.60886 3.7717 1.73877 3.98039C1.86403 4.1816 1.97723 4.45102 2.05466 4.76684L1.23611 3.61916ZM0.558397 4.77179C0.49059 5.04975 0.488705 5.23465 0.517964 5.36829C0.545196 5.49267 0.607417 5.61011 0.740585 5.74198L0.558397 4.77179ZM10.6213 3.61916L10.6213 3.61918C10.5471 3.6457 10.4223 3.73282 10.2842 3.94169C10.1503 4.14416 10.0279 4.42646 9.94363 4.77179C9.87582 5.04975 9.87394 5.23465 9.9032 5.36829C9.93043 5.49267 9.99265 5.61011 10.1258 5.74198L10.6213 3.61916ZM10.6213 3.61916C10.6213 3.61916 10.6479 3.61168 10.6971 3.61504C10.7444 3.61827 10.7828 3.62962 10.8027 3.63901L11.016 3.1868M10.6213 3.61916L11.016 3.1868M11.2576 5.74241L11.2576 5.74241C11.3939 5.60707 11.4558 5.48967 11.4825 5.3668C11.5114 5.23417 11.5092 5.04945 11.4399 4.76685L11.2576 5.74241ZM11.2576 5.74241C11.1104 5.88852 11.0122 5.9377 10.8666 5.96846C10.5822 6.02856 10.3476 5.96156 10.1258 5.74199L11.2576 5.74241ZM11.016 3.1868L10.8027 3.63902C10.8745 3.6729 10.9941 3.7717 11.124 3.98039C11.2493 4.1816 11.3625 4.45102 11.4399 4.76684L11.016 3.1868ZM5.70599 4.22901L5.70597 4.22902C5.02137 4.3234 4.39624 4.91172 4.23644 5.67959C4.21804 5.76799 4.20422 5.8958 4.20405 5.94043L4.20405 5.94055C4.20283 6.23362 4.1393 6.51796 3.96986 6.76327L3.96983 6.76331C3.81025 6.9943 3.63077 7.11865 3.37553 7.23084C3.14423 7.3325 2.85124 7.57043 2.69385 7.78939L2.69383 7.78942C2.66164 7.8342 2.58608 7.9639 2.53915 8.06264C2.23445 8.70397 2.36281 9.4664 2.86199 9.974C3.14233 10.2591 3.42509 10.4075 3.81001 10.4747L3.81004 10.4747C4.11154 10.5273 4.37176 10.5039 4.79199 10.3485L4.792 10.3485C5.01053 10.2677 5.1845 10.2087 5.36141 10.1737C5.54419 10.1375 5.71031 10.1309 5.90906 10.1309C6.10723 10.1309 6.27295 10.1376 6.45483 10.1733C6.63114 10.2079 6.80403 10.2663 7.02048 10.3461L7.0205 10.3461C7.23 10.4233 7.32451 10.4527 7.40482 10.4679C7.48032 10.4822 7.56131 10.4873 7.74964 10.4864H7.74966C7.91748 10.4855 8.0129 10.4774 8.09416 10.4613C8.17444 10.4455 8.26138 10.4178 8.4078 10.357C8.4078 10.357 8.4078 10.357 8.40781 10.357M5.70599 4.22901L8.59948 10.8188L8.40781 10.357M5.70599 4.22901C6.0107 4.18699 6.42535 4.27186 6.73241 4.45444M5.70599 4.22901L6.73241 4.45444M8.40781 10.357C8.67455 10.2463 8.98361 9.99395 9.1399 9.76235L9.13991 9.76234C9.48879 9.2454 9.5372 8.60615 9.27895 8.06261L9.27894 8.06259C9.17699 7.84799 9.08395 7.71923 8.91848 7.56086C8.75581 7.40517 8.6854 7.35521 8.45282 7.23981L8.40781 10.357ZM7.85084 6.7768L7.85081 6.77676C7.6769 6.52655 7.63705 6.29294 7.61407 5.96181L7.61407 5.96178C7.58846 5.59241 7.48592 5.28687 7.29942 5.00269L7.85084 6.7768ZM7.85084 6.7768C8.00781 7.00259 8.18551 7.10719 8.45281 7.23981L7.85084 6.7768ZM4.2896 0.527512C4.36142 0.561391 4.48097 0.660192 4.61088 0.868888M4.2896 0.527512L4.61088 0.868888M4.61088 0.868888C4.73614 1.0701 4.84933 1.33952 4.92677 1.65534L4.61088 0.868888ZM8.02806 2.85564C8.01583 2.85812 7.99975 2.86073 7.97989 2.86302M8.02806 2.85564L7.97989 2.86302M7.97989 2.86302C7.93974 2.86766 7.89133 2.87019 7.83917 2.86968M7.97989 2.86302L7.83917 2.86968M7.83917 2.86968C7.72724 2.86858 7.63708 2.85407 7.5956 2.84108L7.83917 2.86968ZM8.51532 1.45691C8.63311 1.84146 8.64249 2.16132 8.59349 2.31666L8.51532 1.45691ZM6.73241 4.45444C6.79963 4.49441 6.91259 4.58327 7.03454 4.70091C7.1558 4.81788 7.25217 4.9307 7.2994 5.00265L6.73241 4.45444ZM1.48141 5.96847C1.19698 6.02856 0.962339 5.96156 0.740592 5.74199L2.09728 5.3668C2.07052 5.48967 2.00868 5.60707 1.87234 5.74241L1.87233 5.74241C1.72514 5.88852 1.62701 5.9377 1.48142 5.96846L1.58477 6.45767L1.48141 5.96847ZM5.90906 10.6309C6.28429 10.6309 6.41944 10.6575 6.84758 10.8152L4.96536 10.8175C5.3983 10.6575 5.53259 10.6309 5.90906 10.6309ZM4.74445 2.6309C4.52392 2.84979 4.28928 2.91712 4.0045 2.85696L4.92677 1.65535C4.99606 1.93795 4.99828 2.12266 4.96939 2.25529C4.94263 2.37817 4.88079 2.49557 4.74445 2.6309Z"
                    stroke="#343434"
                    stroke-opacity="0.6"
                  />
                </svg>
                &nbsp;
                <p>{this.props.subscribers}</p>
              </div>
              <div className="profile_describe">
                <p>{this.props.profileDescription}</p>
              </div>
              <button className="profile_subscribe">
                Стати{" "}
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.85146 6.05572C7.59676 5.95037 7.43219 5.70424 7.43219 5.42855C7.43219 4.27712 6.51344 3.30432 5.42597 3.30432C4.33849 3.30432 3.41975 4.27712 3.41975 5.42855C3.41975 5.70422 3.25518 5.9505 3.00048 6.05582C2.25161 6.36572 1.76758 7.09223 1.76758 7.9068C1.76758 9.01304 2.66766 9.91301 3.7738 9.91301C4.05339 9.91301 4.3242 9.85644 4.57913 9.74475C5.11735 9.50884 5.73436 9.50848 6.27304 9.74488C6.52774 9.85644 6.79855 9.91301 7.07814 9.91301C8.18428 9.91301 9.08436 9.01306 9.08436 7.9068C9.08436 7.09211 8.60031 6.36548 7.85146 6.05572Z"
                    fill="white"
                  />
                  <path
                    d="M3.77973 0C3.01311 0 2.59961 1.3402 2.59961 1.88821C2.59961 2.53887 3.12906 3.06833 3.77973 3.06833C4.4304 3.06833 4.95985 2.53887 4.95985 1.88821C4.95985 1.3402 4.54635 0 3.77973 0Z"
                    fill="white"
                  />
                  <path
                    d="M7.08246 0C6.31585 0 5.90234 1.3402 5.90234 1.88821C5.90234 2.53887 6.4318 3.06833 7.08246 3.06833C7.73313 3.06833 8.26259 2.53887 8.26259 1.88821C8.26259 1.3402 7.84908 0 7.08246 0Z"
                    fill="white"
                  />
                  <path
                    d="M1.18012 2.83231C0.413526 2.83231 0 4.17251 0 4.72052C0 5.37118 0.529455 5.90064 1.18012 5.90064C1.83079 5.90064 2.36024 5.37118 2.36024 4.72052C2.36024 4.17251 1.94674 2.83231 1.18012 2.83231Z"
                    fill="white"
                  />
                  <path
                    d="M9.67426 2.83228C8.90764 2.83228 8.49414 4.17248 8.49414 4.72046C8.49414 5.37113 9.0236 5.90058 9.67426 5.90058C10.3249 5.90058 10.8544 5.37113 10.8544 4.72046C10.8544 4.17248 10.4409 2.83228 9.67426 2.83228Z"
                    fill="white"
                  />
                </svg>
              </button>
              <svg
                className="border_line"
                width="411"
                height="2"
                viewBox="0 0 411 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.25H411V0.75H0V1.25Z"
                  fill="black"
                  fill-opacity="0.3"
                />
              </svg>
            </div>
            <div className="recomendation">
              <div className="rec_first"><p>Ми підібрали вам дещо:</p></div>
              <div className="rec_second"><p>*по секретній формулі</p></div>
              
              <SmallPlatesBlogPage
                logo="data:image/jpeg;base64,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"
                hashtag="Гачи"
                name="I love penises"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPage;
