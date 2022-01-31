import { useState } from "react";



const Jobs = ({ jobs }) => {
    console.log(jobs)
    const [readMore, setReadMore] = useState(false)
    return (
        <div className="jobs">
            {jobs.map(job =>
                <div className="job" key={job.id}>
                    <h4>{job.Role}</h4>
                    <div className="header">
                        <p>{job.Company}</p>
                        <p>{job.Timings}</p>
                        <p>{job.Location}</p>
                        {/* <p>{if(job.Fresher){"Fresher"}
                            else{if (job.Experience1===0) {
                                job.Experience2
                            }
                            else if (job.Experience2===0) {
                                job.Experience1
                            }
                            else{
                                job.Experience1 + "-" + job.Experience2
                            } }
                         }</p> */}
                    </div>
                    <p>{readMore ? job.body : `${job.body.substring(0, 220)}...`}
                        <button className="readMore" onClick={() => setReadMore(!readMore)}>
                            {!readMore ? "Read More" : "Show Less"}
                        </button>
                    </p>
                    <div className="center">
                    <button className="apply">Apply</button>
                    </div>
                </div>)}
        </div>
    );
}

export default Jobs;