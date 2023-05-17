const $ =  (tag, all = false)  => {
  let ragRef = tag;
 
  if(tag.charAt(0) === '.'){
    ragRef = tag.slice(0, 1);
    console.log(ragRef.slice(0, 1))
  }else if(tag.charAt(0) === '#'){
    ragRef = tag.slice(0, 1);
    console.log(ragRef.slice(0, 1))
  }
  if(all === true){
    return Array.from(document.querySelectorAll(tag))
  }else{
    return document.querySelector(tag)
  }
 
}

