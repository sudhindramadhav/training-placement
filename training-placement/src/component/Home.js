import React,{useEffect} from 'react'
// import { Link } from "react-router-dom"

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <h1>
                Hello World
            </h1>
            </>
    )
}
export default Home