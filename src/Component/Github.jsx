import NavbarBar from "./Navbar"
import "./Github.css"

const Github = () => {
    return (
        <>
            <NavbarBar />

            <div className="githubParent">
                <div>


                    <div className="userImage">
                        {/* <img src="../../public/images/Frame (2).png" alt="User" /> */}
                    </div>

                    <h1 className="userName">chirag singla</h1>
                    <h2 className="userSubName">chiragsingla17</h2>

                    <p className="userDescription">Currently working in KAN LABs, NYC USA as an ML Engineer(Remote)</p>


                    <p className="follower"><img src="../../public/images/work.png" /> <span className="fol">12</span > followers . <span className="fol">3</span> following</p>

                    <p className="locaion"><img src="../../public/images/check.png" /> Delhi</p>

                    <form className="searchForm">
                        <div>
                            <input type="text" className="inputwork" placeholder="Enter profile Name" /> <br />
                            <button className="bttn">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Github