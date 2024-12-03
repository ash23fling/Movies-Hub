import { Movies } from "./Movies"
import PropTypes from "react"
export function Main({loading, movies}) {
  return (
    <main>
        {
          loading ? <p>Please wait a moment...</p> : <Movies movies={movies}/>
        }
      </main>
  )
}

Main.propTypes = {
  loading: PropTypes.bool,
  movies: PropTypes.array,
}