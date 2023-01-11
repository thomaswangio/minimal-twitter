const svgAssets = {
  grow: {
    normal: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5H19C19.5523 5 20 5.44771 20 6V6.58579L12 14.5858L8.70711 11.2929L8 10.5858L7.29289 11.2929L4 14.5858V6C4 5.44772 4.44772 5 5 5ZM4 17.4142V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V9.41421L12.7071 16.7071L12 17.4142L11.2929 16.7071L8 13.4142L4 17.4142ZM2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6Z"/>`,
    selected: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.34315 3 2 4.34315 2 6V16.5858L7.29289 11.2929L8 10.5858L8.70711 11.2929L12 14.5858L21.761 4.82474C21.3038 3.752 20.2397 3 19 3H5ZM22 7.41421L12.7071 16.7071L12 17.4142L11.2929 16.7071L8 13.4142L2.23895 19.1753C2.69615 20.248 3.76026 21 5 21H19C20.6569 21 22 19.6569 22 18V7.41421Z"/>`,
  },
  lists: {
    normal: `<g><path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path></g>`,
    selected: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 2C4.12 2 3 3.12 3 4.5V19.5C3 20.88 4.12 22 5.5 22H18.5C19.88 22 21 20.88 21 19.5V4.5C21 3.12 19.88 2 18.5 2H5.5ZM8 10H16V8H8V10ZM16 12H8V14H16V12Z" />`,
  },
  communities: {
    normal: `<g><path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672a9.115 9.115 0 00-1.212 1.656 4.388 4.388 0 00-1.658-.329c-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9a3.467 3.467 0 01-2.116-.73 3.483 3.483 0 01-1.384-2.77c0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77a3.467 3.467 0 01-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z" /></g>`,
  },
  twitterBlue: {
    normal: `<g><path d="M15.704 8.99c.457-.05.891-.17 1.296-.35-.302.45-.685.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03a4.55 4.55 0 002.803-.95 2.26 2.26 0 01-2.109-1.54c.138.03.28.04.425.04.206 0 .405-.03.595-.08a2.228 2.228 0 01-1.811-2.18v-.03c.305.17.652.27 1.023.28a2.215 2.215 0 01-1.004-1.85c0-.4.111-.78.305-1.11a6.48 6.48 0 004.652 2.32 2.266 2.266 0 01-.058-.51c0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23zM2 21h15a5.498 5.498 0 004.115-9.15.262.262 0 01-.023-.32A5.48 5.48 0 0022 8.5C22 5.46 19.538 3 16.5 3H2v18zM16.5 5a3.502 3.502 0 012.38 6.07.995.995 0 00.111 1.55A3.502 3.502 0 0117 19H4V5h12.5z" /></g>`,
  },
  composerWriterMode: {
    normal: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H4V5V13H6V7.41421L9.79289 11.2071L11.2071 9.79289L7.41421 6H13V4H5ZM19 20H20V19L20 11H18L18 16.5858L14.2071 12.7929L12.7929 14.2071L16.5858 18L11 18V20H19Z"/>`,
    selected: `<path d="M11 11L11 3H9L9 7.58579L5.89461 4.48039L4.48039 5.89461L7.58579 9L3 9V11L11 11Z"/><path d="M13 13V21H15V16.4142L18.1054 19.5196L19.5196 18.1054L16.4142 15H21V13H13Z"/>`,
  },
  typefullyBox: {
    arrow: `<svg width="24" height="12" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0L12 6H0L6 0Z" fill="currentColor"/></svg>
`,
    close: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 12" stroke="currentColor" stroke-width="2"/><path d="M12 12L2 2" stroke="currentColor" stroke-width="2"/></svg>`,
  },
  typefully: {
    logo: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0781 28.9919C23.44 28.9919 24.5394 27.9035 24.5394 26.5551C24.5394 25.2068 23.44 24.1184 22.0781 24.1184C20.7161 24.1184 19.6168 25.2068 19.6168 26.5551C19.6168 27.9035 20.7161 28.9919 22.0781 28.9919ZM19.0425 17.4174C19.3542 17.328 19.4445 17.4174 19.3296 17.726C18.7471 19.3586 17.3441 21.373 14.6121 22.0959C13.3158 22.4371 12.0605 22.4046 11.0514 22.6726C10.4524 22.8269 9.96838 23.1275 9.48432 23.7691C8.27006 25.3693 6.82609 28.9919 5.39852 29C5.11137 29 4.97189 28.8051 5.00471 28.5695C5.05394 28.1878 5.40673 27.5867 5.75131 26.8557C12.7579 12.089 15.17 3 24.8348 3C26.6972 3 25.8521 3.60106 25.5075 3.99094C22.1273 7.86535 22.357 12.3652 20.0106 14.7451C18.222 16.5726 14.4972 17.0275 12.9384 17.1331C12.602 17.1575 12.561 17.3686 12.8809 17.4986C14.8664 18.3108 17.6887 17.791 19.0425 17.4092V17.4174Z" fill="currentColor"/></svg>`,
  },
};

export default svgAssets;
