import PropTypes from "react"
export function Header({error, children}) {
  return (
    <header>
      <h1>Movies Hub</h1>
        {children}
      {error && <p style={{color: "red"}}>{error}</p>}
    </header>
  )
}

Header.propTypes = {
  error: PropTypes.bool,
  children: PropTypes.element
}