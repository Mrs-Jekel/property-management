import {
    faMessage,
      faMobileAlt,
      faComments,
  } from "@fortawesome/free-solid-svg-icons";
  
  import { library } from "@fortawesome/fontawesome-svg-core";
const Icons = () => {
    return library.add(
      faMessage,
      faMobileAlt,
      faComments,

    );
  };
  
  export default Icons;