import NavbarBar from "./Navbar"
import "./Github.css"
import axios from "axios"
import { useEffect, useState } from "react"

const Github = () => {

    const [profile, setprofile] = useState(null);
    const [search, setSearch] = useState("");

  

    const getProfile = async (e) => {

        e.preventDefault();

        if (!search) {
            alert("Please enter a username");
            return;
        }
        try {
            let res = await axios.get(`https://api.github.com/users/${search}`)
            setprofile(res.data)
            console.log(res.data);
           
            setSearch("");
        } catch (error) {
            setSearch("");
            console.error("Error fetching profile:", error);
            alert("Profile not found. Please check the username and try again.");
            setprofile(null);
            
        }

    }
    return (
        <>
            <NavbarBar repo={profile?.public_repos} />

            {profile ? (
                <div className="githubParent">
                    <div>


                        <div className="userImage">
                            <img src={profile.avatar_url} alt="User" />
                        </div>

                        <h1 className="userName">{profile.name}</h1>
                        {/* <h2 className="userSubName">chiragsingla17</h2> */}

                        <p className="userDescription">{profile.bio}</p>


                        <p className="follower"><img src="../..//images/work.png" /> <span className="fol">{profile.followers}</span > followers . <span className="fol">{profile.following}</span> following</p>

                        <p className="locaion"><img src="../../images/check.png" /> {profile.location}</p>

                        <form className="searchForm">
                            <div>
                                <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" className="inputwork" placeholder="Enter profile Name" /> <br />
                                <button onClick={(e) => getProfile(e)} className="bttn">Search</button>
                            </div>
                        </form>

                    </div>
                </div>
            )
                :

                <>


                    <form className="searchForm01">
                        <div>

                            <h1 className="mainHeading">GitHub Profile Explorer</h1>

                            <div className="d-flex justify-content-center ">
                                <div>
                                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="inputwork" placeholder="Enter profile Name" value={search}/> <br />
                                    <button onClick={(e) => getProfile(e)}  className="bttn">Search</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </>
            }


        </>
    )
}

export default Github