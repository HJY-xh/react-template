declare module '*.scss' {
    const content:{[className:string]:string};
    export default content;
  }
  // 如果使用的第三方库没有ts，可以自己在这边申明
  
  