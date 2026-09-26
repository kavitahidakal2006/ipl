import { useEffect, useState } from "react";
import { supabase } from "../supabase";


function MatchCard(props) {
  return (
    <div className="match-card">

      <h2>
        {props.team1} vs {props.team2}
      </h2>

      <p>📍 {props.venue}</p>

      <p>📅 {props.date}</p>

      <button>Book Ticket</button>

    </div>
  );
}

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  async function getMatches() {
    const { data, error } = await supabase
      .from("matches")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setMatches(data);
    }
  }

  return (
    <main className="matches-page">

      <h1>Upcoming IPL Matches</h1>

      <div className="matches-grid">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            venue={match.venue}
            date={match.date}
          />
        ))}
      </div>

    </main>
  );
}

export default Matches;