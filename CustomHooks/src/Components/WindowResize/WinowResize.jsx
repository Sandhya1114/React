import useWindowSize from "./useWindow";

export default function WindowResize(){
    const {width,height}=useWindowSize();
    return(
        <>
          <h4>window size</h4>
          <p>width:{width}</p>
          <p>height:{height}</p>
        </>
    )
}