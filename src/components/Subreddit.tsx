import { ChangeEventHandler, useState } from "react";
import { SubredditCreateBody } from "../API/Interfaces/PostInterfaces";
import PostSubredditAPI from "../API/PostSubredditAPI";
const Subreddit = () => {
    const [subredditData, setSubRedditData] = useState({name: "", description: ""} as SubredditCreateBody);

    const handleCreateSubredditSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        PostSubredditAPI.createSubreddit(subredditData)
      .then((response) => {
        alert("Success");
      })
      .catch((error) => {
        console.log(error);
      });
    }
    const handleInputChange: ChangeEventHandler<HTMLInputElement> | undefined = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubRedditData((prevInput) => { return { ...prevInput, [event.target.name]: event.target.value } });
    }
    return (
        <form onSubmit={handleCreateSubredditSubmit}>
            <div className="form-group">
                <label htmlFor="subredditName">Subreddit Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="subredditName"
                    aria-describedby="emailHelp"
                    placeholder="Enter subreddit name"
                    name="subredditName"
                    value={subredditData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subreddit description"
                    name="description"
                    id="description"
                    value={subredditData.description}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Create Subreddit
            </button>
        </form>
    );

}

export default Subreddit;