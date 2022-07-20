import React from 'react';
import Navbar from './Navbar';
import './Header.css';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const width = window.innerWidth;
    const logoSvg = document.getElementById('svg')
  
    if (width < 850) {
      logoSvg.setAttribute("viewBox", '0 0 395 44')
      logoSvg.setAttribute("width", '250')
    }
  }, [])
  

  


  return (
      <div className='header'>
        <div className='header-wrapper'>
          <div className='logo-wrap'>
            <svg  id='svg' width="395" height="44" viewBox="0 0 395 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.60547 3.50781C6.56641 5.69531 6.52734 7.81445 6.48828 9.86523C6.46875 10.7441 6.44922 11.6426 6.42969 12.5605C6.42969 13.4785 6.41992 14.3867 6.40039 15.2852C6.40039 16.1641 6.39062 17.0137 6.37109 17.834C6.37109 18.6348 6.37109 19.3477 6.37109 19.9727C6.37109 21.2812 6.38086 22.8633 6.40039 24.7188C6.41992 26.5742 6.43945 28.4785 6.45898 30.4316C6.49805 32.3848 6.54688 34.2598 6.60547 36.0566C6.66406 37.8535 6.73242 39.3477 6.81055 40.5391C7.08398 40.5781 7.44531 40.627 7.89453 40.6855C8.36328 40.7246 8.85156 40.7637 9.35938 40.8027C9.86719 40.8223 10.3652 40.8418 10.8535 40.8613C11.3418 40.8809 11.752 40.8906 12.084 40.8906C13.4512 40.8906 14.8477 40.8027 16.2734 40.627C17.7188 40.4316 19.1055 40.0801 20.4336 39.5723C21.7812 39.0645 23.041 38.3711 24.2129 37.4922C25.4043 36.5938 26.4395 35.4414 27.3184 34.0352C28.2168 32.6289 28.9199 30.9395 29.4277 28.9668C29.9355 26.9746 30.1895 24.6309 30.1895 21.9355C30.1895 18.9473 29.8281 16.291 29.1055 13.9668C28.3828 11.623 27.3184 9.65039 25.9121 8.04883C24.5254 6.44727 22.7969 5.23633 20.7266 4.41602C18.6758 3.57617 16.3125 3.15625 13.6367 3.15625C13.1094 3.15625 12.5137 3.17578 11.8496 3.21484C11.1855 3.23438 10.5215 3.26367 9.85742 3.30273C9.21289 3.32227 8.59766 3.36133 8.01172 3.41992C7.44531 3.45898 6.97656 3.48828 6.60547 3.50781ZM0.189453 0.871094C0.638672 0.890625 1.05859 0.910156 1.44922 0.929688C1.78125 0.949219 2.12305 0.96875 2.47461 0.988281C2.82617 0.988281 3.10938 0.988281 3.32422 0.988281C3.69531 0.988281 4.31055 0.96875 5.16992 0.929688C6.04883 0.890625 7.04492 0.851562 8.1582 0.8125C9.27148 0.773438 10.4238 0.734375 11.6152 0.695312C12.8262 0.65625 13.959 0.636719 15.0137 0.636719C17.8457 0.636719 20.541 0.988281 23.0996 1.69141C25.6582 2.39453 27.9043 3.54687 29.8379 5.14844C31.7715 6.75 33.3047 8.84961 34.4375 11.4473C35.5703 14.0449 36.1367 17.2383 36.1367 21.0273C36.1367 23.7422 35.834 26.1836 35.2285 28.3516C34.6426 30.5195 33.8125 32.4336 32.7383 34.0938C31.6641 35.7539 30.375 37.1797 28.8711 38.3711C27.3867 39.543 25.7363 40.5098 23.9199 41.2715C22.123 42.0332 20.1992 42.5898 18.1484 42.9414C16.0977 43.293 13.9785 43.4688 11.791 43.4688C11.0098 43.4688 10.0625 43.4395 8.94922 43.3809C7.85547 43.3418 6.75195 43.293 5.63867 43.2344C4.52539 43.1758 3.4707 43.1172 2.47461 43.0586C1.49805 43.0195 0.736328 43 0.189453 43V42.8828C0.306641 42.4727 0.414062 41.9648 0.511719 41.3594C0.628906 40.7539 0.726562 40.002 0.804688 39.1035C0.882812 38.2051 0.941406 37.1406 0.980469 35.9102C1.01953 34.6602 1.03906 33.2051 1.03906 31.5449V12.4727C1.03906 10.8125 1.01953 9.35742 0.980469 8.10742C0.941406 6.83789 0.882812 5.75391 0.804688 4.85547C0.726562 3.9375 0.628906 3.16602 0.511719 2.54102C0.414062 1.91602 0.306641 1.39844 0.189453 0.988281V0.871094ZM60.6289 33.0977C60.1016 33.0977 59.4375 33.0977 58.6367 33.0977C57.8555 33.0977 56.9961 33.0977 56.0586 33.0977C55.1211 33.0977 54.1543 33.0977 53.1582 33.0977C52.1621 33.0977 51.2148 33.1074 50.3164 33.127C49.418 33.127 48.5977 33.1367 47.8555 33.1562C47.1133 33.1562 46.5371 33.1562 46.127 33.1562L45.043 35.4414C44.5742 36.3789 44.1738 37.1992 43.8418 37.9023C43.5098 38.5859 43.2363 39.1914 43.0215 39.7188C42.8066 40.2461 42.6504 40.7051 42.5527 41.0957C42.4551 41.4668 42.4062 41.8184 42.4062 42.1504C42.4062 42.3652 42.416 42.5312 42.4355 42.6484C42.4551 42.7461 42.4844 42.8242 42.5234 42.8828V43H37.3672V42.8828C37.5039 42.7461 37.7188 42.4531 38.0117 42.0039C38.3047 41.5352 38.6367 40.9688 39.0078 40.3047C39.3984 39.6406 39.8086 38.8887 40.2383 38.0488C40.6875 37.209 41.127 36.3398 41.5566 35.4414L53.5098 10.7734H55.707L67.4258 35.4414C67.875 36.3789 68.3242 37.2773 68.7734 38.1367C69.2422 38.9961 69.6719 39.7676 70.0625 40.4512C70.4531 41.1152 70.7949 41.6719 71.0879 42.1211C71.3809 42.5508 71.5762 42.8047 71.6738 42.8828V43H64.1738C64.2129 42.8438 64.2324 42.707 64.2324 42.5898C64.2324 42.4531 64.2324 42.3066 64.2324 42.1504C64.2324 41.7207 64.1348 41.2031 63.9395 40.5977C63.7637 39.9922 63.5391 39.377 63.2656 38.752C63.0117 38.1074 62.7383 37.4922 62.4453 36.9062C62.1719 36.3203 61.9473 35.832 61.7715 35.4414L60.6289 33.0977ZM47.2695 30.8125H49.0566C49.877 30.8125 50.7461 30.8125 51.6641 30.8125C52.6016 30.793 53.5391 30.7832 54.4766 30.7832C55.4141 30.7832 56.3223 30.7832 57.2012 30.7832C58.0801 30.7637 58.8711 30.7539 59.5742 30.7539L53.5098 17.8047L47.2695 30.8125ZM87.6992 30.9297C87.6992 32.6875 87.7188 34.2207 87.7578 35.5293C87.7969 36.8379 87.8457 37.9707 87.9043 38.9277C87.9824 39.8652 88.0703 40.6562 88.168 41.3008C88.2852 41.9453 88.4121 42.4727 88.5488 42.8828V43H81.752V42.8828C81.8887 42.4727 82.0059 41.9453 82.1035 41.3008C82.2207 40.6562 82.3086 39.8652 82.3672 38.9277C82.4453 37.9707 82.5039 36.8379 82.543 35.5293C82.582 34.2207 82.6016 32.6875 82.6016 30.9297V28.9082L72.0547 14.9922C71.3516 14.0547 70.6777 13.3027 70.0332 12.7363C69.3887 12.1504 68.9004 11.7793 68.5684 11.623V11.5059H76.8887C76.8887 11.8574 77.0156 12.4043 77.2695 13.1465C77.5234 13.8691 78.041 14.7578 78.8223 15.8125L86.2637 25.6562L93.8809 15.4023C94.4277 14.6602 94.8379 13.9277 95.1113 13.2051C95.4043 12.4824 95.5508 11.916 95.5508 11.5059H100.912V11.623C100.424 11.9551 99.916 12.375 99.3887 12.8828C98.8809 13.3906 98.2852 14.1133 97.6016 15.0508L87.6992 28.4688V30.9297ZM111.605 13.6738C109.828 13.6738 108.207 13.752 106.742 13.9082C105.297 14.0645 104.047 14.2305 102.992 14.4062C101.781 14.6211 100.688 14.8555 99.7109 15.1094L100.297 11.3301C100.59 11.3691 101.068 11.3984 101.732 11.418C102.396 11.4375 103.09 11.457 103.812 11.4766C104.555 11.4766 105.248 11.4863 105.893 11.5059C106.557 11.5059 107.016 11.5059 107.27 11.5059H121.127C121.361 11.5059 121.791 11.5059 122.416 11.5059C123.061 11.4863 123.744 11.4766 124.467 11.4766C125.189 11.457 125.883 11.4375 126.547 11.418C127.211 11.3984 127.689 11.3691 127.982 11.3301L128.568 15.1094C127.631 14.8555 126.557 14.6211 125.346 14.4062C124.311 14.2305 123.061 14.0645 121.596 13.9082C120.15 13.752 118.52 13.6738 116.703 13.6738V30.9297C116.703 32.6875 116.723 34.2207 116.762 35.5293C116.801 36.8379 116.85 37.9707 116.908 38.9277C116.986 39.8652 117.074 40.6562 117.172 41.3008C117.27 41.9453 117.387 42.4727 117.523 42.8828V43H110.756V42.8828C110.893 42.4727 111.01 41.9453 111.107 41.3008C111.205 40.6562 111.293 39.8652 111.371 38.9277C111.449 37.9707 111.508 36.8379 111.547 35.5293C111.586 34.2207 111.605 32.6875 111.605 30.9297V13.6738ZM130.18 27.1504C130.18 24.8457 130.609 22.707 131.469 20.7344C132.348 18.7617 133.539 17.0527 135.043 15.6074C136.547 14.1426 138.324 13 140.375 12.1797C142.426 11.3594 144.623 10.9492 146.967 10.9492C149.271 10.9492 151.439 11.3398 153.471 12.1211C155.521 12.8828 157.299 13.9766 158.803 15.4023C160.326 16.8281 161.527 18.5566 162.406 20.5879C163.285 22.6191 163.725 24.8945 163.725 27.4141C163.725 29.5039 163.354 31.5254 162.611 33.4785C161.869 35.4121 160.785 37.1309 159.359 38.6348C157.934 40.1191 156.176 41.3105 154.086 42.209C151.996 43.0879 149.604 43.5273 146.908 43.5273C144.623 43.5273 142.465 43.1465 140.434 42.3848C138.402 41.623 136.625 40.5391 135.102 39.1328C133.578 37.707 132.377 35.9883 131.498 33.9766C130.619 31.9453 130.18 29.6699 130.18 27.1504ZM147.641 41.4473C149.125 41.4473 150.492 41.1543 151.742 40.5684C152.992 39.9824 154.066 39.1426 154.965 38.0488C155.883 36.9551 156.586 35.627 157.074 34.0645C157.582 32.4824 157.836 30.7051 157.836 28.7324C157.836 26.4863 157.592 24.4062 157.104 22.4922C156.635 20.5781 155.912 18.9277 154.936 17.541C153.979 16.1348 152.777 15.041 151.332 14.2598C149.887 13.459 148.197 13.0586 146.264 13.0586C144.779 13.0586 143.412 13.3418 142.162 13.9082C140.912 14.4746 139.828 15.2949 138.91 16.3691C138.012 17.4434 137.309 18.7617 136.801 20.3242C136.293 21.8867 136.039 23.6641 136.039 25.6562C136.039 27.8828 136.283 29.9629 136.771 31.8965C137.279 33.8105 138.012 35.4805 138.969 36.9062C139.945 38.3125 141.156 39.4258 142.602 40.2461C144.047 41.0469 145.727 41.4473 147.641 41.4473ZM197.855 43.4102H196.713L173.422 20.5V30.9297C173.422 32.6875 173.432 34.2207 173.451 35.5293C173.471 36.8379 173.5 37.9707 173.539 38.9277C173.598 39.8652 173.666 40.6562 173.744 41.3008C173.842 41.9453 173.959 42.4727 174.096 42.8828V43H169.701V42.8828C169.838 42.4727 169.955 41.9453 170.053 41.3008C170.15 40.6562 170.229 39.8652 170.287 38.9277C170.346 37.9707 170.385 36.8379 170.404 35.5293C170.424 34.2207 170.434 32.6875 170.434 30.9297V23.5469C170.434 21.7891 170.424 20.2656 170.404 18.9766C170.385 17.668 170.346 16.5449 170.287 15.6074C170.229 14.6504 170.15 13.8496 170.053 13.2051C169.955 12.5605 169.838 12.0332 169.701 11.623V11.5059H171.518L194.838 34.5332V23.5469C194.838 21.7891 194.828 20.2656 194.809 18.9766C194.789 17.668 194.75 16.5449 194.691 15.6074C194.652 14.6504 194.594 13.8496 194.516 13.2051C194.438 12.5605 194.33 12.0332 194.193 11.623V11.5059H198.559V11.623C198.422 12.0332 198.305 12.5605 198.207 13.2051C198.129 13.8496 198.061 14.6504 198.002 15.6074C197.943 16.5449 197.904 17.668 197.885 18.9766C197.865 20.2656 197.855 21.7891 197.855 23.5469V43.4102ZM231.02 3.50781C230.98 5.69531 230.941 7.81445 230.902 9.86523C230.883 10.7441 230.863 11.6426 230.844 12.5605C230.844 13.4785 230.834 14.3867 230.814 15.2852C230.814 16.1641 230.805 17.0137 230.785 17.834C230.785 18.6348 230.785 19.3477 230.785 19.9727C230.785 21.2812 230.795 22.8633 230.814 24.7188C230.834 26.5742 230.854 28.4785 230.873 30.4316C230.912 32.3848 230.961 34.2598 231.02 36.0566C231.078 37.8535 231.146 39.3477 231.225 40.5391C231.498 40.5781 231.859 40.627 232.309 40.6855C232.777 40.7246 233.266 40.7637 233.773 40.8027C234.281 40.8223 234.779 40.8418 235.268 40.8613C235.756 40.8809 236.166 40.8906 236.498 40.8906C237.865 40.8906 239.262 40.8027 240.688 40.627C242.133 40.4316 243.52 40.0801 244.848 39.5723C246.195 39.0645 247.455 38.3711 248.627 37.4922C249.818 36.5938 250.854 35.4414 251.732 34.0352C252.631 32.6289 253.334 30.9395 253.842 28.9668C254.35 26.9746 254.604 24.6309 254.604 21.9355C254.604 18.9473 254.242 16.291 253.52 13.9668C252.797 11.623 251.732 9.65039 250.326 8.04883C248.939 6.44727 247.211 5.23633 245.141 4.41602C243.09 3.57617 240.727 3.15625 238.051 3.15625C237.523 3.15625 236.928 3.17578 236.264 3.21484C235.6 3.23438 234.936 3.26367 234.271 3.30273C233.627 3.32227 233.012 3.36133 232.426 3.41992C231.859 3.45898 231.391 3.48828 231.02 3.50781ZM224.604 0.871094C225.053 0.890625 225.473 0.910156 225.863 0.929688C226.195 0.949219 226.537 0.96875 226.889 0.988281C227.24 0.988281 227.523 0.988281 227.738 0.988281C228.109 0.988281 228.725 0.96875 229.584 0.929688C230.463 0.890625 231.459 0.851562 232.572 0.8125C233.686 0.773438 234.838 0.734375 236.029 0.695312C237.24 0.65625 238.373 0.636719 239.428 0.636719C242.26 0.636719 244.955 0.988281 247.514 1.69141C250.072 2.39453 252.318 3.54687 254.252 5.14844C256.186 6.75 257.719 8.84961 258.852 11.4473C259.984 14.0449 260.551 17.2383 260.551 21.0273C260.551 23.7422 260.248 26.1836 259.643 28.3516C259.057 30.5195 258.227 32.4336 257.152 34.0938C256.078 35.7539 254.789 37.1797 253.285 38.3711C251.801 39.543 250.15 40.5098 248.334 41.2715C246.537 42.0332 244.613 42.5898 242.562 42.9414C240.512 43.293 238.393 43.4688 236.205 43.4688C235.424 43.4688 234.477 43.4395 233.363 43.3809C232.27 43.3418 231.166 43.293 230.053 43.2344C228.939 43.1758 227.885 43.1172 226.889 43.0586C225.912 43.0195 225.15 43 224.604 43V42.8828C224.721 42.4727 224.828 41.9648 224.926 41.3594C225.043 40.7539 225.141 40.002 225.219 39.1035C225.297 38.2051 225.355 37.1406 225.395 35.9102C225.434 34.6602 225.453 33.2051 225.453 31.5449V12.4727C225.453 10.8125 225.434 9.35742 225.395 8.10742C225.355 6.83789 225.297 5.75391 225.219 4.85547C225.141 3.9375 225.043 3.16602 224.926 2.54102C224.828 1.91602 224.721 1.39844 224.604 0.988281V0.871094ZM267.084 11.5059C268.998 11.5059 270.961 11.5059 272.973 11.5059C274.984 11.4863 276.85 11.4668 278.568 11.4473C280.287 11.4082 281.762 11.3691 282.992 11.3301C284.242 11.291 285.062 11.2324 285.453 11.1543L284.311 14.3184C283.783 14.1816 283.188 14.0547 282.523 13.9375C281.938 13.8398 281.225 13.752 280.385 13.6738C279.564 13.5762 278.607 13.5273 277.514 13.5273C277.123 13.5273 276.674 13.5469 276.166 13.5859C275.658 13.6055 275.17 13.6348 274.701 13.6738C274.154 13.7129 273.598 13.752 273.031 13.791V25.3633C274.613 25.3438 276.039 25.3047 277.309 25.2461C278.578 25.1875 279.662 25.1094 280.561 25.0117C281.615 24.9336 282.543 24.8262 283.344 24.6895L282.641 28.1758C281.566 28.0391 280.482 27.9219 279.389 27.8242C278.451 27.7266 277.416 27.6484 276.283 27.5898C275.15 27.5117 274.066 27.4727 273.031 27.4727V40.7734C274.848 40.7734 276.518 40.7051 278.041 40.5684C279.564 40.4121 280.893 40.2461 282.025 40.0703C283.354 39.8555 284.555 39.6113 285.629 39.3379L284.955 43.1758C284.662 43.1562 284.184 43.127 283.52 43.0879C282.875 43.0684 282.191 43.0488 281.469 43.0293C280.766 43.0293 280.102 43.0195 279.477 43C278.852 43 278.422 43 278.188 43H267.084V42.8828C267.221 42.4727 267.338 41.9453 267.436 41.3008C267.553 40.6562 267.641 39.8652 267.699 38.9277C267.777 37.9707 267.836 36.8379 267.875 35.5293C267.914 34.2207 267.934 32.6875 267.934 30.9297V23.5469C267.934 21.7891 267.914 20.2656 267.875 18.9766C267.836 17.668 267.777 16.5449 267.699 15.6074C267.641 14.6504 267.553 13.8496 267.436 13.2051C267.338 12.5605 267.221 12.0332 267.084 11.623V11.5059ZM306.43 17.6289H305.844C305.727 17.2969 305.531 16.877 305.258 16.3691C305.004 15.8613 304.652 15.3633 304.203 14.875C303.773 14.3867 303.236 13.9766 302.592 13.6445C301.947 13.293 301.176 13.1172 300.277 13.1172C299.594 13.1172 298.979 13.2344 298.432 13.4688C297.904 13.6836 297.455 13.9863 297.084 14.377C296.713 14.7676 296.43 15.2363 296.234 15.7832C296.039 16.3105 295.941 16.8867 295.941 17.5117C295.941 18.5273 296.244 19.4941 296.85 20.4121C297.475 21.3301 298.246 22.248 299.164 23.166C300.082 24.0645 301.078 24.9727 302.152 25.8906C303.227 26.8086 304.223 27.7656 305.141 28.7617C306.059 29.7578 306.82 30.8125 307.426 31.9258C308.051 33.0391 308.363 34.2305 308.363 35.5C308.363 36.4375 308.188 37.4043 307.836 38.4004C307.504 39.3965 306.957 40.2949 306.195 41.0957C305.434 41.8965 304.457 42.5508 303.266 43.0586C302.074 43.5859 300.629 43.8496 298.93 43.8496C297.992 43.8496 297.094 43.7715 296.234 43.6152C295.395 43.459 294.613 43.2637 293.891 43.0293C293.188 42.8145 292.553 42.5801 291.986 42.3262C291.439 42.0527 290.98 41.7988 290.609 41.5645L291.137 36.0273H291.752C291.947 36.7109 292.23 37.3945 292.602 38.0781C292.992 38.7617 293.461 39.3867 294.008 39.9531C294.574 40.5 295.229 40.9492 295.971 41.3008C296.732 41.6328 297.602 41.7988 298.578 41.7988C299.262 41.7988 299.906 41.6914 300.512 41.4766C301.117 41.2422 301.635 40.9199 302.064 40.5098C302.514 40.0996 302.865 39.6016 303.119 39.0156C303.373 38.4102 303.5 37.7363 303.5 36.9941C303.5 36.1152 303.324 35.3047 302.973 34.5625C302.621 33.8008 302.152 33.0781 301.566 32.3945C300.98 31.6914 300.316 31.0176 299.574 30.373C298.852 29.7285 298.1 29.0742 297.318 28.4102C296.537 27.7461 295.775 27.0723 295.033 26.3887C294.311 25.6855 293.656 24.9336 293.07 24.1328C292.484 23.332 292.016 22.4824 291.664 21.584C291.312 20.666 291.137 19.6602 291.137 18.5664C291.137 17.4141 291.381 16.3789 291.869 15.4609C292.357 14.543 293.002 13.7715 293.803 13.1465C294.604 12.502 295.521 12.0137 296.557 11.6816C297.592 11.3301 298.666 11.1543 299.779 11.1543C300.6 11.1543 301.361 11.2129 302.064 11.3301C302.787 11.4473 303.432 11.5938 303.998 11.7695C304.584 11.9258 305.092 12.0918 305.521 12.2676C305.951 12.4238 306.303 12.5508 306.576 12.6484L306.43 17.6289ZM315.57 23.5469C315.57 21.7891 315.551 20.2656 315.512 18.9766C315.473 17.668 315.414 16.5449 315.336 15.6074C315.277 14.6504 315.189 13.8496 315.072 13.2051C314.975 12.5605 314.857 12.0332 314.721 11.623V11.5059H321.518V11.623C321.381 12.0332 321.254 12.5605 321.137 13.2051C321.039 13.8496 320.951 14.6504 320.873 15.6074C320.814 16.5449 320.766 17.668 320.727 18.9766C320.688 20.2656 320.668 21.7891 320.668 23.5469V30.9297C320.668 32.6875 320.688 34.2207 320.727 35.5293C320.766 36.8379 320.814 37.9707 320.873 38.9277C320.951 39.8652 321.039 40.6562 321.137 41.3008C321.254 41.9453 321.381 42.4727 321.518 42.8828V43H314.721V42.8828C314.857 42.4727 314.975 41.9453 315.072 41.3008C315.189 40.6562 315.277 39.8652 315.336 38.9277C315.414 37.9707 315.473 36.8379 315.512 35.5293C315.551 34.2207 315.57 32.6875 315.57 30.9297V23.5469ZM358.461 39.4551C358.461 39.709 358.432 39.9238 358.373 40.0996C358.334 40.2754 358.227 40.4219 358.051 40.5391C356.664 41.5156 355.043 42.2969 353.188 42.8828C351.352 43.4492 349.193 43.7324 346.713 43.7324C343.92 43.7324 341.371 43.332 339.066 42.5312C336.781 41.7305 334.818 40.6172 333.178 39.1914C331.537 37.7461 330.258 36.0176 329.34 34.0059C328.441 31.9941 327.992 29.7676 327.992 27.3262C327.992 25.2363 328.402 23.2051 329.223 21.2324C330.062 19.2598 331.264 17.5117 332.826 15.9883C334.389 14.4648 336.283 13.2441 338.51 12.3262C340.756 11.4082 343.285 10.9492 346.098 10.9492C347.562 10.9492 348.949 11.0371 350.258 11.2129C351.566 11.3691 352.826 11.623 354.037 11.9746L356.234 17.248L355.941 17.4531C354.77 16.1055 353.354 15.041 351.693 14.2598C350.033 13.459 348.129 13.0586 345.98 13.0586C344.223 13.0586 342.602 13.3418 341.117 13.9082C339.652 14.4746 338.373 15.3047 337.279 16.3984C336.205 17.4727 335.365 18.8008 334.76 20.3828C334.154 21.9648 333.852 23.7617 333.852 25.7734C333.852 28.0391 334.135 30.1387 334.701 32.0723C335.268 34.0059 336.117 35.6855 337.25 37.1113C338.383 38.5176 339.779 39.6211 341.439 40.4219C343.119 41.2227 345.072 41.623 347.299 41.623C349.213 41.623 350.697 41.3789 351.752 40.8906C352.826 40.4023 353.363 39.8457 353.363 39.2207V37.668C353.363 36.6523 353.354 35.7734 353.334 35.0312C353.314 34.2891 353.285 33.6543 353.246 33.127C353.207 32.5801 353.148 32.1113 353.07 31.7207C353.012 31.3301 352.934 30.9688 352.836 30.6367V30.5195H359.076V30.6367C358.979 30.9297 358.891 31.2812 358.812 31.6914C358.734 32.1016 358.666 32.5898 358.607 33.1562C358.568 33.7227 358.529 34.3867 358.49 35.1484C358.471 35.9102 358.461 36.7891 358.461 37.7852V39.4551ZM393.324 43.4102H392.182L368.891 20.5V30.9297C368.891 32.6875 368.9 34.2207 368.92 35.5293C368.939 36.8379 368.969 37.9707 369.008 38.9277C369.066 39.8652 369.135 40.6562 369.213 41.3008C369.311 41.9453 369.428 42.4727 369.564 42.8828V43H365.17V42.8828C365.307 42.4727 365.424 41.9453 365.521 41.3008C365.619 40.6562 365.697 39.8652 365.756 38.9277C365.814 37.9707 365.854 36.8379 365.873 35.5293C365.893 34.2207 365.902 32.6875 365.902 30.9297V23.5469C365.902 21.7891 365.893 20.2656 365.873 18.9766C365.854 17.668 365.814 16.5449 365.756 15.6074C365.697 14.6504 365.619 13.8496 365.521 13.2051C365.424 12.5605 365.307 12.0332 365.17 11.623V11.5059H366.986L390.307 34.5332V23.5469C390.307 21.7891 390.297 20.2656 390.277 18.9766C390.258 17.668 390.219 16.5449 390.16 15.6074C390.121 14.6504 390.062 13.8496 389.984 13.2051C389.906 12.5605 389.799 12.0332 389.662 11.623V11.5059H394.027V11.623C393.891 12.0332 393.773 12.5605 393.676 13.2051C393.598 13.8496 393.529 14.6504 393.471 15.6074C393.412 16.5449 393.373 17.668 393.354 18.9766C393.334 20.2656 393.324 21.7891 393.324 23.5469V43.4102Z" fill="white"/>
            </svg>
          </div> 
        </div>
        <Navbar />
      </div>
  );
};
export default Header;