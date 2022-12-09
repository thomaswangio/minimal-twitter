const svgAssets = {
  grow: {
    normal: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5H19C19.5523 5 20 5.44771 20 6V6.58579L12 14.5858L8.70711 11.2929L8 10.5858L7.29289 11.2929L4 14.5858V6C4 5.44772 4.44772 5 5 5ZM4 17.4142V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V9.41421L12.7071 16.7071L12 17.4142L11.2929 16.7071L8 13.4142L4 17.4142ZM2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6Z"/>`,
    selected: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.34315 3 2 4.34315 2 6V16.5858L7.29289 11.2929L8 10.5858L8.70711 11.2929L12 14.5858L21.761 4.82474C21.3038 3.752 20.2397 3 19 3H5ZM22 7.41421L12.7071 16.7071L12 17.4142L11.2929 16.7071L8 13.4142L2.23895 19.1753C2.69615 20.248 3.76026 21 5 21H19C20.6569 21 22 19.6569 22 18V7.41421Z"/>`,
  },
  lists: {
    normal: `<g><path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path></g>`,
    selected: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 2C4.12 2 3 3.12 3 4.5V19.5C3 20.88 4.12 22 5.5 22H18.5C19.88 22 21 20.88 21 19.5V4.5C21 3.12 19.88 2 18.5 2H5.5ZM8 10H16V8H8V10ZM16 12H8V14H16V12Z" />`,
  },
  composerWriterMode: {
    normal: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H4V5V13H6V7.41421L9.79289 11.2071L11.2071 9.79289L7.41421 6H13V4H5ZM19 20H20V19L20 11H18L18 16.5858L14.2071 12.7929L12.7929 14.2071L16.5858 18L11 18V20H19Z"/>`,
    selected: `<path d="M11 11L11 3H9L9 7.58579L5.89461 4.48039L4.48039 5.89461L7.58579 9L3 9V11L11 11Z"/><path d="M13 13V21H15V16.4142L18.1054 19.5196L19.5196 18.1054L16.4142 15H21V13H13Z"/>`,
  },
  typefullyBox: {
    arrow: `<svg width="24" height="12" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0L12 6H0L6 0Z" fill="currentColor"/></svg>
`,
    close: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 12" stroke="black" stroke-width="2"/><path d="M12 12L2 2" stroke="black" stroke-width="2"/></svg>`,
  },
};

export default svgAssets;
