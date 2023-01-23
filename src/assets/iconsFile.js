import React from 'react';
import {Svg, Pa, Pathth, Path} from 'react-native-svg';
import {View} from 'react-native';

export const ChatsLogo = ({colorFocus = false}) => {
  let color = colorFocus ? '#5C33CF' : '#C1CBD7';
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.404 22.0022 8.83083 21.6208 7.41301 20.888L3.58701 21.955C3.37355 22.0146 3.14809 22.0163 2.93373 21.9601C2.71937 21.9038 2.52382 21.7916 2.36712 21.6349C2.21041 21.4782 2.09818 21.2826 2.04194 21.0683C1.98569 20.8539 1.98744 20.6285 2.04701 20.415L3.11501 16.592C2.38036 15.1729 1.99793 13.5979 2.00001 12C2.00001 6.477 6.47701 2 12 2ZM12 3.5C9.74567 3.5 7.58366 4.39553 5.9896 5.98959C4.39554 7.58365 3.50001 9.74566 3.50001 12C3.50001 13.47 3.87301 14.883 4.57301 16.137L4.72301 16.407L3.61101 20.391L7.59801 19.279L7.86801 19.429C9.00239 20.0597 10.2661 20.4222 11.5624 20.4888C12.8586 20.5554 14.1528 20.3242 15.3458 19.8131C16.5389 19.3019 17.599 18.5244 18.445 17.54C19.2909 16.5556 19.9002 15.3906 20.2261 14.1343C20.552 12.8779 20.5858 11.5636 20.325 10.2922C20.0643 9.02073 19.5158 7.82589 18.7216 6.79927C17.9275 5.77264 16.9088 4.94152 15.7437 4.36962C14.5786 3.79773 13.2979 3.50025 12 3.5ZM8.75001 13H13.248C13.438 13.0001 13.6209 13.0722 13.7598 13.202C13.8987 13.3317 13.9831 13.5093 13.996 13.6989C14.009 13.8885 13.9495 14.0759 13.8296 14.2233C13.7097 14.3707 13.5383 14.4671 13.35 14.493L13.248 14.5H8.75001C8.55999 14.4999 8.37707 14.4278 8.23822 14.298C8.09937 14.1683 8.01493 13.9907 8.00198 13.8011C7.98903 13.6115 8.04852 13.4241 8.16844 13.2767C8.28836 13.1293 8.45976 13.0329 8.64801 13.007L8.75001 13H13.248H8.75001ZM8.75001 9.5H15.255C15.4449 9.50031 15.6277 9.57267 15.7664 9.70248C15.905 9.83229 15.9893 10.0099 16.0021 10.1994C16.0149 10.3889 15.9553 10.5762 15.8354 10.7235C15.7155 10.8708 15.5442 10.9671 15.356 10.993L15.255 11H8.75001C8.55999 10.9999 8.37707 10.9278 8.23822 10.798C8.09937 10.6683 8.01493 10.4907 8.00198 10.3011C7.98903 10.1115 8.04852 9.92411 8.16844 9.7767C8.28836 9.62929 8.45976 9.5329 8.64801 9.507L8.75001 9.5H15.255H8.75001Z"
        fill={color}
      />
    </Svg>
  );
};

export const ContactsLogo = ({colorFocus = false}) => {
  let color = colorFocus ? '#5C33CF' : '#C1CBD7';
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.745 9.41566 20.7162 6.93859 18.8888 5.11118C17.0614 3.28378 14.5843 2.25496 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM7.5 10.125C7.5 9.9025 7.56598 9.68499 7.6896 9.49998C7.81322 9.31498 7.98892 9.17078 8.19449 9.08564C8.40005 9.00049 8.62625 8.97821 8.84448 9.02162C9.06271 9.06502 9.26317 9.17217 9.4205 9.3295C9.57783 9.48684 9.68498 9.68729 9.72839 9.90552C9.7718 10.1238 9.74952 10.35 9.66437 10.5555C9.57922 10.7611 9.43503 10.9368 9.25002 11.0604C9.06502 11.184 8.84751 11.25 8.625 11.25C8.32664 11.25 8.04049 11.1315 7.82951 10.9205C7.61853 10.7095 7.5 10.4234 7.5 10.125ZM14.25 10.125C14.25 9.9025 14.316 9.68499 14.4396 9.49998C14.5632 9.31498 14.7389 9.17078 14.9445 9.08564C15.1501 9.00049 15.3763 8.97821 15.5945 9.02162C15.8127 9.06502 16.0132 9.17217 16.1705 9.3295C16.3278 9.48684 16.435 9.68729 16.4784 9.90552C16.5218 10.1238 16.4995 10.35 16.4144 10.5555C16.3292 10.7611 16.185 10.9368 16 11.0604C15.815 11.184 15.5975 11.25 15.375 11.25C15.0766 11.25 14.7905 11.1315 14.5795 10.9205C14.3685 10.7095 14.25 10.4234 14.25 10.125ZM16.5469 14.625C16.0861 15.4232 15.4234 16.0861 14.6252 16.5469C13.8271 17.0078 12.9217 17.2504 12 17.2504C11.0784 17.2504 10.1729 17.0078 9.37479 16.5469C8.57664 16.0861 7.91388 15.4232 7.45313 14.625C7.39443 14.5398 7.35398 14.4435 7.33432 14.3419C7.31466 14.2404 7.31621 14.1359 7.33888 14.035C7.36154 13.9341 7.40484 13.8389 7.46604 13.7556C7.52723 13.6722 7.60502 13.6024 7.69449 13.5505C7.78397 13.4986 7.88321 13.4658 7.98597 13.4541C8.08874 13.4425 8.1928 13.4522 8.29164 13.4826C8.39047 13.5131 8.48193 13.5637 8.56028 13.6312C8.63862 13.6988 8.70215 13.7817 8.74688 13.875C9.07718 14.4453 9.55159 14.9187 10.1226 15.2478C10.6935 15.577 11.341 15.7502 12 15.7502C12.659 15.7502 13.3065 15.577 13.8775 15.2478C14.4484 14.9187 14.9228 14.4453 15.2531 13.875C15.3603 13.7196 15.5221 13.6103 15.7063 13.5689C15.8905 13.5275 16.0835 13.5571 16.2468 13.6518C16.4101 13.7465 16.5317 13.8993 16.5873 14.0797C16.643 14.2601 16.6285 14.4548 16.5469 14.625Z"
        fill={color}
      />
    </Svg>
  );
};

export const GroupsLogo = ({colorFocus = false}) => {
  let color = colorFocus ? '#5C33CF' : '#C1CBD7';
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4 13.999L13 14C13.5046 13.9998 13.9906 14.1904 14.3605 14.5335C14.7305 14.8766 14.9572 15.3468 14.995 15.85L15 16V17.5C14.999 21 11.284 22 8.5 22C5.778 22 2.165 21.044 2.005 17.73L2 17.5V15.999C2 14.945 2.816 14.081 3.85 14.004L4 14V13.999ZM15.22 14H20C20.5044 14.0001 20.9901 14.1908 21.3599 14.5338C21.7297 14.8769 21.9562 15.347 21.994 15.85L22 16V17C21.999 20.062 19.142 21 17 21C16.2745 21.0017 15.5529 20.8931 14.86 20.678C15.196 20.292 15.467 19.851 15.662 19.351C16.1013 19.4492 16.5499 19.4991 17 19.5L17.267 19.494C18.252 19.451 20.353 19.131 20.493 17.205L20.5 17V16C20.4998 15.883 20.4588 15.7698 20.3839 15.6799C20.309 15.5901 20.205 15.5292 20.09 15.508L20 15.5H15.949C15.8663 15.0105 15.6617 14.5496 15.354 14.16L15.22 14H20H15.22ZM4 15.499L3.9 15.509C3.80402 15.529 3.71584 15.5762 3.646 15.645C3.57718 15.7144 3.52994 15.8023 3.51 15.898L3.5 15.999V17.5C3.5 18.509 3.95 19.222 4.917 19.742C5.743 20.187 6.92 20.456 8.183 20.495L8.5 20.5L8.817 20.495C10.08 20.456 11.256 20.187 12.083 19.742C12.989 19.254 13.442 18.597 13.495 17.685L13.5 17.499V16C13.4998 15.883 13.4588 15.7698 13.3839 15.6799C13.309 15.5901 13.205 15.5292 13.09 15.508L13 15.5L4 15.499ZM8.5 3C9.69347 3 10.8381 3.47411 11.682 4.31802C12.5259 5.16193 13 6.30653 13 7.5C13 8.69347 12.5259 9.83807 11.682 10.682C10.8381 11.5259 9.69347 12 8.5 12C7.30653 12 6.16193 11.5259 5.31802 10.682C4.47411 9.83807 4 8.69347 4 7.5C4 6.30653 4.47411 5.16193 5.31802 4.31802C6.16193 3.47411 7.30653 3 8.5 3ZM17.5 5C18.4283 5 19.3185 5.36875 19.9749 6.02513C20.6313 6.6815 21 7.57174 21 8.5C21 9.42826 20.6313 10.3185 19.9749 10.9749C19.3185 11.6313 18.4283 12 17.5 12C16.5717 12 15.6815 11.6313 15.0251 10.9749C14.3687 10.3185 14 9.42826 14 8.5C14 7.57174 14.3687 6.6815 15.0251 6.02513C15.6815 5.36875 16.5717 5 17.5 5ZM8.5 4.5C6.846 4.5 5.5 5.846 5.5 7.5C5.5 9.154 6.846 10.5 8.5 10.5C10.154 10.5 11.5 9.154 11.5 7.5C11.5 5.846 10.154 4.5 8.5 4.5ZM17.5 6.5C16.397 6.5 15.5 7.397 15.5 8.5C15.5 9.603 16.397 10.5 17.5 10.5C18.603 10.5 19.5 9.603 19.5 8.5C19.5 7.397 18.603 6.5 17.5 6.5Z"
        fill={color}
      />
    </Svg>
  );
};

export const MoonLogo = ({color = 'white'}) => {
  return (
    <View style={stylesV}>
      <Svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/Svg">
        <Path
          d="M16.8501 10.0975C16.2303 10.262 15.5918 10.3453 14.9505 10.3453C12.998 10.3453 11.1643 9.58646 9.78702 8.20965C8.88257 7.30032 8.23235 6.16991 7.90115 4.93109C7.56995 3.69227 7.56934 2.38831 7.89939 1.14918C7.94061 0.994249 7.94035 0.831209 7.89863 0.676412C7.85692 0.521616 7.77521 0.380506 7.66172 0.267239C7.54823 0.153972 7.40693 0.0725297 7.25201 0.0310822C7.09709 -0.0103653 6.93399 -0.0103607 6.77907 0.0310955C5.22723 0.444488 3.81143 1.25854 2.67368 2.3916C-0.891225 5.9552 -0.891225 11.7559 2.67368 15.3213C3.52103 16.1731 4.52896 16.8484 5.63913 17.3082C6.7493 17.768 7.93967 18.0031 9.14135 18C10.3427 18.0033 11.5328 17.7684 12.6427 17.3088C13.7526 16.8491 14.7602 16.1739 15.6072 15.3222C16.7415 14.1847 17.5562 12.7686 17.9695 11.2165C18.0105 11.0616 18.0102 10.8987 17.9685 10.744C17.9268 10.5893 17.8452 10.4483 17.7319 10.335C17.6185 10.2217 17.4775 10.1402 17.3227 10.0985C17.168 10.0568 17.005 10.0565 16.8501 10.0975ZM14.3149 14.0295C13.6372 14.7107 12.8311 15.2508 11.9432 15.6184C11.0553 15.9861 10.1033 16.1741 9.14226 16.1715C8.18088 16.1739 7.22857 15.9858 6.34039 15.6179C5.45221 15.2501 4.64579 14.7099 3.96776 14.0286C1.1162 11.1772 1.1162 6.53664 3.96776 3.68521C4.51878 3.13501 5.15493 2.67721 5.85172 2.32943C5.74973 3.64504 5.93307 4.96715 6.38923 6.20541C6.84538 7.44367 7.56358 8.56889 8.49476 9.50418C9.42833 10.4379 10.5536 11.1579 11.7929 11.6142C13.0321 12.0705 14.3557 12.2524 15.6721 12.1472C15.3223 12.8425 14.8642 13.4779 14.3149 14.0295Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export const SearchLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/Svg">
        <Path
          d="M7.51001 15.02C9.17628 15.0197 10.7945 14.4619 12.1071 13.4354L16.2338 17.5622L17.5612 16.2348L13.4345 12.108C14.4615 10.7953 15.0196 9.17671 15.02 7.51001C15.02 3.36918 11.6508 0 7.51001 0C3.36918 0 0 3.36918 0 7.51001C0 11.6508 3.36918 15.02 7.51001 15.02ZM7.51001 1.8775C10.6163 1.8775 13.1425 4.40368 13.1425 7.51001C13.1425 10.6163 10.6163 13.1425 7.51001 13.1425C4.40368 13.1425 1.8775 10.6163 1.8775 7.51001C1.8775 4.40368 4.40368 1.8775 7.51001 1.8775Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export const OptionsLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="4"
        height="16"
        viewBox="0 0 4 16"
        fill="none"
        xmlns="http://www.w3.org/2000/Svg">
        <Path
          d="M2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export const QRLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/Svg">
        <Path
          d="M9.71429 14.5714H12.1429V17H9.71429V14.5714ZM14.5714 14.5714H17V17H14.5714V14.5714ZM9.71429 9.71429H12.1429V12.1429H9.71429V9.71429ZM12.1429 12.1429H14.5714V14.5714H12.1429V12.1429ZM14.5714 9.71429H17V12.1429H14.5714V9.71429ZM0 2.42857C0 1.78447 0.255866 1.16676 0.711312 0.711312C1.16676 0.255866 1.78447 0 2.42857 0H4.85714C5.50124 0 6.11896 0.255866 6.5744 0.711312C7.02985 1.16676 7.28571 1.78447 7.28571 2.42857V4.85714C7.28571 5.50124 7.02985 6.11896 6.5744 6.5744C6.11896 7.02985 5.50124 7.28571 4.85714 7.28571H2.42857C1.78447 7.28571 1.16676 7.02985 0.711312 6.5744C0.255866 6.11896 0 5.50124 0 4.85714V2.42857ZM2.42857 1.21429C2.10652 1.21429 1.79766 1.34222 1.56994 1.56994C1.34222 1.79766 1.21429 2.10652 1.21429 2.42857V4.85714C1.21429 5.17919 1.34222 5.48805 1.56994 5.71577C1.79766 5.9435 2.10652 6.07143 2.42857 6.07143H4.85714C5.17919 6.07143 5.48805 5.9435 5.71577 5.71577C5.9435 5.48805 6.07143 5.17919 6.07143 4.85714V2.42857C6.07143 2.10652 5.9435 1.79766 5.71577 1.56994C5.48805 1.34222 5.17919 1.21429 4.85714 1.21429H2.42857ZM2.42857 2.42857H4.85714V4.85714H2.42857V2.42857ZM0 12.1429C0 11.4988 0.255866 10.881 0.711312 10.4256C1.16676 9.97015 1.78447 9.71429 2.42857 9.71429H4.85714C5.50124 9.71429 6.11896 9.97015 6.5744 10.4256C7.02985 10.881 7.28571 11.4988 7.28571 12.1429V14.5714C7.28571 15.2155 7.02985 15.8332 6.5744 16.2887C6.11896 16.7441 5.50124 17 4.85714 17H2.42857C1.78447 17 1.16676 16.7441 0.711312 16.2887C0.255866 15.8332 0 15.2155 0 14.5714V12.1429ZM2.42857 10.9286C2.10652 10.9286 1.79766 11.0565 1.56994 11.2842C1.34222 11.512 1.21429 11.8208 1.21429 12.1429V14.5714C1.21429 14.8935 1.34222 15.2023 1.56994 15.4301C1.79766 15.6578 2.10652 15.7857 2.42857 15.7857H4.85714C5.17919 15.7857 5.48805 15.6578 5.71577 15.4301C5.9435 15.2023 6.07143 14.8935 6.07143 14.5714V12.1429C6.07143 11.8208 5.9435 11.512 5.71577 11.2842C5.48805 11.0565 5.17919 10.9286 4.85714 10.9286H2.42857ZM2.42857 12.1429H4.85714V14.5714H2.42857V12.1429ZM9.71429 2.42857C9.71429 1.78447 9.97015 1.16676 10.4256 0.711312C10.881 0.255866 11.4988 0 12.1429 0H14.5714C15.2155 0 15.8332 0.255866 16.2887 0.711312C16.7441 1.16676 17 1.78447 17 2.42857V4.85714C17 5.50124 16.7441 6.11896 16.2887 6.5744C15.8332 7.02985 15.2155 7.28571 14.5714 7.28571H12.1429C11.4988 7.28571 10.881 7.02985 10.4256 6.5744C9.97015 6.11896 9.71429 5.50124 9.71429 4.85714V2.42857ZM12.1429 1.21429C11.8208 1.21429 11.512 1.34222 11.2842 1.56994C11.0565 1.79766 10.9286 2.10652 10.9286 2.42857V4.85714C10.9286 5.17919 11.0565 5.48805 11.2842 5.71577C11.512 5.9435 11.8208 6.07143 12.1429 6.07143H14.5714C14.8935 6.07143 15.2023 5.9435 15.4301 5.71577C15.6578 5.48805 15.7857 5.17919 15.7857 4.85714V2.42857C15.7857 2.10652 15.6578 1.79766 15.4301 1.56994C15.2023 1.34222 14.8935 1.21429 14.5714 1.21429H12.1429ZM12.1429 2.42857H14.5714V4.85714H12.1429V2.42857Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export const AddChatLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M11.6429 3.71429C6.71965 3.71429 2.71429 6.91876 2.71429 10.8572C2.71429 13.4527 4.40804 15.7813 7.17858 17.0482V21.5714L11.9464 17.9955C16.7295 17.8688 20.5714 14.7143 20.5714 10.8572C20.5714 6.91876 16.5661 3.71429 11.6429 3.71429ZM15.2143 11.75H12.5357V14.4286H10.75V11.75H8.07144V9.96429H10.75V7.28572H12.5357V9.96429H15.2143V11.75Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export const AddGroupLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M17.5 12C18.9587 12 20.3576 12.5795 21.3891 13.6109C22.4205 14.6424 23 16.0413 23 17.5C23 18.9587 22.4205 20.3576 21.3891 21.3891C20.3576 22.4205 18.9587 23 17.5 23C16.0413 23 14.6424 22.4205 13.6109 21.3891C12.5795 20.3576 12 18.9587 12 17.5C12 16.0413 12.5795 14.6424 13.6109 13.6109C14.6424 12.5795 16.0413 12 17.5 12ZM4 12.999L12.81 13C11.6467 14.209 10.9978 15.8222 11 17.5C11 18.587 11.267 19.612 11.739 20.513C10.689 20.863 9.531 21 8.5 21C5.778 21 2.165 20.044 2.005 16.73L2 16.5V14.999C2 14.4686 2.21071 13.9599 2.58579 13.5848C2.96086 13.2097 3.46957 12.999 4 12.999ZM17.5 14.002L17.41 14.01C17.3101 14.0283 17.2181 14.0765 17.1463 14.1483C17.0745 14.2201 17.0263 14.3121 17.008 14.412L17 14.502V17H14.5L14.41 17.008C14.3101 17.0263 14.2181 17.0745 14.1463 17.1463C14.0745 17.2181 14.0263 17.3101 14.008 17.41L14 17.5L14.008 17.59C14.0263 17.6899 14.0745 17.7819 14.1463 17.8537C14.2181 17.9255 14.3101 17.9737 14.41 17.992L14.5 18H17V20.5L17.008 20.59C17.0263 20.6899 17.0745 20.7819 17.1463 20.8537C17.2181 20.9255 17.3101 20.9737 17.41 20.992L17.5 21L17.59 20.992C17.6899 20.9737 17.7819 20.9255 17.8537 20.8537C17.9255 20.7819 17.9737 20.6899 17.992 20.59L18 20.5V18H20.5L20.59 17.992C20.6899 17.9737 20.7819 17.9255 20.8537 17.8537C20.9255 17.7819 20.9737 17.6899 20.992 17.59L21 17.5L20.992 17.41C20.9737 17.3101 20.9255 17.2181 20.8537 17.1463C20.7819 17.0745 20.6899 17.0263 20.59 17.008L20.5 17H18V14.502L17.992 14.412C17.9737 14.3121 17.9255 14.2201 17.8537 14.1483C17.7819 14.0765 17.6899 14.0283 17.59 14.01L17.5 14.002ZM8.5 2C9.09095 2 9.67611 2.1164 10.2221 2.34254C10.768 2.56869 11.2641 2.90016 11.682 3.31802C12.0998 3.73588 12.4313 4.23196 12.6575 4.77792C12.8836 5.32389 13 5.90905 13 6.5C13 7.09095 12.8836 7.67611 12.6575 8.22208C12.4313 8.76804 12.0998 9.26412 11.682 9.68198C11.2641 10.0998 10.768 10.4313 10.2221 10.6575C9.67611 10.8836 9.09095 11 8.5 11C7.30653 11 6.16193 10.5259 5.31802 9.68198C4.47411 8.83807 4 7.69347 4 6.5C4 5.30653 4.47411 4.16193 5.31802 3.31802C6.16193 2.47411 7.30653 2 8.5 2ZM17.5 4C18.4283 4 19.3185 4.36875 19.9749 5.02513C20.6313 5.6815 21 6.57174 21 7.5C21 8.42826 20.6313 9.3185 19.9749 9.97487C19.3185 10.6313 18.4283 11 17.5 11C16.5717 11 15.6815 10.6313 15.0251 9.97487C14.3687 9.3185 14 8.42826 14 7.5C14 6.57174 14.3687 5.6815 15.0251 5.02513C15.6815 4.36875 16.5717 4 17.5 4Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export const FlatButton = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M10.707 17.707L16.414 12L10.707 6.29303L9.29297 7.70703L13.586 12L9.29297 16.293L10.707 17.707Z"
          fill="#8497AF"
        />
      </Svg>
    </View>
  );
};

export const DarkModeLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M5 20V19C5 17.1435 5.7375 15.363 7.05025 14.0503C8.36301 12.7375 10.1435 12 12 12V12C13.8565 12 15.637 12.7375 16.9497 14.0503C18.2625 15.363 19 17.1435 19 19V20H5ZM12 12C13.0609 12 14.0783 11.5786 14.8284 10.8284C15.5786 10.0783 16 9.06087 16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.06087 8.42143 10.0783 9.17157 10.8284C9.92172 11.5786 10.9391 12 12 12V12Z"
          stroke="#5C33CF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};
export const AccountLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M5 20V19C5 17.1435 5.7375 15.363 7.05025 14.0503C8.36301 12.7375 10.1435 12 12 12V12C13.8565 12 15.637 12.7375 16.9497 14.0503C18.2625 15.363 19 17.1435 19 19V20H5ZM12 12C13.0609 12 14.0783 11.5786 14.8284 10.8284C15.5786 10.0783 16 9.06087 16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.06087 8.42143 10.0783 9.17157 10.8284C9.92172 11.5786 10.9391 12 12 12V12Z"
          stroke="#5C33CF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};
export const NotificationsLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M21.5303 14.4697L19.5 12.4395V9.75C19.4977 7.89138 18.8063 6.09964 17.5595 4.72124C16.3127 3.34284 14.5991 2.4757 12.75 2.2875V0.75H11.25V2.2875C9.40093 2.4757 7.68732 3.34284 6.44053 4.72124C5.19373 6.09964 4.50233 7.89138 4.5 9.75V12.4395L2.46975 14.4697C2.32909 14.6104 2.25004 14.8011 2.25 15V17.25C2.25 17.4489 2.32902 17.6397 2.46967 17.7803C2.61032 17.921 2.80109 18 3 18H8.25V18.5828C8.23369 19.5342 8.56905 20.4583 9.19184 21.1778C9.81462 21.8973 10.681 22.3617 11.625 22.482C12.1464 22.5337 12.6728 22.4757 13.1704 22.3117C13.6681 22.1478 14.1259 21.8815 14.5144 21.53C14.9029 21.1785 15.2136 20.7495 15.4264 20.2707C15.6392 19.792 15.7494 19.2739 15.75 18.75V18H21C21.1989 18 21.3897 17.921 21.5303 17.7803C21.671 17.6397 21.75 17.4489 21.75 17.25V15C21.75 14.8011 21.6709 14.6104 21.5303 14.4697ZM14.25 18.75C14.25 19.3467 14.0129 19.919 13.591 20.341C13.169 20.7629 12.5967 21 12 21C11.4033 21 10.831 20.7629 10.409 20.341C9.98705 19.919 9.75 19.3467 9.75 18.75V18H14.25V18.75ZM20.25 16.5H3.75V15.3105L5.78025 13.2803C5.92091 13.1396 5.99996 12.9489 6 12.75V9.75C6 8.1587 6.63214 6.63258 7.75736 5.50736C8.88258 4.38214 10.4087 3.75 12 3.75C13.5913 3.75 15.1174 4.38214 16.2426 5.50736C17.3679 6.63258 18 8.1587 18 9.75V12.75C18 12.9489 18.0791 13.1396 18.2197 13.2803L20.25 15.3105V16.5Z"
          fill="#734DDE"
        />
      </Svg>
    </View>
  );
};
export const SecurityAndPrivacyLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M5.25 10.5C5.05109 10.5 4.86032 10.579 4.71967 10.7197C4.57902 10.8603 4.5 11.0511 4.5 11.25V20.25C4.5 20.4489 4.57902 20.6397 4.71967 20.7803C4.86032 20.921 5.05109 21 5.25 21H18.75C18.9489 21 19.1397 20.921 19.2803 20.7803C19.421 20.6397 19.5 20.4489 19.5 20.25V11.25C19.5 11.0511 19.421 10.8603 19.2803 10.7197C19.1397 10.579 18.9489 10.5 18.75 10.5H5.25ZM5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V20.25C21 20.8467 20.7629 21.419 20.341 21.841C19.919 22.2629 19.3467 22.5 18.75 22.5H5.25C4.65326 22.5 4.08097 22.2629 3.65901 21.841C3.23705 21.419 3 20.8467 3 20.25V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9V9Z"
          fill="#734DDE"
        />
        <Path
          d="M12 12.75C12.1989 12.75 12.3897 12.829 12.5303 12.9697C12.671 13.1103 12.75 13.3011 12.75 13.5V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V13.5C11.25 13.3011 11.329 13.1103 11.4697 12.9697C11.6103 12.829 11.8011 12.75 12 12.75V12.75ZM16.5 9V7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5V9H16.5ZM12 1.5C13.5913 1.5 15.1174 2.13214 16.2426 3.25736C17.3679 4.38258 18 5.9087 18 7.5V10.5H6V7.5C6 5.9087 6.63214 4.38258 7.75736 3.25736C8.88258 2.13214 10.4087 1.5 12 1.5V1.5Z"
          fill="#734DDE"
        />
      </Svg>
    </View>
  );
};
export const StorageLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M10.25 4.25C10.4489 4.25 10.6397 4.32902 10.7803 4.46967C10.921 4.61032 11 4.80109 11 5V13H19C19.1812 13 19.3563 13.0656 19.4929 13.1848C19.6295 13.3039 19.7184 13.4684 19.743 13.648L19.75 13.75C19.75 18.72 15.72 22.25 10.75 22.25C8.36305 22.25 6.07387 21.3018 4.38604 19.614C2.69821 17.9261 1.75 15.6369 1.75 13.25C1.75 8.28 5.28 4.25 10.25 4.25ZM9.5 5.787L9.291 5.811C5.601 6.281 3.25 9.433 3.25 13.25C3.25 15.2391 4.04018 17.1468 5.4467 18.5533C6.85322 19.9598 8.76088 20.75 10.75 20.75C14.567 20.75 17.718 18.398 18.19 14.709L18.212 14.5H10.25C10.0688 14.5 9.89366 14.4344 9.75707 14.3152C9.62048 14.1961 9.53165 14.0316 9.507 13.852L9.5 13.75V5.787ZM13.25 1.75C15.6369 1.75 17.9261 2.69821 19.614 4.38604C21.3018 6.07387 22.25 8.36305 22.25 10.75C22.25 10.9489 22.171 11.1397 22.0303 11.2803C21.8897 11.421 21.6989 11.5 21.5 11.5H13.25C13.0511 11.5 12.8603 11.421 12.7197 11.2803C12.579 11.1397 12.5 10.9489 12.5 10.75V2.5C12.5 2.30109 12.579 2.11032 12.7197 1.96967C12.8603 1.82902 13.0511 1.75 13.25 1.75V1.75ZM14 3.287V10H20.712L20.689 9.791C20.4764 8.14679 19.7254 6.61925 18.5531 5.44694C17.3807 4.27463 15.8532 3.52356 14.209 3.311L14 3.287Z"
          fill="#734DDE"
        />
      </Svg>
    </View>
  );
};
export const ChatsSLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.404 22.0022 8.83083 21.6208 7.41301 20.888L3.58701 21.955C3.37355 22.0146 3.14809 22.0163 2.93373 21.9601C2.71937 21.9038 2.52382 21.7916 2.36712 21.6349C2.21041 21.4782 2.09818 21.2826 2.04194 21.0683C1.98569 20.8539 1.98744 20.6285 2.04701 20.415L3.11501 16.592C2.38036 15.1729 1.99793 13.5979 2.00001 12C2.00001 6.477 6.47701 2 12 2ZM12 3.5C9.74567 3.5 7.58366 4.39553 5.9896 5.98959C4.39554 7.58365 3.50001 9.74566 3.50001 12C3.50001 13.47 3.87301 14.883 4.57301 16.137L4.72301 16.407L3.61101 20.391L7.59801 19.279L7.86801 19.429C9.00239 20.0597 10.2661 20.4222 11.5624 20.4888C12.8586 20.5554 14.1528 20.3242 15.3458 19.8131C16.5389 19.3019 17.599 18.5244 18.445 17.54C19.2909 16.5556 19.9002 15.3906 20.2261 14.1343C20.552 12.8779 20.5858 11.5636 20.325 10.2922C20.0643 9.02073 19.5158 7.82589 18.7216 6.79927C17.9275 5.77264 16.9088 4.94152 15.7437 4.36962C14.5786 3.79773 13.2979 3.50025 12 3.5ZM8.75001 13H13.248C13.438 13.0001 13.6209 13.0722 13.7598 13.202C13.8987 13.3317 13.9831 13.5093 13.996 13.6989C14.009 13.8885 13.9495 14.0759 13.8296 14.2233C13.7097 14.3707 13.5383 14.4671 13.35 14.493L13.248 14.5H8.75001C8.55999 14.4999 8.37707 14.4278 8.23822 14.298C8.09937 14.1683 8.01493 13.9907 8.00198 13.8011C7.98903 13.6115 8.04852 13.4241 8.16844 13.2767C8.28836 13.1293 8.45976 13.0329 8.64801 13.007L8.75001 13H13.248H8.75001ZM8.75001 9.5H15.255C15.4449 9.50031 15.6277 9.57267 15.7664 9.70248C15.905 9.83229 15.9893 10.0099 16.0021 10.1994C16.0149 10.3889 15.9553 10.5762 15.8354 10.7235C15.7155 10.8708 15.5442 10.9671 15.356 10.993L15.255 11H8.75001C8.55999 10.9999 8.37707 10.9278 8.23822 10.798C8.09937 10.6683 8.01493 10.4907 8.00198 10.3011C7.98903 10.1115 8.04852 9.92411 8.16844 9.7767C8.28836 9.62929 8.45976 9.5329 8.64801 9.507L8.75001 9.5H15.255H8.75001Z"
          fill="#734DDE"
        />
      </Svg>
    </View>
  );
};
export const DevicesLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M7.06998 3C5.65398 3 4.42298 3.97 4.09198 5.346L2.09998 13.619C1.97429 14.141 1.96865 14.6847 2.08348 15.2092C2.19832 15.7337 2.43063 16.2254 2.76294 16.6471C3.09525 17.0689 3.5189 17.4097 4.00199 17.6441C4.48509 17.8784 5.01504 18.0001 5.55198 18H18.444C18.9806 17.9998 19.5102 17.8778 19.993 17.6434C20.4758 17.409 20.8991 17.0682 21.2311 16.6466C21.5632 16.2251 21.7954 15.7337 21.9102 15.2094C22.025 14.6852 22.0194 14.1418 21.894 13.62L19.904 5.346C19.743 4.67726 19.3615 4.08218 18.8211 3.65661C18.2807 3.23104 17.6128 2.99975 16.925 3H7.06897H7.06998ZM5.54998 5.697C5.63216 5.3558 5.82678 5.05219 6.10251 4.83505C6.37823 4.61792 6.71902 4.4999 7.06998 4.5H16.926C17.648 4.5 18.276 4.995 18.445 5.697L20.437 13.97C20.5096 14.2715 20.5129 14.5855 20.4465 14.8885C20.3802 15.1914 20.246 15.4754 20.054 15.719C19.862 15.9625 19.6173 16.1594 19.3383 16.2946C19.0592 16.4299 18.7531 16.5001 18.443 16.5H5.55298C5.24294 16.5 4.93694 16.4297 4.65801 16.2943C4.37908 16.159 4.13448 15.9621 3.94263 15.7186C3.75077 15.475 3.61666 15.1911 3.55038 14.8882C3.4841 14.5854 3.48738 14.2714 3.55998 13.97L5.54998 5.697V5.697ZM6.74798 19C6.54906 19 6.3583 19.079 6.21765 19.2197C6.07699 19.3603 5.99798 19.5511 5.99798 19.75C5.99798 19.9489 6.07699 20.1397 6.21765 20.2803C6.3583 20.421 6.54906 20.5 6.74798 20.5H17.248C17.4469 20.5 17.6377 20.421 17.7783 20.2803C17.919 20.1397 17.998 19.9489 17.998 19.75C17.998 19.5511 17.919 19.3603 17.7783 19.2197C17.6377 19.079 17.4469 19 17.248 19H6.74798V19Z"
          fill="#734DDE"
        />
      </Svg>
    </View>
  );
};
export const HelpLogo = () => {
  return (
    <View style={stylesV}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z"
          fill="#734DDE"
        />
        <Path
          d="M10.875 16.125C10.875 16.4234 10.9935 16.7095 11.2045 16.9205C11.4155 17.1315 11.7016 17.25 12 17.25C12.2984 17.25 12.5845 17.1315 12.7955 16.9205C13.0065 16.7095 13.125 16.4234 13.125 16.125C13.125 15.8266 13.0065 15.5405 12.7955 15.3295C12.5845 15.1185 12.2984 15 12 15C11.7016 15 11.4155 15.1185 11.2045 15.3295C10.9935 15.5405 10.875 15.8266 10.875 16.125V16.125ZM11.4375 13.5H12.5625C12.6656 13.5 12.75 13.4156 12.75 13.3125V6.9375C12.75 6.83437 12.6656 6.75 12.5625 6.75H11.4375C11.3344 6.75 11.25 6.83437 11.25 6.9375V13.3125C11.25 13.4156 11.3344 13.5 11.4375 13.5Z"
          fill="#734DDE"
        />
      </Svg>
    </View>
  );
};

const stylesV = {
  height: 16,
  width: 16,
  alignItems: 'center',
};