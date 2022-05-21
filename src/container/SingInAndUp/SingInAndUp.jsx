import React from 'react'

import './SingInAndUp.css';
import images from '../../constants/images';

class SingInAndUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSignin: true
    }
  }




  render() {

    return (
      <>
        {this.state.isSignin &&
          <div className='blog__singin'>
            <svg className='cumfeti' width="1897" height="1054" viewBox="0 0 1897 1054" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.76" x="257.332" y="26.9443" width="2.55" height="12.75" rx="1.275" transform="rotate(69 257.332 26.9443)" fill="#635EE2" />
              <rect opacity="0.88" x="596.668" y="38.9443" width="3.24" height="16.2" rx="1.62" transform="rotate(37 596.668 38.9443)" fill="#635EE2" />
              <rect opacity="0.79" x="724" y="76.9443" width="2.91" height="14.55" rx="1.455" transform="rotate(107 724 76.9443)" fill="#A8DBFA" />
              <rect opacity="0.72" x="1111.67" y="76.9443" width="3.48" height="17.4" rx="1.74" transform="rotate(162 1111.67 76.9443)" fill="#635EE2" />
              <rect opacity="0.96" x="1463" y="1.94434" width="3.57" height="17.85" rx="1.785" transform="rotate(-33 1463 1.94434)" fill="#635EE2" />
              <rect opacity="0.73" x="1675.33" y="69.9443" width="3.12" height="15.6" rx="1.56" transform="rotate(129 1675.33 69.9443)" fill="#635EE2" />
              <rect opacity="0.87" x="1879.67" y="26.9443" width="2.25" height="11.25" rx="1.125" transform="rotate(140 1879.67 26.9443)" fill="#D3F5CF" />
              <rect opacity="0.87" x="12" y="199.944" width="2.13" height="10.65" rx="1.065" transform="rotate(-150 12 199.944)" fill="#D3F5CF" />
              <rect opacity="0.85" x="236.332" y="186.944" width="2.25" height="11.25" rx="1.125" transform="rotate(-98 236.332 186.944)" fill="#D3F5CF" />
              <rect opacity="0.86" x="507.668" y="213.944" width="3.45" height="17.25" rx="1.725" transform="rotate(161 507.668 213.944)" fill="#D3F5CF" />
              <rect opacity="0.95" x="708" y="130.944" width="1.92" height="9.6" rx="0.96" transform="rotate(-27 708 130.944)" fill="#635EE2" />
              <rect opacity="0.78" x="919.332" y="159.944" width="2.19" height="10.95" rx="1.095" transform="rotate(-43 919.332 159.944)" fill="#A8DBFA" />
              <rect opacity="0.92" x="1224.67" y="196.944" width="3" height="15" rx="1.5" transform="rotate(8 1224.67 196.944)" fill="#D3F5CF" />
              <rect opacity="0.94" x="1464" y="211.944" width="3.09" height="15.45" rx="1.545" transform="rotate(109 1464 211.944)" fill="#635EE2" />
              <rect opacity="0.75" x="1602.33" y="143.944" width="2.91" height="14.55" rx="1.455" transform="rotate(71 1602.33 143.944)" fill="#D3F5CF" />
              <rect opacity="0.92" x="1797.67" y="189.944" width="2.91" height="14.55" rx="1.455" transform="rotate(49 1797.67 189.944)" fill="#A8DBFA" />
              <rect opacity="0.8" x="62" y="239.944" width="3.57" height="17.85" rx="1.785" transform="rotate(-101 62 239.944)" fill="#D3F5CF" />
              <rect opacity="0.7" x="294.332" y="315.944" width="3" height="15" rx="1.5" transform="rotate(177 294.332 315.944)" fill="#A8DBFA" />
              <rect opacity="0.88" x="468.668" y="293.944" width="2.58" height="12.9" rx="1.29" transform="rotate(4 468.668 293.944)" fill="#D3F5CF" />
              <rect opacity="0.97" x="1233.67" y="247.944" width="2.01" height="10.05" rx="1.005" transform="rotate(171 1233.67 247.944)" fill="#D3F5CF" />
              <rect opacity="0.94" x="1334" y="306.944" width="3.12" height="15.6" rx="1.56" transform="rotate(-91 1334 306.944)" fill="#D3F5CF" />
              <rect opacity="0.73" x="1490.33" y="222.944" width="2.7" height="13.5" rx="1.35" transform="rotate(-33 1490.33 222.944)" fill="#D3F5CF" />
              <rect opacity="0.85" x="1832.67" y="309.944" width="3.48" height="17.4" rx="1.74" transform="rotate(24 1832.67 309.944)" fill="#A8DBFA" />
              <rect x="180" y="441.944" width="2.7" height="13.5" rx="1.35" transform="rotate(94 180 441.944)" fill="#D3F5CF" />
              <rect opacity="0.84" x="200.332" y="381.944" width="2.52" height="12.6" rx="1.26" transform="rotate(148 200.332 381.944)" fill="#635EE2" />
              <rect opacity="0.93" x="443.668" y="447.944" width="2.85" height="14.25" rx="1.425" transform="rotate(23 443.668 447.944)" fill="#A8DBFA" />
              <rect opacity="0.89" x="1372" y="409.944" width="2.82" height="14.1" rx="1.41" transform="rotate(-92 1372 409.944)" fill="#A8DBFA" />
              <rect opacity="0.83" x="1534.33" y="360.944" width="1.95" height="9.75" rx="0.975" transform="rotate(-37 1534.33 360.944)" fill="#635EE2" />
              <rect opacity="0.75" x="1724.67" y="388.944" width="2.1" height="10.5" rx="1.05" transform="rotate(86 1724.67 388.944)" fill="#D3F5CF" />
              <rect opacity="0.95" x="87" y="574.944" width="2.43" height="12.15" rx="1.215" transform="rotate(-131 87 574.944)" fill="#A8DBFA" />
              <rect opacity="0.85" x="388.332" y="486.944" width="2.67" height="13.35" rx="1.335" transform="rotate(165 388.332 486.944)" fill="#D3F5CF" />
              <rect opacity="0.98" x="596.668" y="547.944" width="2.1" height="10.5" rx="1.05" transform="rotate(79 596.668 547.944)" fill="#A8DBFA" />
              <rect opacity="0.88" x="1412" y="576.944" width="2.82" height="14.1" rx="1.41" transform="rotate(-118 1412 576.944)" fill="#A8DBFA" />
              <rect opacity="0.71" x="1529.33" y="530.944" width="3.6" height="18" rx="1.8" transform="rotate(58 1529.33 530.944)" fill="#A8DBFA" />
              <rect opacity="0.85" x="1894.67" y="503.944" width="1.95" height="9.75" rx="0.975" transform="rotate(42 1894.67 503.944)" fill="#A8DBFA" />
              <rect opacity="0.97" x="154" y="680.944" width="3.21" height="16.05" rx="1.605" transform="rotate(-7 154 680.944)" fill="#635EE2" />
              <rect opacity="0.78" x="275.332" y="600.944" width="3.27" height="16.35" rx="1.635" transform="rotate(-140 275.332 600.944)" fill="#D3F5CF" />
              <rect opacity="0.84" x="483.668" y="609.944" width="3.21" height="16.05" rx="1.605" transform="rotate(59 483.668 609.944)" fill="#635EE2" />
              <rect opacity="0.82" x="1328" y="610.944" width="2.04" height="10.2" rx="1.02" transform="rotate(155 1328 610.944)" fill="#D3F5CF" />
              <rect opacity="0.73" x="1566.33" y="627.944" width="3.42" height="17.1" rx="1.71" transform="rotate(94 1566.33 627.944)" fill="#635EE2" />
              <rect opacity="0.8" x="1727.67" y="654.944" width="1.89" height="9.45" rx="0.945" transform="rotate(117 1727.67 654.944)" fill="#635EE2" />
              <rect opacity="0.91" y="754.944" width="2.22" height="11.1" rx="1.11" transform="rotate(-90 0 754.944)" fill="#A8DBFA" />
              <rect opacity="0.81" x="239.332" y="763.944" width="2.28" height="11.4" rx="1.14" transform="rotate(60 239.332 763.944)" fill="#D3F5CF" />
              <rect opacity="0.96" x="557.668" y="721.944" width="2.97" height="14.85" rx="1.485" transform="rotate(73 557.668 721.944)" fill="#A8DBFA" />
              <rect opacity="0.93" x="1270" y="795.944" width="2.7" height="13.5" rx="1.35" fill="#D3F5CF" />
              <rect opacity="0.72" x="1681.33" y="714.944" width="2.7" height="13.5" rx="1.35" transform="rotate(-127 1681.33 714.944)" fill="#D3F5CF" />
              <rect opacity="0.83" x="1718.67" y="705.944" width="3.03" height="15.15" rx="1.515" transform="rotate(-30 1718.67 705.944)" fill="#D3F5CF" />
              <rect opacity="0.76" x="157" y="898.944" width="3.51" height="17.55" rx="1.755" transform="rotate(-74 157 898.944)" fill="#A8DBFA" />
              <rect opacity="0.71" x="231.332" y="908.944" width="3.54" height="17.7" rx="1.77" transform="rotate(151 231.332 908.944)" fill="#D3F5CF" />
              <rect opacity="0.7" x="540.668" y="935.944" width="3.6" height="18" rx="1.8" transform="rotate(-31 540.668 935.944)" fill="#635EE2" />
              <rect opacity="0.99" x="681" y="921.944" width="2.79" height="13.95" rx="1.395" transform="rotate(7 681 921.944)" fill="#D3F5CF" />
              <rect opacity="0.77" x="859.332" y="839.944" width="3.03" height="15.15" rx="1.515" transform="rotate(-133 859.332 839.944)" fill="#635EE2" />
              <rect opacity="0.87" x="1097.67" y="856.944" width="2.82" height="14.1" rx="1.41" transform="rotate(-61 1097.67 856.944)" fill="#A8DBFA" />
              <rect opacity="0.8" x="1375" y="826.944" width="2.28" height="11.4" rx="1.14" transform="rotate(46 1375 826.944)" fill="#D3F5CF" />
              <rect opacity="0.94" x="1604.33" y="849.944" width="2.28" height="11.4" rx="1.14" transform="rotate(-56 1604.33 849.944)" fill="#A8DBFA" />
              <rect opacity="0.73" x="1878.67" y="880.944" width="1.95" height="9.75" rx="0.975" transform="rotate(164 1878.67 880.944)" fill="#D3F5CF" />
              <rect opacity="0.9" x="36" y="974.944" width="1.8" height="9" rx="0.9" transform="rotate(17 36 974.944)" fill="#635EE2" />
              <rect opacity="0.74" x="231.332" y="1044.94" width="2.7" height="13.5" rx="1.35" transform="rotate(-169 231.332 1044.94)" fill="#635EE2" />
              <rect opacity="0.81" x="515.668" y="1048.94" width="3" height="15" rx="1.5" transform="rotate(83 515.668 1048.94)" fill="#635EE2" />
              <rect opacity="0.73" x="701" y="992.944" width="2.04" height="10.2" rx="1.02" transform="rotate(98 701 992.944)" fill="#D3F5CF" />
              <rect opacity="0.86" x="865.332" y="1007.94" width="2.76" height="13.8" rx="1.38" transform="rotate(170 865.332 1007.94)" fill="#635EE2" />
              <rect opacity="0.7" x="1198.67" y="1008.94" width="3.33" height="16.65" rx="1.665" transform="rotate(-144 1198.67 1008.94)" fill="#A8DBFA" />
              <rect opacity="0.9" x="1330" y="981.944" width="2.88" height="14.4" rx="1.44" transform="rotate(118 1330 981.944)" fill="#635EE2" />
              <rect opacity="0.91" x="1640.33" y="1034.94" width="2.37" height="11.85" rx="1.185" transform="rotate(179 1640.33 1034.94)" fill="#A8DBFA" />
              <rect opacity="0.79" x="1846.67" y="1003.94" width="2.91" height="14.55" rx="1.455" transform="rotate(-43 1846.67 1003.94)" fill="#D3F5CF" />
            </svg>
            <div className='singin_screen'>
              <div className='singin_text'>
                <p className='singin_Review'>Привіт! Раді вас бачити</p>
                <p className='singin_First'>Зареєструйтеся або увійдіть в аккаунт</p>
                <div className='regbottom'>
                  <div className="singin_name">
                    <input
                      type="text"
                      className="singin_name_input"
                      placeholder="Ваш email"
                    />
                  </div>
                  <div className="singin_password">
                    <input
                      type="text"
                      className="singin_password_input"
                      placeholder="Ваш пароль"
                    />
                  </div>
                </div>
                <div className='bot'>
                  <button className="profile_enter">Увійти</button>
                  <button className='botgoogle'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9745 8.34512C15.9745 7.79471 15.9212 7.22656 15.8324 6.69391H8.14453V9.83653H12.5478C12.3702 10.8486 11.7843 11.7363 10.9143 12.3045L13.542 14.3463C15.0867 12.9081 15.9745 10.8131 15.9745 8.34512Z" fill="white" />
                    <path d="M8.14671 16.2994C10.3483 16.2994 12.1948 15.5714 13.5442 14.3286L10.9165 12.3045C10.1885 12.8016 9.24752 13.0857 8.14671 13.0857C6.01612 13.0857 4.22287 11.6476 3.56594 9.73004L0.867188 11.8074C2.25207 14.5594 5.05735 16.2994 8.14671 16.2994Z" fill="white" />
                    <path d="M3.5643 9.71226C3.22696 8.70023 3.22696 7.59942 3.5643 6.58739L0.865553 4.49231C-0.288518 6.80045 -0.288518 9.51695 0.865553 11.8073L3.5643 9.71226Z" fill="white" />
                    <path d="M8.14671 3.23171C9.30078 3.21395 10.4371 3.65783 11.2716 4.4568L13.5975 2.11315C12.1238 0.728262 10.1708 -0.0174451 8.14671 0.000309875C5.05735 0.000309875 2.25207 1.74029 0.867188 4.49231L3.56594 6.58739C4.22287 4.6521 6.01612 3.23171 8.14671 3.23171Z" fill="white" />
                  </svg>
                  </button>
                  <button className='botfacebook'><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 5.5H5V3.5C5 3.23478 5.10536 2.98043 5.29289 2.79289C5.48043 2.60536 5.73478 2.5 6 2.5H7V0H5C4.20435 0 3.44129 0.31607 2.87868 0.87868C2.31607 1.44129 2 2.20435 2 3V5.5H0V8H2V16H5V8H7L8 5.5Z" fill="white" />
                  </svg>
                  </button>
                </div>
              </div>
              <div className='registration' onClick={() => this.state.isSignin === false ? this.setState({ isSignin: true }) : this.setState({ isSignin: false })}> <p>{this.state.isSignin === true ? 'ЗАРЕЄСТРУВАТИСЯ' : 'УВІЙТИ'}</p> </div>
            </div>
            <div className='singin_blur'>
              <div className='elipse1'></div>
              <div className='elipse2'></div>
              <div className='elipse3'></div>
              <div className='elipse4'></div>
            </div>
          </div>
        }
        {!this.state.isSignin &&
          <div className='blog__registr'>
            <svg className='cumfeti_registr' width="1897" height="1054" viewBox="0 0 1897 1054" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.76" x="257.332" y="26.9443" width="2.55" height="12.75" rx="1.275" transform="rotate(69 257.332 26.9443)" fill="#635EE2" />
              <rect opacity="0.88" x="596.668" y="38.9443" width="3.24" height="16.2" rx="1.62" transform="rotate(37 596.668 38.9443)" fill="#635EE2" />
              <rect opacity="0.79" x="724" y="76.9443" width="2.91" height="14.55" rx="1.455" transform="rotate(107 724 76.9443)" fill="#A8DBFA" />
              <rect opacity="0.72" x="1111.67" y="76.9443" width="3.48" height="17.4" rx="1.74" transform="rotate(162 1111.67 76.9443)" fill="#635EE2" />
              <rect opacity="0.96" x="1463" y="1.94434" width="3.57" height="17.85" rx="1.785" transform="rotate(-33 1463 1.94434)" fill="#635EE2" />
              <rect opacity="0.73" x="1675.33" y="69.9443" width="3.12" height="15.6" rx="1.56" transform="rotate(129 1675.33 69.9443)" fill="#635EE2" />
              <rect opacity="0.87" x="1879.67" y="26.9443" width="2.25" height="11.25" rx="1.125" transform="rotate(140 1879.67 26.9443)" fill="#D3F5CF" />
              <rect opacity="0.87" x="12" y="199.944" width="2.13" height="10.65" rx="1.065" transform="rotate(-150 12 199.944)" fill="#D3F5CF" />
              <rect opacity="0.85" x="236.332" y="186.944" width="2.25" height="11.25" rx="1.125" transform="rotate(-98 236.332 186.944)" fill="#D3F5CF" />
              <rect opacity="0.86" x="507.668" y="213.944" width="3.45" height="17.25" rx="1.725" transform="rotate(161 507.668 213.944)" fill="#D3F5CF" />
              <rect opacity="0.95" x="708" y="130.944" width="1.92" height="9.6" rx="0.96" transform="rotate(-27 708 130.944)" fill="#635EE2" />
              <rect opacity="0.78" x="919.332" y="159.944" width="2.19" height="10.95" rx="1.095" transform="rotate(-43 919.332 159.944)" fill="#A8DBFA" />
              <rect opacity="0.92" x="1224.67" y="196.944" width="3" height="15" rx="1.5" transform="rotate(8 1224.67 196.944)" fill="#D3F5CF" />
              <rect opacity="0.94" x="1464" y="211.944" width="3.09" height="15.45" rx="1.545" transform="rotate(109 1464 211.944)" fill="#635EE2" />
              <rect opacity="0.75" x="1602.33" y="143.944" width="2.91" height="14.55" rx="1.455" transform="rotate(71 1602.33 143.944)" fill="#D3F5CF" />
              <rect opacity="0.92" x="1797.67" y="189.944" width="2.91" height="14.55" rx="1.455" transform="rotate(49 1797.67 189.944)" fill="#A8DBFA" />
              <rect opacity="0.8" x="62" y="239.944" width="3.57" height="17.85" rx="1.785" transform="rotate(-101 62 239.944)" fill="#D3F5CF" />
              <rect opacity="0.7" x="294.332" y="315.944" width="3" height="15" rx="1.5" transform="rotate(177 294.332 315.944)" fill="#A8DBFA" />
              <rect opacity="0.88" x="468.668" y="293.944" width="2.58" height="12.9" rx="1.29" transform="rotate(4 468.668 293.944)" fill="#D3F5CF" />
              <rect opacity="0.97" x="1233.67" y="247.944" width="2.01" height="10.05" rx="1.005" transform="rotate(171 1233.67 247.944)" fill="#D3F5CF" />
              <rect opacity="0.94" x="1334" y="306.944" width="3.12" height="15.6" rx="1.56" transform="rotate(-91 1334 306.944)" fill="#D3F5CF" />
              <rect opacity="0.73" x="1490.33" y="222.944" width="2.7" height="13.5" rx="1.35" transform="rotate(-33 1490.33 222.944)" fill="#D3F5CF" />
              <rect opacity="0.85" x="1832.67" y="309.944" width="3.48" height="17.4" rx="1.74" transform="rotate(24 1832.67 309.944)" fill="#A8DBFA" />
              <rect x="180" y="441.944" width="2.7" height="13.5" rx="1.35" transform="rotate(94 180 441.944)" fill="#D3F5CF" />
              <rect opacity="0.84" x="200.332" y="381.944" width="2.52" height="12.6" rx="1.26" transform="rotate(148 200.332 381.944)" fill="#635EE2" />
              <rect opacity="0.93" x="443.668" y="447.944" width="2.85" height="14.25" rx="1.425" transform="rotate(23 443.668 447.944)" fill="#A8DBFA" />
              <rect opacity="0.89" x="1372" y="409.944" width="2.82" height="14.1" rx="1.41" transform="rotate(-92 1372 409.944)" fill="#A8DBFA" />
              <rect opacity="0.83" x="1534.33" y="360.944" width="1.95" height="9.75" rx="0.975" transform="rotate(-37 1534.33 360.944)" fill="#635EE2" />
              <rect opacity="0.75" x="1724.67" y="388.944" width="2.1" height="10.5" rx="1.05" transform="rotate(86 1724.67 388.944)" fill="#D3F5CF" />
              <rect opacity="0.95" x="87" y="574.944" width="2.43" height="12.15" rx="1.215" transform="rotate(-131 87 574.944)" fill="#A8DBFA" />
              <rect opacity="0.85" x="388.332" y="486.944" width="2.67" height="13.35" rx="1.335" transform="rotate(165 388.332 486.944)" fill="#D3F5CF" />
              <rect opacity="0.98" x="596.668" y="547.944" width="2.1" height="10.5" rx="1.05" transform="rotate(79 596.668 547.944)" fill="#A8DBFA" />
              <rect opacity="0.88" x="1412" y="576.944" width="2.82" height="14.1" rx="1.41" transform="rotate(-118 1412 576.944)" fill="#A8DBFA" />
              <rect opacity="0.71" x="1529.33" y="530.944" width="3.6" height="18" rx="1.8" transform="rotate(58 1529.33 530.944)" fill="#A8DBFA" />
              <rect opacity="0.85" x="1894.67" y="503.944" width="1.95" height="9.75" rx="0.975" transform="rotate(42 1894.67 503.944)" fill="#A8DBFA" />
              <rect opacity="0.97" x="154" y="680.944" width="3.21" height="16.05" rx="1.605" transform="rotate(-7 154 680.944)" fill="#635EE2" />
              <rect opacity="0.78" x="275.332" y="600.944" width="3.27" height="16.35" rx="1.635" transform="rotate(-140 275.332 600.944)" fill="#D3F5CF" />
              <rect opacity="0.84" x="483.668" y="609.944" width="3.21" height="16.05" rx="1.605" transform="rotate(59 483.668 609.944)" fill="#635EE2" />
              <rect opacity="0.82" x="1328" y="610.944" width="2.04" height="10.2" rx="1.02" transform="rotate(155 1328 610.944)" fill="#D3F5CF" />
              <rect opacity="0.73" x="1566.33" y="627.944" width="3.42" height="17.1" rx="1.71" transform="rotate(94 1566.33 627.944)" fill="#635EE2" />
              <rect opacity="0.8" x="1727.67" y="654.944" width="1.89" height="9.45" rx="0.945" transform="rotate(117 1727.67 654.944)" fill="#635EE2" />
              <rect opacity="0.91" y="754.944" width="2.22" height="11.1" rx="1.11" transform="rotate(-90 0 754.944)" fill="#A8DBFA" />
              <rect opacity="0.81" x="239.332" y="763.944" width="2.28" height="11.4" rx="1.14" transform="rotate(60 239.332 763.944)" fill="#D3F5CF" />
              <rect opacity="0.96" x="557.668" y="721.944" width="2.97" height="14.85" rx="1.485" transform="rotate(73 557.668 721.944)" fill="#A8DBFA" />
              <rect opacity="0.93" x="1270" y="795.944" width="2.7" height="13.5" rx="1.35" fill="#D3F5CF" />
              <rect opacity="0.72" x="1681.33" y="714.944" width="2.7" height="13.5" rx="1.35" transform="rotate(-127 1681.33 714.944)" fill="#D3F5CF" />
              <rect opacity="0.83" x="1718.67" y="705.944" width="3.03" height="15.15" rx="1.515" transform="rotate(-30 1718.67 705.944)" fill="#D3F5CF" />
              <rect opacity="0.76" x="157" y="898.944" width="3.51" height="17.55" rx="1.755" transform="rotate(-74 157 898.944)" fill="#A8DBFA" />
              <rect opacity="0.71" x="231.332" y="908.944" width="3.54" height="17.7" rx="1.77" transform="rotate(151 231.332 908.944)" fill="#D3F5CF" />
              <rect opacity="0.7" x="540.668" y="935.944" width="3.6" height="18" rx="1.8" transform="rotate(-31 540.668 935.944)" fill="#635EE2" />
              <rect opacity="0.99" x="681" y="921.944" width="2.79" height="13.95" rx="1.395" transform="rotate(7 681 921.944)" fill="#D3F5CF" />
              <rect opacity="0.77" x="859.332" y="839.944" width="3.03" height="15.15" rx="1.515" transform="rotate(-133 859.332 839.944)" fill="#635EE2" />
              <rect opacity="0.87" x="1097.67" y="856.944" width="2.82" height="14.1" rx="1.41" transform="rotate(-61 1097.67 856.944)" fill="#A8DBFA" />
              <rect opacity="0.8" x="1375" y="826.944" width="2.28" height="11.4" rx="1.14" transform="rotate(46 1375 826.944)" fill="#D3F5CF" />
              <rect opacity="0.94" x="1604.33" y="849.944" width="2.28" height="11.4" rx="1.14" transform="rotate(-56 1604.33 849.944)" fill="#A8DBFA" />
              <rect opacity="0.73" x="1878.67" y="880.944" width="1.95" height="9.75" rx="0.975" transform="rotate(164 1878.67 880.944)" fill="#D3F5CF" />
              <rect opacity="0.9" x="36" y="974.944" width="1.8" height="9" rx="0.9" transform="rotate(17 36 974.944)" fill="#635EE2" />
              <rect opacity="0.74" x="231.332" y="1044.94" width="2.7" height="13.5" rx="1.35" transform="rotate(-169 231.332 1044.94)" fill="#635EE2" />
              <rect opacity="0.81" x="515.668" y="1048.94" width="3" height="15" rx="1.5" transform="rotate(83 515.668 1048.94)" fill="#635EE2" />
              <rect opacity="0.73" x="701" y="992.944" width="2.04" height="10.2" rx="1.02" transform="rotate(98 701 992.944)" fill="#D3F5CF" />
              <rect opacity="0.86" x="865.332" y="1007.94" width="2.76" height="13.8" rx="1.38" transform="rotate(170 865.332 1007.94)" fill="#635EE2" />
              <rect opacity="0.7" x="1198.67" y="1008.94" width="3.33" height="16.65" rx="1.665" transform="rotate(-144 1198.67 1008.94)" fill="#A8DBFA" />
              <rect opacity="0.9" x="1330" y="981.944" width="2.88" height="14.4" rx="1.44" transform="rotate(118 1330 981.944)" fill="#635EE2" />
              <rect opacity="0.91" x="1640.33" y="1034.94" width="2.37" height="11.85" rx="1.185" transform="rotate(179 1640.33 1034.94)" fill="#A8DBFA" />
              <rect opacity="0.79" x="1846.67" y="1003.94" width="2.91" height="14.55" rx="1.455" transform="rotate(-43 1846.67 1003.94)" fill="#D3F5CF" />
            </svg>
            <div className='registr_screen'>
              <div className='registr_text'>
                <p className='registr_Review'>Привіт! Так, це все</p>
                <p className='registr_First'>Ми вас вже зачекались, скоріш explore наш блог</p>
                <div className='registrbottom'>
                  <div className="registr_name">
                    <input
                      type="text"
                      className="registr_name_input"
                      placeholder="Ваше ім'я(нікнейм)"
                    />
                  </div>
                  <div className="registr_email">
                    <input
                      type="text"
                      className="registr_email_input"
                      placeholder="Ваш E-mail"
                    />
                  </div>
                  <div className="registr_password">
                    <input
                      type="text"
                      className="registr_password_input"
                      placeholder="Ваш пароль"
                    />
                  </div>
                  <div className="registr_password_confirm">
                    <input
                      type="text"
                      className="registr_password_confirm_input"
                      placeholder="Повторіть пароль"
                    />
                  </div>
                </div>
                <div className='bot_registr'>
                  <button className="registr_profile_enter">
                    Зареєструватися
                  </button>
                  <button className='botgoogle_registr'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9745 8.34512C15.9745 7.79471 15.9212 7.22656 15.8324 6.69391H8.14453V9.83653H12.5478C12.3702 10.8486 11.7843 11.7363 10.9143 12.3045L13.542 14.3463C15.0867 12.9081 15.9745 10.8131 15.9745 8.34512Z" fill="white" />
                    <path d="M8.14671 16.2994C10.3483 16.2994 12.1948 15.5714 13.5442 14.3286L10.9165 12.3045C10.1885 12.8016 9.24752 13.0857 8.14671 13.0857C6.01612 13.0857 4.22287 11.6476 3.56594 9.73004L0.867188 11.8074C2.25207 14.5594 5.05735 16.2994 8.14671 16.2994Z" fill="white" />
                    <path d="M3.5643 9.71226C3.22696 8.70023 3.22696 7.59942 3.5643 6.58739L0.865553 4.49231C-0.288518 6.80045 -0.288518 9.51695 0.865553 11.8073L3.5643 9.71226Z" fill="white" />
                    <path d="M8.14671 3.23171C9.30078 3.21395 10.4371 3.65783 11.2716 4.4568L13.5975 2.11315C12.1238 0.728262 10.1708 -0.0174451 8.14671 0.000309875C5.05735 0.000309875 2.25207 1.74029 0.867188 4.49231L3.56594 6.58739C4.22287 4.6521 6.01612 3.23171 8.14671 3.23171Z" fill="white" />
                  </svg>
                  </button>
                  <button className='botfacebook_registr'><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 5.5H5V3.5C5 3.23478 5.10536 2.98043 5.29289 2.79289C5.48043 2.60536 5.73478 2.5 6 2.5H7V0H5C4.20435 0 3.44129 0.31607 2.87868 0.87868C2.31607 1.44129 2 2.20435 2 3V5.5H0V8H2V16H5V8H7L8 5.5Z" fill="white" />
                  </svg>
                  </button>
                </div>
              </div>
              <div className='registration_registr' onClick={() => this.state.isSignin === false ? this.setState({ isSignin: true }) : this.setState({ isSignin: false })}> <p>{this.state.isSignin === true ? 'ЗАРЕЄСТРУВАТИСЯ' : 'УВІЙТИ'}</p> </div>
            </div>
            <div className='registr_blur'>
              <div className='elipse1'></div>
              <div className='elipse2'></div>
              <div className='elipse3'></div>
              <div className='elipse4'></div>
            </div>
          </div>
        }
      </>
    )
  }
}

export default SingInAndUp